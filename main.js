let option;
let nombre;
let apellido;
{
  option = prompt;
  ("Ingrese los dias que visitara en su casa famliafit vazquez: \n 1. Dias \n 2. Semanas \n 3. Meses \n 4. Ingrese sus datos para la visita \n 0. Salir");

  if (option == 1)
    prompt(
      "Seleccione los dias que nos visitara: \n 1. 1 dia ($50) \n 2. 2 dias ($100) \n 3. 3 dias ($150) \n 4. 4 dias ($200) \n 5. 5 dias ($250) \n 6. 6 dias ($280)"
    );
  if (option == 2) {
    prompt(
      "Seleccione las semanas que nos visitara: \n 1. 1 Semana ($300) \n 2. 2 Semanas ($400) \n 3. 3 Semanas ($550)"
    );
  }
  if (option == 3) {
    prompt(
      "Seleccione los meses que nos visitara: \n 1. 1 Mes ($600) \n 2. 2 meses ($1200) \n 3. 3 meses ($1600)"
    );
  }
  if (option == 4) {
    prompt("Favor de colocar su nombre y sus apellidos para generar la visita");
  } else if (option == 0) {
    alert("Gracias por su visita, lo esperamos en su hogar fitnes!");
  }
}
