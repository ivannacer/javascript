// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo para determinar si un n�mero 
// ingresado por teclado es positivo o negativo
function signo() {
	var numero01;
	// Se desplegar� en pantalla un mensaje al usuario solicitando
	// un n�mero, se deber� ingresar positivos o negativos
	document.write("Ingresar un n�mero (puede ser positivo o negativo): ",'<BR/>');
	numero01 = prompt();
	// Se compara el numero01 contra cero
	// SI es mayor o igual a 0 
	// ENTONCES se imprimir� que es POSITIVO
	// En caso contrario se imprimir� que es NEGATIVO
	if (numero01>=0) {
		document.write("= El n�mero ingresado es POSITIVO =",'<BR/>');
	} else {
		document.write("= El n�mero ingresado es NEGATIVO =",'<BR/>');
	}
}

