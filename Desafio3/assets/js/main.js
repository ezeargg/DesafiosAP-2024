const nombreProducto = "celulares";
const precioUnitario = 1964999 ;

let cantidadDeseada = parseInt(prompt(`Ingrese la cantidad de ${nombreProducto} que desee comprar: `));

let costoTotalSinDescuento = precioUnitario * cantidadDeseada 

if(cantidadDeseada >= 5){
    costoTotalSinDescuento = costoTotalSinDescuento *0.9
}

swal(`El costo total de ${cantidadDeseada} ${nombreProducto} es: $${costoTotalSinDescuento}`);

