/**
 * GRUPO 2 CHEB IK MWUAN · SISTEMA MODULAR DE LAYOUT (js/layout.js)
 * 
 * Permite que cualquier página dentro de la carpeta 'pages/' o en la raíz
 * se indexe automáticamente con el mismo Head, Header (Pañoleta + Menú) y Footer (ANSI).
 */

(function () {
  // Determinar si estamos dentro de la subcarpeta 'pages/' o en la raíz
  const isInsidePagesDir = window.location.pathname.includes('/pages/') || 
                           window.location.pathname.endsWith('/pages') ||
                           (document.currentScript && document.currentScript.getAttribute('data-base') === 'sub');
  
  const base = isInsidePagesDir ? '../' : './';
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Helper para resolver rutas a cualquier página del sitio
  const resolvePage = (pageName) => {
    if (pageName === 'index.html') {
      return isInsidePagesDir ? '../index.html' : './index.html';
    }
    return isInsidePagesDir ? `./${pageName}` : `./pages/${pageName}`;
  };

  // 1. Inyectar / Asegurar recursos en el <head>
  const head = document.head;

  // Google Fonts
  if (!document.getElementById('font-outfit')) {
    const fontPreconnect1 = document.createElement('link');
    fontPreconnect1.rel = 'preconnect';
    fontPreconnect1.href = 'https://fonts.googleapis.com';
    head.appendChild(fontPreconnect1);

    const fontPreconnect2 = document.createElement('link');
    fontPreconnect2.rel = 'preconnect';
    fontPreconnect2.href = 'https://fonts.gstatic.com';
    fontPreconnect2.crossOrigin = 'anonymous';
    head.appendChild(fontPreconnect2);

    const fontLink = document.createElement('link');
    fontLink.id = 'font-outfit';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
    head.appendChild(fontLink);
  }

  // Hoja de estilos central
  if (!document.getElementById('scout-styles')) {
    const cssLink = document.createElement('link');
    cssLink.id = 'scout-styles';
    cssLink.rel = 'stylesheet';
    cssLink.href = `${base}css/styles.css`;
    head.appendChild(cssLink);
  }

  // Favicon con la insignia oficial
  if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement('link');
    fav.rel = 'icon';
    fav.type = 'image/png';
    fav.href = `${base}assets/logo.png`;
    head.appendChild(fav);
  }

  // Vercel Web Analytics & Speed Insights
  if (!document.getElementById('vercel-analytics')) {
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    const vaScript = document.createElement('script');
    vaScript.id = 'vercel-analytics';
    vaScript.defer = true;
    vaScript.src = '/_vercel/insights/script.js';
    head.appendChild(vaScript);
  }

  if (!document.getElementById('vercel-speed-insights')) {
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
    const siScript = document.createElement('script');
    siScript.id = 'vercel-speed-insights';
    siScript.defer = true;
    siScript.src = '/_vercel/speed-insights/script.js';
    head.appendChild(siScript);
  }

  // 2. Función para renderizar el Header y Footer compartidos
  document.addEventListener('DOMContentLoaded', () => {
    // Renderizar Header
    const headerContainer = document.getElementById('scout-header');
    if (headerContainer || !document.querySelector('.site-header')) {
      const headerHTML = `
        <!-- Franja de los 4 colores de la Pañoleta -->
        <div class="panoleta-ribbon" title="Colores de la pañoleta: Rojo, Amarillo, Azul y Verde">
          <div class="color-red" title="Rojo"></div>
          <div class="color-yellow" title="Amarillo"></div>
          <div class="color-blue" title="Azul"></div>
          <div class="color-green" title="Verde"></div>
        </div>

        <!-- Barra Superior de Afiliación ANSI -->
        <div class="top-bar">
          <div class="container top-bar-inner">
            <div class="badge-ansi">Asociación Nacional de Scouts Independientes, A.C. (ANSI)</div>
            <div>Sede: Palenque, Chiapas · Escultismo Libre, Activo y Comunitario</div>
          </div>
        </div>

        <!-- Header y Navegación Principal -->
        <header class="site-header">
          <div class="container nav-wrap">
            <a href="${resolvePage('index.html')}" class="brand" aria-label="Grupo 2 Cheb Ik Mwuan">
              <div class="brand-logo-wrap">
                <img src="${base}assets/logo.png" alt="Logotipo Oficial Grupo 2 Cheb Ik Mwuan Palenque">
              </div>
              <div class="brand-text">
                <h1>GRUPO 2 PALENQUE</h1>
                <span>CHEB IK MWUAN · ANSI</span>
              </div>
            </a>

            <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">☰</button>

            <nav class="nav-links" aria-label="Navegación principal">
              <a href="${resolvePage('index.html')}" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Inicio</a>
              <a href="${resolvePage('clan-kawil.html')}" class="${currentPath === 'clan-kawil.html' ? 'active' : ''}">Clan Kawil</a>
              <a href="${resolvePage('bitacora.html')}" class="${currentPath === 'bitacora.html' ? 'active' : ''}">Bitácora de Eventos</a>
              <a href="${resolvePage('logistica.html')}" class="${currentPath === 'logistica.html' ? 'active' : ''}">Centro Logístico</a>
              <a href="${resolvePage('ramas.html')}" class="${currentPath === 'ramas.html' ? 'active' : ''}">Secciones</a>
              <a href="${resolvePage('hermandad.html')}" class="${currentPath === 'hermandad.html' ? 'active' : ''}">Hermandad</a>
              <a href="${resolvePage('contacto.html')}" class="nav-cta">Unirse al Grupo ↗</a>
            </nav>
          </div>
        </header>
      `;

      if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
      } else if (!document.querySelector('.site-header')) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
      }
    }

    // Renderizar Footer compartido
    const footerContainer = document.getElementById('scout-footer');
    if (footerContainer || !document.querySelector('footer')) {
      const footerHTML = `
        <footer>
          <div class="container footer-grid">
            <div class="footer-brand">
              <h4>GRUPO 2 CHEB IK MWUAN</h4>
              <p>
                Escultismo independiente, tradicional y autónomo en Palenque, Chiapas. Miembro orgulloso de la <strong>Asociación Nacional de Scouts Independientes, A.C. (ANSI)</strong>.
              </p>
              <div class="panoleta-strip-mini" style="max-width: 180px;">
                <span class="strip-red"></span>
                <span class="strip-yellow"></span>
                <span class="strip-blue"></span>
                <span class="strip-green"></span>
              </div>
            </div>

            <div class="footer-col">
              <h5>Mística & Ramas</h5>
              <ul>
                <li><a href="${resolvePage('index.html')}#identidad">La Pañoleta Cuatricolor</a></li>
                <li><a href="${resolvePage('clan-kawil.html')}">Clan Kawil (Rovers)</a></li>
                <li><a href="${resolvePage('ramas.html')}">Manada & Tropa</a></li>
                <li><a href="${resolvePage('ramas.html')}">Caminantes</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h5>Actividades Clave</h5>
              <ul>
                <li><a href="${resolvePage('bitacora.html')}#oocotal">Campamento Oocotal (G1)</a></li>
                <li><a href="${resolvePage('bitacora.html')}#balseada">Balseada por la Paz</a></li>
                <li><a href="${resolvePage('bitacora.html')}#guacamayas">Vuelo de Guacamayas</a></li>
                <li><a href="${resolvePage('logistica.html')}#encuentro">Encuentro de Clanes 2026</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h5>Enlaces & Recursos</h5>
              <ul>
                <li><a href="${resolvePage('logistica.html')}">Plan de Comidas (3+2)</a></li>
                <li><a href="${resolvePage('logistica.html')}">Checklist de Equipo</a></li>
                <li><a href="${resolvePage('hermandad.html')}">Grupos Hermanos</a></li>
                <li><a href="${resolvePage('contacto.html')}">Contacto y Pre-registro</a></li>
              </ul>
            </div>
          </div>

          <div class="container footer-bottom">
            <div>
              © 2026 Grupo 2 Cheb Ik Mwuan (Palenque, Chiapas) · ANSI A.C. Todos los derechos reservados.
            </div>
            <div>
              <em>“Siempre listos para servir al hermano maya.”</em>
            </div>
          </div>
        </footer>

        <!-- Toast Flotante -->
        <div class="toast" id="siteToast" role="status" aria-live="polite">
          <span id="toastIcon">✓</span>
          <span id="toastText">Operación realizada con éxito</span>
        </div>
      `;

      if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
      } else if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
      }
    }

    // Inicializar eventos de navegación y menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? '✕' : '☰';
      });
    }

    // Cargar js/main.js para lógica interactiva si no está presente
    if (!document.getElementById('scout-main-script')) {
      const script = document.createElement('script');
      script.id = 'scout-main-script';
      script.src = `${base}js/main.js`;
      document.body.appendChild(script);
    }
  });
})();
