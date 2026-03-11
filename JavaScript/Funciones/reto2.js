// suma
let suma = (a,b) => a + b;

// resta 
let resta = (a,b) => a - b;

// multiplicacion
let multi = (a,b) =>{
    return a * b;
}

// mostrar resultado
function mostrarResultado(operacion,a,b){
    switch(operacion){
        case "suma":
            console.log("Resultado de la suma: ",suma(a,b));
            break;
        case "resta":
            console.log("Resusltado de la resta: ",resta(a,b));
            break;
        case "multiplicacion":
            console.log("Resultado de la multiplicacion: ",multi(a,b));
            break;
    }
}
let a = 10,b = 5;
mostrarResultado("suma",a, b);
mostrarResultado("resta",a,b);
mostrarResultado("multiplicacion",a,b);