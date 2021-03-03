
function mostrar()

{
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;

	let acumAlc = 0;
	let contAlc = 0;
	let promedioAlc;
	let contIAC = 0;
	let acumIAC = 0;
	let promIAC = 0;
	let contQUAT = 0;
	let acumQUAT = 0;
	let promQUAT = 0;

	let acumDesing = 0;
	let acumDeter =0;
	let acumBac =0;
	let categoriaMax;

	let contDeterBarato =0;


	let flag = 1;
	let tipoMax;
	let precioMax;
	let fabricanteMax;

	for(let i=0;i<1;i++){

		tipo = prompt("Ingrese tipo de producto ALCOHOL / IAC / QUAT:");
			while(tipo!="ALCOHOL"&& tipo!="IAC"&& tipo!= "QUAT"){
			tipo=prompt("Ingrese tipo de producto ALCOHOL / IAC / QUAT:");}
		
		precio = parseInt(prompt('Ingrese el precio entre ($100 y $300)'));
			while(isNaN(precio)||precio<100||precio>300){
		precio=parseInt(prompt('Ingrese el precio entre ($100 y $300)'));}

		cantidad = parseInt(prompt("Ingrese cantidad de unidades (no más de 1.000)"));
			while(isNaN(cantidad)||cantidad<1||cantidad>1000){
		cantidad=parseInt(prompt("Error. Ingrese cantidad de unidades (no más de 1.000)"));}
		
		categoria = prompt("Ingrese categoria (desinfectante / bactericida / detergente):");
			while(categoria!="desinfectante"&& categoria!="bactericida"&& categoria!="detergente"){
		categoria = prompt("Ingrese categoria (desinfectante / bactericida / detergente):")}

		fabricante = prompt ("Ingrese fabricante:" );		

		switch (tipo){

		case "ALCOHOL":
		acumAlc+= cantidad;
		contAlc++;
		break;

		case "IAC":
		acumIAC+= cantidad;
		contIAC++;
		break;
		
		case "QUAT":
		acumQUAT += cantidad;
		contIAC++;
		break;
	}	
		
		switch (categoria){

		case "desinfectante":
		acumDesing += cantidad;
		break;
		
		case "detergente":
		acumDeter += cantidad;
		if (precio<= 200){
		contDeterBarato += cantidad;	
		}
		break;

		case "bactericida":
		acumBac += cantidad;
		break;
		}

		if (flag || precio > precioMax){
		precioMax = precio;
		categoriaMax = categoria;	
		fabricanteMax = fabricante;
		flag = 0;
		}

			}
	if (contAlc > 0){
	promedioAlc = acumAlc/contAlc;
	}

	if (contIAC > 0){
	promIAC = acumIAC / contIAC;}

	if (contQUAT > 0){
	promQUAT = acumQUAT / contQUAT;
	}

	if (acumDesing > acumDeter && acumDesing > acumBac){
	categoriaMax = "desinfectante";
	}

	if (acumDeter >= acumDesing && acumde > acumBac){
	categoriaMax = "detergente";
	}

	else {
	categoriaMax = "bactericida";
	}



	console.log("A- El promedio por cada tipo es: 1- Alcohol: " + promedioAlc + ". 2- IAC: "+promIAC+". 3- Quat: "+promQUAT);

	console.log("B- la categoria con más cantidad de unidades en total de la compra es: "+categoriaMax);

  	console.log("C- Unidades de detergente con precios menos a 200 (inclusive) en total: "+contDeterBarato);
	
	console.log("D- El fabricante y categoria del mas caro de los productos es " + " Fabricante : " +fabricanteMax + " categoria: " + categoriaMax);

}
