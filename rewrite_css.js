const fs = require("fs");
const css = `
/* =========================================================================
   REDISEÑO MARCA PERSONAL (Nuevas Clases)
   ========================================================================= */

/* Hero Redesign */
.hero-redesign {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 3rem;
  overflow: hidden;
}

.hero-bg-collage {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(99,102,241,0.05) 0%, transparent 40%),
    radial-gradient(circle at 20% 80%, rgba(16,185,129,0.05) 0%, transparent 40%);
  opacity: 0.8;
  z-index: 0;
  /* Efecto sutil de codigo o collage mediante patron CSS */
  background-image: linear-gradient(var(--surface-800) 1px, transparent 1px),
    linear-gradient(90deg, var(--surface-800) 1px, transparent 1px);
  background-size: 50px 50px;
}
.hero-bg-collage::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--bg) 100%);
}

.hero-redesign-container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 992px) {
  .hero-redesign-container { grid-template-columns: 1.2fr 1fr; }
}

.hero-redesign-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff, var(--brand-300));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-redesign-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Dashboard Rápido */
.hero-dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 1rem;
}
.dash-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-light);
  background: rgba(255,255,255,0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
}
.dash-item .icon { font-size: 1.1rem; }

.hero-looking-for {
  font-size: 0.95rem;
  color: var(--text-muted);
  border-left: 3px solid var(--brand-400);
  padding-left: 1rem;
  font-style: italic;
}

.hero-redesign-visual {
  position: relative;
}

/* Projects Grid & Cards */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project-card {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--surface-800);
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.project-content {
  padding: 2.5rem;
}

.project-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-juventudes .project-badge {
  background: rgba(16, 185, 129, 0.1);
  color: var(--emerald-400);
  border: 1px solid rgba(16, 185, 129, 0.2);
}
.project-wonder .project-badge {
  background: rgba(236, 72, 153, 0.1);
  color: #f472b6;
  border: 1px solid rgba(236, 72, 153, 0.2);
}
.project-artesanias .project-badge {
  background: rgba(245, 158, 11, 0.1);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.project-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.project-summary {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.project-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 2rem;
}
@media (min-width: 768px) {
  .project-details { grid-template-columns: 1fr 1fr; }
}

.project-col h4 {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}
.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.check-list li {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

/* Identidades visuales sutiles en hover */
.project-juventudes:hover {
  border-color: rgba(16, 185, 129, 0.3);
}
.project-wonder:hover {
  border-color: rgba(236, 72, 153, 0.3);
}
.project-artesanias:hover {
  border-color: rgba(245, 158, 11, 0.3);
}

/* Filosofia */
.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .philosophy-grid { grid-template-columns: 1fr 1fr; }
}
.phil-card {
  background: var(--surface-800);
  border: 1px solid rgba(255,255,255,0.05);
  padding: 1.5rem;
  border-radius: 1rem;
}
.phil-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: var(--brand-300);
}
.phil-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.principles-list {
  list-style: none;
  padding: 0;
}
.principles-list li {
  background: rgba(255,255,255,0.02);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  border-left: 3px solid var(--brand-400);
  color: var(--text-muted);
}
.principles-list li strong {
  color: var(--text-light);
}

/* Proceso Interactivo */
.process-flow {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (min-width: 992px) {
  .process-flow {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
}
.process-step {
  position: relative;
  background: var(--surface-800);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  flex: 1;
  margin: 0 0.5rem;
  cursor: pointer;
}
.process-step:hover {
  background: var(--surface-700);
  transform: translateY(-5px);
}
.step-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.step-label {
  display: block;
  font-weight: 600;
  color: var(--text-light);
}
.step-detail {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 1rem;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
  overflow: hidden;
}
.process-step:hover .step-detail {
  opacity: 1;
  max-height: 100px;
}

/* Historia y Timeline */
.history-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 3rem;
  max-width: 800px;
}
.timeline-v2 {
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid rgba(255,255,255,0.1);
  margin-bottom: 3rem;
}
.time-item {
  position: relative;
  margin-bottom: 2.5rem;
}
.time-dot {
  position: absolute;
  left: -2.35rem;
  top: 0.3rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--surface-600);
  border: 2px solid var(--bg);
}
.time-dot.current {
  background: var(--emerald-400);
  box-shadow: 0 0 10px rgba(16,185,129,0.5);
}
.time-item h4 {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 0.3rem;
}
.time-item p {
  font-size: 0.95rem;
  color: var(--text-muted);
}
.fun-fact {
  background: rgba(255,255,255,0.02);
  border: 1px dashed rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: var(--text-light);
  font-style: italic;
}

/* Seccion Personal (Aprendizajes, Valores, Intereses) */
.personal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 992px) {
  .personal-grid { grid-template-columns: 1fr 1fr 1fr; }
}
.personal-col h3 {
  font-size: 1.2rem;
  color: var(--brand-300);
  margin-bottom: 1.5rem;
}
.diary-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
}
.values-list, .interests-list {
  list-style: none;
  padding: 0;
}
.values-list li, .interests-list li {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.values-list li strong { color: var(--text-light); }

/* Vision Futuro */
.future-section {
  padding: 4rem 0;
  background: rgba(255,255,255,0.01);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.future-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.ftag {
  padding: 0.8rem 1.5rem;
  background: rgba(255,255,255,0.05);
  border-radius: 2rem;
  font-size: 0.95rem;
  color: var(--text-light);
  border: 1px solid rgba(255,255,255,0.05);
}

/* Footer Memorable */
.footer-memorable {
  padding: 6rem 0;
  text-align: center;
}
.footer-msg h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.footer-msg p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}
.footer-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}
.social-links {
  display: flex;
  gap: 2rem;
}
.social-links a {
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
}
.social-links a:hover {
  color: var(--brand-300);
}
.copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
  opacity: 0.6;
}
`;
fs.appendFileSync("css/styles.css", css);
console.log("Appended CSS styles successfully.");

