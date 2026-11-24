import {mountAppLayout} from './template/app-layout.js';
import { TASKS_ICON } from './shared/components/icons.js';

const rootElement = document.querySelector('#app-root');
const navigationItems = [
    {
        id: "tasks", label: "Tareas", href: "#/tasks", icon: TASKS_ICON
    },
    {
        id: "users", label: "Usuarios", href: "#/users", icon: TASKS_ICON
    },
    {
        id: "sales", label: "Ventas", href: "#/sales", icon: TASKS_ICON
    }
];

export function startApp() {
    mountAppLayout(rootElement, { sectionTittle: "Tareas", navigationItems });
}


