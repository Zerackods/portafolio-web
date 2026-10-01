export const personal = {
  name: 'CESAR DELGADO',
  role: 'QA Tester | Data Analyst | Web Developer',
  tagline: 'Ingeniero en Administración de Sistemas',
  description:
    'Apasionado por la tecnología, con experiencia en QA, Análisis de Datos y Desarrollo Web, transformando ideas en soluciones digitales eficientes, funcionales e innovadoras.',
  photo: 'https://res.cloudinary.com/ow5ax157/image/upload/v1789477682/Foto-perfil.png',
  cvUrl: '/CV_Cesar_Delgado.pdf',
};

export const links = {
  github: 'https://github.com/Zerackods',
  linkedin: 'https://www.linkedin.com/in/cesar-delgado-silva',
  email: 'cesarods.contacto@gmail.com',
  other: '',
};

export const about = {
  presentation:
    'Soy Ingeniero en Sistemas apasionado por la tecnología y la mejora continua. Me he desarrollado en áreas de QA, análisis de datos y desarrollo web, combinando pensamiento analítico y programación para crear soluciones funcionales, confiables y orientadas a resultados. Disfruto aprender nuevas tecnologías, resolver problemas y transformar ideas en proyectos que aporten valor.',
  interests:
    'Mis principales intereses se encuentran en el aseguramiento de la calidad de las pruebas, automatización, análisis y visualización de datos. También me interesa explorar nuevas tecnologías, mejorar procesos y seguir fortaleciendo mis conocimientos en programación y herramientas digitales.',
  goals:
    'A corto plazo busco fortalecer mis conocimientos en las tecnologías de la era moderna mientras continúo adquiriendo experiencia profesional. Aspiro a asumir nuevos retos y participar en proyectos tecnológicos que generen soluciones eficientes e innovadoras.',
};

export interface Experience {
  position: string;
  company: string;
  dates: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    position: 'QA Tester Automatizador',
    company: 'Grupo TI México',
    dates: '[2024] — [2026]',
    description:
      'Participación en proyectos de software, asegurando la calidad mediante pruebas manuales y automatizadas, validación de funcionalidades y seguimiento de incidencias.',
    responsibilities: [
      'Diseño, documentación y ejecución de casos de prueba manuales y automatizados.',
      'Configuración y preparación de entornos para pruebas funcionales y automatizadas.',
      'Desarrollo y ejecución de scripts de automatización con Java, Appium y TestNG.',
      'Generación y recopilación de evidencias de los casos de prueba.',
      'Identificación y seguimiento a defectos encontrados durante las pruebas.',
    ],
    technologies: ['Java', 'SQL', 'Postman', 'GitHub', 'Azure DevOps', 'TestNG', 'Appium', 'Selenium', 'Octane'],
  },
  {
    position: 'IT Intern',
    company: 'International México',
    dates: '[2022] — [2024]',
    description:
      'Participación en actividades de análisis de datos, automatización de procesos y soporte técnico, contribuyendo a la eficiencia y continuidad de las operaciones.',
    responsibilities: [
      'Generación de reportes interactivos y dashboards en Power BI, integrando información de bases de datos SQL y Excel.',
      'Diseño y administración de sitios en SharePoint para facilitar la gestión y disponibilidad de información.',
      'Creación y optimización de flujos de trabajo y procesos automatizados, contribuyendo a mejorar la eficiencia operativa.',
      'Brindar soporte técnico a usuarios, incluyendo administración y restablecimiento de cuentas de nómina.',
    ],
    technologies: ['Power BI', 'SQL','Excel','Sharepoint'],
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'QA & Testing',
    icon: 'shield-check',
    skills: [
      'QA Manual',
      'QA Automation',
      'Pruebas Funcionales',
      'Pruebas de API',
      'Pruebas de Regresión',
      'Pruebas E2E',
      'Diseño de Casos de Prueba',
      'Automatización de Pruebas',
      'Selenium',
      'Appium',
      'TestNG',
      'Postman',
    ],
  },
  {
    title: 'Data Analytics',
    icon: 'bar-chart-3',
    skills: [
      'Power BI',
      'Excel Avanzado',
      'Tableau',
      'SQL',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Análisis Exploratorio',
      'Visualización de Datos',
      'Dashboards',
      'Métricas y KPIs',
      'ETL',
    ],
  },
  {
    title: 'Programming',
    icon: 'code',
    skills: 
      ['Python', 'Java', 'JavaScript', 'HTML', 'CSS',
      ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Notepad++',
      'Jupyter Notebook',
      'Google Colab',
      'Azure DevOps',
      'Jira',
      'Octane',
      'SharePoint',
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['SQL Server', 'MySQL', 'MongoDB'],
  },
];

