console.log("Hola mundo!")

document.getElementById("boton").onclick = function () {
    console.log("Tocaron el boton");
    document.getElementById('boton').innerHTML = "Que me tocas wacho?"
    document.getElementById('titulo').innerHTML = "Porque tocaste mi boton? Que te pasa?"
}

/** 
document.getElementById("boton_color").onclick = function () {
    console.log("Cambia color");
    document.body.style.backgroundColor = '#FF0000';
}*/

document.getElementById("boton_color").addEventListener('click',function(){
    console.log("Cambia color");
    document.body.style.backgroundColor = '#FF0000';
});