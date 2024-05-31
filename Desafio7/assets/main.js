let precioPro = document.getElementById("precioProducto");

setTimeout(() => {
    precioPro.innerText = "Precio: $450";
    let titulo = document.querySelector("h2");
    titulo.style.color = "red";
}, 4000);

