// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de los condicionales while (mientras)
// y  if-then (si-entonces) para realizar la suma de los números
// pares y los impares
function sumapareseimpares() {
	var i, suma_impar, suma_par;
	// se declaran variables de apoyo para nuestro programa
	// i es nuestro contador principal
	// conviene que se inicie en 1 es decir  i<-1 
	// suma_par llevará una acumulación de la suma números pares
	// se inicia en 0, suma_par<-0
	// suma_impar llevará una acumulación de la suma números impares
	// se inicia en 0, suma_impar<-0
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	// se realizará este proceso del 1 al 100
	while (i<101) {
		// si el residuo de dividir el valor actual de i entre 2
		// es cero, se suma el valor actual de i a la suma_par
		// de lo contrario, se suma a la suma_impar
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_impar = suma_impar+i;
		}
		// se incrementa el valor del contador principal
		i = i+1;
	}
	document.write("La suma de los primeros 100 numeros pares es..",'<BR/>');
	document.write(suma_par,'<BR/>');
	document.write("La suma de los primeros 100 numeros impares es..",'<BR/>');
	document.write(suma_impar,'<BR/>');
}

