/**
 * Componente iconos: dibujos SVG en línea para los botones de acción.
 * Están ocultos para lectores de pantalla; el botón que los contiene lleva aria-label y title.
 */

/**
 * Envuelve el dibujo de un icono en un SVG en línea.
 * @param {string} shapes - Elementos SVG del icono, fijos en el código.
 * @param {string} [className="button__icon"] - Clase BEM del SVG; define su tamaño según el bloque donde aparece.
 * @returns {string} HTML del icono.
 */
function createIcon(shapes, className = "button__icon") {
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${shapes}</svg>`;
}

export const CHECK_ICON = createIcon('<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>');
export const EYE_ICON = createIcon('<path fill-rule="evenodd" d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>');
export const PENCIL_ICON = createIcon('<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>');
export const TRASH_ICON = createIcon('<path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/>');
export const MENU_ICON = createIcon('<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>', "app-header__icon");
export const TASKS_ICON = createIcon('<path d="M3 5h4v4H3V5zm6 1h12v2H9V6zM3 15h4v4H3v-4zm6 1h12v2H9v-2z"/>', "app-sidebar__icon");
export const CLOSE_ICON = createIcon('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>', "app-sidebar__close-icon");