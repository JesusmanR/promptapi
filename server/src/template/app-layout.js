import { createHeader } from './app-header.js';
import { createAppSidebar } from './app-Sidebar.js';

function createappLayout({sectionTittle, navigationItems}) {

    return ` <div class="app-layout"> 
            ${createHeader(sectionTittle)}
            ${createAppSidebar(navigationItems)}
            <main class="app-main"></main> 
            </div>`;
}

function handlelayoutClick(event, LayoutElement) {

}
export function mountAppLayout(rootElement, options) {


    rootElement.innerHTML = createappLayout(options);

    const LayoutElement = document.querySelector('.app-layout');

    LayoutElement.addEventListener('click', (event) => (handlelayoutClick(event, LayoutElement)));
}
