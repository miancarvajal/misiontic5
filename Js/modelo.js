/*Javascript*/

/*función para bloquear numeros*/	
	function blqlet(e) 
	{
		evt = e ? e : event;
		tecla = (window.Event) ? evt.which : evt.keyCode;
		if ((tecla < 48 || tecla > 57) && (tecla != 8 && tecla != 0 && tecla != 46))
		{
		  return false;
		}
		return true;
	}

/*función para bloquear Letras*/
	function blqnum(e) 
	{
		evt = e ? e : event;
		tecla = (window.Event) ? evt.which : evt.keyCode;
		if ((tecla < 97 || tecla >122)&& (tecla < 65 || tecla >90) && (tecla != 8 && tecla != 0 && tecla != 46 && tecla != 241 && tecla != 32  && tecla != 209  && tecla != 193 && tecla != 225 && tecla != 201 && tecla != 233 && tecla != 205 && tecla != 237 && tecla != 211 && tecla != 243 && tecla != 208 && tecla != 250))
		{
		  return false;
		 }
		 return true;
	}

/*función para calcular el indice de masa corporal*/
	function imc(talla, peso){
		var nTalla=parseFloat(talla);
		var nPeso=parseFloat(peso);
		var inMasCor=nPeso/Math.pow(nTalla,2);
		return inMasCor;
		}
/*función para indicar la clasificación de estado nutricional*/
	function cen(inMasCor){
		var clasEstNutr;
		if(inMasCor<18.5){
				clasEstNutr="Bajo de peso";	
		}else if(inMasCor>18.6 && inMasCor<24.9){
				clasEstNutr="Peso ideal";
		}else if(inMasCor>25 && inMasCor<29.9){
				clasEstNutr="Sobrepeso";
		}else if(inMasCor>30 && inMasCor<34.9){
				clasEstNutr="Obesidad";
		}else if(inMasCor>35 && inMasCor<39.9){
				clasEstNutr="Obesidad Severa";
		}else if(inMasCor>40){
				clasEstNutr="Obesidad Morbida";
		}
		return clasEstNutr;
	}
	
/*función controladora*/
	function controller(){
		var lstPersona=[];
		lstPersona=datos();
		//lstPersona.push(datos());	
		for(var i=0; i<=lstPersona.length; i++){
				console.log(lstPersona[i]);
			}
		
		/*lstPersona.foreach(function(persona){
			console.log(persona);
			});*/
		tabla();
		}
	
/*función de ingreso de datos*/
	function datos(){
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var edad = document.getElementById("edad").value;
		var peso = document.getElementById("peso").value;
		var talla = document.getElementById("talla").value;
		talla = talla / 100;	
		var indiceMasaCorporal = imc(talla, peso);
		console.log("indice de mas corporal: " + indiceMasaCorporal);
		var calssEstNutri = cen(indiceMasaCorporal);
		console.log("Clasificacion nutricional: " + calssEstNutri);
		var lstDatos = [nombre, apellido, edad, peso, talla, indiceMasaCorporal, calssEstNutri];
		return lstDatos;
		}
		
	function tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
