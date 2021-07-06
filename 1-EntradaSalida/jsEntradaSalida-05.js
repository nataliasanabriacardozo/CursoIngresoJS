/*
autor: Natalia Sanabria
Ejercicio: 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
let nombre;
let edad;
let mensaje;
//nombre= "José";
nombre= document.getElementById('txtIdNombre').value;
	//edad="66";
	edad=document.getElementById('txtIdEdad').value;

mensaje= 
alert("Usted se llama "+nombre+ " tiene "+edad+" años");
//mensaje= "Usted se llama";
//mensaje=mensaje+nombre;
//mensaje=mensaje+"y tiene";
//mensaje= mensaje+edad;
//mensaje=mensaje+"años";
}

