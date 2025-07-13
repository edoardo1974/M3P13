function encontrarLinksDeTexto() {
    const parrafos = document.querySelectorAll("p");
    const links = [];
    parrafos.forEach(parrafo => {
        const anclas = parrafo.getElementsByTagName("a");
        for (let i = 0; i < anclas.length; i++) {
            links.push(anclas[i].href);
        }
    });
    return links;
}

console.log(encontrarLinksDeTexto());

function contarLinksPorParrafo() {
    const parrafos = document.querySelectorAll("p");
    const links = [];

        
}

function parrafo(parrafo) {
    const anclas = parrafo.getElementsByTagName("a");
        for (let i = 0; i < anclas.length; i++) {
            links.push(anclas[i].href);
        }
}