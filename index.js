
let imgContenedor = document.createElement("div");
imgContenedor.id = "img-container";
document.body.appendChild(imgContenedor);

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => data.results.forEach(result => {
        const imgSRC = result.image;
        const imgElement = document.createElement("img");
        imgElement.src=imgSRC;
        imgContenedor.appendChild(imgElement)
    })
    )
    .catch(error=> console.error(error));