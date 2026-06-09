import type { FrameworkData, FunctionProfile, Intersection, StageProfile } from './types';

export const structureLayers = [
  {
    id: 'operating',
    title: 'Capa operativa',
    sub: 'Visibilidad, monitoreo, optimización',
    body: 'Cómo la organización ve el trabajo en movimiento — no dónde vive el trabajo, sino cómo se gobierna en tiempo real.',
  },
  {
    id: 'processes',
    title: 'Procesos de negocio',
    sub: 'Cómo fluye el trabajo en la organización',
    body: 'Los traspasos, colas y flujos que conectan funciones. Los procesos persisten; lo que los ejecuta cambia.',
  },
  {
    id: 'capability',
    title: 'Habilidades, memoria y seguridad',
    sub: 'Dónde vive realmente la capacidad',
    body: 'La capa que más se desplaza al avanzar — de cabezas, a documentos, a sistemas, a agentes.',
  },
  {
    id: 'workers',
    title: 'Agentes + humanos',
    split: true as const,
    left: { label: 'Agentes', sub: 'Trabajadores digitales' },
    right: { label: 'Humanos', sub: 'Criterio y excepciones' },
    body: 'Quién ejecuta el trabajo en esta capa — y qué papel cumple cada uno a medida que la capacidad se digitaliza.',
  },
];

export const functions: FunctionProfile[] = [
  {
    id: 'marketing',
    label: 'Marketing',
    purpose: 'Generar y convertir demanda',
    activities: [
      'Creación de contenido',
      'SEO',
      'Redes sociales',
      'Publicidad pagada',
      'Campañas de email',
      'Nutrición de leads',
      'Analítica',
    ],
    metrics: [
      'Costo por lead',
      'Leads calificados de marketing',
      'Tasa de conversión web',
      'Engagement de contenido',
      'Contribución al pipeline',
    ],
  },
  {
    id: 'sales',
    label: 'Ventas',
    purpose: 'Convertir demanda en ingresos',
    activities: [
      'Calificación de leads',
      'Prospección',
      'Descubrimiento',
      'Creación de propuestas',
      'Negociación',
      'Gestión de pipeline',
      'Pronósticos',
    ],
    metrics: [
      'Tasa de cierre',
      'Cobertura de pipeline',
      'Tamaño promedio de acuerdo',
      'Duración del ciclo de venta',
      'Precisión del pronóstico',
    ],
  },
  {
    id: 'service',
    label: 'Servicio al cliente',
    purpose: 'Entregar valor y retener clientes',
    activities: [
      'Onboarding de clientes',
      'Soporte',
      'Resolución de incidencias',
      'Gestión del conocimiento',
      'Renovaciones',
      'Upselling',
    ],
    metrics: [
      'CSAT',
      'Tiempo de primera respuesta',
      'Tiempo de resolución',
      'Retención',
      'Ingresos por expansión',
    ],
  },
  {
    id: 'finance',
    label: 'Finanzas',
    purpose: 'Gestionar caja y desempeño financiero',
    activities: [
      'Facturación',
      'Cobranza',
      'Cuentas por pagar',
      'Reportes financieros',
      'Pronósticos',
      'Presupuestos',
    ],
    metrics: ['Flujo de caja', 'DSO', 'Días de cierre', 'Variación presupuestal', 'Margen bruto'],
  },
  {
    id: 'hr',
    label: 'Recursos humanos',
    purpose: 'Construir capacidad organizacional',
    activities: [
      'Reclutamiento',
      'Onboarding',
      'Nómina',
      'Desempeño',
      'Aprendizaje',
      'Cumplimiento',
    ],
    metrics: [
      'Tiempo de contratación',
      'Retención',
      'Compromiso del empleado',
      'Tiempo hasta productividad',
    ],
  },
  {
    id: 'operations',
    label: 'Operaciones',
    purpose: 'Entregar productos y servicios con eficiencia',
    activities: [
      'Planificación de capacidad',
      'Compras',
      'Inventario',
      'Cumplimiento de pedidos',
      'Calidad',
      'Mejora de procesos',
    ],
    metrics: ['Tiempo de ciclo', 'Rendimiento', 'Costo por unidad', 'Puntuación de calidad'],
  },
];

