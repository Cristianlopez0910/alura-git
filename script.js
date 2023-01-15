
/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/
function removerCaracteresEspeciales(texto) {
    if (texto.constructor != String) {
        return null;
    }

    let patron = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    return texto.replace(patron, '');
}
function conversorVocales(letra) {
	var conversion = " ";
	if (letra == "a") {
		return conversion = "ai";
	}
	if (letra == "e") {
		return conversion = "enter";
	}
	if (letra == "i") {
		return conversion = "imes";
	}
	if (letra == "o") {
		return conversion = "ober";
	}
	if (letra == "u") {
		return conversion = "ufat";
	}
	conversion = letra;
	return conversion;
}

function msjGuardadoArray(msj) {			// Guardo en un array el msj para luego encriptar, unica parte extraida de internet
	let arr = [];
	for (let i of msj) {
		arr.push(i);
	}
	return arr;
}
function imprimir(frase) {
	document.write("<big>" + frase + "</big>");

}

const removerAcentos = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function encriptado() {
	let input = document.getElementById("entradatexto");
	input = removerAcentos(removerCaracteresEspeciales(input.value)); 
	

	document.getElementById("imagefinal").style.display = "none";		/* oculto la imagen*/
	document.getElementById("textoimagenfinal").style.display = "none"; /* oculto el texto*/
	document.getElementById("btcopiar").style.display = "show";
	document.getElementById("btcopiar").style.display = "inherit";
	let arr = [];
	arr = msjGuardadoArray(input.toLowerCase());
	let msjEncriptado = "";
	for (i = 0; i < arr.length; i++) {
		//imprimir(msjEncriptado = msjEncriptado + conversorVocales(arr[i]));
		msjEncriptado += conversorVocales(arr[i]);

	}
	/*return msjEncriptado;*/
	document.getElementById("areadetextofinal").innerHTML = msjEncriptado; /* Muestro el texto enciptado en textare*/

}
function vocalDesencriptado(vocal) {
	var salto = 0;

	if (vocal == "a") {
		return salto = 1;
	}
	if (vocal == "e") {
		return salto = 4;
	}
	if (vocal == "i") {
		return salto = 3;
	}
	if (vocal == "o") {
		return salto = 3;
	}
	if (vocal == "u") {
		return conversion = 3;
	}

}
function desencriptado() {
	let input = document.getElementById("entradatexto");
	input = removerAcentos(removerCaracteresEspeciales(input.value));
	
	document.getElementById("imagefinal").style.display = "none";		/* oculto la imagen*/
	document.getElementById("textoimagenfinal").style.display = "none"; /* oculto el texto*/
	document.getElementById("btcopiar").style.display = "show";
	document.getElementById("btcopiar").style.display = "inherit";
	let arr = [];
	arr = msjGuardadoArray(input.toLowerCase());
	msjDesencriptado = "";
	for (i = 0; i < arr.length; i++) {
		var bandera = true;
		if (arr[i] != "a" && arr[i] != "e" && arr[i] != "i" && arr[i] != "o" && arr[i] != "u") {
			msjDesencriptado += arr[i];
			bandera = false;

		}
		if (bandera == true) {
			msjDesencriptado += arr[i];
			i += vocalDesencriptado(arr[i]);
		}



	}
	/*return msjDesencriptado;*/

	document.getElementById("areadetextofinal").innerHTML = msjDesencriptado; /* Muestro el texto desencriptado en textare*/

}
function copiartexto() {
	let copyText = document.getElementById("areadetextofinal"); //Copio del text area en mi variable copy text
	copyText.select();											//Selecciono todo el texto
	document.execCommand('copy');								//Copio en portapapeles lo seleccionado


	//var contenido = document.getElementById("areadetextofinal");
	//contenido.ariaSelected();
	//document.execCommand("copy");
}

