const URL_BASE = 'https://digimon-api.vercel.app/api';
const URL_NAMES = URL_BASE + '/digimon';
let contenido;

function table(datos){
    contenido.innerHTML = "";

    for (let temp of datos){
        contenido.innerHTML += `<tr>
            <td scope="row">${temp.name}</td>
            <td><img width="70px" height="70px" src="${temp.img}"></td>
            <td>${temp.level}</td>
        </tr>`;
        console.log("funciona");
    }
}

function capturaDato(){
    digibite
}

$(document).ready(function(){
    contenido = document.getElementById("contenido");
    
    fetch(URL_NAMES)
        .then (Response => Response.json())
        .then (datos => {
            console.log(datos);
//Aquí se llama la función table y se le mandan los resultados obtenidos
            table(datos);
        });

});



    
    


/*let contenido = document.getElementById("contenido");
let datosGlobal;

function tabla(datos) {
    contenido.innerHTML="";

    for (let temp of datos){
        contenido.innerHTML += `<tr>
        <th scope="row">${temp.userId}</ th>
        <td>${temp.id}</td>
        <td>${temp.title}</td>
        <td>${temp.body}</td>
    </tr>`;
    if (temp.id == 10){
        break;
        }
    }
}*/

