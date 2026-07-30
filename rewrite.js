const fs = require("fs");
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nicolás Ortiz Nuñez — Desarrollador de Software</title>
  
  <meta name="description" content="Construyo mientras aprendo. Desarrollador de software enfocado en Backend, IA y crear productos digitales que aportan valor." />
  <meta name="keywords" content="Nicolás Ortiz, Desarrollador Backend, FastAPI, React, Inteligencia Artificial, Automatización, Portafolio" />
  <meta name="author" content="Nicolás Ortiz Nuñez" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Nicolás Ortiz Nuñez — Desarrollador de Software" />
  <meta property="og:description" content="Construyo mientras aprendo. Desarrollador de software enfocado en Backend, IA y crear productos digitales." />
  <meta property="og:locale" content="es_CO" />

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nicolás Ortiz Nuñez — Desarrollador de Software" />
  <meta name="twitter:description" content="Construyo mientras aprendo. Desarrollador de software enfocado en Backend, IA y crear productos digitales." />

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nicolás Ortiz Nuñez",
    "jobTitle": "Desarrollador de Software",
    "description": "Desarrollador enfocado en Backend, Inteligencia Artificial y Automatización.",
    "url": "https://github.com/NicolasOrtiz88",
    "sameAs": ["https://github.com/NicolasOrtiz88"],
    "knowsAbout": ["Backend", "FastAPI", "React", "IA", "Automatización", "Desarrollo Web"]
  }
  </script>

  <link rel="stylesheet" href="css/styles.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>N</text></svg>" />
