
var parrafos;
var links;

function parrafo(parrafoSingolo) {
    const anclas = parrafoSingolo.getElementsByTagName("a");
        for (let i = 0; i < anclas.length; i++) {
            //console.log(anclas[i].href);
            links.push(anclas[i].href);
        }
        
}

function encontrarLinksDeTexto() {
    parrafos = document.querySelectorAll("p");
    //console.log(parrafos);
    links = [];
    
    parrafos.forEach(parrafo);
    return links;
}

//console.log(encontrarLinksDeTexto());
function imprimirLinks() {
    encontrarLinksDeTexto();
    const linkdotesto = document.getElementById("linkdotesto");
    linkdotesto.innerHTML = "";

    for (let i = 0; i < links.length; i++) {
        const p = document.createElement("p");
        p.textContent = links[i];
        linkdotesto.appendChild(p);
    }
}   

function imprimirpenúltimolink(){
    encontrarLinksDeTexto();
    const linkdotesto = document.getElementById("penultimolinkdotesto");
    linkdotesto.innerHTML = "";

    for (let i = 0; i < links.length; i++) {
        const p = document.createElement("p");
        p.textContent = links[i];
        linkdotesto.appendChild(p);
    }


    } 