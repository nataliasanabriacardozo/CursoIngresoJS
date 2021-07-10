/*
autor: Natalia Sanabria
Ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ var num1;
	var num2;
	var suma;
	var mensaje;

	num1= document.getElementById("txtIdNumeroUno").value;
	//parseInt sirve para pasar un texto letra a un valor numerico (no siempre funciona)
	num1=parseInt(num1); //siempre se hace el ParseInt luego de la lectura (proceso de arriba), nunca antes

	num2= document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	//mal parseInt (no se hace asi, sino que se debe hacer cada uno por separado): suma=parseInt(num1)+parseInt(num2); o suma=parseInt(num1+num2); (tambien esta mal hecho)
 suma= num1+num2;

 mensaje= "la suma es: "+suma;
alert(mensaje);
	//cuando se toma un dato por document.getElementById("txtIdNumeroUno").value; nos devuelve el resultado concatenado al igual que si usamos "":num1="6";
	//el prompt siempre retorna algo al igual que el parseInt (pero este lo retorna transformado en numero entero), 
//
}

