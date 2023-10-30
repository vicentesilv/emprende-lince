const pistas = document.getElementById('pistas');
const resul = document.getElementById('resultado');

function generarOperacionAritmetica() {
  const operadores = ['+', '-', '*', '/'];
  const operador = operadores[Math.floor(Math.random() * operadores.length)];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  return `${num1} ${operador} ${num2}`;
}

const operacion = generarOperacionAritmetica();
const words = operacion.replace(/ /g, "");



function mostrarResultado(operacion) {
  return eval(operacion); // Evalúa la operación y devuelve el resultado
}

// resul.innerHTML = `el resultado es ${resultado}`



function pista(){
    function obtenerPista(operador) {
        const resultado = mostrarResultado(operacion);

        pistas.innerHTML = `Pista: El operador es ${operador} el resultado es ${resultado}`;

    }
const operador = operacion.match(/[-+*/]/); // Extraer el operador de la operación

if (operador) {
  const pista = obtenerPista(operador[0]);
  console.log(pista); // Muestra la pista en la consola
}

}
