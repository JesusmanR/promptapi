import { TASKS_ICON } from '../shared/components/icons.js';

function createNavigationLinks({id, label, href, icon}) {

  return `<li> 
  <a class="app-sidebar__link" href="${href}">
  ${icon}
  <span class="app-sidebar__label">${label}</span>
  </a>
  </li>`;
}
/**
 * Crea el marcado del fondo superpuesto y del menú lateral.
 * @param {AppSidebarOptions} options - Enlaces del menú lateral.
 * @returns {string} HTML del backdrop (.app-layout__backdrop) seguido del menú (.app-sidebar).
 */
export function createAppSidebar(navigationItems) {
  const navigationLinks = navigationItems.map(createNavigationLinks).join("");
  return `
    <div class="app-layout__backdrop" data-action="close-sidebar" aria-hidden="true"></div>
    <aside id="app-sidebar" class="app-sidebar" aria-label="Menú principal">
      <div class="app-sidebar__header">
        <div class="app-sidebar__brand">
          <p class="app-sidebar__title">Gestor de Tareas</p>
          <p class="app-sidebar__subtitle">Institucional SENA</p>
        </div>
        <button type="button" class="app-sidebar__close-button" data-action="close-sidebar" aria-label="Cerrar menú"></button>
      </div>
      <nav aria-label="Secciones">
        <ul class="app-sidebar__list">
          ${navigationLinks}
        </ul>
      </nav>
    </aside>
  `.trim();
}