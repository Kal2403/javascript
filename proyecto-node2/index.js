import { suma, multiplicar } from "./controller.js";
import chalk from "chalk";

const result = multiplicar(suma(1, 2), suma(4, 5));
console.log(chalk.green(result));