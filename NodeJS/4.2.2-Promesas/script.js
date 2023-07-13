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
    let promesaCumplida = true
    setTimeout(()=>{
        console.log("Cronómetro 1 terminado")
        if(promesaCumplida){
            resolve("Ok cronómetro 1")
        }else{
            reject("Error cronómetro 1")
        }
    }, 2000);
})

// cronometro1.then((valorPromesaCompletada)=>{
//     console.log(`El valor resultante del primer cronómetro es: ${valorPromesaCompletada}`)
//     let cronometro2 = new Promise((resolve, reject) =>{
//         let promesaCumplida = false
//         setTimeout(()=>{
//             console.log("Cronómetro 2 terminado")
//             if(promesaCumplida){
//                 resolve("Ok cronómetro 2")
//             }else{
//                 reject("Error cronómetro 2")
//             }
//         }, 2000);
//     })
//     return cronometro2
// }).then((valorPromesaCompletada)=>{
//     console.log(`El valor de la promesa anterior es: ${valorPromesaCompletada}`)
//     let cronometro3 = new Promise((resolve, reject) =>{
//         let promesaCumplida = true
//         setTimeout(()=>{
//             console.log("Cronómetro 3 terminado")
//             if(promesaCumplida){
//                 resolve("Ok cronómetro 3")
//             }else{
//                 reject("Error cronómetro 3")
//             }
//         }, 2000);
//     })
//     return cronometro3
// }).then((valorPromesaCompletada)=>{
//     console.log(`El valor de la promesa anterior es: ${valorPromesaCompletada}`)
// }).catch((valorPromesaRota)=>{
//     console.log(`El valor regresado de la promesa rota es: ${valorPromesaRota}`)
// })

console.log("Mensaje antes de la promesa")

// Manejo de promesas simultáneas

let cronometroSimultaneo1 = new Promise((resolve, reject)=>{
    let milisegundos = 1000
    setTimeout(()=>{
        console.log(`Cronómetro de ${milisegundos} terminado`)
        resolve("Cronómetro simultáneo 1 Ok")
    }, milisegundos)
})

let cronometroSimultaneo2 = new Promise((resolve, reject)=>{
    let milisegundos = 3000
    setTimeout(()=>{
        console.log(`Cronómetro de ${milisegundos} terminado`)
        resolve("Cronómetro simultáneo 2 Ok")
    }, milisegundos)
})

// Promise.all() se cumple solo cuando todas se cumplen y se rechaza cuando una sola se rechace
// let cronometrosAceptados = Promise.all([cronometroSimultaneo1, cronometroSimultaneo2])

// cronometrosAceptados.then((valorPromesaCumplida)=>{
//     console.log("Todos los cronómetros han cumplido su promesa")
// }).catch((valorPromesaRechazada)=>{
//     console.log("Ocurrió un error")
// })

// Promise.allSettled() se cumple cuando todas las promesas terminen, sin importar si son rechazadas o aceptadas. Es rechazada cuando alguna promesa no termina
// let cronometrosTerminados = Promise.allSettled([cronometroSimultaneo1, cronometroSimultaneo2])

// cronometrosTerminados.then((valorPromesaCumplida)=>{
//     console.log("Todos los cronómetros han terminado")
// }).catch((valorPromesaRechazada)=>{
//     console.log("Ocurrió un error")
// })

// Promise.any() se cumple cuando se cumpla alguna. Es rechazada únicamente si todas son rechazadas
// Promise.any([cronometroSimultaneo1, cronometroSimultaneo2]).then((valorPromesaCumplida)=>{
//     console.log("Al menos una promersa se cumplió")
// }).catch((valorPromesaRechazada)=>{
//     console.log("Todas las promesas se rompieron")
// })

// Promise.race() termina cuando al menos una promesa termina, sin importar su valor. Toma el valor de la primera promesa terminada.
Promise.race([cronometroSimultaneo1, cronometroSimultaneo2]).then((valorPromesaCumplida)=>{
    console.log("Al menos una promersa terminó")
}).catch((valorPromesaRechazada)=>{
    console.log("Ocurrió un error")
})