/*
autor: Natalia Sanabria
Ejercicio: 10.bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ var importe;
	var descuento;
	var resultado;
	var porcentaje;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

porcentaje= prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

//descuento=importe*25/100;
	descuento=importe/porcentaje;
	resultado= importe-descuento;
	document.getElementById("txtIdResultado").value=resultado;
}
