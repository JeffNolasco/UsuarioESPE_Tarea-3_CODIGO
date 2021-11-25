function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	
	else if(telefono.length>10){
		alert("El telefono es muy largo");
		return false;
	}

	else if(telefono.length<10){
		alert("El telefono es muy corto");
		return false;
	}

	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}

	else if(telefono.length=10){
		document.getElementById("btnEnviar").value = "Enviando...";
		alert("DATOS ENVIADOS CORRECTAMENTE");
		document.location.href = "../index.html";
		return false;
	}
	
}
function checkSubmit() {	
    document.getElementById("btnEnviar").disabled = true;  
    //window.location.href = "../index.html";      
    return true;
}
//function redireccionar(){
//	window.location.href = "https://www.google.com.ec/";
//}