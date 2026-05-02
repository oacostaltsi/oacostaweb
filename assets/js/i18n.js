// Translation object for English, French, and Spanish
const translations = {
    en: {
        // Navigation
        'nav.subtitle': 'Full Professor - Biomedical Engineering, Medical Imaging',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.research': 'Research',
        'nav.projects': 'Projects',
        'nav.publications': 'Publications',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Oscar Acosta',
        'hero.subtitle': 'Full Professor - LTSI | Université de Rennes | ISTIC',
        'hero.learn': 'Learn More',
        'hero.contact': 'Get in Touch',
        
        // About Section
        'about.title': 'About',
        'about.heading': 'Full Professor at Université de Rennes',
        'about.intro': 'I am a Full Professor at the Signal and Image Processing Laboratory (LTSI-INSERM 1099), University of Rennes, France. My current research activities focus on image processing and computational methods for devising innovative and personalized radiotherapy in cancer care. This research work is being developed in tight collaboration with clinicians and medical physicists at the Anti-Cancer Center, Eugène Marquis.',
        'about.intro2': 'My expertise includes predictive models for radiotherapy, with a focus on introducing innovative methodologies for 3D data mining and digital twins. Throughout my career, I have established a strong track record in medical image processing and computational analysis, contributing to both fundamental research and clinical applications in cancer treatment planning and outcome prediction.',
        'about.intro3': 'General Chair, ISBI 2023 - the IEEE International Symposium on Biomedical Imaging held in Cartagena, Colombia. The first ISBI held in Latin America.',
        'about.experience': 'Professional Experience',
        'about.exp1': 'Full Professor, LTSI-INSERM 1099, Université de Rennes, France (Sep 2025 - Present)',
        'about.exp2': 'Associate Professor, LTSI-INSERM 1099, Université de Rennes, France (Nov 2009 - Aug 2025)',
        'about.exp3': 'Head of Master Program in Electronics and Automatics Engineering, Université de Rennes (2017 - 2021)',
        'about.exp4': 'Research Scientist, CSIRO, Australia (Nov 2005 - Nov 2009)',
        'about.exp5': 'Member, INSERM Scientific Specialized Commission CSS8 - Technologies for Health (2012 - 2016)',
        'about.education': 'Education',
        'about.edu1': 'HDR (Accreditation to Direct Research), Université de Rennes, France (2021)',
        'about.edu2': 'PhD in Biomedical Image Processing, Université de Rennes, France (2004)',
        'about.edu3': 'M.S. in Biomedical Engineering, Universidad de los Andes, Bogotá, Colombia (1997)',
        'about.edu4': 'B.S. in Electrical Engineering, Universidad de los Andes, Bogotá, Colombia (1995)',
        
        // Research
        'research.title': 'Research Areas',
        'research.area2': 'Radiomics & Outcome Prediction',
        'research.area2_desc': 'Machine learning models for predicting treatment response and toxicity',
        'research.area3': 'Digital Twins',
        'research.area3_desc': 'Computational simulation models for personalized treatment planning',
        'research.area4': 'Organ Segmentation',
        'research.area4_desc': 'Deep learning-based automatic delineation of organs-at-risk',
        'research.area5': 'Voxel-Based Analysis',
        'research.area5_desc': 'Population-based statistical analysis for toxicity prediction',
        
        // Projects
        'projects.title': 'Funded Projects',
        'projects.ttrail_full': 'Trustworthy Transferable Radiotherapy with Artificial Intelligence',
        'projects.ttrail_desc': 'MSCA Doctoral Network coordinator. A major European initiative for implementing trustworthy AI in radiotherapy.',
        'projects.twincart_full': 'Digital Twins for Prostate Cancer Radiotherapy',
        'projects.twincart_desc': 'Principal Investigator. Digital twins for personalized radiotherapy in prostate cancer within the French PEPR Digital Health program.',
        'projects.predtwin_desc': 'Predictive Digital Twin modeling for cancer radiotherapy outcome response.',
        'projects.perplan_full': 'Personalized Planning in Radiotherapy',
        'projects.perplan_desc': 'Integrative modeling of local dose effects and new dosimetric constraints.',
        'projects.erapermed_desc': 'European initiative for personalized medicine in radiotherapy.',
        'projects.rampart_full': 'Radiomics and Modeling for Prostate RadioTherapy',
        
        // Scientific Events
        'events.title': 'Scientific Events',
        'events.isbi_full': 'IEEE International Symposium on Biomedical Imaging',
        'events.isbi_desc': 'General Chair. First ISBI held in Latin America, organized in Cartagena, Colombia.',
        
        // News
        'news.title': 'News & Updates',
        'news.coming': 'Coming soon',
        'news.placeholder': 'Stay tuned for latest updates',
        'news.placeholder_desc': 'News and announcements about research activities, publications, and events will be updated regularly.',
        
        // Publications
        'publications.title': 'Publications & Resources',
        'publications.scholar': 'Google Scholar',
        'publications.scholar_desc': '216+ publications indexed with h-index and citation metrics',
        'publications.pubmed': 'PubMed',
        'publications.pubmed_desc': 'Indexed medical publications in PubMed database',
        'publications.orcid': 'ORCID Profile',
        'publications.orcid_desc': 'Complete academic profile with all publications and activities',
        'publications.isbi': 'ISBI 2023',
        'publications.isbi_desc': 'General Chair, IEEE International Symposium on Biomedical Imaging',
        'publications.linkedin': 'LinkedIn',
        'publications.linkedin_desc': 'Professional profile and career information',
        'publications.ltsi': 'LTSI Laboratory',
        'publications.ltsi_desc': 'Signal and Image Processing Laboratory, Université de Rennes',
        
        // ISTIC
        'publications.istic': 'ISTIC',
        'publications.istic_desc': 'National Engineering School of Computer Science and Technologies, Université de Rennes',
        
        // Contact
        'contact.title': 'Contact Information',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.lab': 'Laboratory',
        'contact.lab_info': 'Signal and Image Processing Laboratory',
        'contact.web': 'Web',
        
        // Footer
        'footer.title': 'Full Professor - Biomedical Engineering',
        'footer.quicklinks': 'Quick Links',
        'footer.about': 'About',
        'footer.research': 'Research',
        'footer.projects': 'Projects',
        'footer.publications': 'Publications',
        'footer.follow': 'Follow',
    },
    
    fr: {
        // Navigation
        'nav.subtitle': 'Professeur - Ingénierie Biomédicale, Imagerie Médicale',
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.research': 'Recherche',
        'nav.projects': 'Projets',
        'nav.publications': 'Publications',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Oscar Acosta',
        'hero.subtitle': 'Professeur - LTSI | Université de Rennes | ISTIC',
        'hero.position': 'Professeur',
        'hero.learn': 'En savoir plus',
        'hero.contact': 'Nous contacter',
        
        // About Section
        'about.title': 'À propos',
        'about.heading': 'Professeur à l\'Université de Rennes',
        'about.intro': 'Je suis Professeur au Laboratoire de Traitement du Signal et de l\'Image (LTSI-INSERM 1099), Université de Rennes, France. Mes activités de recherche actuelles portent sur le traitement d\'images et les méthodes computationnelles pour la conception de radiothérapies innovantes et personnalisées dans la prise en charge du cancer. Ces travaux de recherche sont menés en étroite collaboration avec les cliniciens et physiciens médicaux du Centre de Lutte Contre le Cancer Eugène Marquis.',
        'about.intro2': 'Mon expertise porte sur les modèles prédictifs en radiothérapie, avec un accent particulier sur l\'introduction de méthodologies novatrices pour l\'exploration de données 3D et les jumeaux numériques. Tout au long de ma carrière, j\'ai établi un solide dossier en traitement d\'images médicales et en analyse computationnelle, contribuant à la fois à la recherche fondamentale et aux applications cliniques dans la planification du traitement du cancer et la prédiction des résultats.',
        'about.intro3': 'Présidente du Comité d\'Organisation, ISBI 2023 - le Symposium International IEEE sur l\'Imagerie Biomédicale tenu à Carthagène, Colombie. Le premier ISBI tenu en Amérique latine.',
        'about.experience': 'Expérience Professionnelle',
        'about.exp1': 'Professeur, LTSI-INSERM 1099, Université de Rennes, France (Sep 2025 - Présent)',
        'about.exp2': 'Maître de Conférences, LTSI-INSERM 1099, Université de Rennes, France (Nov 2009 - Aug 2025)',
        'about.exp3': 'Responsable du Master en Ingénierie Électronique et Automatique, Université de Rennes (2017 - 2021)',
        'about.exp4': 'Chercheur, CSIRO, Australie (Nov 2005 - Nov 2009)',
        'about.exp5': 'Membre, Commission Scientifique Spécialisée INSERM CSS8 - Technologies pour la Santé (2012 - 2016)',
        'about.education': 'Formation',
        'about.edu1': 'HDR (Habilitation à Diriger des Recherches), Université de Rennes, France (2021)',
        'about.edu2': 'Doctorat en Traitement d\'Images Biomédicales, Université de Rennes, France (2004)',
        'about.edu3': 'Master en Ingénierie Biomédicale, Universidad de los Andes, Bogotá, Colombie (1997)',
        'about.edu4': 'Licence en Ingénierie Électrique, Universidad de los Andes, Bogotá, Colombie (1995)',
        
        // Research
        'research.title': 'Domaines de Recherche',
        'research.area2': 'Radiomique & Prédiction de Résultats',
        'research.area2_desc': 'Modèles d\'apprentissage automatique pour prédire la réponse au traitement et la toxicité',
        'research.area3': 'Jumeaux Numériques',
        'research.area3_desc': 'Modèles de simulation informatique pour la planification de traitement personnalisée',
        'research.area4': 'Segmentation d\'Organes',
        'research.area4_desc': 'Délinéation automatique basée sur le deep learning des organes à risque',
        'research.area5': 'Analyse Basée sur les Voxels',
        'research.area5_desc': 'Analyse statistique basée sur la population pour la prédiction de toxicité',
        
        // Projects
        'projects.title': 'Projets Financés',
        'projects.ttrail_full': 'Radiothérapie Transférable et Digne de Confiance avec l\'Intelligence Artificielle',
        'projects.ttrail_desc': 'Coordinateur du Réseau Doctoral MSCA. Une initiative européenne majeure pour mettre en œuvre l\'IA de confiance en radiothérapie.',
        'projects.twincart_full': 'Jumeaux Numériques pour la Radiothérapie du Cancer de la Prostate',
        'projects.twincart_desc': 'Investigateur Principal. Jumeaux numériques pour la radiothérapie personnalisée du cancer de la prostate dans le programme français PEPR Santé Numérique.',
        'projects.predtwin_desc': 'Modélisation de jumeaux numériques prédictifs pour la prédiction de résultats en radiothérapie du cancer.',
        'projects.perplan_full': 'Planification Personnalisée en Radiothérapie',
        'projects.perplan_desc': 'Modélisation intégrative des effets de dose localisés et des nouvelles contraintes dosimétriques.',
        'projects.erapermed_desc': 'Initiative européenne pour la médecine personnalisée en radiothérapie.',
        'projects.rampart_full': 'Radiomique et Modélisation pour la Radiothérapie Prostatique',
        
        // Scientific Events
        'events.title': 'Événements Scientifiques',
        'events.isbi_full': 'Symposium International IEEE sur l\'Imagerie Biomédicale',
        'events.isbi_desc': 'Président Général. Premier ISBI tenu en Amérique latine, organisé à Carthagène, Colombie.',
        
        // News
        'news.title': 'Actualités et Mises à Jour',
        'news.coming': 'À venir bientôt',
        'news.placeholder': 'Restez à l\'écoute pour les dernières mises à jour',
        'news.placeholder_desc': 'Les actualités et annonces concernant les activités de recherche, les publications et les événements seront mises à jour régulièrement.',
        
        // Publications
        'publications.title': 'Publications & Ressources',
        'publications.scholar': 'Google Scholar',
        'publications.scholar_desc': '216+ publications indexées avec métriques h-index et citation',
        'publications.pubmed': 'PubMed',
        'publications.pubmed_desc': 'Publications médicales indexées dans la base de données PubMed',
        'publications.orcid': 'Profil ORCID',
        'publications.orcid_desc': 'Profil académique complet avec toutes les publications et activités',
        'publications.isbi': 'ISBI 2023',
        'publications.isbi_desc': 'Président Général, Symposium International IEEE en Imagerie Biomédicale',
        'publications.linkedin': 'LinkedIn',
        'publications.linkedin_desc': 'Profil professionnel et informations de carrière',
        'publications.ltsi': 'Laboratoire LTSI',
        'publications.ltsi_desc': 'Laboratoire de Traitement du Signal et de l\'Image, Université de Rennes',
        
        // ISTIC
        'publications.istic': 'ISTIC',
        'publications.istic_desc': 'École Nationale Supérieure d\'Informatique et de Technologie des Télécommunications, Université de Rennes',
        
        // Contact
        'contact.title': 'Informations de Contact',
        'contact.email': 'Email',
        'contact.location': 'Localisation',
        'contact.lab': 'Laboratoire',
        'contact.lab_info': 'Laboratoire de Traitement du Signal et de l\'Image',
        'contact.web': 'Web',
        
        // Footer
        'footer.title': 'Professeur - Ingénierie Biomédicale',
        'footer.quicklinks': 'Liens Rapides',
        'footer.about': 'À propos',
        'footer.research': 'Recherche',
        'footer.projects': 'Projets',
        'footer.publications': 'Publications',
        'footer.follow': 'Suivre',
    },
    
    es: {
        // Navigation
        'nav.subtitle': 'Profesor Titular - Ingeniería Biomédica, Imagería Médica',
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.research': 'Investigación',
        'nav.projects': 'Proyectos',
        'nav.publications': 'Publicaciones',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'Oscar Acosta',
        'hero.subtitle': 'Profesor Titular - LTSI | Universidad de Rennes | ISTIC',
        'hero.position': 'Profesor Titular',
        'hero.learn': 'Más información',
        'hero.contact': 'Póngase en contacto',
        
        // About Section
        'about.title': 'Acerca de',
        'about.heading': 'Profesor Titular en la Universidad de Rennes',
        'about.intro': 'Soy Profesor en el Laboratorio de Tratamiento de Señales e Imágenes (LTSI-INSERM 1099), Universidad de Rennes, Francia. Mis actividades de investigación actuales se enfocan en procesamiento de imágenes y métodos computacionales para diseñar radioterapias innovadoras y personalizadas en oncología. Este trabajo de investigación se desarrolla en estrecha colaboración con clínicos y físicos médicos del Centro de Lucha Contra el Cáncer Eugène Marquis.',
        'about.intro2': 'Mi experiencia incluye modelos predictivos para radioterapia, con énfasis en metodologías innovadoras para minería de datos 3D y gemelos digitales. A lo largo de mi carrera, he establecido un sólido record en procesamiento de imágenes médicas y análisis computacional, contribuyendo tanto a investigación fundamental como a aplicaciones clínicas en planificación del tratamiento del cáncer y predicción de resultados.',
        'about.intro3': 'Presidenta del Comité Organizador, ISBI 2023 - el Simposio Internacional IEEE sobre Imágenes Biomédicas celebrado en Cartagena, Colombia. El primer ISBI celebrado en América Latina.',
        'about.experience': 'Experiencia Profesional',
        'about.exp1': 'Profesor, LTSI-INSERM 1099, Universidad de Rennes, Francia (Sep 2025 - Presente)',
        'about.exp2': 'Profesor Asociado, LTSI-INSERM 1099, Universidad de Rennes, Francia (Nov 2009 - Aug 2025)',
        'about.exp3': 'Coordinador del Programa de Máster en Ingeniería Electrónica y Automática, Universidad de Rennes (2017 - 2021)',
        'about.exp4': 'Investigador, CSIRO, Australia (Nov 2005 - Nov 2009)',
        'about.exp5': 'Miembro, Comisión Científica Especializada INSERM CSS8 - Tecnologías para la Salud (2012 - 2016)',
        'about.education': 'Educación',
        'about.edu1': 'HDR (Habilitación para Dirigir Investigación), Universidad de Rennes, Francia (2021)',
        'about.edu2': 'Doctorado en Procesamiento de Imágenes Biomédicas, Universidad de Rennes, Francia (2004)',
        'about.edu3': 'Máster en Ingeniería Biomédica, Universidad de los Andes, Bogotá, Colombia (1997)',
        'about.edu4': 'Licenciatura en Ingeniería Eléctrica, Universidad de los Andes, Bogotá, Colombia (1995)',
        
        // Research
        'research.title': 'Áreas de Investigación',
        'research.area1': 'Síntesis y Reconstrucción de Imágenes',
        'research.area1_desc': 'Síntesis RM-TC, métodos de deep learning para generación y mejora de imágenes médicas',
        'research.area2': 'Radiómics y Predicción de Resultados',
        'research.area2_desc': 'Modelos de aprendizaje automático para predecir respuesta al tratamiento y toxicidad',
        'research.area3': 'Gemelos Digitales',
        'research.area3_desc': 'Modelos de simulación computacional para planificación de tratamiento personalizada',
        'research.area4': 'Segmentación de Órganos',
        'research.area4_desc': 'Delineación automática basada en deep learning de órganos en riesgo',
        'research.area5': 'Análisis Basado en Vóxeles',
        'research.area5_desc': 'Análisis estadístico basado en población para predicción de toxicidad',
        'research.area6': 'Aprendizaje Federado',
        'research.area6_desc': 'Enfoques de aprendizaje automático colaborativo multiinstitucional',
        
        // Projects
        'projects.title': 'Proyectos Financiados',
        'projects.ttrail_full': 'Radioterapia Confiable y Transferible con Inteligencia Artificial',
        'projects.ttrail_desc': 'Coordinador de la Red Doctoral MSCA. Una iniciativa europea importante para implementar IA confiable en radioterapia.',
        'projects.twincart_full': 'Gemelos Digitales para Radioterapia del Cáncer de Próstata',
        'projects.twincart_desc': 'Investigador Principal. Gemelos digitales para radioterapia personalizada del cáncer de próstata en el programa francés PEPR Salud Digital.',
        'projects.predtwin_desc': 'Modelado de gemelos digitales predictivos para predicción de resultados en radioterapia del cáncer.',
        'projects.perplan_full': 'Planificación Personalizada en Radioterapia',
        'projects.perplan_desc': 'Modelado integrativo de efectos de dosis locales y nuevas restricciones dosamétricas.',
        'projects.erapermed_desc': 'Iniciativa europea para medicina personalizada en radioterapia.',
        'projects.rampart_full': 'Radiómics y Modelado para Radioterapia de Próstata',
        
        // Scientific Events
        'events.title': 'Eventos Científicos',
        'events.isbi_full': 'Simposio Internacional IEEE de Imágenes Biomédicas',
        'events.isbi_desc': 'Presidente General. Primer ISBI celebrado en América Latina, organizado en Cartagena, Colombia.',
        
        // News
        'news.title': 'Noticias y Actualizaciones',
        'news.coming': 'Próximamente',
        'news.placeholder': 'Manténgase atento a las últimas actualizaciones',
        'news.placeholder_desc': 'Las noticias y anuncios sobre actividades de investigación, publicaciones y eventos se actualizarán regularmente.',
        
        // Publications
        'publications.title': 'Publicaciones & Recursos',
        'publications.scholar': 'Google Scholar',
        'publications.scholar_desc': '216+ publicaciones indexadas con métricas h-index y de citación',        'publications.pubmed': 'PubMed',
        'publications.pubmed_desc': 'Publicaciones médicas indexadas en la base de datos PubMed',        'publications.orcid': 'Perfil ORCID',
        'publications.orcid_desc': 'Perfil académico completo con todas las publicaciones y actividades',
        'publications.isbi': 'ISBI 2023',
        'publications.isbi_desc': 'Presidente General, Simposio Internacional IEEE de Imágenes Biomédicas',
        'publications.linkedin': 'LinkedIn',
        'publications.linkedin_desc': 'Perfil profesional e información de carrera',
        'publications.ltsi': 'Laboratorio LTSI',
        'publications.ltsi_desc': 'Laboratorio de Procesamiento de Señales e Imágenes, Universidad de Rennes',
        
        // ISTIC
        'publications.istic': 'ISTIC',
        'publications.istic_desc': 'Escuela Nacional Superior de Informática y Tecnologías de Telecomunicaciones, Universidad de Rennes',
        
        // Contact
        'contact.title': 'Información de Contacto',
        'contact.email': 'Correo Electrónico',
        'contact.location': 'Ubicación',
        'contact.lab': 'Laboratorio',
        'contact.lab_info': 'Laboratorio de Procesamiento de Señales e Imágenes',
        'contact.web': 'Web',
        
        // Footer
        'footer.title': 'Profesor Titular - Ingeniería Biomédica',
        'footer.quicklinks': 'Enlaces Rápidos',
        'footer.about': 'Acerca de',
        'footer.research': 'Investigación',
        'footer.projects': 'Proyectos',
        'footer.publications': 'Publicaciones',
        'footer.follow': 'Seguir',
    }
};

// Get current language from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('language') || 'en';

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageLanguage();
}

// Update all page text based on current language
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLanguage;
    updatePageLanguage();
    
    // Set active button on load
    document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');
});
