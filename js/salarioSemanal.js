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

