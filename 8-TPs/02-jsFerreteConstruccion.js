/*2.
 Natalia Sanabria
Ejercicio: tp2	
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById("txtIdLargo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("txtIdAncho").value;
	ancho=parseInt(ancho);

perimetro=(ancho+largo)*2;
alambre=perimetro*3;

alert("se necesita comprar "+alambre+ " metros de alambre");



}
function Circulo () 
{
	var radio;
	var alambre;
	var perimetro;

	radio=document.getElementById("txtIdRadio").value;
	radio=parseInt(radio);

perimetro=2*3.14*radio;
alambre=perimetro*3;

alert("se necesita comprar "+alambre+ " metros de alambre");


}
function Materiales () 
{
	var ancho;
	var largo;
	var area;
	var cemento;
	var cal;

	largo=document.getElementById("txtIdLargo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("txtIdAncho").value;
	ancho=parseInt(ancho);

	area=largo*ancho;
	cal=area*3;
	cemento=area*2;

alert("para el contrapiso de "+area+"m2 se necesita "+cemento+ " bolsas de cemento y "+cal+ " de cal");
}