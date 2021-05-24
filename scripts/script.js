//variables
let formulario = document.querySelector('#formulario');
let verificarDatos = document.querySelector('#verificarDatos');
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

const alertaVerificarDatos = () => {
    
    verificarDatos.innerHTML = "";
    arreglo = JSON.parse(localStorage.getItem('Datos Cliente'));
    console.log(arreglo);
    
    arreglo === null ? (arreglo = []) : (
       arreglo.forEach(element =>{
          verificarDatos.innerHTML += `<div class="alert alert-info" role="alert">
    <i class="material-icons float-left mr-2" >
    </i>
    <img src="./images/iconos/info-lg.svg" alt="">
        <b>${element.nombreCompleto}</b>
        <b>${element.correoElectronico}</b>
        <b>${element.numeroTarjeta}</b>
        <b>${element.fechaVencimiento}</b>
        <b>${element.cvv}</b>
      <b>Verificar Datos</b>
      <span class="float-right">
          <i class="material-icons"><img src="./images/iconos/check-circle-fill.svg" alt=""></i>
          <i class="material-icons"><img src="./images/iconos/trash.svg" alt=""></i>
      </span>
</div> `
    })
    );
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
document.addEventListener('DOMContentLoaded',alertaVerificarDatos);

verificarDatos.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e)
    //console.log(e.path[3].childNodes[5].innerHTML);
    console.log(e.target.innerHTML);
/// no  me imprime el delete

})