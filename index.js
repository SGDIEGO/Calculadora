let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, ''];

let arregloOpciones = ['+', '-', '*', '/', '='];

$(document).ready(() => {
    arregloNumeros.forEach(e => {
        $(".teclas-numeros").append(`<button>${e}</button>`);
    });

    arregloOpciones.forEach(e => {
        $(".teclas-opciones").append(`<button>${e}</button>`);
    });
});