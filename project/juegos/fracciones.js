var num1, num2, respuesta,respuestau,respuestaumu,respuestaumd,respuestaumt,respuestaunu,respuestaund;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*9);
	num2 = Math.round(Math.random()*9);
    respuesta = num1 / num2;
	respuestau = respuesta.toFixed(1)
	console.log((respuestau-1).toFixed(2));
	//asignamos lo números para que se muestren
	suma.innerHTML = num1 + " / " + num2 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuestau
		op2.innerHTML = respuestau + 1
		op3.innerHTML = respuestau - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuestau - 1
		op2.innerHTML = respuestau
		op3.innerHTML = respuestau - 2
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuestau + 2
		op2.innerHTML = respuestau + 3
		op3.innerHTML = respuestau
	}
}

function controlarRespuesta(opcionElegida){

	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color="green";
		setTimeout(comenzar, 2000);
	}else{
		txt_msj.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj.style.color="red";
		setTimeout(limpiar, 2000);

	}
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();
