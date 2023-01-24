let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, ['C', "restart"], 0, '-'];

let arregloOpciones = ['+', '-', '*', '/', '='];

let numeros = [0, 0];
let opcion = null;
let respuesta = 0;
let texto = "";

function Enabled(clase) {
    let T = $("."+clase).children("div").length;
    
    for (let index = 0; index < T; index++) {
        let BUTTONS = $("."+clase).children("div")[index];
        BUTTONS.childNodes.forEach(e =>{
            if (e.textContent !== 'C') 
                e.disabled = false;
        })
    }

    $(".respuesta").children().remove()
    numeros = [0, 0];
    opcion = null;
    respuesta = 0;
    texto = "";
}

function Disabled(clase) {
    let T = $("."+clase).children("div").length;
    
    for (let index = 0; index < T; index++) {
        let BUTTONS = $("."+clase).children("div")[index];
        BUTTONS.childNodes.forEach(e =>{
            if (e.textContent !== 'C') 
                e.disabled = true;
        })
    }
}

$(() => {
    arregloNumeros.forEach(e => {
        if (e.length > 1) 
            $(".teclas-numeros").append(`<button class="${e[1]}">${e[0]}</button>`);
        else
            $(".teclas-numeros").append(`<button>${e}</button>`);
    });

    arregloOpciones.forEach(e => {
        $(".teclas-opciones").append(`<button>${e}</button>`);
    });

    // Agregar evento click
    $(".teclas-opciones").children("button").on({
        click: (e) =>{
            if (e.target.textContent === '=') {
                if (opcion === '+')  respuesta = parseFloat(numeros[0]) + parseFloat(numeros[1]);
                if (opcion === '-')  respuesta = parseFloat(numeros[0]) - parseFloat(numeros[1]);
                if (opcion === '*')  respuesta = parseFloat(numeros[0]) * parseFloat(numeros[1]);
                if (opcion === '/')  respuesta = parseFloat(numeros[0]) / parseFloat(numeros[1]);
                
                texto += "="+respuesta;

                Disabled("teclas");
                

            } else{
                opcion = e.target.textContent;
                texto += opcion;
            }
            
            $(".respuesta").html(`<p>${texto}</p>`);
        }
    })

    $(".teclas-numeros").children("button").on({
        click: (e) =>{
            if (opcion == null) 
                numeros[0] += e.target.textContent;
            else
                numeros[1] += e.target.textContent;
            
            texto += e.target.textContent;
            $(".respuesta").html(`<p>${texto}</p>`);
        }
    })

    $(".restart").on({
        click: (e) => {
            Enabled("teclas");
        }
    })
});