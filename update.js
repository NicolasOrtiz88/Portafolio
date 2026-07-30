const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// --- 1. Replace Journey Timeline ---
const journeyStartStr = '<div class="timeline animate-on-scroll" id="timeline">';
const journeyStart = content.indexOf(journeyStartStr);
const journeyEnd = content.indexOf('</section>', journeyStart);
const journeySectionContent = content.substring(journeyStart, journeyEnd);

const newJourney = `<div class="timeline animate-on-scroll" id="timeline">
        <div class="timeline-line"></div>

        <!-- Educación -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node edu">🎓</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Tecnólogo en Análisis y Desarrollo de Software</h3>
                <span class="timeline-place">SENA</span>
              </div>
              <span class="timeline-period">[AGREGAR PERÍODO]</span>
            </div>
            <p class="timeline-desc">Formación integral en desarrollo de software que abarca desde la programación y bases de datos hasta el análisis de requerimientos y metodologías de desarrollo.</p>
            <div class="timeline-label">Áreas de formación</div>
            <div class="timeline-tags">
              <span class="tag tag-brand">Programación</span>
              <span class="tag tag-brand">Bases de datos</span>
              <span class="tag tag-brand">Desarrollo web</span>
              <span class="tag tag-brand">Análisis de requerimientos</span>
              <span class="tag tag-brand">Diseño de soluciones</span>
              <span class="tag tag-brand">Arquitectura de software</span>
              <span class="tag tag-brand">Frontend &amp; Backend</span>
              <span class="tag tag-brand">APIs</span>
              <span class="tag tag-brand">Seguridad</span>
              <span class="tag tag-brand">Pruebas de software</span>
              <span class="tag tag-brand">Control de versiones</span>
              <span class="tag tag-brand">Metodologías de desarrollo</span>
            </div>
          </div>
        </div>

        <!-- Experiencia laboral -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node work">💼</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Apoyo operativo y administrativo</h3>
                <span class="timeline-place">Nacional de Trenzados S.A. / NT Colombia</span>
              </div>
              <span class="timeline-period">[AGREGAR PERÍODO]</span>
            </div>
            <p class="timeline-desc">Experiencia en actividades de apoyo operativo y administrativo dentro de una empresa de manufactura, que me permitió entender que la tecnología no existe aislada — el software debe resolver problemas reales de personas y organizaciones.</p>

            <div class="timeline-label">Actividades principales</div>
            <ul class="timeline-activities">
              <li>Manejo de inventarios</li>
              <li>Organización de registros</li>
              <li>Apoyo en SST</li>
              <li>Apoyo en compras y proveedores</li>
              <li>Gestión de documentación</li>
              <li>Facturación</li>
              <li>Control de inventario con software</li>
              <li>Procesos de dotación</li>
              <li>Etiquetado y embalaje</li>
              <li>Inducciones a nuevos empleados</li>
              <li>Seguimiento de procesos internos</li>
            </ul>

            <div class="timeline-label">Habilidades desarrolladas</div>
            <div class="timeline-tags">
              <span class="tag tag-emerald">Responsabilidad</span>
              <span class="tag tag-emerald">Organización</span>
              <span class="tag tag-emerald">Capacidad de adaptación</span>
              <span class="tag tag-emerald">Trabajo en equipo</span>
              <span class="tag tag-emerald">Atención al detalle</span>
              <span class="tag tag-emerald">Procesos empresariales</span>
            </div>
          </div>
        </div>

        <!-- Artesanías & CO -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node work">💼</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Artesanías &amp; CO</h3>
                <span class="timeline-place">Proyecto Full-Stack</span>
              </div>
            </div>
            <p class="timeline-desc">Desarrollo de mi primer proyecto real, aplicando conocimientos en un e-commerce y entendiendo el ciclo completo de desarrollo web.</p>
          </div>
        </div>

        <!-- Wonder Flowers -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node work">💼</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Wonder Flowers</h3>
                <span class="timeline-place">E-commerce &amp; Automatización</span>
              </div>
            </div>
            <p class="timeline-desc">Creación de una experiencia digital moderna, optimizando el diseño UI/UX y explorando la automatización de atención con chatbots basados en IA.</p>
          </div>
        </div>

        <!-- Plataforma Municipal de Juventudes -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node work">💼</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Plataforma Municipal de Juventudes</h3>
                <span class="timeline-place">Alcaldía de Mosquera</span>
              </div>quier
              <span class="timeline-period" style="color:var(--emerald-400); font-weight:600; border: 1px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.1);">🟢 En desarrollo</span>
            </div>
            <p class="timeline-desc">Diseño y construcción de la arquitectura backend con FastAPI, creando APIs escalables para conectar a la comunidad juvenil del municipio.</p>
          </div>
        </div>

        <!-- Explorando IA y Automatización -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node edu">✨</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Exploración en IA y Automatización</h3>
                <span class="timeline-place">Aprendizaje continuo</span>
              </div>
            </div>
            <p class="timeline-desc">Integración de herramientas de inteligencia artificial para optimizar flujos de trabajo y crear soluciones de software más eficientes e inteligentes.</p>
          </div>
        </div>

        <!-- Próximos retos -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-node edu">🚀</div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>Próximos retos</h3>
                <span class="timeline-place">Evolución profesional</span>
              </div>
            </div>
            <p class="timeline-desc">Preparado para asumir nuevos desafíos, aportar valor real en equipos de desarrollo y seguir evolucionando profesionalmente.</p>
          </div>
        </div>
      </div>
    </div>
  `;

