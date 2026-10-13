let bateria= 18;
if( bateria < 20){
console.log("Cargar Bateria")
}else{
console.log("Hay Suficiente Bateria")
}

let totalcompra= 50.000;
if( totalcompra >= 50.000){
    console.log("!Tiene envio gratis¡")
}

let num= 8;
if(num %  2 ){
    console.log("El numero es par")
}else{
    console.log("El numero es impar")
}

let nota= 3.5;
if( nota >= 3.0){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}

let a= 23;
let b= 43;
if(a >= b){
    console.log("Es mayor")
}else{
    console.log("Es menor")
}

let temp=10
if( temp < 10){
    console.log("Hace frio");
}else if(temp >=10 && temp <= 24){
    console.log("Clima templado");
}else if (temp >= 25){
    console.log("hace calor");
}

let not= 86;
if(not < 0 || not > 100){
    console.log("Nota invalidad");
}else if(not >= 90){
    console.log("A");
}else if(not >=80){
    console.log("B");
}else if(not >=70){
    console.log("C");
}else if(not >=60){
    console.log("D");
}else if(not < 60){
    console.log("F");
}else if(not > 100){ 
    console.log("Nota invalida");
 }

let edad= 17;
let tieneEntrada= true;
if(edad < 18){
    console.log("No puede entrar");
}else{
    if(tieneEntrada == true){
    console.log("Bienvenido");
    }else{
    console.log("Debes comprar una entrada");
    }
}

let usuario= "admin";
let contraseña= "1701";

 if(usuario == "admin"){
    if(contraseña ==="1701"){
        console.log("Acceso Concedido");
    }else{
        console.log("Contraseña incorrecta");
    }
 }

 let tcompra= 300;
 let escliente= true;
 let descuento= 0;

 if(tcompra > 100)
 if(escliente == true){
    (descuento = tcompra * 0.20)
 }else{
    descuento= tcompra *0.10;
 
} else{
    if(esciente === true){
        descuento= tcompra * 0.05
    }else{
        descuento=0
    }
} 
let totalfinal= tcompra - descuento;
 console.log("descuento aplicado: "+descuento)
 console.log("total a pagar:" + totalfinal)



