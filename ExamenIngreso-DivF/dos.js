function mostrar()
{

  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;


  let nombreMejorPromedio;
  let notaMax;
  let flag = 1;

  let nombreMasViejo;
  let flagViejo = 1;
  let maxEdad;
  
  let acumTrabajando = 0;
  let contadorTrabajando =0;
  do{

    nombre = prompt ("Ingrese nombre: ");

    situacionLaboral = prompt ("Ingrese situacion laboral (buscando-trabajando-soloestudiante)");
    while (situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "soloestudiante") 
    situacionLaboral = prompt ("Error.Ingrese situacion laboral (buscando-trabajando-soloestudiante)");

    cantidadMaterias = parseInt (prompt ("Ingrese cantidad de materias "));
    while (cantidadMaterias <1 || cantidadMaterias >8){
    cantidadMaterias = parseInt (prompt ("Error. Ingrese cantidad de materias (mas de 0) ")); 
    }

    sexo = prompt ("Ingrese sexo (femenino - masculino - nobinario)")
    while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario"){
    sexo = prompt ("Error. Ingrese sexo (femenino - masculino - nobinario)")}
    
  
    notaPromedio = parseFloat (prompt ("Ingrese nota (entre 0 y 10) :"));
    while (notaPromedio <0 || notaPromedio >10 || isNaN (notaPromedio)){
      notaPromedio = parseFloat (prompt ("Error. Ingrese nota (entre 0 y 10) :"));  
    }

    edad = parseInt(prompt("Ingrese edad :"))
		while (edad < 18 || isNaN(edad)) {
			edad = prompt("Error Ingrese edad (mayor de 18):")
    }

    if(situacionLaboral != "buscando" || situacionLaboral != "trabajando"){
      if(flag || notaPromedio > notaMax) {
      notaMax = notaPromedio;
      nombreMejorPromedio = nombre;
      flag = 0;
      }
    }

    if (situacionLaboral == "soloestudiante"){
      if (flag || edad > maxEdad) {
      maxEdad = edad;
      nombreMasViejo = nombre;
      flagViejo = 0;
      }
    }

    switch (notaPromedio)
  {
    case "trabajando":
    acumTrabajando+=nota;
    contadorTrabajando++;
    break

    case "Buscando":
    break;

    case "Soloestudiante":
    break;

    }
  seguir = prompt ("¿Desea ingresar otro alumno? :") 

  }while (seguir == 's')

  console.log ("A- El nombre del alumno con mejor nota que no esta trabajando o buscando es: " +nombreMejorPromedio);

  console.log ("B- El nombre del alumno mas viejo que es solo estudiante es: " +nombreMasViejo)





}
