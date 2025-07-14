
var parrafos;
var links;
var linksTerceiroParagrafo = [];

function parrafo(parrafoSingolo) {
    const anclas = parrafoSingolo.getElementsByTagName("a");
        for (let i = 0; i < anclas.length; i++) {
            //console.log(anclas[i].href);
            links.push(anclas[i].href);
        }
        
}

function encontrarLinksDeTexto() {
    parrafos = document.querySelectorAll("p");
    console.log(parrafos);
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
parrafos = document.querySelectorAll("p");
linksTerceiroParagrafo = [];
    
    // Verifica se esiste almeno un terzo paragrafo
    if (parrafos.length >= 3) {
        const terzoParagrafo = parrafos[2]; // Indice 2 = terzo paragrafo 
        const anclas = terzoParagrafo.getElementsByTagName("a");
        
        for (let j = 0; j < anclas.length; j++) {
            linksTerceiroParagrafo.push(anclas[j].href);
            console.log(anclas[j].href);
        }

        const linkdotesto = document.getElementById("terceiroparagrafolinkdotesto");
        linkdotesto.innerHTML = "";
        let count = 0;

        for (let i = 0; i < linksTerceiroParagrafo.length; i++) {
            const p = document.createElement("p");
            p.textContent = linksTerceiroParagrafo[i];
            linkdotesto.appendChild(p);
            count++;
        }

        const p = document.createElement("p");
        p.textContent = "Número de links no terceiro parágrafo: " + count;
        linkdotesto.appendChild(p);
}
}