# Grupo 2 Cheb Ik Mwuan · Palenque, Chiapas 🌿⚜️

Sitio web oficial del **Grupo 2 Palenque (Grupo 2 Cheb Ik Mwuan)**, perteneciente a la **Asociación Nacional de Scouts Independientes, A.C. (ANSI)** y sede del **Clan Kawil**.

![Insignia Oficial](assets/chebikmwuan_emblem.jpg)

---

## 📁 Arquitectura Modular del Proyecto

El proyecto está organizado de forma desacoplada, separando la estructura HTML de los estilos CSS y la lógica JavaScript, con un área dedicada para desarrollar nuevas páginas:

```
├── index.html               # Página principal (Home)
├── google01c86b8c989a53b1.html # Verificación Google Search Console
├── css/
│   └── styles.css           # Hoja de estilos central y variables de diseño
├── js/
│   ├── main.js              # Lógica interactiva (menú móvil, filtros, checklist, descargas)
│   └── layout.js            # Inyector automático de Head, Header (Pañoleta) y Footer común
├── assets/
│   ├── chebikmwuan_emblem.jpg # Insignia oficial bordada (4 colores)
│   └── palenque_scout_camp.jpg # Fotografía de campamento y balsa en Palenque
└── pages/                   # ÁREA PARA DESARROLLAR MÚLTIPLES PÁGINAS
    ├── template.html        # Plantilla base para duplicar y crear nuevas páginas
    ├── clan-kawil.html      # Página dedicada a la rama mayor y Roverismo
    ├── bitacora.html        # Archivo histórico completo de actividades
    ├── logistica.html       # Centro operativo, plan de comidas (3+2) y checklists
    └── contacto.html        # Formulario de contacto y pre-registro
```

---

## 🛠️ Cómo Desarrollar Nuevas Páginas (`pages/`)

Cualquier página nueva que crees dentro de la carpeta `pages/` se **indexa automáticamente** al Head, Header (con la pañoleta cuatricolor) y Footer gracias a `js/layout.js`.

### Pasos rápidos:
1. Duplica el archivo `pages/template.html` y renómbralo (por ejemplo: `pages/campamentos.html`).
2. Modifica el título en `<title>` y escribe tu contenido HTML dentro del bloque:
   ```html
   <main id="page-content">
     <!-- Escribe aquí el diseño y contenido de tu página -->
   </main>
   ```
3. ¡Listo! Automáticamente tendrá cargados:
   - Google Fonts (`Outfit` y `Plus Jakarta Sans`).
   - Todos los estilos de `css/styles.css`.
   - La franja cuatricolor (Rojo, Amarillo, Azul, Verde) y el menú de navegación con enlace activo.
   - El pie de página oficial de la ANSI y las alertas flotantes (Toast).

---

## 🧭 Identidad y Pañoleta Cuatricolor
Nuestra pañoleta porta con orgullo cuatro colores representativos:
- 🔴 **Rojo:** Coraje, determinación y el temple del guerrero maya.
- 🟡 **Amarillo:** Sabiduría solar maya de Palenque y la calidez fraterna scout.
- 🔵 **Azul:** Las aguas sagradas de Catazajá y ríos del Usumacinta; lealtad a la promesa.
- 🟢 **Verde:** La selva chiapaneca, la esperanza y la conservación activa de la naturaleza.

---

## 📅 Bitácora Histórica (Dic 2025 – Oct 2026)
- **Diciembre 2025:** Campamento de sierra con el **Grupo 1** y servicio comunitario en **Oocotal, Veracruz**.
- **Marzo – Abril 2026:** Organización logística, roster y control de asistencia en *"Campamento y balseada por la paz"* (Catazajá – Palenque, Chiapas).
- **Mayo 2026:** Jornada ecológica con el **Grupo 1 Juventus** y visita de hermandad al **Grupo 21 Jaguarundi** (23 de mayo).
- **Julio 2026:** Campamento Intertropas *"Vuelo de Guacamayas"* en Palenque (18–20 de julio, temática *"El camino del Guerrero Maya"*), con plan de comidas para 3 elementos + 2 jefes.
- **Octubre 2026:** Planificación, convocatorias y lineamientos logísticos para el *"Encuentro de clanes de la región Sur"* (9 al 12 de octubre en Palenque).

---

## 🚀 Despliegue Local
Basta con abrir `index.html` o cualquier página de `pages/` en cualquier navegador web moderno, o ejecutar un servidor estático:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .
```

---
*Siempre listos para servir al hermano maya.*
