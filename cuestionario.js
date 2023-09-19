var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre");
var c = 0;
var i = 0;

var p1= prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno"); 



if(p1 == "B"){
    var c = c + 1;
}else if(p1 == "A"){
    var i = i + 1; 
}else if (p1 == "C"){
    var i = i + 1;
}else{
    alert("No es una opción válida")
} 



var p2= prompt"¿Qué sucede en el Polo Norte cuando llega la Primavera? 
\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad
"); 



if(p2 == "A"){
    var c = c + 1;
}else if(p2 == "B"){
    var i = i + 1; 
}else if (p2 == "C"){
    var i = i + 1;
}else{
    alert("No es una opción válida")
} 




var p3= prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte? 
\nA: Setiembre\nB: Junio\nC: Marzo
"); 



if(p3 == "c"){
    var c = c + 1;
}else if(p3 == "A"){
    var i = i + 1; 
}else if (p3 == "B"){
    var i = i + 1;
}else{
    alert("No es una opción válida")
}





var p2= prompt("¿Qué es la Fiesta de la Primavera en China? 
\nA: La Navidad\nB:  El Año Nuevo\nC: Fiestas Patrias de China
"); 



if(p2 == "B"){
    var c = c + 1;
}else if(p2 == "A"){
    var i = i + 1; 
}else if (p2 == "C"){
    var i = i + 1;
}else{
    alert("No es una opción válida")
};

if(c > i){
    document.write(nombre + "has completado exitósamente el test<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}else if(c < i){
    document.write(nombre + "has presentado problemas en el test<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}else{
    document.write(nombre + "Tu test está a medias<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}