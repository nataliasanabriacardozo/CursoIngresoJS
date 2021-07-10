/*1.autor: Natalia Sanabria
Ejercicio: tp1
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio1=parseInt(precio1);
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio2=parseInt(precio2);
	precio3=document.getElementById("txtIdPrecioTres").value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;

	alert("la suma de los precios es: "+suma);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio1=parseInt(precio1);
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio2=parseInt(precio2);
	precio3=document.getElementById("txtIdPrecioTres").value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;
	promedio=suma/3;


	alert("el promedio de los precios es: "+promedio);
	
}
function PrecioFinal () 
{ var precio1;
	var precio2;
	var precio3;
	var suma;
	var iva;
	var PrecioFinal;

	precio1=document.getElementById("txtIdPrecioUno").value;
	precio1=parseInt(precio1);
	precio2=document.getElementById("txtIdPrecioDos").value;
	precio2=parseInt(precio2);
	precio3=document.getElementById("txtIdPrecioTres").value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;
	iva=suma*0.21;
	PrecioFinal=suma+iva;
alert("el precio final con IVA es: "+PrecioFinal);

}