export interface Project {
  id: string;
  category: 'web' | 'data';
  name: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  description: string;
  objective: string;
  process: string[];
  results: string[];
  gallery: string[];
  conclusion: string;
}

export const projects: Project[] = [
  {
    id: 'proyecto-data-1',
    category: 'data',
    name: 'Electric Vehicle Analysis',
    shortDescription:
      'Análisis de la adopción de vehículos eléctricos mediante limpieza, transformación y exploración de datos.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789481386/pexels-vehiculo-electrico.jpg',
    technologies: ['Python', 'Pandas', 'Numpy','Matplotlib', 'Seaborn', 'Scikit-learn', 'Google colab', 'Kaggle'],
    github: 'https://github.com/Zerackods/electric-vehicle-analysis',
    description:
      'Proyecto de análisis de datos sobre vehículos eléctricos, enfocado en estudiar su distribución, características y evolución. Se realizó limpieza, transformación y exploración de variables como tipo de vehículo, año, fabricante, autonomía eléctrica y segmento para identificar tendencias de adopción.',
    objective:
      'Analizar las características y evolución de los vehículos eléctricos para identificar tendencias relacionadas con su adopción y autonomía.',
    process: [
      'Definición del alcance',
      'Recopilación de datos',
      'Limpieza de datos',
      'Exploración de datos',
      'Visualización de datos',
      'Aprendizaje automático',
      'Conclusiones y recomendaciones'
    ],
    results: [
      'El análisis de 112,328 vehículos eléctricos registrados en Washington State reveló que los BEV dominan el mercado con 76.4% frente al 23.6% de PHEV, con Tesla concentrando el 46.2% del total, Seattle como ciudad líder en adopción y 2022 como el año de mayor registro, confirmando una tendencia de crecimiento sostenida desde 2020.',
      'El modelo KNN con K=3 predijo el tipo de vehículo con un accuracy de 99.93% y F1-score de 99.91%, validado frente a un clasificador base de 76.43%, demostrando que electric_range es la variable más discriminante dado el mínimo solapamiento físico entre ambos tipos.',
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/f_auto,q_auto/img_electric_vehicle',
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789655774/img_electric_vehicle_galeria_2.png',
    ],
    conclusion:
      'Este proyecto reforzó mis habilidades en limpieza, transformación y análisis exploratorio de datos, además de mejorar mi capacidad para trabajar con datasets reales y obtener información relevante de ellos.',
  },
  {
    id: 'proyecto-data-2',
    category: 'data',
    name: 'Netflix Data Analysis',
    shortDescription:
      'Exploración y análisis de datos de películas y series de Netflix para identificar tendencias, géneros y métricas relevantes.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789481696/pexels-movies.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib','Seaborn', 'Google colab', 'Kaggle'],
    github: 'https://github.com/Zerackods/netflix-data-analysis',
    description:
      'Proyecto de análisis exploratorio de un conjunto de datos de películas y series de Netflix. Se analizaron variables como géneros, calificaciones, cantidad de votos y distribución de contenidos para identificar tendencias y obtener información relevante.',
    objective:
      'Explorar el catálogo de Netflix para identificar patrones relacionados con géneros, popularidad, calificaciones y distribución de contenidos.',
    process: [
      'Recopilación de datos.',
      'Limpieza de datos.',
      'Exploración de datos.',
      'Visualización de datos.'
    ],
    results: [
      'A lo largo de los años, se percibe una tendencia general al alza en el número de películas lanzadas. Esto es consistente con el crecimiento de la industria cinematográfica y la producción de contenido.',
      'Los meses con mayor número de estrenos son Octubre (1023 películas), seguido de Septiembre (993 películas) y Diciembre (927 películas). Por otro lado, Enero (649 películas) y Mayo (665 películas) son los meses con menos lanzamientos. En general, se observa un patrón donde la producción de películas tiende a aumentar significativamente en la segunda mitad del año, especialmente hacia el otoño y principios del invierno.',
      'Se destaca que el idioma original inglés(en) representan abruptamente el 77.0% de las películas y las películas en idioma original japones (ja) tienen la mejor calificacion promedio en comparacion que las demas, lo cual sugiere que las peliculas en este idioma son percebidas con una calidad superior por parte de los usuarios.'
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789656383/img_netflix_galeria_1.png',
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789656550/img_netflix_galeria_2.png',
    ],
    conclusion:
      'Este proyecto permitió fortalecer mis conocimientos en análisis exploratorio y visualización, además de desarrollar mi capacidad para interpretar grandes conjuntos de datos y comunicar resultados de manera clara.',
  },
  {
    id: 'proyecto-data-3',
    category: 'data',
    name: 'Airbnb CDMX',
    shortDescription:
      'Análisis y visualización de datos de Airbnb en CDMX, desde la limpieza y exploración hasta la generación de insights.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789482999/pexels-airbnb.jpg',
    technologies: ['Python', 'Pandas', 'Numpy','Matplotlib', 'Seaborn', 'Google colab'],
    github: 'https://github.com/Zerackods/airbnb-cdmx',
    description:
      'Proyecto de análisis de datos enfocado en estudiar el comportamiento de los alojamientos de Airbnb en Ciudad de México. Se realizó la recopilación, limpieza, transformación y exploración de los datos para identificar patrones, tendencias y características relevantes mediante visualizaciones.',
    objective: 'Analizar los datos de Airbnb en CDMX para identificar patrones, tendencias y características relevantes de los alojamientos, utilizando técnicas de limpieza, exploración y visualización de datos.',
    process: [
      'Análisis exploratorio de datos',
      'Visualización de datos',
    ],
    results: [
      'La alcaldía de Cuauhtémoc tiene la mayor cantidad de alojamientos con diferencia',
      'Miguel Hidalgo presenta el precio promedio más alto, mientras que La Magdalena Contreras registra el más bajo',
      'Iztacalco presenta el mayor promedio de reseñas',
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789656909/img_airbnbCDMX_galeria_1.png',
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789656880/img_airbnbCDMX_galeria_2.png'
    ],
    conclusion:
      'Este proyecto fortaleció mis habilidades en análisis exploratorio, limpieza y visualización de datos, así como mi capacidad para transformar información en insights útiles para la toma de decisiones.',
  },
  {
    id: 'proyecto-web-1',
    category: 'web',
    name: 'Bienes Raíces',
    shortDescription:
      'Desarrollo de una interfaz web para una inmobiliaria utilizando HTML y CSS, enfocada en diseño y experiencia de usuario.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789503082/pexels-BienesRaices.jpg',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Zerackods/web-BienesRaices',
    description:
      'Proyecto de desarrollo web para una inmobiliaria, diseñado para presentar propiedades de forma clara y atractiva a potenciales clientes. Se desarrolló la interfaz utilizando HTML y CSS, aplicando una estructura organizada, diseño visual y adaptación a diferentes tamaños de pantalla.',
    objective: 'Crear una interfaz web atractiva y funcional que permita presentar propiedades de manera organizada y facilitar su consulta a potenciales clientes.',
    process: [
      'Estructura del contenido',
      'Estilo visual',
    ],
    results: [
      'Desarrollo de una interfaz web funcional y visualmente atractiva para presentar propiedades de forma organizada y facilitar su consulta.',
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789952278/img-BienesRaices-galeria-1.png',
    ],
    conclusion:
      'Este proyecto fortaleció mis conocimientos en desarrollo web, estructura HTML, estilos CSS y diseño de interfaces, además de permitirme aplicar principios de experiencia de usuario.',
  },
  {
    id: 'proyecto-web-2',
    category: 'web',
    name: 'Ristorante Italiano',
    shortDescription:
      'Desarrollo de un menú web para restaurante utilizando HTML, CSS y JavaScript, aplicando diseño responsive y estructura visual.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789504045/pexels-ristoranteItaliano.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Zerackods/web-RistoranteItaliano',
    description:
      'Proyecto web creado para presentar de forma digital el menú de un restaurante. Se desarrolló una interfaz organizada y visualmente atractiva utilizando HTML,CSS y JavaScript, buscando facilitar la navegación y consulta de los diferentes platillos y categorías.',
    objective: 'Diseñar una página web sencilla, visualmente atractiva y responsive para presentar el menú de un restaurante de manera clara y accesible.',
    process: [
      'Estructura del contenido',
      'Estilo visual',
      'Comportamiento dinámico'
    ],
    results: [
      'Creación de un menú web responsive que organiza los platillos y categorías de forma clara, facilitando la navegación y consulta del contenido.',
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789952326/img-Ristorante-galeria-1.png',
    ],
    conclusion:
      'Este proyecto permitió reforzar mis habilidades de desarrollo web y diseño de interfaces, especialmente en la organización visual de contenido y adaptación de páginas a diferentes dispositivos.',
  },
  {
    id: 'proyecto-web-3',
    category: 'web',
    name: 'Blog de Café',
    shortDescription:
      'Blog web de recetas de café desarrollado con HTML y CSS, enfocado en presentar preparaciones de forma clara y atractiva.',
    image:
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789135846/samples/coffee.jpg',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Zerackods/web-BlogDeCafe',
    description:
      'Proyecto web diseñado como un blog de café donde los usuarios pueden consultar diferentes recetas y métodos de preparación. Se desarrolló una interfaz organizada y visualmente atractiva utilizando HTML y CSS, buscando facilitar la navegación y presentación de cada receta.',
    objective: 'Crear un sitio web sencillo e intuitivo que permita consultar recetas de café y presentar la información de cada preparación de manera clara y visualmente agradable.',
    process: [
      'Estructura del contenido',
      'Estilo visual',
    ],
    results: [
      'Desarrollo de un blog web para presentar recetas de café de manera clara y atractiva, aplicando una estructura organizada y diseño visual.',
    ],
    gallery: [
      'https://res.cloudinary.com/ow5ax157/image/upload/v1789952346/img-BlogCafe-galeria-1.png',
    ],
    conclusion:
      'Este proyecto fortaleció mis conocimientos en HTML y CSS, además de permitirme practicar la estructura de contenido, diseño visual, organización de información y creación de interfaces orientadas al usuario.',
  },
];

