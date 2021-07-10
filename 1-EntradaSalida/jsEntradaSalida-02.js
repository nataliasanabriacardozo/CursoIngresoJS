/*
Autor: Natalia Sanabria
Ejercicio: 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;  //declaro la variable nombre y la inicializo en cadena despues del = en este caso, el codigo siempre se ejecutara de derecha a izquirda y se guardara el resultado en la variable
nombre = prompt ("Ingrese su nombre:"); // con prompt se toma el dato que ingresa el usuario
//nombre = "lalala";

alert ("su nombre es: "+nombre); //se muestra en pantalla el dato que el usuario ingreso

}

