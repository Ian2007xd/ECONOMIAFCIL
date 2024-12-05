const buttonInfo = {
    'MF': {
      title: 'Mercados Financieros',
      description: 'Definición:<br>Espacios donde se intercambian activos financieros, incluyendo acciones, bonos, divisas y derivados. Pueden ser físicos (bolsas de valores) o virtuales (plataformas electrónicas). <br> Desarrollo Ampliado:<br>Los mercados financieros facilitan el flujo de capital entre ahorradores e inversionistas. Dividen riesgos, asignan recursos y permiten a los participantes comprar y vender activos en tiempo real. Hay distintos mercados: el de valores, donde se negocian acciones y bonos; el de divisas, que regula el tipo de cambio; y el de derivados, usados para gestionar riesgos. <br>Implementación: <hr>Creación de aplicaciones que permitan a usuarios minoristas operar en mercados bursátiles.<hr>Plataformas educativas que enseñen a nuevos inversores cómo funcionan los mercados financieros.<hr>',
    },
    'IF': {
      title: 'Instrumentos Financieros',
      description: 'Definición:<br>Activos que representan derechos financieros, como acciones (propiedad), bonos (deuda) y derivados (contratos basados en otros activos).<br>Desarrollo Ampliado:<br>Cada instrumento tiene características específicas que lo hacen adecuado para diferentes objetivos financieros. Las acciones permiten participar en los beneficios de las empresas, mientras que los bonos ofrecen una renta fija. Los derivados se utilizan para especular o protegerse contra riesgos.<br>Implementación:<hr>Desarrollo de simuladores para invertir en instrumentos financieros y aprender sin riesgos.<hr>Incorporación de nuevos instrumentos financieros sostenibles, como los bonos verdes, en carteras de inversión.<hr>',
    },
    'GFC': {
      title: 'Gestión Financiera Corporativa',
      description: 'Definición:<br>Disciplina que aborda cómo las empresas toman decisiones sobre financiamiento, inversión y manejo de recursos.<br>Desarrollo Ampliado:<br>Incluye estrategias para maximizar el valor de la empresa mediante análisis de rentabilidad, costo de capital y riesgos. Esto implica decidir si financiar proyectos con deuda o capital propio y cómo gestionar eficientemente los recursos disponibles para garantizar la sostenibilidad.<br>Implementación:<hr>Uso de software de gestión financiera para optimizar presupuestos y evaluar proyectos de inversión.<hr>Asesoría en diseño de estructuras de financiamiento sostenibles para startups.<hr>',
    },
    'FP': {
      title: 'Finanzas Personales',
      description: 'Definición:<br>Gestión individual de ingresos, gastos, ahorros, inversiones y deudas para lograr metas financieras.<br>Desarrollo Ampliado:<br>La planificación financiera personal incluye presupuestar, invertir en activos adecuados, gestionar deudas y protegerse con seguros. El objetivo es alcanzar la independencia financiera y protegerse contra imprevistos.<br>Implementación:<hr>Creación de aplicaciones de seguimiento de gastos y metas de ahorro personal.<hr>Cursos de educación financiera enfocados en personas de bajos ingresos.<hr>',
    },
    'TF': {
      title: 'Teoría Financiera',
      description: 'Definición:<br>Conjunto de principios y modelos que explican la valoración de activos, la asignación de recursos y el comportamiento de los mercados.<br>Desarrollo Ampliado:<br>Incluye modelos como el CAPM, que calcula el retorno esperado de una inversión, y la teoría de carteras de Markowitz, que optimiza la diversificación. También aborda cómo las expectativas de los inversionistas afectan los precios de los activos y cómo se incorporan las noticias en los mercados (eficiencia de mercado).<br>Implementación:<hr>Programas académicos o cursos en línea sobre teorías de valoración financiera.<hr>Herramientas digitales que apliquen estos modelos para usuarios en tiempo real.<hr>',
    },
    'RyR': {
      title: 'Riesgo y Retorno',
      description: 'Definición:<br>Análisis de la relación entre el riesgo asumido y la recompensa esperada en una inversión.<br>Desarrollo Ampliado:<br>El riesgo financiero se mide en términos de incertidumbre sobre los resultados futuros. Una inversión de alto riesgo puede ofrecer altos retornos, pero también la posibilidad de pérdidas significativas. La medición del riesgo incluye métodos como el VaR (Valor en Riesgo) y la beta de una acción.<br>Implementación:<hr>Software de análisis de portafolios que mida el riesgo ajustado al retorno.<hr>Capacitación en gestión de riesgos financieros para pymes.<hr>',
    },
    'BySF': {
      title: 'Banca y Sistema Financiero',
      description: 'Definición:<br>Estudio de instituciones financieras como bancos, fondos de inversión y aseguradoras, que conectan a los prestatarios con los ahorradores.<br>Desarrollo Ampliado:<br>Los bancos comerciales administran depósitos y préstamos, mientras que los bancos centrales controlan la política monetaria. En el sistema moderno, las plataformas de FinTech han democratizado el acceso a servicios financieros, aumentando la competencia.<hr>Implementación:<br>Implementar plataformas de microcréditos para poblaciones subatendidas.<hr>Crear soluciones de banca digital para optimizar los servicios tradicionales.<hr>',
    },
    'ECyFC': {
      title: 'Economía Conductual y Finanzas Conductuales',
      description: 'Definición:<br>Estudio de cómo factores psicológicos influyen en las decisiones económicas y financieras.<br>Desarrollo Ampliado:<br>Contrario a la economía tradicional, que supone decisiones racionales, este campo investiga sesgos como el efecto manada, el sesgo de exceso de confianza y el anclaje. Estos comportamientos irracionales tienen implicaciones importantes en la inversión y el diseño de políticas públicas.<br>Implementación:<hr>Desarrollo de herramientas educativas para ayudar a los usuarios a reconocer sesgos en sus decisiones financieras.<hr>Incorporación de elementos de finanzas conductuales en plataformas de asesoría automatizada.<hr>',
    },
    'EI': {
      title: 'Estrategias de Inversión',
      description: 'Definición:<br>Métodos para seleccionar activos y maximizar retornos mientras se gestionan riesgos.<br>Desarrollo Ampliado:<br>Las estrategias incluyen análisis fundamental (evaluar valor intrínseco), análisis técnico (estudiar gráficos y patrones), y estrategias pasivas como invertir en índices. Cada estrategia se adapta a objetivos y tolerancia al riesgo.<br>Implementación:<hr>Crear plataformas que ayuden a inversores a elegir estrategias basadas en sus perfiles de riesgo.<hr>Capacitar en estrategias sostenibles y criterios ESG.<hr>',
    },
    'EIyF': {
      title: 'Economía Internacional y Financiera',
      description: 'Definición:<br>Estudio de cómo interactúan las economías globales a través del comercio, inversión y finanzas.<br>Desarrollo Ampliado:<br>Incluye análisis de las tasas de cambio, flujos de capital y acuerdos comerciales. La globalización financiera ha aumentado las interconexiones entre mercados, lo que puede generar crisis sistémicas si no se gestionan adecuadamente.<br>Implementación:<hr>Aplicaciones de monitoreo de divisas en tiempo real para empresas exportadoras.<hr>Estudios sobre políticas cambiarias para optimizar el comercio internacional.<hr>',
    },
    'IyTF': {
      title: 'Innovación y Tecnología en Finanzas',
      description: 'Definición:<br>Incorporación de tecnologías avanzadas, como blockchain, inteligencia artificial y FinTech, para mejorar los servicios financieros.<br>Desarrollo Ampliado:<br>Las tecnologías emergentes están redefiniendo las finanzas. Blockchain permite registrar transacciones de manera transparente y segura, lo que respalda criptomonedas y contratos inteligentes. La inteligencia artificial optimiza la toma de decisiones al analizar grandes volúmenes de datos, mientras que las FinTech democratizan el acceso a servicios financieros como préstamos, pagos y asesoramiento. Sin embargo, también surgen desafíos relacionados con la privacidad, la ciberseguridad y la regulación.<br>Implementación:<hr>Desarrollar plataformas basadas en blockchain para el comercio seguro de activos digitales.<hr>Crear aplicaciones de asesoría financiera automatizada (robo-advisors) con IA<hr>.',
    },
    'ISyEF': {
      title: 'Impacto Social y Ético de las Finanzas',
      description: 'Definición:<br>Análisis de cómo las decisiones financieras afectan a la sociedad, el medio ambiente y la ética empresarial.<br>Desarrollo Ampliado:<br>El uso de las finanzas debe equilibrar objetivos económicos con impacto social. Las inversiones responsables (criterios ESG) promueven el desarrollo sostenible al priorizar proyectos ambientalmente responsables y éticamente sólidos. Además, iniciativas como la inclusión financiera buscan integrar a sectores marginados en el sistema económico. La ética financiera también abarca la transparencia en los mercados y la lucha contra prácticas como el lavado de dinero o la evasión fiscal.<br>Implementación:<hr>Diseñar programas de educación financiera en comunidades vulnerables.<hr>Crear índices que clasifiquen empresas según su impacto social y ambiental.<hr>',
    },
    'HEF': {
      title: 'Historia de la Economía Financiera',
      description: 'Definición:<br>Estudio de la evolución de los sistemas financieros y su influencia en la economía global.<br>Desarrollo Ampliado:<br>Desde los primeros sistemas de trueque hasta la creación de criptomonedas, la economía financiera ha evolucionado junto con la sociedad. La aparición de instituciones como bancos centrales y bolsas de valores marcó hitos importantes. Las crisis económicas, como la Gran Depresión y la crisis de 2008, destacan la importancia de regulaciones y políticas preventivas. Analizar la historia financiera permite identificar patrones cíclicos y evitar errores pasados.<br>Implementación:<hr>Desarrollar módulos educativos interactivos sobre la historia financiera global.<hr>Crear reportes comparativos entre crisis históricas y actuales para guiar decisiones de política económica.<hr>',
    },
    'MF2': {
      title: 'Macroeconomía Financiera',
      description: 'Definición:<br>Relación entre las variables económicas globales y el comportamiento de los mercados financieros.<br>Desarrollo Ampliado:<br>La macroeconomía financiera estudia cómo factores como inflación, tasas de interés y deuda pública influyen en los mercados y viceversa. Por ejemplo, un aumento en las tasas de interés puede atraer inversiones en bonos, pero también ralentizar el crecimiento económico. Este subtema también examina fenómenos como la globalización financiera y la transmisión de crisis entre economías interconectadas.<br>Implementación:<hr>Herramientas analíticas que correlacionen indicadores macroeconómicos con tendencias de inversión.<hr>Desarrollo de modelos predictivos para anticipar crisis económicas.<hr>',
    },
    'FP2': {
      title: 'Finanzas Públicas',
      description: 'Definición:<br>Gestión de ingresos, gastos y deudas por parte de los gobiernos para mantener la estabilidad económica y financiar servicios públicos.<br>Desarrollo Ampliado:<br>Las finanzas públicas equilibran la recaudación fiscal con el gasto público. Los gobiernos emiten deuda para financiar proyectos de infraestructura y programas sociales. La política fiscal juega un rol clave en la redistribución de la riqueza y en la estabilización económica. Sin embargo, un endeudamiento excesivo puede generar crisis fiscales y de confianza en los mercados.<br>Implementación:<hr>Diseño de sistemas de monitoreo de presupuestos gubernamentales en tiempo real.<hr>Estudios sobre políticas fiscales óptimas para promover el desarrollo sostenible.<hr>',
    },
    'GPyD': {
      title: 'Gestión de Portafolios y Diversificación',
      description: 'Definición:<br>Construcción y administración de carteras de inversión para equilibrar riesgos y maximizar retornos.<br>Desarrollo Ampliado:<br>La diversificación consiste en distribuir inversiones entre activos con diferentes niveles de riesgo y rentabilidad. Esto reduce la exposición a pérdidas significativas. Se utilizan modelos como la teoría de portafolios de Markowitz para optimizar la asignación de recursos. Además, los gestores deben estar atentos a las condiciones del mercado para ajustar las estrategias.<br>Implementación:<hr>Crear plataformas automatizadas que recomienden carteras diversificadas basadas en perfiles de riesgo.<hr>Capacitar a pequeños inversionistas sobre técnicas de diversificación.<hr>',
    },
    'EF': {
      title: ' Econometría Financiera',
      description: 'Definición:<br>Uso de herramientas estadísticas para analizar datos financieros y predecir tendencias.<br>Desarrollo Ampliado:<br>La econometría financiera aplica modelos matemáticos para prever el comportamiento de los mercados, analizar la volatilidad y medir el impacto de políticas económicas. Por ejemplo, modelos de series temporales ayudan a anticipar movimientos en el precio de acciones o divisas. Este campo es esencial para tomar decisiones fundamentadas basadas en evidencia cuantitativa.<br>Implementación:<hr>Desarrollo de plataformas que utilicen econometría para predecir precios de activos.<hr>Cursos avanzados para profesionales sobre modelos econométricos aplicados.<hr>',
    },
    'EFyAF': {
      title: 'Educación Financiera y Alfabetización Financiera',
      description: 'Definición:<br>Iniciativas para enseñar conceptos básicos y avanzados de finanzas a diferentes segmentos de la población.<br>Desarrollo Ampliado:<br>La falta de educación financiera limita la capacidad de las personas para tomar decisiones informadas, lo que puede llevar a sobreendeudamiento o mal manejo de recursos. Este subtema incluye temas como la planificación del ahorro, el manejo del crédito y la inversión básica. También aborda la necesidad de adaptar los contenidos a diferentes niveles de comprensión, desde niños hasta adultos mayores.<br>Implementación:<hr>Diseñar aplicaciones móviles para enseñar conceptos básicos de finanzas.<hr>Crear campañas masivas de educación financiera enfocadas en poblaciones vulnerables.<hr>',
    }
  };
  
  function sendInfo(theme) {
    const info = buttonInfo[theme];
  
    if (info) {
      const outputDiv = document.getElementById('info-output');
      outputDiv.innerHTML = `
        <h3>${info.title}</h3>
        <p> ${info.description}</p>
      `;
      console.log('Información enviada:', info);
    } else {
      console.log('No se encontró información para el tema seleccionado.');
    }
  }
  