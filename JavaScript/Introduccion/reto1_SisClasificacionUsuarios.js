// let userName = prompt("Ingrese su nombre");
// let age = prompt("Ingrese su edad");
// // "Basic","Premium","VIP";
// let membreship = prompt("Ingrese su membresia");

let userName = "Luis";
let age = 10;
let membreship = "Premium";

console.log("Bienvenido: ",userName);
console.log("Edad: ",age);
if(age >= 18){
    console.log("Membresia: ",membreship);
    switch(membreship){
        case "Basic":
            console.log("Acceso limitado");
            break;
        case "Premium":
            console.log("Acceso completo");
            break;
        case "VIP":
            console.log("Acceso completo + soporte prioritario" );
            break;
    }
}
else{
    console.log("No tienes acceso al sistema");
}