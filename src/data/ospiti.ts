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
  descrizioneEstesa?: string;  // Biografia dettagliata per pagina ospiti
}

export const ospiti: Ospite[] = [
  {
    id: 'accornero-cristina',
    nome: 'CRISTINA ACCORNERO',
    ruolo: 'Scrittrice',
    immagine: '/images/ospite-accornero-cristina.png',
    altImmagine: 'Cristina Accornero',
    altezza: 'alta',
    descrizioneEstesa: `Ha conseguito il dottorato di ricerca in Storia presso l'EHESS di Parigi. I suoi ambiti di ricerca comprendono la storia industriale, sociale e urbana. Ha svolto attività di collaborazione didattica e di ricerca presso il Dipartimento di Studi Storici dell'Università di Torino, il Politecnico di Torino e importanti istituzioni culturali torinesi. Collabora con l'Associazione Archivio Storico Olivetti (Ivrea). È autrice di numerosi saggi e volumi.`,
  },
  {
    id: 'aldrovandi-emanuele',
    nome: 'EMANUELE ALDROVANDI',
    ruolo: 'Scrittore e Regista',
    immagine: '/images/ospite-aldrovandi-emanuele.png',
    altImmagine: 'Emanuele Aldrovandi',
    altezza: 'bassa',
    descrizioneEstesa: `Autore e regista per teatro e cinema. I suoi testi sono messi in scena nei principali teatri italiani e tradotti in numerose lingue. Col cortometraggio Bataclan ha vinto il Nastro d'argento 2021. Nel 2024 è uscito il suo primo romanzo, Il nostro grande niente (Einaudi). Insegna alla Paolo Grassi di Milano e alla Scuola Holden di Torino. È direttore artistico dell'Associazione Teatrale Autori Vivi e del Teatro del Fiume di Boretto.`,
  },
  {
    id: 'albertini-alberto',
    nome: 'ALBERTO ALBERTINI',
    ruolo: 'Scrittore Giornalista',
    immagine: '/images/ospite-albertini-alberto.png',
    altImmagine: 'Alberto Albertini',
    altezza: 'alta',
    descrizioneEstesa: `Nato nel 1966 a Brescia, laureato con lode in Filologia Moderna, lavora da 40 anni nell'industria, oggi in un'azienda leader mondiale quotata alla Borsa italiana. Docente presso la facoltà di Scienze Linguistiche dell'Università Cattolica del Sacro Cuore di Brescia, tra i fondatori della rivista Stile Arte, collabora con il Corriere della sera, dorso Brescia. È l'ideatore e il direttore artistico del festival "Rinascimento Culturale", giunto quest'anno alla dodicesima edizione, e ha pubblicato il romanzo "La classe avversa" (l'esordio più premiato del 2020), e due saggi dedicati soprattutto agli imprenditori famigliari e al passaggio generazionale.`,
  },
  {
    id: 'beldi-corrado',
    nome: 'CORRADO BELDÌ',
    ruolo: 'Imprenditore',
    immagine: '/images/ospite-beldi-corrado.png',
    altImmagine: 'Corrado Beldì',
    altezza: 'bassa',
    descrizioneEstesa: `Piemontese. Dopo la laurea in economia si è dedicato per alcuni anni alla consulenza organizzativa e alla strategia d'impresa in Ernst & Young e A.T. Kearney. È Presidente di Laterlite, azienda leader nelle soluzioni leggere e isolanti per l'edilizia. Vive tra Novara, Milano e Parma. Scrive su Zero e il Foglio. Ha collaborato con Vogue, Abitare e Rolling Stone ed è tra gli autori di diverse antologie su cultura e musica in Italia e sul mondo dei cocktail.`,
  },
  {
    id: 'boltri-daniele',
    nome: 'DANIELE BOLTRI',
    ruolo: 'Storico Arte e Architettura Olivetti',
    immagine: '/images/ospite-boltri-daniele.png',
    altImmagine: 'Daniele Boltri',
    altezza: 'alta',
    descrizioneEstesa: `Laureato in architettura presso il Politecnico di Torino. Dal 1986 ha seguito la realizzazione e la ristrutturazione degli edifici Olivettiani in Italia e all'estero, in collaborazione con alcuni dei progettisti originari delle fabbriche del periodo razionalista. Dal 1990 ha svolto attività di ricerca per la Fondazione Adriano Olivetti e l'Associazione Archivio Storico Olivetti e di libera docenza sulla storia dell'architettura olivettiana e recupero di patrimoni industriali dismessi presso il Politecnico di Torino, l'Università degli Studi di Padova, il Dipartimento di Architettura dell'Università Roma-Tre e la Facoltà di Architettura di Venezia (IUAV). È co-autore di due monografie sulle architetture olivettiane a Ivrea edite nel 1999 da Gangemi e nel 2024 dalla Fondazione Cattaneo Editore.`,
  },
  {
    id: 'franchini-antonio',
    nome: 'ANTONIO FRANCHINI',
    ruolo: 'Scrittore',
    immagine: '/images/ospite-franchini-antonio.png',
    altImmagine: 'Antonio Franchini',
    altezza: 'bassa',
    descrizioneEstesa: `Nato a Napoli nel 1958. Ha esordito nel 1992 con Camerati. Quattro novelle sul diventare grandi. Per Marsilio ha pubblicato: Quando vi ucciderete, maestro? (1996, 2019), Acqua, sudore, ghiaccio (1998, 2021), L'abusivo (2001, 2020), Cronaca della fine (2003, 2019), Signore delle lacrime (2010, 2020), Memorie di un venditore di libri (2011) e Leggere possedere vendere bruciare (2022). Nel 2020, per NNE, è uscita la raccolta di racconti Il vecchio lottatore. Nel 2024, sempre per Marsilio, ha pubblicato: "Il fuoco che ti porti dentro" (Selezione Premio Campiello). Vive a Milano e lavora nell'editoria.`,
  },
  {
    id: 'gasparetto-mariangela',
    nome: 'MARIANGELA GASPARETTO',
    ruolo: 'Professoressa',
    immagine: '/images/ospite-gasparetto-mariangela.png',
    altImmagine: 'Mariangela Gasparetto',
    altezza: 'alta',
    descrizioneEstesa: `Direttrice del Premio Biella Letteratura e Industria dal 2004, unisce competenze in progettazione europea, formazione e innovazione, promuovendo iniziative a forte impatto culturale e sociale.`,
  },
  {
    id: 'gualazzini-marco',
    nome: 'MARCO GUALAZZINI',
    ruolo: 'Fotoreporter',
    immagine: '/images/ospite-gualazzini-marco.png',
    altImmagine: 'Marco Gualazzini',
    altezza: 'bassa',
    descrizioneEstesa: `Fotografo documentarista che collabora con testate nazionali ed internazionali come The New York Times, GEO, Al-Jazeera, TIME magazine, L'Espresso, e molte altre. Gualazzini ha ricevuto numerosi riconoscimenti, tra cui il Getty Images Grant for Editorial Photography, il Marco Luchetta, il PDN e il World Press Photo per citarne alcuni.`,
  },
  {
    id: 'severgnini-beppe',
    nome: 'BEPPE SEVERGNINI',
    ruolo: 'Giornalista e Saggista',
    immagine: '/images/ospite-severgnini-beppe.png',
    altImmagine: 'Beppe Severgnini',
    altezza: 'alta',
    descrizioneEstesa: `Editorialista del «Corriere della Sera» dal 1995, dove ha creato il blog «Italians» (1998) e diretto il settimanale «7» (2017-2019). Opinion writer per «The New York Times» dal 2013 al 2021, è stato corrispondente in Italia per «The Economist» (1996-2003). È stato corrispondente a Londra e Washington Dc; inviato speciale in Russia, Cina, Medio Oriente. È autore di molti bestseller: il primo è Inglesi (1990), il più recente Socrate, Agata e il future (2025), per diverse settimane #1 in Italia. La traduzione di La testa degli italiani (2005), col titolo La Bella Figura (2006), è diventato un New York Times bestseller. Tutti i suoi titoli sono disponibili in BUR. È sposato con Ortensia. Il figlio Antonio e Benedetta gli affidano volentieri Agata, che provvede all'educazione del nonno.`,
  },
  {
    id: 'signaroldi-luca',
    nome: 'LUCA SIGNAROLDI',
    ruolo: 'Narratore d\'Impresa',
    immagine: '/images/ospite-signaroldi-luca.png',
    altImmagine: 'Luca Signaroldi',
    altezza: 'bassa',
    descrizioneEstesa: `Founder e senior partner di Together Srl - unsocials, lavora in comunicazione da oltre 25 anni. Da settembre 2012 fino a marzo 2017 è specialist communication advisor per il Comune di Parma. Dal 2020 è Innovation Manager & Ambassador – Pledger, presente nell'Elenco Ufficiale del MISE - Ministero dello Sviluppo Economico; numerose collaborazioni professionali nell'arco degli anni, sia nel mondo imprenditoriale che istituzionale. Ha collaborato, e collabora, alla comunicazione istituzionale e di promozione di diversi territori in Italia, fra cui Parma, Ferrara, Ascoli Piceno, Macerata, Fano, Arezzo, Cortina d'Ampezzo, Pietrasanta.`,
  },
  {
    id: 'sinigaglia-alberto',
    nome: 'ALBERTO SINIGAGLIA',
    ruolo: 'Giornalista',
    immagine: '/images/ospite-sinigaglia-alberto.png',
    altImmagine: 'Alberto Sinigaglia',
    altezza: 'alta',
    descrizioneEstesa: `Alberto Sinigaglia, giornalista, fondatore di "Tuttolibri" della "Stampa", è presidente del Polo del '900 di Torino, delle giurie dei premi Pavese, Acqui Storia, Biella Letteratura Industria, e autore di radio e tv.`,
  },
  {
    id: 'tassicarboni-alessandro',
    nome: 'ALESSANDRO TASSI CARBONI',
    ruolo: 'Presidente Ordine Architetti Parma',
    immagine: '/images/ospite-tassicarboni-alessandro.png',
    altImmagine: 'Alessandro Tassi Carboni',
    altezza: 'bassa',
    descrizioneEstesa: `Architetto con oltre trent'anni di esperienza nel campo urbanistico, nella progettazione e nella direzione lavori di opere pubbliche. Consigliere, poi Presidente, dell'Ordine degli Architetti PPC di Parma dal 1996 al 2017 e nuovamente Presidente per il mandato 2025–2029. Ha guidato l'associazione Workout Pasubio nel progetto di rigenerazione e uso temporaneo dello spazio ex Manzini a Parma ed è Direttore della Scuola di Architettura per bambine e bambini SOU. Dal 2017 al 2022 ha maturato un'importante esperienza politica come Presidente del Consiglio Comunale di Parma e Vicepresidente della Provincia. È impegnato in progetti di cooperazione internazionale e svolge attività di volontariato.`,
  },
  {
    id: 'turchetti-marcella',
    nome: 'MARCELLA TURCHETTI',
    ruolo: 'Storica Arte e Architettura Olivetti',
    immagine: '/images/ospite-turchetti-marcella.png',
    altImmagine: 'Marcella Turchetti',
    altezza: 'alta',
    descrizioneEstesa: `Storica dell'arte, si occupa di valorizzazione del patrimonio culturale dell'Associazione Archivio Storico Olivetti con progetti di ricerca e studio, espositivi ed editoriali, tra cui le recenti mostre sul patrimonio artistico Olivetti (2021-2023), contributi ad enti e istituzioni culturali come il CSAC di Parma per mostra E.Sottsass jr. (2017), la mostra al Design Museum Bruxelles su J.-M. Folon (2024). Ha curato mostre e cataloghi, con particolare riferimento alla fotografia come Gianni Berengo Gardin e la Olivetti, Olivetti e i fotografi della Magnum. Si adopera per il recupero di archivi e biblioteche di interesse culturale.`,
  },
  {
    id: 'viotto-anna',
    nome: 'ANNA MARIA VIOTTO',
    ruolo: 'Resp. Biblioteca Olivetti',
    immagine: '/images/ospite-viotto-anna.png',
    altImmagine: 'Anna Maria Viotto',
    altezza: 'bassa',
    descrizioneEstesa: `Bibliotecaria, è responsabile della biblioteca dell'Associazione Archivio Storico Olivetti dove si adopera per la ricostruire della storia delle biblioteche di fabbrica ad Ivrea, nelle altre sedi italiane e straniere; Fa parte del coordinamento delle biblioteche speciali specialistiche di area metropolitana di Torino (CoBiS), ed è impegnata nella realizzazione del progetto CoBiSLOD Digital Library & Archives. Collabora con il coordinamento degli istituti culturali del Piemonte per la promozione dei patrimoni degli istituti culturali; ha pubblicato contributi su riviste relativi ai linked open data (LOD) e alle biblioteche di fabbrica Olivetti.`,
  },
];

// Export numero totale ospiti
export const totaleOspiti = ospiti.length;
