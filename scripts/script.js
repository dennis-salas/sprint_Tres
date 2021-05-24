//variables
let formulario = document.querySelector('#formulario');

let arreglo =  [];

//funciones
const crearRegistro = (nombreC,correoE,numeroT,fechaV,cvv) => {

    let registro ={
        nombreCompleto: nombreC,
        correoElectronico: correoE,
        numeroTarjeta: numeroT,
        fechaVencimiento: fechaV,
        cvv: cvv
    }
    arreglo.push(registro);

    return registro;
}
/*let r1 = crearRegistro(1,5,9,7,4);
let r2 = crearRegistro("hi","hola","hello","chao","bay");
console.log(arreglo);*/

const guardarDatos = () => {
    localStorage.setItem('Datos Cliente', JSON.stringify(arreglo))
}



//Eventos
formulario.addEventListener('submit', e => {

    e.preventDefault();
    let nombre = document.querySelector('#nombreC').value;
    let correo = document.querySelector('#correoE').value;
    let tarjeta = document.querySelector('#numeroT').value;
    let fecha = document.querySelector('#fechaV').value;
    let cvv = document.querySelector('#ccv').value;
    
    crearRegistro(nombre,correo,tarjeta,fecha,cvv);
    guardarDatos();

    formulario.reset();
})