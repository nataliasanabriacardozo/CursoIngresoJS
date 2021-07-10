/*
autor: Natalia Sanabria
Ejercicio: 09 bis. pedir porcentaje a usario por prompt
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ var sueldo;
	var nuevoSueldo;
	var aumento;
	var porcentaje;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

 //aumento= sueldo*10/100;
porcentaje= prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	aumento=sueldo/porcentaje;
	nuevoSueldo=sueldo+aumento;
	document.getElementById("txtIdResultado").value=nuevoSueldo;
}
