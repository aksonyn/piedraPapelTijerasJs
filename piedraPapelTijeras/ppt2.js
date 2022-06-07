var usuario = "Piedra"; 
var options = ["Piedra", "Papel", "Tijera"];
var computer = options[Math.floor(Math.random()*options.length)];

switch (true) {
    case (usuario === computer):
        console.log("Empate");
        break;
    case (computer === "piedra" && usuario === "papel"):
        console.log("Ganaste :D")
        break;
    case (computer === "papel"  && usuario === "tijera"):
        console.log("Ganaste :D")
        break;
    case (computer === "tijera" && usuario === "piedra"):
        console.log("Ganaste :D")
        break;
    default:
        console.log("Perdiste! :(");       
}