</head>
<body>
  
  <div class="cursor-glow"></div>

  <nav class="navbar" role="navigation" aria-label="Navegación principal">
    <div class="nav-brand">N.</div>
    <div class="nav-links">
      <a href="#proyectos">Proyectos</a>
      <a href="#proceso">Mi Proceso</a>
      <a href="#historia">Historia</a>
      <a href="#contacto">Hablemos</a>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero-redesign" id="hero">
    <div class="hero-bg-collage"></div>
    <div class="container hero-redesign-container">
      
      <div class="hero-redesign-content">
        <h1 class="hero-redesign-title">Construyo mientras aprendo.</h1>
        <p class="hero-redesign-subtitle">
          Soy Nicolás Ortiz. Me apasiona desarrollar soluciones digitales, explorar nuevas tecnologías y convertir ideas en productos que aporten valor.
        </p>
        
        <div class="hero-dashboard">
          <div class="dash-item"><span class="icon">??</span> Colombia</div>
          <div class="dash-item"><span class="icon">??</span> Disponible para oportunidades</div>
          <div class="dash-item"><span class="icon">??</span> Backend · FastAPI · React</div>
          <div class="dash-item"><span class="icon">??</span> Explorando IA y Automatización</div>
        </div>

        <p class="hero-looking-for">
          Actualmente busco oportunidades donde pueda seguir creciendo como desarrollador, participar en proyectos reales y aportar soluciones utilizando tecnologías modernas.
        </p>
      </div>

      <div class="hero-redesign-visual">
        <div class="hero-photo-placeholder" style="overflow: hidden; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent;">
          <img src="assets/profile.jpg" alt="Nicolás Ortiz Nuñez" style="width: 100%; height: 100%; object-fit: cover; object-position: center 15%; border-radius: 1rem;" />
        </div>
      </div>

    </div>
  </section>

  <!-- PROYECTOS SECTION -->
  <section class="section projects-section" id="proyectos">
    <div class="container">
      <h2 class="section-title">Lo que he construido</h2>
      
      <div class="projects-grid">
        
        <!-- Juventudes -->
        <article class="project-card project-juventudes">
          <div class="project-content">
            <span class="project-badge">En Desarrollo</span>
            <h3 class="project-title">Plataforma Municipal de Juventudes</h3>
            <p class="project-summary">Construyendo impacto social real con una arquitectura backend limpia y segura para la Alcaldía de Mosquera.</p>
            
            <div class="project-details">
              <div class="project-col">
                <h4>Mi participación:</h4>
                <ul class="check-list">
                  <li>? Diseño y arquitectura Backend</li>
                  <li>? Desarrollo de APIs con FastAPI</li>
                  <li>? Gestión de base de datos relacional</li>
                  <li>? Autenticación y seguridad</li>
                </ul>
              </div>
              <div class="project-col">
                <h4>Lo que aprendí:</h4>
                <ul class="check-list">
                  <li>? Creación de APIs escalables</li>
                  <li>? Modelado de datos complejos</li>
                  <li>? Mejores prácticas en seguridad backend</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- Wonder Flowers -->
        <article class="project-card project-wonder">
          <div class="project-content">
            <span class="project-badge">E-commerce</span>
            <h3 class="project-title">Wonder Flowers</h3>
            <p class="project-summary">Experiencia digital elegante para una floristería, combinando desarrollo, diseño y experiencia de usuario.</p>
            
            <div class="project-details">
              <div class="project-col">
                <h4>Mi participación:</h4>
                <ul class="check-list">
                  <li>? Diseño UI/UX enfocado en conversión</li>
                  <li>? Desarrollo Frontend</li>
                  <li>? Integración de chatbot automatizado</li>
                  <li>? Conexión con plataforma Shopify</li>
                </ul>
              </div>
              <div class="project-col">
                <h4>Lo que aprendí:</h4>
                <ul class="check-list">
                  <li>? Principios de diseño centrado en el usuario</li>
                  <li>? Automatización de atención al cliente</li>
                  <li>? Ecosistema Shopify</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- Artesanias -->
        <article class="project-card project-artesanias">
          <div class="project-content">
            <span class="project-badge">Full-Stack</span>
            <h3 class="project-title">Artesanías & CO</h3>
            <p class="project-summary">El proyecto donde todo empezó. Una tienda online conectando talento local con un mercado digital.</p>
            
            <div class="project-details">
              <div class="project-col">
                <h4>Mi participación:</h4>
                <ul class="check-list">
                  <li>? Desarrollo Full-Stack</li>
                  <li>? Gestión de inventario en base de datos</li>
                  <li>? Interfaz de usuario</li>
                </ul>
              </div>
              <div class="project-col">
                <h4>Lo que aprendí:</h4>
                <ul class="check-list">
                  <li>? El ciclo completo de desarrollo web</li>
                  <li>? Fundamentos de bases de datos</li>
                  <li>? Trabajo en equipo y metodologías ágiles</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- CÓMO TRABAJO & PRINCIPIOS -->
  <section class="section philosophy-section" id="filosofia">
    <div class="container">
      <h2 class="section-title">Mi forma de trabajar</h2>
      
      <div class="philosophy-grid">
        <div class="phil-card">
          <h3>Pienso antes de programar</h3>
          <p>Me gusta entender profundamente el problema, el contexto y al usuario antes de empezar a escribir la primera línea de código.</p>
        </div>
        <div class="phil-card">
          <h3>Aprendo rápido</h3>
          <p>Disfruto explorar herramientas nuevas y aplicarlas en proyectos reales. La tecnología cambia, la capacidad de adaptarse no.</p>
        </div>
        <div class="phil-card">
          <h3>Me importa el usuario</h3>
          <p>No solo me interesa que una aplicación funcione a nivel técnico; también debe ser clara, intuitiva y útil para quien la utiliza.</p>
        </div>
        <div class="phil-card">
          <h3>Soy honesto con mi experiencia</h3>
          <p>Prefiero explicar exactamente cuál fue mi participación en cada proyecto antes que exagerar mis conocimientos.</p>
        </div>
      </div>

      <h3 class="section-subtitle mt-12">Mis principios al desarrollar software</h3>
      <ul class="principles-list">
        <li><strong>Entender antes de construir.</strong> Nunca empiezo a ciegas.</li>
        <li><strong>La simplicidad suele ser la mejor solución.</strong> Menos complejidad, menos errores.</li>
        <li><strong>El usuario siempre importa.</strong> El código existe para servir a las personas.</li>
        <li><strong>Prefiero aprender algo nuevo antes que repetir lo mismo.</strong> El crecimiento está en la incomodidad.</li>
        <li><strong>La calidad vale más que la cantidad.</strong> Hacer una cosa muy bien es mejor que tres mediocres.</li>
      </ul>
    </div>
  </section>

  <!-- PROCESO INTERACTIVO -->
  <section class="section process-section" id="proceso">
    <div class="container">
      <h2 class="section-title">Cómo construyo un proyecto</h2>
      <div class="process-flow">
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Idea</span>
          <div class="step-detail">Comprender el objetivo central.</div>
        </div>
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Planeación</span>
          <div class="step-detail">Antes de escribir código intento entender el problema, los usuarios y las necesidades del proyecto.</div>
        </div>
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Diseño</span>
          <div class="step-detail">Estructurar la arquitectura y la experiencia de usuario.</div>
        </div>
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Desarrollo</span>
          <div class="step-detail">Escribir código limpio, modular y mantenible.</div>
        </div>
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Pruebas</span>
          <div class="step-detail">Garantizar que todo funcione bajo diferentes escenarios.</div>
        </div>
        <div class="process-step">
          <div class="step-icon">??</div>
          <span class="step-label">Publicación</span>
          <div class="step-detail">Desplegar a producción y monitorear el resultado.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- HISTORIA Y LÍNEA DE TIEMPO -->
  <section class="section history-section" id="historia">
    <div class="container">
      <h2 class="section-title">Mi historia</h2>
      <p class="history-text">
        Empecé estudiando desarrollo en el SENA porque me gustaba entender cómo funcionaban las cosas por dentro. 
        Después descubrí que lo que realmente disfruto es construir soluciones. 
        Hoy sigo aprendiendo todos los días mientras desarrollo proyectos reales relacionados con backend, inteligencia artificial y automatización.
      </p>

      <div class="timeline-v2">
        <div class="time-item">
          <div class="time-dot"></div>
          <h4>SENA</h4>
          <p>Aquí descubrí que quería dedicarme al desarrollo de software.</p>
        </div>
        <div class="time-item">
          <div class="time-dot"></div>
          <h4>NT Colombia</h4>
          <p>Aprendí cómo funciona una empresa por dentro y entendí que el software debe resolver necesidades reales.</p>
        </div>
        <div class="time-item">
          <div class="time-dot"></div>
          <h4>Artesanías & CO</h4>
          <p>La primera experiencia full-stack end-to-end.</p>
        </div>
        <div class="time-item">
          <div class="time-dot"></div>
          <h4>Wonder Flowers</h4>
          <p>Mi primer proyecto donde combiné desarrollo, diseño y experiencia de usuario comercial.</p>
        </div>
        <div class="time-item">
          <div class="time-dot"></div>
          <h4>Plataforma Juventudes</h4>
          <p>Construyendo impacto social real con arquitectura backend moderna (FastAPI).</p>
        </div>
        <div class="time-item">
          <div class="time-dot current"></div>
          <h4>Hoy</h4>
          <p>Preparado para el siguiente gran reto.</p>
        </div>
      </div>

      <div class="fun-fact">
        <strong>?? Dato curioso:</strong> La primera vez que hice una API rompí todo el proyecto. Desde ese día entendí la importancia vital de planear y estructurar la arquitectura antes de programar.
      </div>

    </div>
  </section>

  <!-- APRENDIZAJES, VALORES E INTERESES -->
  <section class="section personal-section" id="personal">
    <div class="container personal-grid">
      
      <div class="personal-col">
        <h3>Lo que aprendí este año</h3>
        <p class="diary-text">
          Este año confirmé que escribir más código no significa escribir mejor código. Empecé a valorar profundamente la arquitectura, la organización de los proyectos y la importancia de construir pensando en las personas que usarán el producto.
        </p>
        <p class="diary-text mt-4">
          Descubrí el poder de FastAPI para el backend, aprendí mejores prácticas de estructuración e inicié mi exploración en Inteligencia Artificial y automatización.
        </p>
      </div>

      <div class="personal-col">
        <h3>Mis valores</h3>
        <ul class="values-list">
          <li><strong>Honestidad:</strong> Conmigo y con mi equipo.</li>
          <li><strong>Curiosidad:</strong> El motor del desarrollador.</li>
          <li><strong>Aprendizaje continuo:</strong> Nunca dejar de ser un estudiante de la tecnología.</li>
          <li><strong>Responsabilidad:</strong> Asumir mis errores y mis éxitos.</li>
          <li><strong>Colaboración:</strong> El mejor código se hace en equipo.</li>
        </ul>
      </div>

      <div class="personal-col">
        <h3>Cuando no estoy programando...</h3>
        <ul class="interests-list">
          <li>?? <strong>Escucho:</strong> Rock, Hip-Hop y Reggaetón clásico.</li>
          <li>? <strong>Me gusta:</strong> El deporte y mantener la mente despejada.</li>
          <li>?? <strong>Siempre aprendo:</strong> Sobre IA, automatización y arquitectura de software.</li>
          <li>?? <strong>Me interesa:</strong> Conocer personas, crear proyectos y buscar nuevos problemas para resolver.</li>
        </ul>

        <h4 class="mt-6">?? Actualmente leyendo</h4>
        <ul class="interests-list">
          <li>Clean Architecture</li>
          <li>Documentación oficial de FastAPI</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- VISION FUTURO -->
  <section class="section future-section">
    <div class="container text-center">
      <h2 class="section-title">Lo próximo que quiero construir</h2>
      <div class="future-tags">
        <span class="ftag">Plataformas impulsadas por IA</span>
        <span class="ftag">Automatización de procesos</span>
        <span class="ftag">Productos digitales con impacto social</span>
        <span class="ftag">Arquitecturas backend escalables</span>
        <span class="ftag">Experiencias web modernas</span>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer-memorable" id="contacto">
    <div class="container">
      <div class="footer-msg">
        <h2>Gracias por llegar hasta aquí.</h2>
        <p>Si algo de lo que viste conectó contigo, me encantaría conversar. Ya sea para un proyecto, una oportunidad profesional o simplemente para intercambiar ideas sobre tecnología.</p>
      </div>
      
      <div class="footer-actions">
        <a href="mailto:nicolasorti88@gmail.com" class="btn btn-primary">Hablemos por Email</a>
        <div class="social-links">
          <a href="https://github.com/NicolasOrtiz88" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <p class="copyright">Diseñado y construido por Nicolás Ortiz Nuñez.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>`;
fs.writeFileSync("index.html", html);
console.log("Written index.html successfully.");

