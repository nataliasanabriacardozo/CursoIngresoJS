/* 
autor: Natalia Sanabria
ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{  var nombre;
	var mensaje;
	
	nombre=prompt("ingrese nombre"); //muestra cuadro de texto y deja ingresar texto al usuario
mensaje="su nombre es: "+nombre;

document.getElementById('txtIdNombre').value=mensaje; //muestra el texto que usuario ingreso en el cuadro de texto de HTML


}

