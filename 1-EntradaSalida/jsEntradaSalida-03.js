/*
Autor: Natalia Sanabria
ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()

{ // primera forma de hacerlo:
var nombreIngresado;

//traemos el valor de la caja de texto desde HTML y con el = se lo asignamos a la variable nombre
nombreIngresado = document.getElementById("txtIdNombre").value;
alert("Su nombre es: "+nombreIngresado);

 //segunda forma de hacerlo que funciona gracias al navegador (que a mi no me funciona) 
   //nombre = txtIdNombre.value;
	//alert (nombre);
 document.getElementById("txtIdNombre").value = " "; //si dejamos la comilla con espacio nos deja la caja de texto en blanco para ingresar otro dato
}


