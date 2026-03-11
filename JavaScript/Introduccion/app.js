let nombre = "Luis";
let edad = 20;
let ciudad = "Bogota";
console.log(nombre, edad, ciudad);
console.log("nombre:",nombre)
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

for (let i = 0; i < 10; i++) {
    console.log("Numero:",i+1);
}