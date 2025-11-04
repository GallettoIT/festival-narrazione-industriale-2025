import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

/**
 * Newsletter Subscription API
 *
 * Gestisce le iscrizioni alla newsletter salvandole in un file JSON
 * e inviando una notifica email all'admin.
 */

interface Subscriber {
  id: string;
  name: string;
  email: string;
  subscribedAt: string;
  ipAddress: string;
  privacyAccepted: boolean;
}

interface SubscribersData {
  subscribers: Subscriber[];
}

// Rate limiting semplice in-memory (per produzione usare Redis)
const rateLimitMap = new Map<string, number[]>();
const MAX_REQUESTS_PER_HOUR = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;

  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => time > hourAgo);

  if (recentRequests.length >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

// Funzione per inviare email di notifica (supporta Resend e fallback console)
async function sendNotificationEmail(subscriber: Subscriber) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const NOTIFICATION_EMAILS = ['luca@unsocials.com', 'marcello@unsocials.com'];

  const emailContent = {
    from: 'onboarding@resend.dev',
    to: NOTIFICATION_EMAILS,
    subject: `🎉 Nuova iscrizione newsletter FNI - ${subscriber.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #282828;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #e94d34;">Nuova iscrizione alla newsletter</h2>

            <div style="background-color: #f7f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${subscriber.name}</p>
              <p><strong>Email:</strong> ${subscriber.email}</p>
              <p><strong>Data iscrizione:</strong> ${new Date(subscriber.subscribedAt).toLocaleString('it-IT')}</p>
              <p><strong>IP Address:</strong> ${subscriber.ipAddress}</p>
              <p><strong>Privacy accettata:</strong> ${subscriber.privacyAccepted ? 'Sì' : 'No'}</p>
            </div>

            <p style="color: #666; font-size: 14px;">
              Questa è una notifica automatica del sistema newsletter del Festival Narrazione Industriale.
            </p>
          </div>
        </body>
      </html>
    `,
  };

  // Se c'è la API key di Resend, usa Resend
  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Errore invio email Resend:', error);
        throw new Error('Failed to send email via Resend');
      }

      console.log('✅ Email inviata con successo via Resend');
      return true;
    } catch (error) {
      console.error('❌ Errore invio email:', error);
      // Fallback to console log
      console.log('📧 NOTIFICA EMAIL (Resend failed):', emailContent);
      return false;
    }
  } else {
    // Fallback: log in console se non c'è API key
    console.log('📧 NOTIFICA EMAIL (no Resend API key):', {
      to: NOTIFICATION_EMAILS,
      subject: emailContent.subject,
      subscriber: {
        name: subscriber.name,
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt,
      },
    });
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Troppe richieste. Riprova più tardi.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, privacyAccepted } = body;

    // Validation
    if (!name || !email || !privacyAccepted) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Read existing subscribers
    const dataPath = path.join(process.cwd(), 'data', 'newsletter', 'subscribers.json');
    let data: SubscribersData = { subscribers: [] };

    try {
      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, 'utf-8');
        data = JSON.parse(fileContent);
      }
    } catch (error) {
      console.error('Errore lettura file subscribers:', error);
    }

    // Check if email already exists
    const existingSubscriber = data.subscribers.find(
      sub => sub.email.toLowerCase() === email.toLowerCase()
    );

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Questa email è già iscritta alla newsletter' },
        { status: 409 }
      );
    }

    // Create new subscriber
    const newSubscriber: Subscriber = {
      id: randomUUID(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString(),
      ipAddress: ip,
      privacyAccepted: privacyAccepted === true,
    };

    // Add to list
    data.subscribers.push(newSubscriber);

    // Save to file
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');

    // Send notification email (non-blocking)
    sendNotificationEmail(newSubscriber).catch(error => {
      console.error('Errore invio notifica email:', error);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Iscrizione completata con successo!',
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Errore API newsletter/subscribe:', error);
    return NextResponse.json(
      { error: 'Errore del server. Riprova più tardi.' },
      { status: 500 }
    );
  }
}