export const evolutionStages: StageProfile[] = [
  {
    id: 'human',
    num: 1,
    title: 'Impulsado por personas',
    sub: 'Conocimiento tribal',
    capability: 'Personas',
    capabilityLocation: 'La capacidad vive en las personas — criterio, memoria, relaciones.',
    howWorkPerformed: 'El trabajo depende de quién está disponible y de lo que recuerda.',
    operationalChange: 'La consistencia varía por persona. Escalar significa contratar.',
  },
  {
    id: 'process',
    num: 2,
    title: 'Impulsado por procesos',
    sub: 'SOPs, repetible',
    capability: 'Documentos',
    capabilityLocation: 'La capacidad pasa a playbooks, listas de verificación y traspasos.',
    howWorkPerformed: 'Las personas siguen pasos documentados. Surge la repetibilidad.',
    operationalChange: 'La formación pasa de aprendizaje informal a documentación.',
  },
  {
    id: 'system',
    num: 3,
    title: 'Impulsado por sistemas',
    sub: 'CRM, ERP, datos',
    capability: 'Software',
    capabilityLocation: 'El trabajo se rastrea, mide y hace visible en sistemas.',
    howWorkPerformed: 'Las personas aún ejecutan la mayor parte del trabajo — los sistemas lo registran.',
    operationalChange: 'La información se digitaliza. Los reportes se vuelven posibles.',
  },
  {
    id: 'automation',
    num: 4,
    title: 'Impulsado por automatización',
    sub: 'Flujos de trabajo, reglas',
    capability: 'Canalizaciones',
    capabilityLocation: 'El trabajo repetible pasa a scripts e integraciones.',
    howWorkPerformed: 'Los humanos manejan excepciones; las canalizaciones el resto.',
    operationalChange: 'El rendimiento sube. Los casos límite se vuelven el cuello de botella.',
  },
  {
    id: 'agent',
    num: 5,
    title: 'Impulsado por agentes',
    sub: 'Trabajadores digitales',
    capability: 'Agentes',
    capabilityLocation: 'Los agentes ejecutan dentro de límites definidos.',
    howWorkPerformed: 'Los trabajadores digitales ejecutan; los humanos gobiernan el sistema.',
    operationalChange: 'La capacidad se digitaliza. El rol humano pasa a la supervisión.',
  },
];

const sales: Record<string, Intersection> = {
  human: {
    headline: 'El conocimiento vive en el vendedor.',
    operations: [
      'Pipeline mantenido manualmente',
      'Seguimientos dependen de la memoria',
      'Pronósticos dependen del criterio',
    ],
    metrics: ['Tasa de cierre', 'Volumen de actividad', 'Variación del pronóstico'],
  },
  process: {
    headline: 'El conocimiento vive en playbooks documentados.',
    operations: [
      'Marco de descubrimiento',
      'Proceso de propuestas',
      'Criterios de calificación',
    ],
    metrics: ['Tiempo de propuesta', 'Conversión por etapa', 'Consistencia del representante'],
  },
  system: {
    headline: 'El conocimiento vive en el CRM.',
    operations: [
      'Pipeline rastreado',
      'Actividades capturadas',
      'Reportes disponibles',
    ],
    metrics: ['Cobertura de pipeline', 'Precisión del pronóstico', 'Adopción del CRM'],
  },
  automation: {
    headline: 'Los flujos ejecutan trabajo repetitivo.',
    operations: [
      'Seguimientos automatizados',
      'Enrutamiento de leads automatizado',
      'Generación de propuestas automatizada',
    ],
    metrics: ['Tiempo de respuesta', 'Conversión de leads', 'Productividad del representante'],
  },
  agent: {
    headline: 'Trabajadores digitales ejecutan actividades de ventas.',
    operations: ['Agentes SDR', 'Agentes de investigación de prospectos', 'Agentes de agendamiento'],
    metrics: ['Reuniones agendadas', 'Costo por oportunidad', 'Pipeline por empleado'],
  },
};

