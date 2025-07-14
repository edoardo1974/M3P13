
var parrafos;
var links;
var linksTerceiroParagrafo;

/**
 * Extracts all hyperlink URLs from the given paragraph element and pushes them into the global `links` array.
 */
function parrafo(parrafoSingolo) {
    const anclas = parrafoSingolo.getElementsByTagName("a");
        for (let i = 0; i < anclas.length; i++) {
            links.push(anclas[i].href);
        }
}

/**
 * Finds and returns all hyperlinks (<a> elements) within paragraph (<p>) elements in the document.
 */
function encontrarLinksDeTexto() {
    parrafos = document.querySelectorAll("p");
    links = [];
    parrafos.forEach(parrafo);
    return links;
}


/**
 * Finds and displays all links found in the text by calling `encontrarLinksDeTexto()`.
 * Appends each found link as a paragraph element to the element with id "linkdotesto".
 * Also displays the total number of links found at the end.
 */
function imprimirLinks() {
    encontrarLinksDeTexto();
    let count = 0;
    const linkdotesto = document.getElementById("linkdotesto");
    linkdotesto.innerHTML = "";

    for (let i = 0; i < links.length; i++) {
        const p = document.createElement("p");
        p.textContent = links[i];
        linkdotesto.appendChild(p);
        count++;
    }
    const p = document.createElement("p");
        p.textContent = "Número de links no parágrafo: " + count;
        linkdotesto.appendChild(p);
}   

/**
 * Finds all text links and displays the penultimate link inside the element
 * with the ID "penultimolinkdotesto".
 */
function imprimirpenúltimolink(){
    encontrarLinksDeTexto();
    const linkdotesto = document.getElementById("penultimolinkdotesto");
    linkdotesto.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = links[links.length - 2]; // penúltimo link
    linkdotesto.appendChild(p);
    } 

/**
 * Finds and displays all Twitter links from the global `links` array in the HTML element
 * with the ID "twitterlinkdotesto". It also displays the total number of Twitter links found.
 * Assumes that `encontrarLinksDeTexto()` populates the global `links` array.
 */
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

/**
 * Extracts all links (<a> elements) from the third paragraph (<p>) in the document,
 * logs their href attributes to the console, and displays them inside the element
 * with the ID "terceiroparagrafolinkdotesto". Also displays the total number of links found.
 */
function imprimirLinksTerceiroParagrafo() {
parrafos = document.querySelectorAll("p");
linksTerceiroParagrafo = [];
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