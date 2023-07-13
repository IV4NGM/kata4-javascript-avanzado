// function mostrarMensaje(){
//     console.log("Cronómetro terminado")
// }

// setTimeout(mostrarMensaje, 1000)

// setTimeout(()=>{
//     console.log("Cronómetro 2 terminado")
// }, 1000)

// setTimeout(function mostrarMensajeTerminado(){
//     console.log("Cronómetro 3 terminado")
// }, 1000)

let cronometro1 = new Promise((resolve, reject) =>{
    let promesaCumplida = false
    setTimeout(()=>{
        console.log("Cronómetro terminado")
        if(promesaCumplida){
            resolve("Ok")
        }else{
            reject("Error")
        }
    }, 2000);
})

cronometro1.then((valorPromesaCompletada)=>{
    console.log(`El valor resultante de la promesa es: ${valorPromesaCompletada}`)
}).catch((valorPromesaRota)=>{
    console.log(`El valor regresado de la promesa rota es: ${valorPromesaRota}`)
})

console.log("Mensaje antes de la promesa")