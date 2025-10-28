/**
 * Utility per generare link e file per aggiungere eventi ai calendari
 */

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

/**
 * Formatta una data in formato ICS (es: 20251124T110000)
 */
const formatICSDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
};

/**
 * Genera un file .ics per download diretto
 */
export const generateICSFile = (event: CalendarEvent): string => {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Festival Narrazione Industriale//Events//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatICSDate(event.startDate)}`,
    `DTEND:${formatICSDate(event.endDate)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    `UID:${Date.now()}@festivalnarrazioneindustriale.it`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
};

/**
 * Trigger download del file .ics
 */
export const downloadICSFile = (event: CalendarEvent): void => {
  const icsContent = generateICSFile(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};

/**
 * Genera URL per Google Calendar
 */
export const getGoogleCalendarUrl = (event: CalendarEvent): string => {
  const startDate = formatICSDate(event.startDate).replace(/[-:]/g, '');
  const endDate = formatICSDate(event.endDate).replace(/[-:]/g, '');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDate}/${endDate}`,
    details: event.description,
    location: event.location,
    trp: 'false'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/**
 * Genera URL per Outlook Web
 */
export const getOutlookUrl = (event: CalendarEvent): string => {
  const startDate = event.startDate.toISOString();
  const endDate = event.endDate.toISOString();

  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    startdt: startDate,
    enddt: endDate,
    body: event.description,
    location: event.location
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

/**
 * Genera URL per Yahoo Calendar
 */
export const getYahooCalendarUrl = (event: CalendarEvent): string => {
  const startDate = formatICSDate(event.startDate);
  const duration = Math.floor((event.endDate.getTime() - event.startDate.getTime()) / (1000 * 60)); // durata in minuti

  const params = new URLSearchParams({
    v: '60',
    title: event.title,
    st: startDate,
    dur: String(duration).padStart(4, '0'),
    desc: event.description,
    in_loc: event.location
  });

  return `https://calendar.yahoo.com/?${params.toString()}`;
};

/**
 * Apri in Apple Calendar (solo iOS/macOS)
 */
export const openAppleCalendar = (event: CalendarEvent): void => {
  // Su iOS/macOS, il file .ics viene automaticamente aperto in Calendar
  downloadICSFile(event);
};

/**
 * Rileva il sistema operativo
 */
export const detectOS = (): 'ios' | 'android' | 'mac' | 'windows' | 'other' => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  if (/Mac/.test(userAgent)) {
    return 'mac';
  }
  if (/Win/.test(userAgent)) {
    return 'windows';
  }
  return 'other';
};