content = content.replace(journeySectionContent, newJourney);

// --- 2. Replace Projects Section ---
const projectsStartStr = '<div class="projects-featured">';
const projectsStart = content.indexOf(projectsStartStr);
const projectsEnd = content.indexOf('<!-- ============================================', projectsStart);
const projectsSectionContent = content.substring(projectsStart, projectsEnd);

const newProjects = `<div class="projects-featured">

        <!-- Plataforma Municipal de Juventudes -->
        <div class="project-card animate-on-scroll">
          <div class="project-header">
            <span class="project-type" style="color:var(--emerald-400); font-weight:700;">🟢 EN DESARROLLO</span>
            <div class="project-title-row">
              <h3 class="project-name">Plataforma Municipal de Juventudes</h3>
              <div class="project-links">
                <a href="https://plataformajuventudes.org" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="Visitar sitio oficial">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-body">
            <p class="project-tagline">Plataforma backend sólida y escalable para la Alcaldía de Mosquera, enfocada en la gestión e integración de la comunidad juvenil.</p>

            <div class="project-details">
              <div class="detail-block">
                <h4>🎯 El objetivo</h4>
                <p>Facilitar la conexión entre más de 500 jóvenes, más de 50 líderes y más de 33 organizaciones afines según sus intereses y características demográficas, mediante una plataforma centralizada y eficiente.</p>
              </div>
              <div class="detail-block">
                <h4>💡 Estado del proyecto</h4>
                <p>El proyecto se encuentra en pleno <b>desarrollo activo</b>. Este es el alcance funcional que se está construyendo actualmente y que sigue evolucionando.</p>
              </div>
            </div>

            <div class="project-role">
              <h4>💻 Mi participación</h4>
              <p>Diseñé y construí la arquitectura backend utilizando <b>FastAPI</b>. Desarrollé las APIs REST para registro, autenticación, perfilamiento e integración con el frontend (Vue.js). Diseñé la estructura relacional de la base de datos para garantizar la integridad y eficiencia de consultas, y definí la lógica de negocio para conectar usuarios con organizaciones según sus intereses.</p>
            </div>

            <div class="project-tech">
              <div class="project-tech-label">Tecnologías que utilizo</div>
              <div class="tech-groups">
                <div>
                  <div class="tech-group-label">Backend</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">FastAPI</span>
                    <span class="tech-tag">REST APIs</span>
                    <span class="tech-tag">JSON</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">Integración &amp; Infraestructura</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Vue.js (Integración)</span>
                    <span class="tech-tag">Docker</span>
                    <span class="tech-tag">Base de datos relacional</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">Buenas Prácticas</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Arquitectura Backend</span>
                    <span class="tech-tag">Git</span>
                    <span class="tech-tag">Entornos Virtuales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Artesanías & CO -->
        <div class="project-card animate-on-scroll">
          <div class="project-header">
            <span class="project-type">Proyecto destacado</span>
            <div class="project-title-row">
              <h3 class="project-name">Artesanías &amp; CO</h3>
              <div class="project-links">
                <a href="https://github.com/NicolasOrtiz88" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Ver proyecto en GitHub" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-body">
            <p class="project-tagline">Plataforma digital orientada a artesanos para convertir una idea de negocio en una solución digital.</p>

            <div class="project-details">
              <div class="detail-block">
                <h4>🎯 El problema</h4>
                <p>Los artesanos necesitan herramientas digitales accesibles para gestionar y mostrar sus productos, pero las plataformas existentes no están diseñadas para sus necesidades específicas.</p>
              </div>
              <div class="detail-block">
                <h4>💡 La idea</h4>
                <p>Crear una plataforma que ayude a artesanos a digitalizar su negocio — desde la gestión de productos hasta la comunicación con clientes.</p>
              </div>
            </div>

            <div class="project-role">
              <h4>💻 Mi participación</h4>
              <p>Fui desarrollador Full-Stack principal. Arquitecté e implementé el servidor en Node.js/Express, diseñé la base de datos en PostgreSQL, desarrollé el panel de administración en React/Next.js y configuré el entorno de despliegue automatizado con Docker y GitHub Actions.</p>
            </div>

            <div class="project-tech">
              <div class="project-tech-label">Tecnologías que utilicé</div>
              <div class="tech-groups">
                <div>
                  <div class="tech-group-label">Frontend</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Next.js</span>
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">Backend</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">Express</span>
                    <span class="tech-tag">JWT</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">DB &amp; Infra</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">Docker</span>
                    <span class="tech-tag">GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>

            <button class="project-expand-btn" data-target="artesanias-details" aria-expanded="false">
              ▾ Ver aprendizajes y funcionalidades
            </button>

            <div class="project-expandable" id="artesanias-details">
              <div class="project-expandable-inner">
                <div class="expandable-section features-section">
                  <h4 class="features">💻 Funcionalidades principales</h4>
                  <ul>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Gestión de productos y catálogo</li>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Sistema de autenticación con JWT</li>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Reportes en Excel y PDF</li>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Envío de correos electrónicos</li>
                  </ul>
                </div>
                <div class="expandable-section">
                  <h4 class="learnings">📖 Lo que aprendí</h4>
                  <ul>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> Cómo estructurar un proyecto full-stack con separación clara entre frontend y backend</li>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> Implementación de autenticación segura con JWT y manejo de sesiones</li>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> Configuración de contenedores Docker para desarrollo y despliegue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Wonder Flowers -->
        <div class="project-card animate-on-scroll">
          <div class="project-header">
            <span class="project-type">Proyecto destacado</span>
            <div class="project-title-row">
              <h3 class="project-name">Wonder Flowers</h3>
              <div class="project-links">
                <a href="https://wonder-flowers-store.myshopify.com" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Visitar sitio oficial" aria-label="Visitar sitio">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-body">
            <p class="project-tagline">Experiencia digital para una floristería — combinando e-commerce, diseño visual, automatización y chatbot con IA.</p>

            <div class="project-details">
              <div class="detail-block">
                <h4>🎯 El problema</h4>
                <p>Una floristería necesita una presencia digital que no solo muestre sus productos, sino que guíe al cliente desde el descubrimiento hasta la compra, de manera cálida y personalizada.</p>
              </div>
              <div class="detail-block">
                <h4>💡 La idea</h4>
                <p>Crear una experiencia digital completa que incluya un catálogo visualmente atractivo y un chatbot inteligente que asista a los clientes durante su proceso de compra.</p>
              </div>
            </div>

            <div class="project-role">
              <h4>💻 Mi participación</h4>
              <p>Desarrollé la interfaz visual adaptando y personalizando temas de Shopify mediante HTML/CSS/JavaScript. Diseñé la experiencia de usuario (UX/UI) y lideré el diseño conversacional de <b>Wonder Flowers Assistant</b>, implementando automatización de WhatsApp con integración de Prompt Engineering.</p>
            </div>

            <div class="project-tech">
              <div class="project-tech-label">Tecnologías que utilicé</div>
              <div class="tech-groups">
                <div>
                  <div class="tech-group-label">Web &amp; Plataforma</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Shopify</span>
                    <span class="tech-tag">HTML/CSS/JS</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">Automatización</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">Chatbot con IA</span>
                    <span class="tech-tag">WhatsApp</span>
                    <span class="tech-tag">Prompt Engineering</span>
                  </div>
                </div>
                <div>
                  <div class="tech-group-label">Diseño</div>
                  <div class="tech-group-items">
                    <span class="tech-tag">UX/UI</span>
                    <span class="tech-tag">Branding</span>
                  </div>
                </div>
              </div>
            </div>

            <button class="project-expand-btn" data-target="wonder-details" aria-expanded="false">
              ▾ Ver aprendizajes y funcionalidades
            </button>

            <div class="project-expandable" id="wonder-details">
              <div class="project-expandable-inner">
                <div class="expandable-section features-section">
                  <h4 class="features">💻 Funcionalidades principales</h4>
                  <ul>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Catálogo de productos visual e integración e-commerce</li>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Chatbot conversacional con IA</li>
                    <li><span class="bullet" style="color:var(--brand-400)">▸</span> Automatización de comunicación vía WhatsApp</li>
                  </ul>
                </div>
                <div class="expandable-section">
                  <h4 class="learnings">📖 Lo que aprendí</h4>
                  <ul>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> Cómo combinar tecnología con experiencia de usuario y necesidades comerciales</li>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> Diseño de flujos conversacionales automatizados</li>
                    <li><span class="bullet" style="color:var(--emerald-400)">✦</span> El valor de personalizar la comunicación automatizada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COLABORACIONES -->
      <div class="animate-on-scroll">
        <div class="collab-header">
          <span>👥</span>
          <h3>Colaboraciones y contribuciones</h3>
        </div>
        <div class="collab-grid">
          <div class="collab-card">
            <div class="collab-card-type"><span>👥</span> Colaboración</div>
            <h4>ZENKAR</h4>
            <p>Proyecto web enfocado en la comparación de vehículos, donde la información se presenta de manera clara y útil para el usuario.</p>
            <div class="collab-contribution">
              <div class="label">Mi participación</div>
              <p>No actué como desarrollador principal. Mi contribución fue como apoyo integral en la visualización, realizando control de calidad (QA), identificando correcciones de errores y proponiendo mejoras visuales (UX) para optimizar la interfaz final.</p>
            </div>
            <div class="timeline-tags">
              <span class="tag tag-brand">Revisión visual</span>
              <span class="tag tag-brand">QA / Testing</span>
              <span class="tag tag-brand">Corrección de errores</span>
              <span class="tag tag-brand">Apoyo en UX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

content = content.replace(projectsSectionContent, newProjects);

fs.writeFileSync('index.html', content);
console.log("HTML successfully updated!");
