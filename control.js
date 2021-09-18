function editar_tipo_usuario(on) {
	
    
    if (on.value=="Particular"){
           divA = document.getElementById("entidades");
           divA.style.display = "none";
		   document.getElementById("usrNomEnt").removeAttribute("required");
		   document.getElementById("usrCargo").removeAttribute("required");
      }
      else{
           divB = document.getElementById("entidades");
           divB.style.display = "";
           document.getElementById("usrNomEnt").setAttribute("required", "");
		   document.getElementById("usrCargo").setAttribute("required", "");
    }       
 }

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
