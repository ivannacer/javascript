// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de la sentencia repetir para determinar
// de un conjunto de 10 personas si tienen derecho a jubilarse,
// considerando su g�nero, edad y a�os de aportaci�n al seguro social.
// Restricciones: 
// I. Las mujeres deben tener mas de 60 a�os
// II. Los hombres deben tener mas de 65 a�os
// III. Para todos, los a�os de aportaci�n deben ser mayores a 20
function jubilacion() {
	var aportacion, edad, genero, persona;
	persona = 1;
	do {
		document.write("Datos de persona ...",persona,'<BR/>');
		// Se desplegar� en pantalla un mensaje al usuario solicitando los datos de la persona
		document.write("�Cu�ntos a�os lleva aportando (n�mero entero)?",'<BR/>');
		aportacion = prompt();
		document.write("�Que edad tiene actualmente (n�mero entero)?",'<BR/>');
		edad = prompt();
		document.write("�Es mujer u hombre (M=Mujer, H=hombre)?",'<BR/>');
		genero = prompt();
		if (aportacion>20) {
			// Si se cumple con mas de 20 a�os de aportaci�n se verifica si es mujer 
			// u hombre para validar su edad y determinar si le corresponde jubilaci�n
			if (genero=="M" || genero=="m") {
				if (edad>60) {
					document.write("SI tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
				}
			} else {
				if (edad>65) {
					document.write("SI tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
				}
			}
		} else {
			document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
		}
		document.write("Siguiente consulta...",'<BR/>');
		// Aumentar en uno el contador principal 
		persona = persona+1;
	} while (persona!==11);
}

