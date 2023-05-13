var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function () {
    artyom.say("sonido activado");
});

artyom.addCommands([
    {
        indexes: ["abir puerta uno"],
        action: function () {
            artyom.say(" abriendo puerta habitación 1")
        }
    },

    {
        indexes: ["cerrar puerta uno"],
        action: function () {
            artyom.say("cerrando puerta habitacion 1")
        }
    },
    
    {
        indexes: ["abrir ventana uno"],
        action: function () {
            artyom.say("abriendo ventana habitacion uno")
        }
    },
    {
        indexes: ["abrir puerta dos"],
        action: function () {
            artyom.say("abriendo puerta habitacion dos")
        }
    }, 
    {
        indexes: ["cerrar puerta dos"],
        action: function () {
            artyom.say("cerrando puerta habitacion dos")
        }
    },
    {
        indexes: ["abrir ventana dos"],
        action: function () {
            artyom.say("abriendo ventana habitacion dos")
        }
    },
    {
        indexes: ["cerrar ventana tres"],
        action: function () {
            artyom.say("cerrando ventana habitacion tres")
        }
    }, {
        indexes: ["abrir puerta 3"],
        action: function () {
            artyom.say("abriendo puerta habitacion 3")
        }
    }, {
        indexes: ["cerrar puerta 3"],
        action: function () {
            artyom.say("cerrando puerta habitacion 3")
        }
    },
    {
        indexes: ["abrir ventana tres"],
        action: function () {
            artyom.say("abriendo ventana habitacion tres")
        }
    },
    {
        indexes: ["cerrar ventana tres"],
        action: function () {
            artyom.say("cerrando ventana habitacion 3")
        }
    },
    {
        indexes: ["abrir puerta baño principal"],
        action: function () {
            artyom.say("abriendo puerta baño habitacion principal")
        }
    }, {
        indexes: ["cerrar puerta baño principal"],
        action: function () {
            artyom.say("cerrando puerta baño habitacion principal")
        }
    },
    {
        indexes: ["abrir ventana baño principal"],
        action: function () {
            artyom.say("abriendo ventana baño habitacion principal")
        }
    },
    {
        indexes: ["cerrar ventana baño principal"],
        action: function () {
            artyom.say("cerrando ventana baño habitacion principal")
        }
    },
    {
        indexes: ["abrir puerta baño"],
        action: function () {
            artyom.say("abriendo puerta baño")
        }
    }, {
        indexes: ["cerrar puerta baño"],
        action: function () {
            artyom.say("cerrando puerta baño")
        }
    },
    {
        indexes: ["abrir ventana baño"],
        action: function () {
            artyom.say("abriendo ventana baño ")
        }
    },
    {
        indexes: ["cerrar ventana baño"],
        action: function () {
            artyom.say("cerrando ventana baño")
        }
    },
    {
        indexes: ["abrir ventana ropas"],
        action: function () {
            artyom.say("abriendo ventana ropas")
        }
    },
    {
        indexes: ["cerrar ventana ropas"],
        action: function () {
            artyom.say("cerrando ventana ropas")
        }
    },
    {
        indexes: ["abrir puerta principal"],
        action: function () {
            artyom.say("abriendo puerta principal")
        }
    }, {
        indexes: ["cerrar puerta principal"],
        action: function () {
            artyom.say("cerrando puerta principal")
        }
    },
    {
        indexes: ["abrir puerta balcon"],
        action: function () {
            artyom.say("abriendo puerta balcon")
        }
    }, {
        indexes: ["cerrar puerta balcon"],
        action: function () {
            artyom.say("cerrando puerta balcon")
        }
    },
    {
        indexes: ["prender luz habitación principal"],
        action: function () {
            artyom.say("prendiendo luz habitacion principal")
        }
    }, {
        indexes: ["apagar luz habitación principal"],
        action: function () {
            artyom.say("apagando luz habitacion principal")
        }
    },
    {
        indexes: ["prender luz habitatición dos"],
        action: function () {
            artyom.say("prendiendo luz habitacion dos")
        }
    }, {
        indexes: ["apagar luz habitación dos"],
        action: function () {
            artyom.say("apagando luz habitacion dos")
        }
    },
    {
        indexes: ["Prender luz habitación tres"],
        action: function () {
            artyom.say("prendiendo luz habitacion tres")
        }
    }, {
        indexes: ["apagar luz habitación tres"],
        action: function () {
            artyom.say("apagando luz habitacion tres")
        }
    },
    {
        indexes: ["prender luz baño habitación principal"],
        action: function () {
            artyom.say("prendiendo luz baño habitacion principal")
        }
    }, {
        indexes: ["apagar luz baño habitación principal"],
        action: function () {
            artyom.say("apagando luz baño habitacion principal")
        }
    }, {
        indexes: ["prender luz baño"],
        action: function () {
            artyom.say("prendiendo luz baño")
        }
    }, {
        indexes: ["apagar luz baño"],
        action: function () {
            artyom.say("apagando luz baño")
        }
    },
    {
        indexes: ["prender luz estudio"],
        action: function () {
            artyom.say("prendiendo luz estudio")
        }
    }, {
        indexes: ["apagar luz estudio"],
        action: function () {
            artyom.say("apagando luz estudio")
        }
    },
    {
        indexes: ["prender luz ropas"],
        action: function () {
            artyom.say("prendiendo luz ropas")
        }
    }, {
        indexes: ["apagar luz ropas"],
        action: function () {
            artyom.say("apagando luz ropas")
        }
    },
    {
        indexes: ["prender luz cocina"],
        action: function () {
            artyom.say("prendiendo luz cocina")
        }
    }, {
        indexes: ["apagar luz cocina"],
        action: function () {
            artyom.say("apagando luz cocina")
        }
    },
    {
        indexes: ["prender luz vestier"],
        action: function () {
            artyom.say("prendiendo luz vestier")
        }
    }, {
        indexes: ["apagar luz vestier"],
        action: function () {
            artyom.say("apagando luz vestier")
        }
    },
    {
        indexes: ["prender luz sala"],
        action: function () {
            artyom.say("prendiendo luz sala")
        }
    }, {
        indexes: ["apagar luz sala"],
        action: function () {
            artyom.say("apagando luz sala")
        }
    }

]);

artyom.initialize({
    lang: "es-ES",
    debug: true,
    listen: true,
    continuous: true,
    speed: 0.9,
    mode: "normal"
});

artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
    if (isFinal) {
        console.log("Texto final reconocido: " + recognized);
    } else {
        console.log(recognized);
    }
});