const marketing: Record<string, Intersection> = {
  human: {
    headline: 'El criterio de campaña vive en el marketer.',
    operations: ['Mix de canales por intuición', 'Dirección creativa en reuniones', 'Decisiones de gasto ad hoc'],
    metrics: ['Reconocimiento de marca', 'Alcance de campaña', 'Volumen de leads'],
  },
  process: {
    headline: 'Los playbooks definen cómo corren las campañas.',
    operations: ['Calendario de contenido', 'Plantilla de brief de campaña', 'Lista de verificación de canales'],
    metrics: ['Consistencia de campaña', 'Tiempo de lanzamiento', 'Producción de contenido'],
  },
  system: {
    headline: 'El desempeño se rastrea en sistemas de marketing.',
    operations: ['Atribución en plataforma', 'Lead scoring en CRM', 'Reportes en dashboard'],
    metrics: ['Costo por lead', 'Volumen de MQL', 'ROI por canal'],
  },
  automation: {
    headline: 'Los flujos ejecutan campañas recurrentes.',
    operations: ['Secuencias de email automatizadas', 'Flujos de nutrición de leads', 'Reglas de presupuesto publicitario'],
    metrics: ['Conversión de nutrición', 'Engagement de email', 'Eficiencia de gasto'],
  },
  agent: {
    headline: 'Los agentes redactan y optimizan campañas.',
    operations: ['Agentes de generación de contenido', 'Agentes de optimización SEO', 'Agentes de prueba de copy publicitario'],
    metrics: ['Velocidad de contenido', 'Costo por activo', 'Contribución al pipeline'],
  },
};

const service: Record<string, Intersection> = {
  human: {
    headline: 'El conocimiento de resolución vive en representantes con experiencia.',
    operations: ['Triaje por criterio', 'Escalación por memoria', 'Respuestas varían por representante'],
    metrics: ['CSAT', 'Resolución en primer contacto', 'Tiempo de atención'],
  },
  process: {
    headline: 'Los playbooks de soporte estandarizan respuestas.',
    operations: ['Scripts de primer nivel', 'Criterios de escalación', 'Lista de onboarding'],
    metrics: ['Consistencia de resolución', 'Tiempo de onboarding', 'Tasa de escalación'],
  },
  system: {
    headline: 'Tickets e historial viven en un helpdesk.',
    operations: ['Seguimiento de casos', 'Base de conocimiento vinculada', 'Monitoreo de SLA'],
    metrics: ['Tiempo de primera respuesta', 'Tiempo de resolución', 'Backlog de tickets'],
  },
  automation: {
    headline: 'Los flujos enrutan y responden incidencias comunes.',
    operations: ['Reglas de auto-triaje', 'Notificaciones de estado', 'Recordatorios de renovación'],
    metrics: ['Tasa de desvío', 'Cumplimiento de SLA', 'Productividad del agente'],
  },
  agent: {
    headline: 'Los agentes manejan soporte de primer nivel y onboarding.',
    operations: ['Agentes de FAQ', 'Agentes de onboarding', 'Agentes de outreach de renovación'],
    metrics: ['Tasa de desvío', 'Retención', 'Costo por ticket'],
  },
};

const finance: Record<string, Intersection> = {
  human: {
    headline: 'El proceso de cierre vive en la cabeza del controller.',
    operations: ['Hojas de cálculo para el cierre', 'Aprobaciones por email', 'Variaciones explicadas manualmente'],
    metrics: ['Días de cierre', 'Precisión del cierre', 'Hallazgos de auditoría'],
  },
  process: {
    headline: 'Las listas de cierre definen el fin de mes.',
    operations: ['Pasos de conciliación', 'Matriz de aprobación', 'Calendario de reportes'],
    metrics: ['Consistencia del cierre', 'Tiempo de conciliación', 'Seguimiento de variaciones'],
  },
  system: {
    headline: 'Transacciones y reportes viven en el ERP.',
    operations: ['Libro mayor en sistema', 'CxP/CxC rastreadas', 'Reportes estándar generados'],
    metrics: ['DSO', 'Días de cierre', 'Variación presupuestal'],
  },
  automation: {
    headline: 'Los flujos automatizan conciliaciones y aprobaciones.',
    operations: ['Reglas de matching de facturas', 'Enrutamiento de aprobaciones', 'Distribución de reportes'],
    metrics: ['Tiempo de procesamiento', 'Tasa de excepciones', 'Velocidad de aplicación de pagos'],
  },
  agent: {
    headline: 'Los agentes asisten cierre, cobranza y pronósticos.',
    operations: ['Agentes de conciliación', 'Agentes de seguimiento de cobranza', 'Agentes de borrador de pronóstico'],
    metrics: ['Días de cierre', 'DSO', 'Precisión del pronóstico'],
  },
};

