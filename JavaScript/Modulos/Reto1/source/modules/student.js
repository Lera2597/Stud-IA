import { promedio, aprobado } from "./grades.js";
import { capitalizarNombre, mayusculas } from "./utils.js";

function student(nombre, notas)
{
    let nombreformat = capitalizarNombre(nombre);
    return {nombre:nombreformat,promedio:promedio(notas),estado:aprobado(promedio(notas))?"Aprobado":"Reprobado"};
}

export default{student};