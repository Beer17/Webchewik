/**
 * GRUPO 2 CHEB IK MWUAN · PALENQUE (ANSI)
 * Scripts Interactivos (js/main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Hamburguesa Móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // 2. Toast de Notificación Flotante
  const toast = document.getElementById('siteToast');
  const toastText = document.getElementById('toastText');
  window.showToast = (message) => {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3400);
  };

  // 3. Descarga simulada de formatos y guías en PDF
  document.querySelectorAll('.download, #btnExportAll').forEach(button => {
    button.addEventListener('click', () => {
      const fileName = button.dataset.file || 'Paquete-Logistico-Grupo2-ChebIkMwuan.pdf';
      const pdfContent = '%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n% GRUPO 2 CHEB IK MWUAN PALENQUE - ANSI';
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
      if (window.showToast) {
        window.showToast(`Documento descargado: ${fileName.replace('.pdf', '')}`);
      }
    });
  });

  // 4. Filtros de Línea de Tiempo (Bitácora)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineCards = document.querySelectorAll('.timeline-card');
  if (filterBtns.length > 0 && timelineCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        timelineCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'grid';
          } else {
            const categories = card.dataset.category || '';
            if (categories.includes(filter)) {
              card.style.display = 'grid';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // 5. Pestañas del Centro Logístico
  const hubTabs = document.querySelectorAll('.hub-tab-btn');
  const hubPanels = document.querySelectorAll('.hub-panel');
  if (hubTabs.length > 0 && hubPanels.length > 0) {
    hubTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        hubTabs.forEach(t => t.classList.remove('active'));
        hubPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById(tab.dataset.tab);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  // 6. Checklist interactivo de Equipo
  const checkItems = document.querySelectorAll('.check-item input[type="checkbox"]');
  checkItems.forEach(input => {
    input.addEventListener('change', (e) => {
      const label = e.target.closest('.check-item');
      if (e.target.checked) {
        label.classList.add('completed');
        if (window.showToast) window.showToast('Artículo empacado en la mochila');
      } else {
        label.classList.remove('completed');
      }
    });
  });

  const resetChecklistBtn = document.getElementById('resetChecklistBtn');
  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      checkItems.forEach(input => {
        input.checked = false;
        input.closest('.check-item').classList.remove('completed');
      });
      if (window.showToast) window.showToast('Checklist de equipo reiniciado');
    });
  }

  // 7. Formulario de Contacto & Pre-registro
  const contactForm = document.getElementById('scoutContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('inputName');
      const branchInput = document.getElementById('selectBranch');
      const name = nameInput ? nameInput.value : 'Scout';
      const branch = branchInput ? branchInput.value : '';
      
      let branchName = 'Grupo 2 Cheb Ik Mwuan';
      if (branch === 'clan') branchName = 'Clan Kawil';
      if (branch === 'encuentro') branchName = 'Encuentro de Clanes Región Sur';

      if (window.showToast) {
        window.showToast(`¡Gracias, ${name}! Tu solicitud para ${branchName} fue recibida.`);
      }
      contactForm.reset();
    });
  }
});
