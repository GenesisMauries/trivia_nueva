var hello= document.getElementById('hello');//Declaro variable para saludar
var apelativo = document.getElementById("pedirNombre"); //Declaro variable para obtener y guardar el nombre
var playNow = document.getElementById("playNow");//Variable para descicion de jugar o no
var conSi = 0; //Variables para ir contando las respuestas
var conNo = 0;
//var question1= document.getElementById (pregunta1);
var question2= document.getElementById (pregunta2);
var question3= document.getElementById (pregunta3);

function putName () { //Otorgamos accion a los datos ingresados en var name
    var name = document.getElementById("nombre").value;  
    hello. innerHTML = "Hola " + name; 
    pedirNombre.style.display = "none";
    play.style.display= "block";
    }
function claro (e){ //Intente trabajar sin la e pero no pasaba nada
    event.preventDefault (e); //No entendi cual es la funcion de la (e)
    play.style.display = "none";
    question1.style.display ="block";
}   
function pregunta2 (e){ //Preguntas almacenando el valor
    event.preventDefault (e)
    var answer2= document.getElementById ("respuesta2").value;
    if (answer2 === 2) {
        conSi +=1;
    } else {
        conNo +=1;
    }
    pregunta2.style.display = "none";
    pregunta3.style.display = "block";
}
    
function pregunta3 (e){
    event.preventDefault(e)
    var answer3= document.getElementById ("respuesta3").value;
    if (answer3 === 1) {
        conSi +=1;
        
    } else {
        conNo +=1;
        
    }
    pregunta3.style.display = "none";
}
    
