const usuario = "Piedra";

function pptGame(usuario){

    var options = ["Piedra","Papel","Tijeras"];
    var rand = Math.floor(Math.random()*options.length);
    var pcChoose = options[rand];

    if(usuario == "Piedra" && pcChoose == "Papel"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Pierde")

    }else if(usuario == "Piedra" && pcChoose == "Tijeras"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Gana")

    }else if(usuario == "Papel" && pcChoose == "Tijeras"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Pierde")

    }else if(usuario == "Piedra" && pcChoose == "Piedra"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Gana")

    }else if(usuario == "Tijeras" && pcChoose == "Piedra"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Pierde")

    }else if(usuario == "Tijeras" && pcChoose == "Papel"){

        console.log("Usted saco: " + usuario + " El computador saco: " + pcChoose)
        console.log("Usted Gana")

    }else{

        console.log("empate")

    }  
    
}

console.log(pptGame(usuario));