// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo de suma de dos números y mostrar el resultado
function suma() {
	var numero01, numero02, resultado;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// el número 1, de igual manera se solicitara el número 2
	numero01 = Number(prompt("Ingresar el primer numero: ",));
	numero02 = Number(prompt("Ingresar el primer numero: ",));
	// Ahora se calcula la suma y se guarda el resultado en la 
	// variable resultado
	resultado = numero01+numero02;
	// Por último desplegar el resultado almacenado en pantalla
    document.write("El resultado de la suma es: ",resultado,'<BR/>');
    alert("El resultado de la suma es: "+resultado)
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo para determinar si un número 
// ingresado por teclado es positivo o negativo
function signo() {
	var numero01;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// un número, se deberá ingresar positivos o negativos
	document.write("Ingresar un número (puede ser positivo o negativo): ",'<BR/>');
	numero01 = prompt();
	// Se compara el numero01 contra cero
	// SI es mayor o igual a 0 
	// ENTONCES se imprimirá que es POSITIVO
	// En caso contrario se imprimirá que es NEGATIVO
	if (numero01>=0) {
		document.write("= El número ingresado es POSITIVO =",'<BR/>');
	} else {
		document.write("= El número ingresado es NEGATIVO =",'<BR/>');
	}
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Calculadora Suma, Resta, Multiplicación y División 
// empleando condicionales si-entonces (IF-THEN)
function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opción a realizar
	document.write("Posibles operaciones a realizar :",'<BR/>');
	document.write("1: Sumar",'<BR/>');
	document.write("2: Restar",'<BR/>');
	document.write("3: Multiplicar",'<BR/>');
	document.write("4: Dividir",'<BR/>');
	// De acuerdo a la elección se compara contra cada una de las
	// opciones para realizarla y terminar el programa
	document.write("¿Que operación deseas realizar? :",'<BR/>');
	opcion_num = prompt();
	// Operación: Suma
	if (opcion_num==1) {
		document.write("Ingresar el primer valor",'<BR/>');
		numero01 = Number(prompt());
		document.write("Ingresar el segundo valor",'<BR/>');
		numero02 = Number(prompt());
		resultado = numero01+numero02;
		document.write("La suma de ",numero01,"+",numero02,"=",resultado,'<BR/>');
	} else {
		// Operación: Resta
		if (opcion_num==2) {
			document.write("Ingresar el primer valor",'<BR/>');
			numero01 = Number(prompt());
			document.write("Ingresar el segundo valor",'<BR/>');
			numero02 = Number(prompt());
			resultado = numero01-numero02;
			document.write("La resta de ",numero01,"-",numero02,"=",resultado,'<BR/>');
		} else {
			// Operación: Multiplicación
			if (opcion_num==3) {
				document.write("Ingresar el primer valor",'<BR/>');
				numero01 = Number(prompt());
				document.write("Ingresar el segundo valor",'<BR/>');
				numero02 = Number(prompt());
				resultado = numero01*numero02;
				document.write("La multiplicación de ",numero01,"x",numero02,"=",resultado,'<BR/>');
			} else {
				// Operación: División
				if (opcion_num==4) {
					document.write("Ingresar el primer valor",'<BR/>');
					numero01 = Number(prompt());
					document.write("Ingresar el segundo valor",'<BR/>');
					numero02 = Number(prompt());
					resultado = numero01/numero02;
					document.write("La división de ",numero01,"/",numero02,"=",resultado,'<BR/>');
				}
			}
		}
	}
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de condicional switch para identificar
// si un número está dentro de un rango sugerido y visualizar
// el mes del calendario 
function mescalendario() {
	var numeromes;
	document.write("Ingresar un número entre el 1 al 12, para visualizar el mes",'<BR/>');
	numeromes = Number(prompt());
	// Se desplegará el mes de acuerdo al número elegido
	// En caso que no sea ninguna de las opciones válidas
	// se solicitará reiniciar el programa
	switch (numeromes) {
	case 1:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es ENERO",'<BR/>');
		break;
	case 2:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es FEBRERO",'<BR/>');
		break;
	case 3:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es MARZO",'<BR/>');
		break;
	case 4:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es ABRIL",'<BR/>');
		break;
	case 5:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es MAYO",'<BR/>');
		break;
	case 6:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es JUNIO",'<BR/>');
		break;
	case 7:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es JULIO",'<BR/>');
		break;
	case 8:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es AGOSTO",'<BR/>');
		break;
	case 9:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es SEPTIEMBRE",'<BR/>');
		break;
	case 10:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es OCTUBRE",'<BR/>');
		break;
	case 11:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es NOVIEMBRE",'<BR/>');
		break;
	case 12:
		document.write("Número de mes válido",'<BR/>');
		document.write("El mes es DICIEMBRE",'<BR/>');
		break;
	default:
		document.write("Número de mes inválido",'<BR/>');
		document.write("Deberá iniciar el programa",'<BR/>');
	}
}

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

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de ciclos for para
// imprimir la tabla de multiplicar de un número
// ingresado por el usuario
function tablamultiplicar() {
	var contador01, numero01;
	document.write("Ingresar un número para generar su tabla de multiplicar",'<BR/>');
	numero01 = prompt();
	// Con este ciclo se genera la multiplicación del número ingresado
	// en cada iteración por el valor del contador (variable de control)
	// desde 1 hasta llegar a 10 de uno en uno
	for (contador01=1;contador01<=10;contador01++) {
		// Desplegar el valor de la multiplicación actual
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo para calcular el salario semanal de un trabajador
function salariosemanal() {
	var base, horas, salario;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// ingresar por teclado el número de horas trabajadas por semana
	// e ingresar por teclado el salario base por hora
	document.write("Ingresar el número de horas trabajadas en la semana ...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base por hora ...",'<BR/>');
	base = Number(prompt());
	// Calcular el salario con los datos ingresados
	salario = horas*base;
	// Desplegar el salario semanal
	document.write("El salario semanal será de: ",salario,"pesos",'<BR/>');
	horas = Number(prompt());
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de la sentencia repetir para determinar
// de un conjunto de 10 personas si tienen derecho a jubilarse,
// considerando su género, edad y años de aportación al seguro social.
// Restricciones: 
// I. Las mujeres deben tener mas de 60 años
// II. Los hombres deben tener mas de 65 años
// III. Para todos, los años de aportación deben ser mayores a 20
function jubilacion() {
	var aportacion, edad, genero, persona;
	persona = 1;
	do {
		document.write("Datos de persona ...",persona,'<BR/>');
		// Se desplegará en pantalla un mensaje al usuario solicitando los datos de la persona
		document.write("¿Cuántos años lleva aportando (número entero)?",'<BR/>');
		aportacion = prompt();
		document.write("¿Que edad tiene actualmente (número entero)?",'<BR/>');
		edad = prompt();
		document.write("¿Es mujer u hombre (M=Mujer, H=hombre)?",'<BR/>');
		genero = prompt();
		if (aportacion>20) {
			// Si se cumple con mas de 20 años de aportación se verifica si es mujer 
			// u hombre para validar su edad y determinar si le corresponde jubilación
			if (genero=="M" || genero=="m") {
				if (edad>60) {
					document.write("SI tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilación",'<BR/>');
				}
			} else {
				if (edad>65) {
					document.write("SI tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilación",'<BR/>');
				}
			}
		} else {
			document.write("NO tiene derecho a la jubilación",'<BR/>');
		}
		document.write("Siguiente consulta...",'<BR/>');
		// Aumentar en uno el contador principal 
		persona = persona+1;
	} while (persona!==11);
}
