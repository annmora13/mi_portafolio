const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';
const URL_NAMES = URL_BASE + '/name/';
let contenido;
let carta;
let dataImagenes;
let dataNiveles;

function table(datos){
    contenido.innerHTML = "";

    for (let temp of datos){
        contenido.innerHTML += `<tr>
            <td scope="row">${temp.name}</td>
            <td><img width="70px" height="70px" src="${temp.img}"></td>
            <td>${temp.level}</td>
        </tr>`;
    }
}

function tarjeta(data){
    carta.innerHTML = "";

    for (let temp of data){
        carta.innerHTML += `
        <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
                <p class="card-text">LEVEL: "${temp.level}"</p>
            </div>
            </div>
            </div>
        </div>
        `
    }
}

function mostrarImagenes(){
    let img = document.getElementById("galeria");
    document.getElementById("digimoji").style.display = "none";
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "block";

    img.innerHTML = "";
    for (let temp of dataImagenes){
        img.innerHTML += ` 
        <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top" alt=" imagen ${temp.name}">
        <div class="card-body">
            <h6 class="card-title">${temp.name}</h6>
            <p class="card-text">${temp.level}</p>
        </div>
    </div>
    
`
    }
}

function mostrarNivel(){
    let level = document.getElementById("galeria");
    document.getElementById("digimoji").style.display = "none";
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "block";

    level.innerHTML = "";
    for (let temp of dataNiveles){
        level.innerHTML += ` 
        <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top" alt=" imagen ${temp.name}">
        <div class="card-body">
            <h6 class="card-title">${temp.name}</h6>
            <p class="card-text">${temp.level}</p>
        </div>
    </div>
    
`
    }
}

function capturaDato(){
    let busqueda = document.getElementById("digibite").value;
    //Busqueda = Busqueda.toLowerCase();
    document.getElementById("digimoji").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("carta").style.display = "none";
    
    fetch(URL_NAMES + busqueda )
        .then(Response => Response.json())
        .then(datos => {
            console.log(datos);
            tarjeta(datos);
        });
};

$(document).ready(function (){
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");

    fetch(URL_BASE)
        .then(Response => Response.json())
        .then(datos => {
            console.log(datos);
            table(datos);
            dataImagenes = datos;
            dataNiveles = datos;
        });
});








