/* =========================================================
   PLEXIA - Main JavaScript
   ========================================================= */

// ─── Translations ─────────────────────────────────────────────
const translations = {
  es: {
  "sd_title": "Servicios",
  "sd_consultoria": "📋 Consultoría Digital",
  "sd_datos": "☁️ Datos & Cloud",
  "sd_normativa": "🔐 Normativa & Gov. TI",
  "sd_proyectos": "💻 Proyectos a Medida",
  "sd_cloud": "🖥️ Cloud & Infra",
  "sd_procesos": "⚙️ Procesos TI",
  "sd_ia": "🤖 Automatización & IA",
  "sd_iot": "🛰️ Internet of Things",
  "sd_contact_prompt1": "¿Querés saber más sobre este servicio?",
  "sd_contact_prompt2": "¿Tenés un proyecto en mente?",
  "sd_contact_prompt3": "¿Necesitás cumplir con la normativa?",
  "sd_contact_prompt4": "¿Querés incorporar IA en tu organización?",
  "sd_contact_prompt5": "¿Querés optimizar tus procesos?",
  "sd_contact_btn": "Contactarnos",
  "sd_hablemos_btn": "Hablemos",
  "pill_sf": "Software Factory",
  "pill_sa": "Staff Augmentation",
  "pill_td": "Transformación Digital",
  "pill_mod": "Modernización",
  "gen_h2_consiste": "¿En qué consiste?",
  "gen_h3_marcos": "Marcos de trabajo y técnicas",
  "gen_h3_stack": "Stack tecnológico",
  "gen_h3_techs": "Tecnologías y plataformas",
  "s1_h1": "Consultoría Estratégica",
  "s1_p1": "Nuestro servicio de Consultoría Estratégica e Innovación Digital abarca el análisis completo del ecosistema tecnológico del cliente. Comenzamos con un diagnóstico profundo para identificar brechas, ineficiencias y oportunidades de mejora, y diseñamos un roadmap de transformación adaptado a cada realidad organizacional.",
  "s1_p2": "Aplicamos técnicas de desarrollo seguro, calidad incorporada y pipelines DevOps CI/CD para garantizar que cada proceso definido pueda ejecutarse de manera eficiente y medible.",
  "s1_f1_tit": "Diagnóstico & Mapeo de Procesos",
  "s1_f1_txt": "Relevamiento completo de los procesos actuales, identificación de ineficiencias y documentación técnica exhaustiva en áreas de Sistemas y Tecnología.",
  "s1_f2_tit": "Modelado & Automatización",
  "s1_f2_txt": "Diseño de procesos optimizados y automatización mediante tecnologías BPM, RPA y herramientas de integración para reducir tiempos y errores operativos.",
  "s1_f3_tit": "Definición de Procesos de Desarrollo",
  "s1_f3_txt": "Establecimiento de estándares de desarrollo seguro, aseguramiento de calidad y pipelines CI/CD que garantizan entregas rápidas y confiables.",
  "s1_f4_tit": "Seguridad de la Información",
  "s1_f4_txt": "Incorporación de prácticas de Secure SDLC y análisis de vulnerabilidades en cada etapa del proceso de desarrollo y operación.",
  "s1_f5_tit": "Roadmap de Transformación Digital",
  "s1_f5_txt": "Diseño de la hoja de ruta tecnológica alineada a los objetivos del negocio, con hitos medibles y retorno de inversión claro.",
  "s2_p1": "El Gobierno de Datos (Data Governance) es el conjunto de políticas, procesos y estándares que garantizan la calidad, disponibilidad, integridad y seguridad de los datos en toda la organización. Lo complementamos con una estrategia de Cloud Governance que gestiona el ciclo de vida en entornos de nube pública, privada e híbrida.",
  "s2_p2": "Definimos e implementamos el modelo de Gobierno que mejor se adapta a la realidad de cada cliente, considerando su madurez tecnológica, su stack actual y sus objetivos de negocio.",
  "s2_f1_tit": "Estrategia de Data Governance",
  "s2_f1_txt": "Definimos políticas, roles y responsabilidades sobre los datos, incorporando un Data Catalog, lineage y quality management alineados a los objetivos del negocio.",
  "s2_f2_tit": "Cloud Governance (PAI)",
  "s2_f2_txt": "Diseño y gestión del modelo de gobierno en entornos Cloud: control de costos, seguridad, accesos, compliance y uso óptimo de recursos.",
  "s2_f3_tit": "Gestión y Calidad de Datos",
  "s2_f3_txt": "Implementación de procesos de Data Quality, MDM (Master Data Management) y workflows de validación y limpieza de datos.",
  "s2_f4_tit": "Arquitectura de Datos en Cloud",
  "s2_f4_txt": "Diseño de data lakes, data warehouses modernos y pipelines de integración en plataformas Cloud líderes del mercado.",
  "s3_h2": "Compliance y Gobierno de TI",
  "s3_p1": "Las organizaciones del sector financiero y público enfrentan presiones regulatorias crecientes. Nuestro servicio de Normativa y Gobierno de TI permite a las empresas alcanzar y mantener el cumplimiento de los marcos regulatorios más exigentes, minimizando riesgos y evitando sanciones.",
  "s3_p2": "Trabajamos con un enfoque integrado que une la seguridad de la información, la gestión de servicios, la continuidad del negocio y la gestión de riesgos en un único modelo de gobierno.",
  "s3_h3": "Marcos normativos que abordamos",
  "s3_l1": "Alineación a la normativa del Banco Central de la República Argentina y todas sus complementarias vigentes.",
  "s3_l2": "Sistema de Gestión de Seguridad de la Información: implementación, auditoría y certificación.",
  "s3_l3": "Gestión de Servicios TI: catálogo de servicios, SLAs, gestión de incidentes, problemas y cambios.",
  "s3_l4": "Modelo de madurez en el desarrollo de software y capacidades de proceso organizacional.",
  "s3_l5": "Gestión de Riesgos y Continuidad de Negocio: BIA, planes de recuperación y pruebas de continuidad.",
  "s3_l6": "Normativa para Organismos Públicos nacionales: gobierno de TI, seguridad y gestión de la información.",
  "s3_f1_tit": "Diagnóstico de Brecha (Gap Analysis)",
  "s3_f1_txt": "Evaluamos el estado actual de la organización frente a cada norma o regulación para identificar las acciones necesarias para alcanzar el cumplimiento.",
  "s3_f2_tit": "Implementación del SGSI",
  "s3_f2_txt": "Diseño e implementación del Sistema de Gestión de Seguridad de la Información según ISO 27001, incluyendo políticas, controles y evidencias.",
  "s3_f3_tit": "Gestión de Continuidad del Negocio",
  "s3_f3_txt": "Análisis de impacto (BIA), definición de estrategias de recuperación, desarrollo de planes y simulacros de continuidad.",
  "s4_h2": "Desarrollo a la medida de tu negocio",
  "s4_p1": "Los proyectos a medida ofrecen una solución global y adaptada a los requerimientos específicos de cada organización. Trabajamos con metodologías ágiles que permiten a los clientes seguir el proyecto paso a paso, participar activamente en cada decisión y obtener valor desde las primeras iteraciones.",
  "s4_p2": "Nuestro modelo de Software Factory garantiza procesos de entrega repetibles, documentados y con calidad incorporada. El Staff Augmentation permite escalar equipos con el talento exacto que el proyecto requiere.",
  "s4_b1_tit": "Software Factory",
  "s4_b1_txt": "Producción de software a escala con procesos estandarizados, calidad incorporada y equipos especializados.",
  "s4_b2_tit": "Staff Augmentation",
  "s4_b2_txt": "Incorporación de profesionales calificados al equipo del cliente, con la flexibilidad de escalar según las necesidades del proyecto.",
  "s4_f1_tit": "Relevamiento & Diseño de Solución",
  "s4_f1_txt": "Análisis detallado de los requerimientos funcionales y no funcionales para diseñar la arquitectura y el plan de desarrollo más adecuado.",
  "s4_f2_tit": "Desarrollo Iterativo e Incremental",
  "s4_f2_txt": "Sprints cortos con entregables funcionales, revisiones frecuentes y ajustes continuos basados en el feedback del cliente.",
  "s4_f3_tit": "QA & Testing Automatizado",
  "s4_f3_txt": "Pruebas unitarias, de integración y de aceptación automatizadas para garantizar la calidad de cada release.",
  "s4_f4_tit": "Despliegue & Soporte Post-Go-Live",
  "s4_f4_txt": "Deploy controlado con rollback plans, monitoreo post-producción y soporte durante el período de estabilización.",
  "s5_h2": "Gestión de despliegue en la nube",
  "s5_p1": "Ofrecemos un catálogo completo de servicios profesionales de Cloud, desde la definición de la arquitectura objetivo hasta el soporte post-migración. Acompañamos a las organizaciones en cada etapa de su journey hacia la nube, asegurando que el proceso sea seguro, eficiente y alineado a los objetivos del negocio.",
  "s5_h3": "Catálogo de Servicios Profesionales",
  "s5_f1_tit": "Arquitectura Cloud-Native",
  "s5_f1_txt": "Diseño de arquitecturas modernas basadas en microservicios, contenedores y serverless que maximizan la resiliencia y la escalabilidad.",
  "s5_f2_tit": "Migración y Modernización",
  "s5_f2_txt": "Estrategias de migración (lift & shift, re-platform, re-architecture) adaptadas al nivel de madurez y los tiempos del cliente.",
  "s5_f3_tit": "Optimización de Costos Cloud",
  "s5_f3_txt": "FinOps: análisis de consumo, rightsizing, reservas y estrategias de ahorro sin comprometer la performance.",
  "s5_f4_tit": "Seguridad en la Nube",
  "s5_f4_txt": "Implementación de CloudSec: IAM, cifrado, políticas de red, SIEM en cloud y cumplimiento de estándares de seguridad.",
  "s6_h2": "Administración y procesos de TI",
  "s6_p1": "La gestión efectiva de los procesos de TI es fundamental para garantizar la continuidad operativa, el control de riesgos y la capacidad de adaptación de la organización. Nuestra práctica abarca el ciclo completo: desde el monitoreo de riesgos hasta la recuperación ante desastres.",
  "s6_f1_tit": "Monitoreo de Riesgos TI",
  "s6_f1_txt": "Identificación, evaluación y seguimiento continuo de riesgos tecnológicos.",
  "s6_f2_tit": "Aseguramiento y Cumplimiento",
  "s6_f2_txt": "Aseguramiento del cumplimiento de políticas, normas y regulaciones vigentes.",
  "s6_f3_tit": "Transformación",
  "s6_f3_txt": "Acompañamiento organizacional en procesos de transformación tecnológica.",
  "s6_f4_tit": "Mantenimiento de Infraestructura",
  "s6_f4_txt": "Gestión preventiva y correctiva de la infraestructura TI: servidores, redes, almacenamiento y servicios críticos.",
  "s6_f5_tit": "Gestión de Disponibilidad y Capacidad",
  "s6_f5_txt": "Planificación de capacidad, monitoreo de disponibilidad y optimización del rendimiento de los sistemas productivos.",
  "s6_f6_tit": "Recuperación ante Desastres (DRP)",
  "s6_f6_txt": "Diseño e implementación de planes de recuperación ante desastres con RTO/RPO definidos. Simulacros y validación periódica.",
  "s6_f7_tit": "Gestión del Cambio Organizacional",
  "s6_f7_txt": "Metodología de Change Management para acompañar la adopción de nuevas tecnologías y procesos minimizando el impacto en la operación.",
  "s6_f8_tit": "Continuidad del Negocio (BCP)",
  "s6_f8_txt": "Análisis de impacto (BIA), definición de estrategias de continuidad y gestión del plan de continuidad del negocio.",
  "s7_h2": "Potenciando organizaciones con IA y Automatización",
  "s7_p1": "La inteligencia artificial y la automatización de procesos representan una de las mayores oportunidades de transformación para las organizaciones actuales. No se trata solo de adoptar tecnología, sino de incorporarla de manera estratégica alineada a los objetivos del negocio.",
  "s7_p2": "En PLEXIA ayudamos a identificar los procesos con mayor potencial de automatización, diseñamos la solución adecuada e implementamos con foco en resultados medibles: reducción de costos operativos, velocidad de respuesta, calidad y escalabilidad.",
  "s7_f1_tit": "RPA (Robotic Process Automation)",
  "s7_f1_txt": "Automatización de tareas repetitivas y procesos manuales en sistemas legados sin necesidad de integración compleja.",
  "s7_f2_tit": "Machine Learning & Analítica Predictiva",
  "s7_f2_txt": "Modelos predictivos para detección de fraudes, scoring crediticio, análisis de riesgo y forecast de demanda.",
  "s7_f3_tit": "IA Generativa",
  "s7_f3_txt": "Incorporación de modelos de lenguaje para asistentes internos, generación de documentación y automatización de respuestas.",
  "s7_f4_tit": "Business Analytics & Data Vis",
  "s7_f4_txt": "Dashboards inteligentes, data pipelines y análisis descriptivo, predictivo y prescriptivo para la toma de decisiones.",
  "s7_f5_tit": "Automatización de Workflows",
  "s7_f5_txt": "Orquestación de procesos de negocio de extremo a extremo con integración de sistemas heterogéneos.",
  "s7_f6_tit": "Computer Vision",
  "s7_f6_txt": "Reconocimiento de imágenes, OCR inteligente y análisis visual para automatización de procesos documentales.",
  "s7_f7_tit": "Evaluación de Madurez en IA",
  "s7_f7_txt": "Diagnosticamos el nivel de madurez analítico y de automatización de la organización para definir la hoja de ruta más adecuada.",
  "s7_f8_tit": "Implementación Responsable",
  "s7_f8_txt": "Aplicamos principios de IA ética, explicable y auditable, garantizando trazabilidad de las decisiones y control del sesgo.",
  "s7_f9_tit": "Capacitación y Adopción",
  "s7_f9_txt": "Acompañamos a los equipos en la adopción de las nuevas herramientas, con capacitación específica y change management.",
  "s7_f10_tit": "Monitoreo y Mejora Continua",
  "s7_f10_txt": "Establecemos métricas de impacto y monitoreamos el desempeño de los modelos y automatizaciones en producción.",

    // NAV
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_industries: "Sectores",
    nav_contact: "Contacto",
    nav_cta: "Hablemos",

    // HERO
    hero_label: "Consultoría & Servicios IT",
    hero_title_1: "Innovación tecnológica",
    hero_title_2: "a la medida de tu negocio",
    hero_text: "Somos una empresa que ofrece innovación tecnológica a las necesidades de sus clientes, con foco en resultados, agilidad y calidad.",
    hero_btn1: "Ver servicios",
    hero_btn2: "Contactarnos",
    hero_card_label: "Time to market",
    hero_card_sprint: "Progreso del sprint",
    hero_card_compliance: "Cumplimiento",

    // SERVICES SECTION
    services_label: "Lo que hacemos",
    services_title: "Nuestros Servicios",
    services_subtitle: "Soluciones integrales de tecnología para acelerar la transformación digital de tu organización.",
    svc1_title: "Consultoría Estratégica e Innovación Digital",
    svc1_text: "Diagnóstico, mapeo, documentación, modelado y automatización de procesos en Sistemas, Tecnología y Seguridad de la Información.",
    svc2_title: "Gobierno de Datos & Cloud",
    svc2_text: "Definición e implementación de estrategias de Data Governance. Gestión de datos y administración en ambientes Cloud.",
    svc3_title: "Normativa BCRA & Gobierno de TI",
    svc3_text: "Alineación a BCRA 7724, ISO 27001/2, ITIL/ISO 20000, CMMI. Gestión de Riesgos y Continuidad basados en ISO 22301.",
    svc4_title: "Proyectos Digitales a Medida",
    svc4_text: "Software Factory y desarrollo a medida con metodologías ágiles. Seguimiento paso a paso con equipos de Staff Augmentation.",
    svc5_title: "Cloud & Infraestructura",
    svc5_text: "Arquitectura, migración, soporte, configuración, innovación, entrenamiento y seguridad en la nube.",
    svc6_title: "Procesos TI & Administración",
    svc6_text: "Monitoreo de Riesgos TI, Gestión del Cambio, Continuidad del Negocio y Recuperación ante Desastres.",
    svc7_title: "Automatización & Inteligencia Artificial",
    svc7_text: "Incorporamos IA y automatización de procesos para potenciar la eficiencia operativa, reducir tiempos y escalar soluciones de manera inteligente.",
    svc_more: "Ver detalle",

    // ABOUT (Home teaser)
    about_label: "¿Quiénes somos?",
    about_title: "Experiencia y metodología al servicio del cambio",
    about_text: "Contamos con profesionales de variado conocimiento para hacer frente a los desafíos de cada cliente. Nuestra metodología de gestión se adapta a las actividades y políticas de cada organización.",
    about_b1_title: "Metodología Ágil",
    about_b1_text: "Scrum, Proceso Unificado de Desarrollo y Lean para optimizar el time to market.",
    about_b2_title: "Calidad Incorporada",
    about_b2_text: "Desarrollo seguro y pipelines DevOps CI/CD garantizan calidad en cada entrega.",
    about_b3_title: "Equipo Experto",
    about_b3_text: "Profesionales certificados con amplia experiencia en el ecosistema tecnológico.",
    about_link: "Conocé más sobre nosotros",

    // INDUSTRIES
    industries_label: "Sectores que atendemos",
    industries_title: "Presencia en múltiples industrias",
    ind1: "Banca",
    ind2: "SGR",
    ind3: "Telecomunicaciones",
    ind4: "Energía",
    ind5: "Gobierno",
    ind6: "Pymes",

    // CTA
    cta_title: "¿Listo para transformar tu organización?",
    cta_text: "Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.",
    cta_btn: "Hablar con un experto",

    // FOOTER
    footer_tag: "Consultoría y Servicios IT",
    footer_desc: "Innovación tecnológica a la medida de cada cliente, con foco en resultados y calidad.",
    footer_menu: "Menú",
    footer_contact_title: "Contacto",
    footer_email: "contacto@plexia.com.ar",
    footer_location: "Argentina",
    footer_copy: "© 2025 Plexia. Todos los derechos reservados.",

    // PAGE – ABOUT (nosotros.html)
    page_about_title: "Nosotros",
    page_about_lead: "Un equipo de profesionales apasionados por la tecnología y comprometidos con los resultados de cada cliente.",
    about_history_label: "Nuestra historia",
    about_exp_title: "Nuestra Experiencia",
    about_exp_text: "Tenemos experiencia en el desarrollo y diseño de aplicaciones, software Factory, Staff Augmentation y mejoras de procesos, mediante la transformación digital del negocio.",
    about_exp_card1_title: "Desarrollo de Aplicaciones",
    about_exp_card1_text: "End-to-end, desde el diseño hasta el deploy",
    about_exp_card2_title: "Software Factory",
    about_exp_card2_text: "Producción de software escalable y de calidad",
    about_exp_card3_title: "Mejora de Procesos",
    about_exp_card3_text: "Optimización continua con foco en resultados",
    about_team_section_label: "Equipo",
    about_team_title: "Nuestro Equipo",
    about_team_text: "Hoy en día nuestro equipo cuenta con profesionales con variado conocimiento para hacer frente a los desafíos que se presentan en el cliente.",
    team_area1_title: "Arquitectura & Infraestructura",
    team_area1_text: "Diseño de soluciones Cloud y On-Premise de alta disponibilidad.",
    team_area2_title: "Gestión & Gobierno",
    team_area2_text: "Consultores con certificaciones ITIL, CMMI, ISO 27001 y más.",
    team_area3_title: "Desarrollo & QA",
    team_area3_text: "Engineers y QA especializados en ciclos de entrega cortos y confiables.",
    team_area4_title: "Seguridad & Compliance",
    team_area4_text: "Expertos en seguridad de la información y gestión de riesgos.",
    about_method_section_label: "Forma de trabajo",
    about_method_title: "Metodología de Trabajo",
    about_method_text: "La metodología de gestión del proyecto se realiza dependiendo de las actividades y políticas del cliente. Trabajamos con metodologías ágiles (Scrum), interactivas (Proceso unificado de desarrollo) y Lean.",
    about_goal_title: "Nuestro Objetivo",
    about_goal_text: "Adoptamos como metodología principal a la ágil para optimizar el 'time to market', lo que impacta directamente en los resultados del negocio. Buscamos que los ciclos de desarrollo e implementación de soluciones de software sean lo más cortos posible resguardando durante todo el proceso la calidad.",
    method_step1_title: "Relevamiento & Diagnóstico",
    method_step1_text: "Entendemos en profundidad el contexto, los procesos y los objetivos del cliente.",
    method_step2_title: "Planificación & Sprint",
    method_step2_text: "Definimos el backlog, prioridades y ciclos de entrega cortos con valor real.",
    method_step3_title: "Entrega & Revisión",
    method_step3_text: "Entregamos incrementos funcionales y validamos con el cliente cada ciclo.",
    method_step4_title: "Mejora Continua",
    method_step4_text: "Retrospectivas y optimización permanente de procesos y entregas.",

    // PAGE – CONTACT (contacto.html)
    contact_title: "Contacto",
    contact_label: "Escribinos",
    contact_lead: "Estamos disponibles para escuchar tu desafío y explorar juntos cómo podemos ayudarte.",
    contact_email_title: "E-mail",
    contact_email_desc: "Escribinos y te respondemos a la brevedad.",
    contact_location_title: "Ubicación",
    contact_location_val: "Argentina",
    contact_web_title: "Web",
    contact_reach_title: "¿Cómo podemos ayudarte?",
    contact_reach_text: "Ya sea que estés buscando una consultoría inicial, un equipo de desarrollo, o una solución integral de transformación digital, somos el partner tecnológico que tu organización necesita.",
    contact_btn: "Envianos un mail",

    // PAGE – SECTORS (sectores.html)
    page_sectors_lead: "Adaptamos nuestros servicios a las características, regulaciones y desafíos propios de cada sector.",
    sector_banca_title: "Transformación Digital en el Sistema Financiero",
    sector_banca_text: "El sector bancario enfrenta desafíos únicos: regulación estricta, transformación digital acelerada y altas exigencias de seguridad. Acompañamos a los bancos en su evolución tecnológica con soluciones robustas y compliance garantizado.",
    sector_banca_p1: "Alineación a normativas BCRA 7724 y complementarias",
    sector_banca_p2: "Implementación de ISO 27001 y gestión de seguridad de la información",
    sector_banca_p3: "Modernización de core bancario y canales digitales",
    sector_banca_p4: "Gobierno de datos financieros y analytics",
    sector_banca_p5: "Continuidad del negocio según ISO 22301",
    sector_sgr_title: "Sistemas de Garantía Recíproca",
    sector_sgr_text: "Las SGRs operan en un entorno altamente regulado con demandas crecientes de digitalización. Facilitamos la modernización de sus sistemas de gestión y el cumplimiento normativo aplicable.",
    sector_sgr_p1: "Digitalización de procesos de garantías",
    sector_sgr_p2: "Sistemas de gestión de socios y avalados",
    sector_sgr_p3: "Reporting regulatorio automatizado",
    sector_sgr_p4: "Plataformas de análisis de riesgo crediticio",
    sector_telco_title: "Agilidad y escalabilidad en TELCO",
    sector_telco_text: "Las telcos necesitan velocidad de innovación y robustez operativa. Ayudamos a diseñar arquitecturas escalables, optimizar procesos de soporte y acelerar el despliegue de nuevos servicios.",
    sector_telco_p1: "Arquitecturas Cloud-native y microservicios",
    sector_telco_p2: "DevOps y CI/CD para ciclos de release acelerados",
    sector_telco_p3: "Gestión de servicios ITIL y mejora de NOC/SOC",
    sector_telco_p4: "Data governance y analytics de clientes",
    sector_energia_title: "Transformación Digital en Utilities y Energía",
    sector_energia_text: "El sector energético evoluciona hacia modelos más inteligentes y conectados. Acompañamos en la digitalización de operaciones, gestión de activos y cumplimiento de normativas sectoriales.",
    sector_energia_p1: "Digitalización de operaciones y activos físicos",
    sector_energia_p2: "Sistemas de medición inteligente (Smart Metering)",
    sector_energia_p3: "Gestión de riesgos y continuidad operativa",
    sector_energia_p4: "Integración de sistemas SCADA con plataformas IT",
    sector_gobierno_title: "Tecnología al servicio del Estado",
    sector_gobierno_text: "Los organismos públicos requieren transformación digital con especial atención a la transparencia, seguridad y accesibilidad. Operamos con referencia a la DA 641 y normativas aplicables al sector público.",
    sector_gobierno_p1: "Alineación a DA 641 y normativa de organismos públicos",
    sector_gobierno_p2: "Gobierno de TI y modernización de sistemas legacy",
    sector_gobierno_p3: "Gobierno de datos y apertura de información",
    sector_gobierno_p4: "Gestión de continuidad y recuperación ante desastres",
    sector_gobierno_p5: "Capacitación y gestión del cambio organizacional",
    sector_pymes_title: "Innovación y competitividad para Pymes",
    sector_pymes_text: "Las pequeñas y medianas empresas requieren soluciones ágiles y rentables. Acompañamos su crecimiento mediante tecnología accesible y escalable que optimiza sus procesos clave.",
    sector_pymes_p1: "Digitalización de procesos operativos y comerciales",
    sector_pymes_p2: "Adopción de herramientas Cloud para trabajo colaborativo",
    sector_pymes_p3: "Implementación de software de gestión ERP y CRM",
    sector_pymes_p4: "Ciberseguridad y protección de datos adaptada",
    svc8_title: "Internet of Things (IoT) & Smart Cities",
    svc8_text: "Soluciones de medición, calidad de ambiente, telemetría y despliegue de sensores para entornos industriales y ciudades.",
    sd_iot: "🛰️ Internet of Things",
    s8_h1: "Internet of Things (IoT) & Smart Cities",
    s8_h2: "Conectando el mundo físico para decisiones inteligentes",
    s8_p1: "El ecosistema IoT permite capturar datos del mundo real en tiempo real. Esto abarca desde la medición de variables ambientales hasta el seguimiento de activos y la optimización de recursos urbanos (Smart Cities).",
    s8_p2: "En PLEXIA diseñamos arquitecturas de recolección y procesamiento de datos sensoriales, asegurando su escalabilidad, disponibilidad y sobre todo: convirtiendo el dato físico en una acción de negocio automatizada.",
    s8_f1_tit: "Calidad de Ambiente",
    s8_f1_txt: "Medición de CO2, humedad, temperatura y partículas en suspensión para garantizar entornos seguros y confortables.",
    s8_f2_tit: "Telemetría Industrial",
    s8_f2_txt: "Seguimiento y control de activos, medición de niveles y presión en procesos productivos sin intervención manual.",
    s8_f3_tit: "Smart Cities & Urbanidad",
    s8_f3_txt: "Gestión inteligente de residuos, iluminación dinámica y optimización del tráfico mediante redes de bajo consumo (LoRaWAN/NB-IoT).",
    s8_f4_tit: "Eficiencia Energética",
    s8_f4_txt: "Monitoreo en tiempo real del consumo eléctrico en edificios o fábricas predictivo para ahorro y cumplimiento sostenible.",
    s8_f5_tit: "Integración Cloud IoT",
    s8_f5_txt: "Streaming de datos hacia plataformas Cloud para almacenamiento, visualización y análisis avanzado en tiempo real."
  },
  en: {
  "sd_title": "Services",
  "sd_consultoria": "📋 Digital Consulting",
  "sd_datos": "☁️ Data & Cloud",
  "sd_normativa": "🔐 Regulations & IT Gov",
  "sd_proyectos": "💻 Custom Projects",
  "sd_cloud": "🖥️ Cloud & Infra",
  "sd_procesos": "⚙️ IT Processes",
  "sd_ia": "🤖 Automation & AI",
  "sd_iot": "🛰️ Internet of Things",
  "sd_contact_prompt1": "Want to know more about this service?",
  "sd_contact_prompt2": "Have a project in mind?",
  "sd_contact_prompt3": "Need to comply with regulations?",
  "sd_contact_prompt4": "Want to innovate with AI?",
  "sd_contact_prompt5": "Want to optimize your processes?",
  "sd_contact_btn": "Contact Us",
  "sd_hablemos_btn": "Let's talk",
  "pill_sf": "Software Factory",
  "pill_sa": "Staff Augmentation",
  "pill_td": "Digital Transformation",
  "pill_mod": "Modernization",
  "gen_h2_consiste": "What is it about?",
  "gen_h3_marcos": "Frameworks and Techniques",
  "gen_h3_stack": "Tech Stack",
  "gen_h3_techs": "Technologies and Platforms",
  "s1_h1": "Strategic Consulting",
  "s1_p1": "Our Strategic Consulting and Digital Innovation service covers a complete analysis of the client's technological ecosystem. We begin with an in-depth diagnosis to identify gaps, inefficiencies, and improvement opportunities, designing a transformation roadmap tailored to each organizational reality.",
  "s1_p2": "We apply secure development techniques, built-in quality, and CI/CD DevOps pipelines to ensure that each defined process can be executed efficiently and measurably.",
  "s1_f1_tit": "Process Diagnosis & Mapping",
  "s1_f1_txt": "Complete survey of current processes, identification of inefficiencies, and exhaustive technical documentation in IT and Tech areas.",
  "s1_f2_tit": "Modeling & Automation",
  "s1_f2_txt": "Design of optimized processes and automation using BPM technologies, RPA, and integration tools to reduce times and operational errors.",
  "s1_f3_tit": "Development Process Definition",
  "s1_f3_txt": "Establishment of secure development standards, quality assurance, and CI/CD pipelines that guarantee fast and reliable deliveries.",
  "s1_f4_tit": "Information Security",
  "s1_f4_txt": "Incorporation of Secure SDLC practices and vulnerability analysis at every stage of the development and operation process.",
  "s1_f5_tit": "Digital Transformation Roadmap",
  "s1_f5_txt": "Design of the technological roadmap aligned with business objectives, with measurable milestones and clear ROI.",
  "s2_p1": "Data Governance is the set of policies, processes, and standards that guarantee data quality, availability, integrity, and security across the organization. We complement this with a Cloud Governance strategy managing the lifecycle in public, private, and hybrid cloud environments.",
  "s2_p2": "We define and implement the Governance model best suited to each client's reality, considering their technological maturity, current stack, and business objectives.",
  "s2_f1_tit": "Data Governance Strategy",
  "s2_f1_txt": "We define Data policies, roles, and responsibilities, incorporating Data Catalog, lineage, and quality management aligned to business goals.",
  "s2_f2_tit": "Cloud Governance (PAI)",
  "s2_f2_txt": "Design and management of governance in Cloud environments: cost control, security, access, compliance, and optimal resource usage.",
  "s2_f3_tit": "Data Quality & Management",
  "s2_f3_txt": "Implementation of Data Quality processes, MDM (Master Data Management), and workflows for data validation and cleansing.",
  "s2_f4_tit": "Cloud Data Architecture",
  "s2_f4_txt": "Design of data lakes, modern data warehouses, and integration pipelines over market-leading cloud platforms.",
  "s3_h2": "IT Compliance and Governance",
  "s3_p1": "Organizations in the financial and public sectors face growing regulatory pressures. Our IT Regulatory and Governance service allows companies to achieve and maintain compliance with the most demanding regulatory frameworks, minimizing risks and avoiding penalties.",
  "s3_p2": "We work with an integrated approach that ties information security, service management, business continuity, and risk management into a single governance model.",
  "s3_h3": "Regulatory Frameworks Addressed",
  "s3_l1": "Alignment to Central Bank of Argentina (BCRA) standards and complementary rules.",
  "s3_l2": "Information Security Management System: implementation, audit, and certification.",
  "s3_l3": "IT Service Management: service catalog, SLAs, incident, problem, and change management.",
  "s3_l4": "Software development maturity models and organizational process capabilities.",
  "s3_l5": "Risk and Business Continuity Mgmt: BIA, recovery plans, and continuity testing.",
  "s3_l6": "Regulations for National Public Agencies: IT governance, security, and information management.",
  "s3_f1_tit": "Gap Analysis",
  "s3_f1_txt": "We evaluate the organization's current state against each standard or regulation to identify actions needed to reach compliance.",
  "s3_f2_tit": "ISMS Implementation",
  "s3_f2_txt": "Design and implementation of Information Security Management Systems as per ISO 27001, including policies, controls, and evidence gathering.",
  "s3_f3_tit": "Business Continuity Management",
  "s3_f3_txt": "Business Impact Analysis (BIA), definition of recovery strategies, development of continuity plans and drills.",
  "s4_h2": "Development tailored to your business",
  "s4_p1": "Custom projects provide a global solution adapted to the specific requirements of each organization. We work with agile methodologies allowing clients to follow projects step by step, actively participate, and gain value from early iterations.",
  "s4_p2": "Our Software Factory model guarantees repeatable, documented delivery processes with built-in quality. Staff Augmentation allows scaling teams with the exact talent needed for the project.",
  "s4_b1_tit": "Software Factory",
  "s4_b1_txt": "Software production at scale with standardized processes, built-in quality, and specialized teams.",
  "s4_b2_tit": "Staff Augmentation",
  "s4_b2_txt": "Incorporation of qualified professionals to the client's team, with the flexibility to scale according to project needs.",
  "s4_f1_tit": "Survey & Solution Design",
  "s4_f1_txt": "Detailed analysis of functional and non-functional requirements to design the most suitable architecture and development plan.",
  "s4_f2_tit": "Iterative & Incremental Dev",
  "s4_f2_txt": "Short sprints with functional deliverables, frequent reviews, and continuous adjustments based on client feedback.",
  "s4_f3_tit": "Automated QA & Testing",
  "s4_f3_txt": "Automated unit, integration, and acceptance tests to ensure quality for every release.",
  "s4_f4_tit": "Deployment & Post-Go-Live Support",
  "s4_f4_txt": "Controlled deployment with rollback plans, post-production monitoring, and support during the stabilization period.",
  "s5_h2": "Cloud Deployment Management",
  "s5_p1": "We offer a complete catalog of professional Cloud services, from initial target architecture to post-migration support. We guide organizations at every stage of their journey to the cloud, ensuring a safe, efficient process aligned with business goals.",
  "s5_h3": "Professional Services Catalog",
  "s5_f1_tit": "Cloud-Native Architecture",
  "s5_f1_txt": "Design of modern architectures based on microservices, containers, and serverless to maximize resilience and scalability.",
  "s5_f2_tit": "Migration and Modernization",
  "s5_f2_txt": "Migration strategies (lift & shift, re-platform, re-architecture) tailored to client maturity and timelines.",
  "s5_f3_tit": "Cloud Cost Optimization",
  "s5_f3_txt": "FinOps: consumption analysis, right-sizing, reserved instances, and savings strategies without compromising performance.",
  "s5_f4_tit": "Cloud Security",
  "s5_f4_txt": "Implementation of CloudSec: IAM, encryption, network policies, cloud SIEM, and compliance with security standards.",
  "s6_h2": "IT Administration and Processes",
  "s6_p1": "Effective management of IT processes is critical to ensuring operational continuity, risk control, and organizational adaptability. Our practice spans the entire cycle: from risk monitoring to disaster recovery.",
  "s6_f1_tit": "IT Risk Monitoring",
  "s6_f1_txt": "Identification, evaluation, and continuous tracking of technological risks.",
  "s6_f2_tit": "Assurance and Compliance",
  "s6_f2_txt": "Ensuring compliance with active IT policies, norms, and regulatory frameworks.",
  "s6_f3_tit": "Transformation",
  "s6_f3_txt": "Organizational consulting for deep technological transformation processes.",
  "s6_f4_tit": "Infrastructure Maintenance",
  "s6_f4_txt": "Preventive and corrective management of IT infrastructure: servers, networking, storage, and critical services.",
  "s6_f5_tit": "Availability and Capacity Management",
  "s6_f5_txt": "Capacity planning, availability tracking, and performance tuning of productive systems.",
  "s6_f6_tit": "Disaster Recovery (DRP)",
  "s6_f6_txt": "Design and implementation of disaster recovery plans with defined RTO/RPO. Periodic drills and validations.",
  "s6_f7_tit": "Organizational Change Management",
  "s6_f7_txt": "Change Management methodologies to smooth the adoption of new tech and processes, minimizing operational impact.",
  "s6_f8_tit": "Business Continuity (BCP)",
  "s6_f8_txt": "Impact analysis (BIA), formulation of continuity strategies, and overall BCP governance.",
  "s7_h2": "Empowering orgs with AI & Automation",
  "s7_p1": "Artificial Intelligence and process automation represent one of the biggest transformation opportunities for today's organizations. It's not just about adopting tech, but incorporating it strategically mapped to business horizons.",
  "s7_p2": "At PLEXIA we help identify the processes with the highest automation potential, design the exact solution, and deploy focusing on measurable results: OPEX reduction, speed, quality, and scale.",
  "s7_f1_tit": "RPA (Robotic Process Automation)",
  "s7_f1_txt": "Automation of repetitive tasks and manual processes over legacy systems without complex integration layers.",
  "s7_f2_tit": "Machine Learning & Predictive Analytics",
  "s7_f2_txt": "Predictive modeling for fraud detection, credit scoring, risk analysis, and demand forecasting.",
  "s7_f3_tit": "Generative AI",
  "s7_f3_txt": "Incorporating language models for internal assistants, smart documentation generation, and response automation.",
  "s7_f4_tit": "Business Analytics & Data Vis",
  "s7_f4_txt": "Smart dashboards, data pipelines, descriptive, predictive, and prescriptive analysis for leadership.",
  "s7_f5_tit": "Workflow Automation",
  "s7_f5_txt": "End-to-End business process orchestration merging heterogeneous isolated systems.",
  "s7_f6_tit": "Computer Vision",
  "s7_f6_txt": "Image recognition, smart OCR, and visual analysis to automate document-heavy pipelines.",
  "s7_f7_tit": "AI Maturity Assessment",
  "s7_f7_txt": "We diagnose the organization's analytic and automation maturity level to carve out the most fitting roadmap.",
  "s7_f8_tit": "Responsible Implementation",
  "s7_f8_txt": "We apply ethical, explainable, and auditable AI principles, guaranteeing decision traceability and bias control.",
  "s7_f9_tit": "Training & Adoption",
  "s7_f9_txt": "We partner with client teams through the adoption curve using specialized training and change management frameworks.",
  "s7_f10_tit": "Monitoring & Continuous Improvement",
  "s7_f10_txt": "We setup impact metrics and conduct continuous oversight on AI models and automations running in production.",

    // NAV
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_contact: "Contact",
    nav_cta: "Let's talk",

    // HERO
    hero_label: "IT Consulting & Services",
    hero_title_1: "Technology innovation",
    hero_title_2: "tailored to your business",
    hero_text: "We are a company that delivers technological innovation to meet our clients' needs, with a focus on results, agility and quality.",
    hero_btn1: "View services",
    hero_btn2: "Contact us",
    hero_card_label: "Time to market",
    hero_card_sprint: "Sprint progress",
    hero_card_compliance: "Compliance",

    // SERVICES SECTION
    services_label: "What we do",
    services_title: "Our Services",
    services_subtitle: "Comprehensive technology solutions to accelerate your organization's digital transformation.",
    svc1_title: "Strategic Consulting & Digital Innovation",
    svc1_text: "Diagnosis, mapping, documentation, modeling and automation of processes in Systems, Technology and Information Security.",
    svc2_title: "Data & Cloud Governance",
    svc2_text: "Definition and implementation of Data Governance strategies. Data management and administration in Cloud environments.",
    svc3_title: "BCRA Compliance & IT Governance",
    svc3_text: "Alignment with BCRA 7724, ISO 27001/2, ITIL/ISO 20000, CMMI. Risk Management and Business Continuity based on ISO 22301.",
    svc4_title: "Custom Digital Projects",
    svc4_text: "Software Factory and bespoke development with Agile methodologies. Step-by-step tracking with Staff Augmentation teams.",
    svc5_title: "Cloud & Infrastructure",
    svc5_text: "Architecture, migration, support, configuration, innovation, training and cloud security services.",
    svc6_title: "IT Processes & Administration",
    svc6_text: "IT Risk Monitoring, Change Management, Business Continuity and Disaster Recovery.",
    svc7_title: "Automation & Artificial Intelligence",
    svc7_text: "We integrate AI and process automation to boost operational efficiency, reduce lead times and scale solutions intelligently.",
    svc_more: "Read more",

    // ABOUT (Home teaser)
    about_label: "Who we are",
    about_title: "Experience and methodology in service of change",
    about_text: "We have professionals with diverse knowledge to meet each client's challenges. Our management methodology adapts to each organization's activities and policies.",
    about_b1_title: "Agile Methodology",
    about_b1_text: "Scrum, Unified Process and Lean to optimize time to market.",
    about_b2_title: "Built-in Quality",
    about_b2_text: "Secure development and DevOps CI/CD pipelines ensure quality in every delivery.",
    about_b3_title: "Expert Team",
    about_b3_text: "Certified professionals with extensive experience in the technology ecosystem.",
    about_link: "Learn more about us",

    // INDUSTRIES
    industries_label: "Industries we serve",
    industries_title: "Presence across multiple industries",
    ind1: "Banking",
    ind2: "SGR",
    ind3: "Telecommunications",
    ind4: "Energy",
    ind5: "Government",
    ind6: "SMEs",

    // CTA
    cta_title: "Ready to transform your organization?",
    cta_text: "Let's talk about how we can help you achieve your technology objectives.",
    cta_btn: "Talk to an expert",

    // FOOTER
    footer_tag: "IT Consulting & Services",
    footer_desc: "Technology innovation tailored to each client, with a focus on results and quality.",
    footer_menu: "Menu",
    footer_contact_title: "Contact",
    footer_email: "contacto@plexia.com.ar",
    footer_location: "Argentina",
    footer_copy: "© 2025 Plexia. All rights reserved.",

    // PAGE – ABOUT (nosotros.html)
    page_about_title: "About Us",
    page_about_lead: "A team of professionals passionate about technology and committed to each client's results.",
    about_history_label: "Our story",
    about_exp_title: "Our Experience",
    about_exp_text: "We have experience in application development and design, Software Factory, Staff Augmentation and process improvements through digital business transformation.",
    about_exp_card1_title: "Application Development",
    about_exp_card1_text: "End-to-end, from design to deployment",
    about_exp_card2_title: "Software Factory",
    about_exp_card2_text: "Scalable, high-quality software production",
    about_exp_card3_title: "Process Improvement",
    about_exp_card3_text: "Continuous optimization with a focus on results",
    about_team_section_label: "Team",
    about_team_title: "Our Team",
    about_team_text: "Our team consists of professionals with diverse knowledge to address each client's unique challenges.",
    team_area1_title: "Architecture & Infrastructure",
    team_area1_text: "Design of high-availability Cloud and On-Premise solutions.",
    team_area2_title: "Management & Governance",
    team_area2_text: "Consultants certified in ITIL, CMMI, ISO 27001 and more.",
    team_area3_title: "Development & QA",
    team_area3_text: "Engineers and QA specialists focused on short, reliable delivery cycles.",
    team_area4_title: "Security & Compliance",
    team_area4_text: "Information security experts and risk management professionals.",
    about_method_section_label: "How we work",
    about_method_title: "Work Methodology",
    about_method_text: "Project management methodology is applied depending on each client's activities and policies. We work with Agile (Scrum), iterative (Unified Development Process) and Lean methodologies.",
    about_goal_title: "Our Goal",
    about_goal_text: "We adopt Agile as our main methodology to optimize time-to-market, directly impacting business results. We aim to make software development and implementation cycles as short as possible while maintaining quality throughout the process.",
    method_step1_title: "Discovery & Diagnosis",
    method_step1_text: "We deeply understand the client's context, processes and objectives.",
    method_step2_title: "Planning & Sprint",
    method_step2_text: "We define the backlog, priorities and short delivery cycles with real value.",
    method_step3_title: "Delivery & Review",
    method_step3_text: "We deliver functional increments and validate with the client each cycle.",
    method_step4_title: "Continuous Improvement",
    method_step4_text: "Retrospectives and permanent optimization of processes and deliveries.",

    // PAGE – CONTACT (contacto.html)
    contact_title: "Contact",
    contact_label: "Get in touch",
    contact_lead: "We're available to listen to your challenge and explore together how we can help you.",
    contact_email_title: "E-mail",
    contact_email_desc: "Write to us and we'll get back to you shortly.",
    contact_location_title: "Location",
    contact_location_val: "Argentina",
    contact_web_title: "Web",
    contact_reach_title: "How can we help you?",
    contact_reach_text: "Whether you're looking for initial consulting, a development team, or a comprehensive digital transformation solution, we are the technology partner your organization needs.",
    contact_btn: "Send us an email",

    // PAGE – SECTORS (sectores.html)
    page_sectors_lead: "We tailor our services to the characteristics, regulations and challenges of each industry.",
    sector_banca_title: "Digital Transformation in the Financial System",
    sector_banca_text: "The banking sector faces unique challenges: strict regulation, accelerated digital transformation and high security demands. We accompany banks in their technological evolution with robust solutions and guaranteed compliance.",
    sector_banca_p1: "Alignment with BCRA 7724 regulations and complementary rules",
    sector_banca_p2: "ISO 27001 implementation and information security management",
    sector_banca_p3: "Core banking modernization and digital channels",
    sector_banca_p4: "Financial data governance and analytics",
    sector_banca_p5: "Business continuity under ISO 22301",
    sector_sgr_title: "Mutual Guarantee Systems",
    sector_sgr_text: "SGRs operate in a highly regulated environment with growing digitalization demands. We facilitate the modernization of their management systems and applicable regulatory compliance.",
    sector_sgr_p1: "Digitization of guarantee processes",
    sector_sgr_p2: "Partner and guaranteed party management systems",
    sector_sgr_p3: "Automated regulatory reporting",
    sector_sgr_p4: "Credit risk analysis platforms",
    sector_telco_title: "Agility and Scalability in TELCO",
    sector_telco_text: "Telcos need innovation speed and operational robustness. We help design scalable architectures, optimize support processes and accelerate new service deployment.",
    sector_telco_p1: "Cloud-native architectures and microservices",
    sector_telco_p2: "DevOps and CI/CD for accelerated release cycles",
    sector_telco_p3: "ITIL service management and NOC/SOC improvement",
    sector_telco_p4: "Data governance and customer analytics",
    sector_energia_title: "Digital Transformation in Utilities and Energy",
    sector_energia_text: "The energy sector is evolving toward smarter, more connected models. We support the digitization of operations, asset management and compliance with sector regulations.",
    sector_energia_p1: "Digitization of operations and physical assets",
    sector_energia_p2: "Smart Metering systems",
    sector_energia_p3: "Risk management and operational continuity",
    sector_energia_p4: "SCADA systems integration with IT platforms",
    sector_gobierno_title: "Technology at the Service of the State",
    sector_gobierno_text: "Public bodies require digital transformation with special attention to transparency, security and accessibility. We operate with reference to DA 641 and regulations applicable to the public sector.",
    sector_gobierno_p1: "Alignment with DA 641 and public sector regulations",
    sector_gobierno_p2: "IT Governance and legacy system modernization",
    sector_gobierno_p3: "Data governance and open information",
    sector_gobierno_p4: "Continuity management and disaster recovery",
    sector_gobierno_p5: "Training and organizational change management",
    sector_pymes_title: "Innovation and competitiveness for SMEs",
    sector_pymes_text: "Small and medium-sized enterprises require agile and cost-effective solutions. We support their growth through accessible, scalable technology optimizing core processes.",
    sector_pymes_p1: "Digitization of operational and sales processes",
    sector_pymes_p2: "Adoption of Cloud tools for collaborative work",
    sector_pymes_p3: "Implementation of ERP and CRM management software",
    sector_pymes_p4: "Adapted cybersecurity and data protection",
    svc8_title: "Internet of Things & Smart Cities",
    svc8_text: "Smart measurements, environmental quality, telemetry, and sensor deployment for industrial ecosystems and modern cities.",
    sd_iot: "🛰️ Internet of Things",
    s8_h1: "Internet of Things (IoT) & Smart Cities",
    s8_h2: "Connecting the physical world for smart decisions",
    s8_p1: "The IoT ecosystem enables capturing real-world data in real-time. This ranges from measuring environmental variables to asset tracking and urban resource optimization (Smart Cities).",
    s8_p2: "At PLEXIA, we design architectures for collecting and processing sensory data, ensuring scalability, availability, and most importantly: converting physical data into automated business actions.",
    s8_f1_tit: "Environmental Quality",
    s8_f1_txt: "Measuring CO2, humidity, temperature, and suspended particles to ensure safe and comfortable environments.",
    s8_f2_tit: "Industrial Telemetry",
    s8_f2_txt: "Tracking and controlling assets, measuring levels and pressure in production processes without manual intervention.",
    s8_f3_tit: "Smart Cities & Urbanity",
    s8_f3_txt: "Smart waste management, dynamic lighting, and traffic optimization over low-power networks (LoRaWAN/NB-IoT).",
    s8_f4_tit: "Energy Efficiency",
    s8_f4_txt: "Real-time monitoring of electricity consumption in buildings or factories to guarantee savings and sustainability.",
    s8_f5_tit: "Cloud IoT Integration",
    s8_f5_txt: "Data streaming to Cloud platforms for storage, data visualization, and real-time advanced analytics."
  }
};

// ─── State ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('plexia_lang') || 'es';

// ─── Language Switcher ─────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('plexia_lang', lang);

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply translations
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(currentLang);
}

// ─── Navigation ────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile toggle
  burger?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    const isOpen = mobileMenu?.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop() || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── Intersection Observer - Fade Up ──────────────────────────
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    observer.observe(el);
  });
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangSwitcher();
  initAnimations();
});
