import { initTasks } from "../../features/tasks.js/index.js";
import { initUsers } from "../../features/users/index.js";
import { initSales } from "../../features/sales/index.js";

export const routers = {
    users: initUsers,
    tasks: initTasks,
    sales: initSales
};
