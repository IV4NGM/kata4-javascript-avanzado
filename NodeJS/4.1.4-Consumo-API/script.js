function requestAPI(){
    const url = "https://swapi.dev/api/"
    fetch(`${url}/people/1`).then((response)=>{
        const responseJSON = response.json()
        return responseJSON
    }).then((data) =>{
        console.log(data)
        const name = data.name
        const height = data.height
        const starships = data.starships
        console.log({name, height})
        fetch(starships[0]).then((response) =>{
            const responseJSON = response.json().then((data) =>{
                console.log(data)
            })
        })
        .catch(error => console.log(error))
    })
    .catch((error)=>{
        console.log(error)
    })
}

requestAPI()