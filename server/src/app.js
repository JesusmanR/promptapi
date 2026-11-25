import {mountAppLayout} from './template/app-layout.js';
import { navigationItems } from './CORE/items.js';
import { startRouter } from './CORE/router/router.js';

const rootElement = document.querySelector('#app-root');


export function startApp() {
    mountAppLayout(rootElement, { sectionTittle: "Tareas", navigationItems });
    startRouter();
}



