
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
    const p = document.createElement("p");
    p.textContent = links[links.length - 2]; // penúltimo link
    linkdotesto.appendChild(p);
    } 

function imprimirLinktwitter(){
    encontrarLinksDeTexto();
    const linkdotesto = document.getElementById("twitterlinkdotesto");
    linkdotesto.innerHTML = "";
    let count = 0;
    for (let i = 0; i < links.length; i++) {
        if( links[i].includes("file:///C:/Users/hp%206470/Documents/Front%20end/M3P13/html/www.twitter.com")) {
            console.log(links[i]);
            const p = document.createElement("p");
            p.textContent = links[i];
            linkdotesto.appendChild(p);
            count++;
        }
    }

    const p = document.createElement("p");
    p.textContent = "Número de links que abrem Twitter: " + count;
    linkdotesto.appendChild(p);

    } 

function imprimirLinksTerceiroParagrafo() {

    }