export interface EducationItem {
  title: string;
  institution: string;
  dates: string;
  description: string;
  type: 'degree' | 'certification';
}

export const education: EducationItem[] = [
  {
    title: 'INGENIERÍA EN ADMINISTRACIÓN DE SISTEMAS',
    institution: 'Facultad de Ingeniería Mecánica y Eléctrica',
    dates: '[2018] — [2024]',
    description:
      'Formación enfocada en el análisis, diseño, administración y desarrollo de sistemas de información, combinando conocimientos de programación, bases de datos, redes, gestión de proyectos y tecnologías web. La carrera permitió desarrollar habilidades para identificar necesidades, resolver problemas tecnológicos y optimizar procesos mediante soluciones eficientes. Durante la formación se adquirieron bases en programación, análisis de datos, administración de sistemas y desarrollo de software, fortaleciendo el pensamiento lógico y analítico, así como la capacidad para trabajar con diferentes herramientas y tecnologías.',
    type: 'degree',
  },
  {
    title: 'Introducción a la IA moderna',
    institution: 'Cisco Networking Academy.',
    dates: '[Agosto - 2026]',
    description:
      'Introducción a conceptos y aplicaciones actuales de inteligencia artificial, explorando sus fundamentos y principales tecnologías.',
    type: 'certification',
  },
  {
    title: 'Ciencia de datos con inteligencia artificial,',
    institution: 'El Centro Público de Formación en Inteligencia Artificial - INFOTEC',
    dates: '[Julio - 2026]',
    description:
      'Formación en fundamentos de ciencia de datos e inteligencia artificial, enfocada en el análisis y procesamiento de información.',
    type: 'certification',
  },
  {
    title: 'Master en Data Science con IA',
    institution: 'DEV.F + Meta',
    dates: '[Junio - 2026]',
    description:
      'Formación en ciencia de datos e inteligencia artificial, abordando análisis de datos, procesamiento de información y modelos de IA.',
    type: 'certification',
  },
  {
    title: 'Azure Test Plans',
    institution: 'OXXO',
    dates: '[Febrero - 2026]',
    description:
      'Formación en planificación, gestión y ejecución de pruebas mediante Azure Test Plans, incluyendo seguimiento y documentación de resultados.',
    type: 'certification',
  },
  {
    title: 'Azure Boards',
    institution: 'OXXO',
    dates: '[Febrero - 2026]',
    description:
      'Formación en gestión y seguimiento de actividades de proyectos mediante Azure Boards, utilizando herramientas de planificación y organización.',
    type: 'certification',
  },
  {
    title: 'Appium Mobile Automation',
    institution: 'Udemy',
    dates: '[Marzo - 2025]',
    description:
      'Formación en automatización de pruebas para aplicaciones móviles utilizando Appium, enfocada en la validación de funcionalidades y comportamiento.',
    type: 'certification',
  },
  {
    title: 'Selenium Webdriver con Java',
    institution: 'Udemy',
    dates: '[Marzo 2025]',
    description:
      'Formación en automatización de pruebas web utilizando Selenium WebDriver y Java para validar funcionalidades y detectar errores en aplicaciones.',
    type: 'certification',
  },
  {
    title: 'Fundamentos de Automatización de Pruebas de Software',
    institution: 'Udemy',
    dates: '[Marzo 2025]',
    description:
      'Introducción a los fundamentos, conceptos y buenas prácticas de la automatización de pruebas de software.',
    type: 'certification',
  },
  {
    title: 'Master en SQL Server',
    institution: 'Udemy',
    dates: 'Octubre - 2024',
    description:
      'Formación en SQL Server enfocada en consultas, manipulación de datos, creación y administración de bases de datos para análisis de información.',
    type: 'certification',
  },
  {
    title: 'Curso Excel y Power BI',
    institution: 'Udemy',
    dates: '[Mayo - 2024]',
    description:
      'Formación en análisis y visualización de datos mediante Excel y Power BI para crear reportes, dashboards y métricas.',
    type: 'certification',
  },
  {
    title: 'Curso Excel',
    institution: 'Udemy',
    dates: '[Mayo - 2024]',
    description:
      'Formación Excel con fórmulas, tablas dinámicas y dashboards para crear reportes.',
    type: 'certification',
  },
  {
    title: 'Curso Reparación de Computadoras Desde Cero',
    institution: 'Udemy',
    dates: '[Mayo - 2024]',
    description:
      'Formación Excel con fórmulas, tablas dinámicas y dashboards para crear reportes.',
    type: 'certification',
  },

  
];

export const navItems = [
  { label: 'Inicio', href: '#inicio', number: null },
  { label: 'Sobre mí', href: '#sobre-mi', number: '01' },
  { label: 'Experiencia', href: '#experiencia', number: '02' },
  { label: 'Habilidades', href: '#habilidades', number: '03' },
  { label: 'Proyectos', href: '#proyectos', number: '04' },
  { label: 'Educación', href: '#educacion', number: '05' },
  { label: 'Contacto', href: '#contacto', number: '06' },
];
