<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="forms">
		<div class="body">    
		<form name = "formulario" id="formulario" method="POST" action="">      
			<div class="container">
				<div class="row">
					<div class="col-md-6">              
						Nombres:
					</div>
					<div class="col-md-6">              
						<input type="text" maxlength="40" name="" id="nombre" size="15" onkeypress="return blqnum(event);"/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">              
						Apellidos:
					</div>
					<div class="col-md-6">              
						<input type="text" maxlength="40" name="" id="apellido" size="15" onkeypress="return blqnum(event);"/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">              
						Edad:
					</div>
					<div class="col-md-6">              
						<input type="number" name="edad" id="edad" min="0" max="100" onkeypress="return blqlet(event);"/>
					</div>
				</div>
				<div name="medidas">
					<div class="row">
						<div class="col-md-6">              
							Peso (kg):
						</div>
						<div class="col-md-6">              
							<input type="number" name="" id="peso" min="0" max="300" onkeypress="return blqlet(event);"/>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">              
							Talla (cm):
						</div>
						<div class="col-md-6">              
							<input type="number" name="talla" id="talla" min="15" max="255" onkeypress="return blqlet(event);"/>
						</div>
					</div>
				</div>
				<div class="col-md-12"> 
					<input name="enviar" type="submit" align="centre" id ="enviar" value="Enviar" onclick="controller()"/>
				</div>
			</div>
         </form>
		</div>
	</section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header{
    text-align: center;
    position: relative;
    width: 100%;
    height: 35px;
    clear:both;
    background-color: #0a102e;
    font-family:'century gothic';
    color: white;
    
}

.nav{
    width: 100%;

}

img{
    margin: auto;
    display: block;
}

.forms{
    width: 400px;
    background: #24303c;
    padding: 30px;
    margin: auto;
    margin-top: 10px;
    border-radius: 4px;
    font-family: 'calibri';
    color: white;

}

.medidas{
	width: 10%;

}
.edad{
	width: 40%;
}

</style>
