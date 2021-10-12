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
		/*lstPersona=datos();*/
		lstPersona.push(datos());	
		for(var i=0; i<=lstPersona.length; i++){
				console.log(lstPersona[i]);
			}
		generar_tabla(lstPersona);
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
		var lstDatos = ({nombre: nombre, apellido: apellido, edad: edad, peso: peso, talla: talla, imc: indiceMasaCorporal, en: calssEstNutri});
		return lstDatos;
		}
		
		
/*funciones para tabla*/

function generar_tabla(lstPersona){
     /*productos = datos();*/

    let myTable= "<table><tr><td style='width: 100px; color: red;'>ID</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Nombre</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Cantidad</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Precio</td></tr>";
    myTable+="<tr><td style='width: 100px;'>---------------</td>";
    myTable+="<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable+="<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable+="<td style='width: 100px; text-align: right;'>---------------</td></tr>";    

    for (let i = 0; i < lstPersona.length; i++) {
          myTable+="<tr><td style='width: 100px;text-align: right;'>" + lstPersona[i].nombre + "</td>";        
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].apellido + "</td>";    
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].edad + "</td>";    
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].peso + "</td>";    
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].talla + "</td>";    
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].indiceMasaCorporal + "</td>";    
          myTable+="<td style='width: 100px;text-align: right;'>" + lstPersona[i].calssEstNutri + "</td>";    
          myTable+="</tr>";
    }
      
      myTable+="</table>";
      document.getElementById('tablePrint').innerHTML = myTable;
  }
  


/*SECCION DE GRAFICOS*/
/*function cargueDatos(){
	var datosImc = new google.visualization.DataTable();
	datosImc.addColumn('string','Categoria Estado Nutricional')
	datosImc.addColumn('number','Votos')
	//Bajo de peso, Peso ideal, Sobrepeso, Obesidad, Obesidad Severa, Obesidad Morbida
	datosImc.addRows([['Bajo de peso',10, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
					  ['Peso ideal',8,'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
					  ['Sobrepeso',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
					  ['Obesidad',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
					  ['Obesidad Severa',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
					  ['Obesidad Morbida',5, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF']
	]);
	return datosImc;
	}*/
				
function dibujarGraficoBarras(){
		var data = google.visualization.arrayToDataTable([
        ['', '', { role: 'style' }],
        ['Bajo de peso',10, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
		['Peso ideal',8,'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
		['Sobrepeso',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
		['Obesidad',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
		['Obesidad Severa',8, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
		['Obesidad Morbida',5, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF']
      ]);

      var options = {
        title: 'GRAFICO DE ESTADO NUTRICIONAL',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Cantidad de personas',
          minValue: 0
        },
        vAxis: {
          title: 'Estado'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('graficoBarras'));

      chart.draw(data, options);
}
			
