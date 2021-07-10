/*3.
 Natalia Sanabria
Ejercicio: tp3
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ var temperaturaFahrenheit;
	var temperaturacentigrados;

temperaturaFahrenheit=document.getElementById("txtIdTemperatura").value;
temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

temperaturacentigrados=(temperaturaFahrenheit-32)/1.8;

alert(temperaturaFahrenheit+" grados Fahrenheit son "+temperaturacentigrados+" centigrados");
	
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var temperaturacentigrados ;

temperaturacentigrados=document.getElementById("txtIdTemperatura").value;
temperaturacentigrados=parseInt(temperaturacentigrados);

temperaturaFahrenheit=(temperaturacentigrados*1.8)+32;

alert(temperaturacentigrados+" grados centigrados son "+temperaturaFahrenheit+" Fahrenheit");





}
