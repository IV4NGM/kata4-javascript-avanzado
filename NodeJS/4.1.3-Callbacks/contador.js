// Función que mide el tiempo de ejecución
function mideTiempo(funcion){
    console.time('tiempo de ejecucion')
    funcion()
    console.timeEnd('tiempo de ejecucion')
}

// Función síncrona
function procesoSincrono(){
    console.log('Inicio del proceso síncrono')
    for(let i = 0; i < 10; i++){
        console.log(i)
    }
    console.log('Fin del proceso síncrono')
}

function procesoAsincrono(){
    console.log('Inicio del proceso asíncrono')
    setTimeout(() => {
        console.log('Función asíncrona ejecutada')
    }, 2000)
    console.log('Fin del proceso asíncrono')
}

mideTiempo(procesoSincrono)
mideTiempo(procesoAsincrono)

function mideTiempo2(funcion){
    const inicio = Date.now()
    funcion()
    const fin = Date.now()
    const tiempoDeEjecucion = fin - inicio
    console.log(`Tiempo de ejecución 2: ${tiempoDeEjecucion}`)
}

mideTiempo2(procesoSincrono)
mideTiempo2(procesoAsincrono)