const hr: Record<string, Intersection> = {
  human: {
    headline: 'Las respuestas de políticas viven con generalistas de RR. HH.',
    operations: ['Contratación por relación', 'Onboarding informal', 'Cumplimiento por memoria'],
    metrics: ['Tiempo de contratación', 'Satisfacción del nuevo ingreso', 'Incidentes de cumplimiento'],
  },
  process: {
    headline: 'Los playbooks de RR. HH. estandarizan operaciones de personas.',
    operations: ['Guías de entrevista', 'Paquete de onboarding', 'Ciclo de evaluación de desempeño'],
    metrics: ['Tiempo de contratación', 'Completitud de onboarding', 'Adherencia al ciclo de evaluación'],
  },
  system: {
    headline: 'Los datos de empleados viven en el HRIS.',
    operations: ['Nómina en sistema', 'PTO rastreado', 'Organigrama mantenido'],
    metrics: ['Tiempo de contratación', 'Retención', 'Precisión de nómina'],
  },
  automation: {
    headline: 'Los flujos automatizan onboarding y aprobaciones.',
    operations: ['Enrutamiento de cartas de oferta', 'Flujos de inscripción a beneficios', 'Lista de offboarding'],
    metrics: ['Tiempo hasta productividad', 'Errores de onboarding', 'Compromiso del empleado'],
  },
  agent: {
    headline: 'Los agentes responden preguntas de políticas y apoyan contratación.',
    operations: ['Agentes de Q&A de políticas', 'Agentes de screening', 'Agentes guía de onboarding'],
    metrics: ['Tiempo de contratación', 'Compromiso del empleado', 'Volumen de tickets de RR. HH.'],
  },
};

const operations: Record<string, Intersection> = {
  human: {
    headline: 'El conocimiento del proceso vive con líderes de piso.',
    operations: ['Programación por experiencia', 'Calidad por inspección', 'Llamadas a proveedores ad hoc'],
    metrics: ['Tiempo de ciclo', 'Tasa de defectos', 'Entrega a tiempo'],
  },
  process: {
    headline: 'Los SOPs definen cómo fluye el trabajo.',
    operations: ['Instrucciones de trabajo estándar', 'Lista de inspección', 'Registro de traspaso de turno'],
    metrics: ['Rendimiento', 'Tasa de defectos', 'Adherencia al proceso'],
  },
  system: {
    headline: 'Inventario y pedidos rastreados en sistemas.',
    operations: ['Seguimiento WMS/ERP', 'Órdenes de compra digitales', 'Datos de calidad capturados'],
    metrics: ['Precisión de inventario', 'Tiempo de ciclo', 'Costo por unidad'],
  },
  automation: {
    headline: 'Los flujos disparan reabastecimiento y enrutamiento.',
    operations: ['Reglas de reorden', 'Optimización de ruta de picking', 'Enrutamiento de alertas de calidad'],
    metrics: ['Quiebres de stock', 'Rendimiento', 'Mano de obra por unidad'],
  },
  agent: {
    headline: 'Los agentes monitorean capacidad y coordinan proveedores.',
    operations: ['Agentes de pronóstico de demanda', 'Agentes de seguimiento a proveedores', 'Agentes de triaje de calidad'],
    metrics: ['Tiempo de ciclo', 'Costo por unidad', 'Puntuación de calidad'],
  },
};

export const intersections: Record<string, Record<string, Intersection>> = {
  marketing,
  sales,
  service,
  finance,
  hr,
  operations,
};

export const frameworkDataEs: FrameworkData = {
  structureLayers,
  functions,
  evolutionStages,
  intersections,
};
