// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo de suma de dos n�meros y mostrar el resultado
function suma() {
	var numero01, numero02, resultado;
	// Se desplegar� en pantalla un mensaje al usuario solicitando
	// el n�mero 1, de igual manera se solicitara el n�mero 2
	document.write("Ingresar el primer numero: ",'<BR/>');
	numero01 = prompt();
	document.write("Ingresar el segundo numero: ",'<BR/>');
	numero02 = prompt();
	// Ahora se calcula la suma y se guarda el resultado en la 
	// variable resultado
	resultado = numero01+numero02;
	// Por �ltimo desplegar el resultado almacenado en pantalla
	document.write("El resultado de la suma es: ",resultado,'<BR/>');
}

