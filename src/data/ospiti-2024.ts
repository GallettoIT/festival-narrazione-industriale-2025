/**
 * Dati Ospiti Edizione 2024 - Festival Narrazione Industriale
 *
 * Struttura dati per la gestione degli ospiti della prima edizione (2024).
 * Le immagini sono in /public/images/ospiti-2024/
 */

export interface Ospite2024 {
  id: string;
  nome: string;
  ruolo: string;
  immagine: string;
  altImmagine?: string;
  altezza: 'alta' | 'bassa';
  objectPosition?: string;
}

export const ospiti2024: Ospite2024[] = [
  {
    id: 'grasso-aldo',
    nome: 'ALDO GRASSO',
    ruolo: 'Professore di Storia della televisione presso l\'Università Cattolica di Milano. Editorialista e critico televisivo per il Corriere della Sera',
    immagine: '/images/ospiti-2024/ospite-grasso-aldo.png',
    altImmagine: 'Aldo Grasso',
    altezza: 'alta'
  },
  {
    id: 'piazza-isotta',
    nome: 'ISOTTA PIAZZA',
    ruolo: 'Professoressa di Letteratura Italiana Contemporanea presso l\'Università di Parma, Presidente del Comitato scientifico',
    immagine: '/images/ospiti-2024/ospite-piazza-isotta.png',
    altImmagine: 'Isotta Piazza',
    altezza: 'alta'
  },
  {
    id: 'beldi-corrado',
    nome: 'CORRADO BELDÌ',
    ruolo: 'Imprenditore, giornalista e pubblicista',
    immagine: '/images/ospiti-2024/ospite-beldi-corrado.png',
    altImmagine: 'Corrado Beldì',
    altezza: 'alta'
  },
  {
    id: 'feole-ilaria',
    nome: 'ILARIA FEOLE',
    ruolo: 'Docente e scrittrice di cinema e serie TV',
    immagine: '/images/ospiti-2024/ospite-feole-ilaria.png',
    altImmagine: 'Ilaria Feole',
    altezza: 'alta'
  },
  {
    id: 'golini-katia',
    nome: 'KATIA GOLINI',
    ruolo: 'Giornalista della Gazzetta di Parma',
    immagine: '/images/ospiti-2024/ospite-golini-katia.png',
    altImmagine: 'Katia Golini',
    altezza: 'alta'
  },
  {
    id: 'martin-sara',
    nome: 'SARA MARTIN',
    ruolo: 'Professoressa di Storia del Cinema presso l\'Università degli Studi di Parma e critica televisiva',
    immagine: '/images/ospiti-2024/ospite-martin-sara.png',
    altImmagine: 'Sara Martin',
    altezza: 'alta'
  },
  {
    id: 'salis-stefano',
    nome: 'STEFANO SALIS',
    ruolo: 'Giornalista e scrittore',
    immagine: '/images/ospiti-2024/ospite-salis-stefano.png',
    altImmagine: 'Stefano Salis',
    altezza: 'bassa'
  },
  {
    id: 'varotti-carlo',
    nome: 'CARLO VAROTTI',
    ruolo: 'Professore di Letteratura italiana presso l\'Università di Parma',
    immagine: '/images/ospiti-2024/ospite-varotti-carlo.png',
    altImmagine: 'Carlo Varotti',
    altezza: 'alta'
  },
  {
    id: 'signaroldi-luca',
    nome: 'LUCA SIGNAROLDI',
    ruolo: 'Communication Specialist & Stories Designer',
    immagine: '/images/ospiti-2024/ospite-signaroldi-luca.png',
    altImmagine: 'Luca Signaroldi',
    altezza: 'alta',
    objectPosition: 'center top'
  },
  {
    id: 'divico-dario',
    nome: 'DARIO DI VICO',
    ruolo: 'Giornalista del Corriere della Sera',
    immagine: '/images/ospiti-2024/ospite-divico-dario.png',
    altImmagine: 'Dario Di Vico',
    altezza: 'alta'
  },
  {
    id: 'lupo-giuseppe',
    nome: 'GIUSEPPE LUPO',
    ruolo: 'Scrittore e saggista, Professore di Letteratura italiana contemporanea presso l\'Università Cattolica del Sacro Cuore di Milano',
    immagine: '/images/ospiti-2024/ospite-lupo-giuseppe.png',
    altImmagine: 'Giuseppe Lupo',
    altezza: 'alta'
  },
  {
    id: 'coin-francesca',
    nome: 'FRANCESCA COIN',
    ruolo: 'Sociologa, autrice e docente universitaria',
    immagine: '/images/ospiti-2024/ospite-coin-francesca.png',
    altImmagine: 'Francesca Coin',
    altezza: 'bassa'
  },
  {
    id: 'ginepri-patrizia',
    nome: 'PATRIZIA GINEPRI',
    ruolo: 'Giornalista della Gazzetta di Parma e scrittrice',
    immagine: '/images/ospiti-2024/ospite-ginepri-patrizia.png',
    altImmagine: 'Patrizia Ginepri',
    altezza: 'alta'
  },
  {
    id: 'gualazzini-marco',
    nome: 'MARCO GUALAZZINI',
    ruolo: 'Fotografo e docente universitario',
    immagine: '/images/ospiti-2024/ospite-gualazzini-marco.png',
    altImmagine: 'Marco Gualazzini',
    altezza: 'alta'
  },
  {
    id: 'nesi-edoardo',
    nome: 'EDOARDO NESI',
    ruolo: 'Scrittore, traduttore e regista italiano',
    immagine: '/images/ospiti-2024/ospite-nesi-edoardo.png',
    altImmagine: 'Edoardo Nesi',
    altezza: 'alta'
  },
  {
    id: 'sangiorgio-giulio',
    nome: 'GIULIO SANGIORGIO',
    ruolo: 'Critico cinematografico e programmatore',
    immagine: '/images/ospiti-2024/ospite-sangiorgio-giulio.png',
    altImmagine: 'Giulio Sangiorgio',
    altezza: 'bassa'
  },
  {
    id: 'tragni-franca',
    nome: 'FRANCA TRAGNI',
    ruolo: 'Attrice e autrice teatrale',
    immagine: '/images/ospiti-2024/ospite-tragni-franca.png',
    altImmagine: 'Franca Tragni',
    altezza: 'alta'
  }
];
