function addBola(){
    var pw = Math.floor(Math.random() * 1000);
    var ph = Math.floor(Math.random() * 600);
    var bola = document.createElement("div");
    bola.setAttribute("class","bolinha");

    bola.setAttribute("style","left:"+pw+"px;top:"+ph+"px");
    bola.setAttribute("onclick", "estouraBola(this)");

    document.body.appendChild(bola);
}

function estouraBola(bolinha){
    document.body.removeChild(bolinha);
}

function iniciar(){
    setInterval(addBola,500);
}