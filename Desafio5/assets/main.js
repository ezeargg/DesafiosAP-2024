let produc  = ["Remera", "Campera", "Buzo", "Camisa"]

console.log(`Productos en stock:`)

for (let i=0; i < produc.length ; i++){
    console.log(`Producto ${i+1}: ${produc[i]}`)
}

produc.pop()

console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/")

console.log(`Stock actualizado:`)

for (let i=0; i < produc.length ; i++){
    console.log(`Producto ${i+1}: ${produc[i]}`)
}