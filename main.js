let contrasena = "secret";

do {
    let clave = prompt("Ingresa la clave secreta").toLowerCase()
   if (clave === contrasena) {
    alert  ("we are the champions")
    } else {
    alert ("Game over, intenta de nuevo") 
    
    }
}
while ((contrasena != clave) ) 

