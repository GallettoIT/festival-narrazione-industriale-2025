/**
 * Dati Ospiti - Festival Narrazione Industriale
 *
 * Struttura dati per la gestione degli ospiti del festival.
 * Le immagini sono in /public/images/ospite-*.png
 *
 * Per aggiungere un ospite:
 * 1. Aggiungere l'immagine in /public/images/ con nome ospite-cognome-nome.png
 * 2. Aggiungere l'oggetto ospite in questo array
 *
 * Per rimuovere un ospite:
 * - Commentare o rimuovere l'oggetto dall'array
 */

export interface Ospite {
  id: string;
  nome: string;          // Nome completo (verrà mostrato in BOLD)
  ruolo: string;         // Professione/ruolo
  immagine: string;      // Path relativo da /public/images/
  altImmagine?: string;  // Testo alt per accessibilità
  altezza: 'alta' | 'bassa';  // Variante altezza card (dinamismo visivo)
}

export const ospiti: Ospite[] = [
  {
    id: 'accornero-cristina',
    nome: 'CRISTINA ACCORNERO',
    ruolo: 'Scrittrice',
    immagine: '/images/ospite-accornero-cristina.png',
    altImmagine: 'Cristina Accornero',
    altezza: 'alta',
  },
  {
    id: 'aldrovandi-emanuele',
    nome: 'EMANUELE ALDROVANDI',
    ruolo: 'Scrittore e Regista',
    immagine: '/images/ospite-aldrovandi-emanuele.png',
    altImmagine: 'Emanuele Aldrovandi',
    altezza: 'bassa',
  },
  {
    id: 'albertini-alberto',
    nome: 'ALBERTO ALBERTINI',
    ruolo: 'Scrittore Giornalista',
    immagine: '/images/ospite-albertini-alberto.png',
    altImmagine: 'Alberto Albertini',
    altezza: 'alta',
  },
  {
    id: 'beldi-corrado',
    nome: 'CORRADO BELDÌ',
    ruolo: 'Imprenditore',
    immagine: '/images/ospite-beldi-corrado.png',
    altImmagine: 'Corrado Beldì',
    altezza: 'bassa',
  },
  {
    id: 'boltri-daniele',
    nome: 'DANIELE BOLTRI',
    ruolo: 'Storico Arte e Architettura Olivetti',
    immagine: '/images/ospite-boltri-daniele.png',
    altImmagine: 'Daniele Boltri',
    altezza: 'alta',
  },
  {
    id: 'franchini-antonio',
    nome: 'ANTONIO FRANCHINI',
    ruolo: 'Scrittore',
    immagine: '/images/ospite-franchini-antonio.png',
    altImmagine: 'Antonio Franchini',
    altezza: 'bassa',
  },
  {
    id: 'gasparetto-mariangela',
    nome: 'MARIANGELA GASPARETTO',
    ruolo: 'Professoressa',
    immagine: '/images/ospite-gasparetto-mariangela.png',
    altImmagine: 'Mariangela Gasparetto',
    altezza: 'alta',
  },
  {
    id: 'gualazzini-marco',
    nome: 'MARCO GUALAZZINI',
    ruolo: 'Fotoreporter',
    immagine: '/images/ospite-gualazzini-marco.png',
    altImmagine: 'Marco Gualazzini',
    altezza: 'bassa',
  },
  {
    id: 'severgnini-beppe',
    nome: 'BEPPE SEVERGNINI',
    ruolo: 'Giornalista e Saggista',
    immagine: '/images/ospite-severgnini-beppe.png',
    altImmagine: 'Beppe Severgnini',
    altezza: 'alta',
  },
  {
    id: 'signaroldi-luca',
    nome: 'LUCA SIGNAROLDI',
    ruolo: 'Narratore d\'Impresa',
    immagine: '/images/ospite-signaroldi-luca.png',
    altImmagine: 'Luca Signaroldi',
    altezza: 'bassa',
  },
  {
    id: 'sinigaglia-alberto',
    nome: 'ALBERTO SINIGAGLIA',
    ruolo: 'Giornalista',
    immagine: '/images/ospite-sinigaglia-alberto.png',
    altImmagine: 'Alberto Sinigaglia',
    altezza: 'alta',
  },
  {
    id: 'tassicarboni-alessandro',
    nome: 'ALESSANDRO TASSI CARBONI',
    ruolo: 'Presidente Ordine Architetti Parma',
    immagine: '/images/ospite-tassicarboni-alessandro.png',
    altImmagine: 'Alessandro Tassi Carboni',
    altezza: 'bassa',
  },
  {
    id: 'turchetti-marcella',
    nome: 'MARCELLA TURCHETTI',
    ruolo: 'Storica Arte e Architettura Olivetti',
    immagine: '/images/ospite-turchetti-marcella.png',
    altImmagine: 'Marcella Turchetti',
    altezza: 'alta',
  },
  {
    id: 'viotto-anna',
    nome: 'ANNA MARIA VIOTTO',
    ruolo: 'Resp. Biblioteca Olivetti',
    immagine: '/images/ospite-viotto-anna.png',
    altImmagine: 'Anna Maria Viotto',
    altezza: 'bassa',
  },
];

// Export numero totale ospiti
export const totaleOspiti = ospiti.length;
