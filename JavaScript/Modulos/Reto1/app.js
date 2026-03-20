import * as grades from "./source/modules/grades.js";
import student from "./source/modules/student.js";
import * as utils from "./source/modules/utils.js";

const estudiante1 = student.student("jose luis lopez", [3.5, 4.0, 2.5, 3.0, 4.5, 3.0]);
const estudiante2 = student.student("maria jose perez", [2.5, 4.0, 2.5, 3.0, 4.5, 3.0]);
const estudiante3 = student.student("Pedro perez", [3.5, 2.0, 2.5, 3.0, 3.5, 3.0]);

console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);