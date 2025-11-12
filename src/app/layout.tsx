import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Script from 'next/script'

/**
 * Metadata SEO ottimizzato per il Festival della Narrazione Industriale
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.festivalnarrazioneindustriale.it'),
  title: {
    default: 'Festival della Narrazione Industriale | Parma',
    template: '%s | Festival Narrazione Industriale',
  },
  description: 'Festival della Narrazione Industriale esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte. Parma, 24-29 Novembre.',
  keywords: [
    'festival narrazione industriale',
    'festival parma',
    'umanesimo industriale',
    'adriano olivetti',
    'narrazione impresa',
    'cultura industriale',
    'economia cultura',
    'storytelling aziendale',
    'eventi parma'
  ],
  authors: [{ name: 'Festival della Narrazione Industriale' }],
  creator: 'Festival della Narrazione Industriale',
  publisher: 'Festival della Narrazione Industriale',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.festivalnarrazioneindustriale.it',
    siteName: 'Festival della Narrazione Industriale',
    title: 'Festival della Narrazione Industriale | Parma',
    description: 'Festival della Narrazione Industriale esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte. Parma, 24-29 Novembre.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Festival della Narrazione Industriale - Parma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Festival della Narrazione Industriale | Parma',
    description: 'Festival della Narrazione Industriale esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte.',
    images: ['/images/og-image.jpg'],
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: '6JBVYxCmMgNt-qXIyfTf6JCRVlyEq6wMY2j9iEzj-10',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data - Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Festival della Narrazione Industriale',
    url: 'https://www.festivalnarrazioneindustriale.it',
    logo: 'https://www.festivalnarrazioneindustriale.it/images/logo.svg',
    description: 'Festival della Narrazione Industriale esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte.',
    sameAs: [
      'https://www.instagram.com/festivalnarrazioneindustriale/',
      'https://www.facebook.com/festivalnarrazioneindustriale/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'segreteria@festivalnarrazioneindustriale.it',
    },
  }

  return (
    <html lang="it">
      <head>
        {/* Theme Color */}
        <meta name="theme-color" content="#E94D34" />

        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Matomo Analytics */}
        <Script
          id="matomo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://developer.unsocials.com/matomo/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '19']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />

        {/* Netlify Identity Widget - Per autenticazione CMS */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        {children}

        {/* Netlify Identity Redirect Script */}
        <Script
          id="netlify-identity-redirect"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
