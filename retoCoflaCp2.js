// problema fiesta

// let free = false;

// const validarCliente = (time)=> {
//     let edad = prompt("cual es tu edad?");
//     if (edad > 18) {
//         if (time >= 2 && time < 7 && free == false) {
//             alert("puedes pasar gratis, eres la primera persona deespues de las 2 AM");
//             free = true;
//         } else {
//             alert(`Son las ${time}:00hs y podes pasar, pero tienes que pagar la entrada`);
//         }
//     } else {
//         alert("No puedes entrar pa");
//     }
// }

// validarCliente(23)
// validarCliente(12)
// validarCliente(14)
// validarCliente(6)
// validarCliente(2)
// validarCliente(15)
// validarCliente(8)
// validarCliente(3)

// problema de asistencias al mes

// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
// }

// const tomarAsistencia = (nombre, p)=> {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}<br>
//     _____Asitencias: ${alumnosTotales[alumno][1]}<br>
//     _____Ausencias: ${30 - alumnosTotales[alumno][1]}`;
//     if (30 - alumnosTotales[alumno][1] > 18) {
//         resultado += " Reprobado por inasistencias<br> <br><br>";
//     } else {
//         resultado += "<br><br>"
//     }
//     document.write(resultado);
// }

// problema de la calculadora

const sumar = (num1, num2)=> {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=> {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: Multiplicacion");

if (operacion ==1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numeero para sumar");
    resultado = sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numeero para restar");
    resultado = restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numeero para dividir");
    resultado = dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numeero para multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else {
    alert("no se a encontrado la operacion")
}