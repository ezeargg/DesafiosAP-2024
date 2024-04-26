let nombreProducto = prompt("Ingrese el nombre del producto");
let precioUnitario = prompt("Ingrese el precio del producto ($) ");
let cantidadDeseada = prompt("Ingrese la cantidad que desee comprar");
let costoTotal = parseInt(precioUnitario * cantidadDeseada);
alert("El costo total gastado en su compra es: "+ costoTotal)