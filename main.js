let uno = 50;
let dos = 100;
let tres = 150;
let cuatro = 200;
let cinco = 250;
let seis = 280;
let siete = 300;
let ocho = 400;
let nueve = 550;
let diez = 600;
let once = 1200;
let doce = 1600;

let dias;
let semanas;
let meses;

let option;
let nombreApellido;
let visita;

const arr = [
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
  once,
  doce,
];

function calcularCosto(visita, valor) {
  switch (visita) {
    case "dias":
      if (valor == "1") return uno;
      else if (valor == "2") return dos;
      else if (valor == "3") return tres;
      else if (valor == "4") return cuatro;
      else if (valor == "5") return cinco;
      else if (valor == "6") return seis;
      break;
    case "semanas":
      if (valor == "1") return siete;
      else if (valor == "2") return ocho;
      else if (valor == "3") return nueve;
      break;
    case "meses":
      if (valor == "1") return diez;
      else if (valor == "2") return once;
      else if (valor == "3") return doce;
      break;
    default:
      return 0;
  }
}

function mostrarResumen(nombreApellido, dias, semanas, meses, costo) {
  let resumen = `Resumen de Inscripción:
            Nombre: ${nombreApellido}
            Dias de visita: ${dias}
            Semanas de visita: ${semanas}
            Meses de visita: ${meses}
            Costo total: $${costo}`;

  alert(resumen);
}

function sumarFechas() {
  const fechaInicial = new Date(document.getElementById("fechaInicial").value);
  const dias = parseInt(document.getElementById("dias").value) || 0;
  const semanas = parseInt(document.getElementById("semanas").value) || 0;
  const meses = parseInt(document.getElementById("meses").value) || 0;

  // Sumar días
  fechaInicial.setDate(fechaInicial.getDate() + dias);

  // Sumar semanas (1 semana = 7 días)
  fechaInicial.setDate(fechaInicial.getDate() + semanas * 7);

  // Sumar meses
  fechaInicial.setMonth(fechaInicial.getMonth() + meses);

  const resultado = document.getElementById("resultado");
  resultado.textContent =
    "Nueva fecha: " + fechaInicial.toISOString().split("T")[0];
}

window.onload = function () {
  let costoTotal = 0;
  while (true) {
    visita = prompt(`
              Ingrese el tiempo que nos visitara y sus datos para registrarlo:
              1. Elija los dias que estara con nosotros
              2. Elija las semanas que estara con nosotros
              3. Elija los meses que estara con nosotros
              4. Ingrese nombre y apellidos
              5. Finalizacion de registro de datos
              0. Salir
              `);

    if (visita == "1") {
      dias = prompt(
        "Ingrese los dias que visitara en su casa famliafit vazquez: \n 1. 1 Dia ($50) \n 2. 2 dias ($100) \n 3. 3 dias ($150) \n 4. 4 dias ($200) \n 5. 5 dias ($250) \n 6. 6 dias ($280)  \n 0. Salir"
      );
      costoTotal += calcularCosto("dias", dias);
      if (dias == "0");
      else if (dias == "1") {
        alert("1 dia de la semana. Costo: $50");
      } else if (dias == "2") {
        alert("2 dia de la semana. Costo: $100");
      } else if (dias == "3") {
        alert("3 dias de la semana. Costo: $150");
      } else if (dias == "4") {
        alert("4 dias de la semana. Costo: $200");
      } else if (dias == "5") {
        alert("5 dias de la semana. Costo: $250");
      } else if (dias == "6") {
        alert("6 dias de la semana. Costo: $280");
      } else {
        alert("Opción no válida.");
      }
    } else if (visita == "2") {
      semanas = prompt(
        "Seleccione las semanas que nos visitara: \n 1. 1 Semana ($300) \n 2. 2 Semanas ($400) \n 3. 3 Semanas ($550) \n Salir."
      );
      costoTotal += calcularCosto("semanas", semanas);
      if (semanas == "0");
      else if (semanas == "1") {
        alert("1 semana de visita. Costo: $300");
      } else if (semanas == "2") {
        alert("2 semanas de visita. Costo: $400");
      } else if (semanas == "3") {
        alert("3 semanas de visita. Costo: $550");
      } else {
        alert("Opción no válida.");
      }
    } else if (visita == "3") {
      meses = prompt(
        "Seleccione los meses que nos visitara: \n 1. 1 Mes ($600) \n 2. 2 meses ($1200) \n 3. 3 meses ($1600) \n Salir."
      );
      costoTotal += calcularCosto("meses", meses);
      if (meses == "0");
      else if (meses == "1") {
        alert("Un mes de visita. Costo: $600");
      } else if (meses == "2") {
        alert("dos meses de visita. Costo: $1200");
      } else if (meses == "3") {
        alert("3 meses de visita. Costo: $1600");
      } else {
        alert("Opción no válida.");
      }
    } else if (visita == "4") {
      nombreApellido = prompt("Ingrese su nombre y apellido:");
      alert(`Nombre y apellido ingresados: ${nombreApellido}`);
    } else if (visita == "5") {
      mostrarResumen(nombreApellido, dias, semanas, meses, costoTotal);
      alert(
        "Registro para su visita completado. Lo esperamos en su casa fitness. ¡Bienvenido!"
      );
      break;
    } else if (visita == "0") {
      alert("Saliendo del sistema.");
      break;
    } else {
      alert("Opción no válida.");
    }
  }
};
