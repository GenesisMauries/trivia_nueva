var hello= document.getElementById('hello');//Declaro variable para saludar
var apelativo = document.getElementById("pedirNombre"); //Declaro variable para obtener y guardar el nombre
var playNow = document.getElementById("playNow");//Variable para descicion de jugar o no
//var conSi = 0; //Variables para ir contando las respuestas
//var conNo = 0;
var contenido= document.getElementById("contenido");
var question1= document.getElementById("pregunta1");
var question2= document.getElementById("pregunta2");
var question3= document.getElementById("pregunta3");
var correcta1, correcta2, correcta3;
var incorrecta1, incorrecta2, incorrecta3;
var respuestas= document.getElementById('respuestas')
var verCorrectas= document.getElementById('verCorrectas')
var verIncorrectas= document.getElementById('verIncorrectas')

function putName () { //Otorgamos accion a los datos ingresados en var name
    var name = document.getElementById("nombre").value;
    hello.innerHTML = "Hola " + name;
    pedirNombre.style.display = "none";
    playNow.style.display= "block";
}
function empezarJuego (e){ //Intente trabajar sin la e pero no pasaba nada
    event.preventDefault (e); //No entendi cual es la funcion de la (e) "e"
    playNow.style.display = "none";
    question1.style.display ="block";
}
function cancelarJuego(e) {
    event.preventDefault (e); //No entendi cual es la funcion de la (e) "e"
    contenido.innerHTML = "Nos vemos pronto";
}

function pregunta1(e) {
  event.preventDefault(e)
  var answer1 = document.querySelector("input[name='option1']:checked").value;
  if (answer1 === 'eucalipto') {
      correcta1 = answer1;
  } else {
      incorrecta1 = answer1;
  }
  question1.style.display = "none";
  question2.style.display ="block"
}

function pregunta2(e) {
  event.preventDefault(e)
  var answer2 = document.querySelector("input[name='option2']:checked").value;
  if (answer2 === 'bambu') {
      correcta2 = answer2;
  } else {
      incorrecta2 = answer2;
  }
  question2.style.display = "none";
  question3.style.display ="block"
}

function pregunta3(e) {
  event.preventDefault(e)
  var answer3 = document.querySelector("input[name='option3']:checked").value;
  if (answer3 === 'salmon') {
      correcta3 = answer3;
  } else {
      incorrecta3 = answer3;
  }
  question3.style.display = "none";
  respuestas.style.display ="block"
  var correctas = correcta1 +  correcta2 + correcta3;
  var incorrectas = incorrecta1 +  incorrecta2 + incorrecta3;
  verCorrectas.innerHTML = correctas;
  verIncorrectas.innerHTML = incorrectas
}
