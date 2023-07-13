let prepararIngredientes = new Promise((response, reject)=>{
    console.log("Preparando ingredientes")
    setTimeout(()=>{
        response("Ingredientes preparados")
    }, 2000)
})

prepararIngredientes.then((valorRespuestaCompletada)=>{
    console.log(valorRespuestaCompletada)
    let precalentarHorno = new Promise((response, reject)=>{
        console.log("Precalentando horno")
        setTimeout(()=>{
            response("Horno precalentado")
        }, 5000)
    })
    let mezclarIngredientes = new Promise((response, reject)=>{
        console.log("Mezclando ingredientes")
        setTimeout(()=>{
            response("Ingredientes mezclados")
        }, 3000)
    })
    let precalentarYMezclar = Promise.all([precalentarHorno, mezclarIngredientes])
    return precalentarYMezclar
})
.then((valorRespuestaCompletada)=>{
    for(let response of valorRespuestaCompletada){
        console.log(response)
    }
    let hornearPastel = new Promise((response, reject)=>{
        console.log("Horneando pastel")
        setTimeout(()=>{
            response("Pastel horneado")
        }, 4000)
    })
    return hornearPastel
})
.then((valorRespuestaCompletada) => console.log(valorRespuestaCompletada))
.catch(() => console.log("Ocurrió un error"))