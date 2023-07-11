function saludar(nombre){
    alert(`Hola mundo ${nombre}`)
}

function saludar2(nombre){
    alert(`Hola DevF ${nombre}`)
}

function llamar(){
    console.log(`Llamando`)
}

// console.log(`Ejecutando`)
// setTimeout(saludar, 5000)
// console.log(`Fin`)

function procesarEntradaUsuario(callback){
    let nombre = prompt(`Dime tu nombre`)
    callback(nombre)
}

// procesarEntradaUsuario(saludar)
// procesarEntradaUsuario(saludar2)
console.log(`Ejecutando`)
setTimeout(llamar, 5000)
setTimeout(llamar, 5000)