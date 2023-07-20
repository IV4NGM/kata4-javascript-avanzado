function crear(){
    let nombre = document.getElementById("nombreAlumnoNuevo").value;
    let boleta = document.getElementById("boletaAlumnoNuevo").value;
    let edad = document.getElementById("edadAlumnoNuevo").value;
    let semestre = document.getElementById("semestreAlumnoNuevo").value;
    crearAlumno(nombre, boleta, edad, semestre)
}

function crearAlumno(nombre, boleta, edad, semestre){

    const alumnoNuevo = {
        nombre: nombre,
        boleta: boleta,
        edad: edad,
        semestre: semestre
    };

    let postRequest = fetch(`https://crudcrud.com/api/ed15035d29334714aea125808cd7db37/alumno`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumnoNuevo)
    });

    postRequest.then((value) => {
        alert('Registro creado');
        return value.json();
    }).then((valueJSON) => {
        alert(JSON.stringify(valueJSON));
        console.log(valueJSON)
    })
    .catch((errorValue) => {
        alert(errorValue);
    })
}

function buscar(){
    let idAlumno = document.getElementById("idAlumnoBuscar").value;
    buscarAlumno(idAlumno)
}

function buscarAlumno(idAlumno){
    let postRequest = fetch(`https://crudcrud.com/api/ed15035d29334714aea125808cd7db37/alumno/${idAlumno}`, 
    {
        method: 'GET'
    }
    );

    postRequest.then((value) => {
        alert("Registro encontrado")
        return value.json()
    }).then((valueJSON) => {
        document.getElementById("nombreAlumnoRegistro").innerHTML = valueJSON.nombre
        document.getElementById("boletaAlumnoRegistro").innerHTML = valueJSON.boleta
        document.getElementById("edadAlumnoRegistro").innerHTML = valueJSON.edad
        document.getElementById("semestreAlumnoRegistro").innerHTML = valueJSON.semestre
    })
    .catch((errorValue) => {
        alert(errorValue);
    })
}

function eliminar(){
    let idAlumno = document.getElementById("idAlumnoEliminar").value;
    eliminarAlumno(idAlumno)
}

function eliminarAlumno(idAlumno){
    let deleteRequest = fetch(`https://crudcrud.com/api/ed15035d29334714aea125808cd7db37/alumno/${idAlumno}`, 
    {
        method: 'DELETE'
    }
    );

    deleteRequest.then((value) => {
        alert("Alumno eliminado")
    })
    .catch((errorValue) => {
        alert(errorValue);
    })
}

function modificar(){
    let idAlumno = document.getElementById("idAlumnoModificar").value;
    let nombre = document.getElementById("nombreAlumnoModificar").value;
    let boleta = document.getElementById("boletaAlumnoModificar").value;
    let edad = document.getElementById("edadAlumnoModificar").value;
    let semestre = document.getElementById("semestreAlumnoModificar").value;
    modificarAlumno(idAlumno, nombre, boleta, edad, semestre)
}

function modificarAlumno(idAlumno, nombre, boleta, edad, semestre){

    const alumnoModificar = {
        nombre: nombre,
        boleta: boleta,
        edad: edad,
        semestre: semestre
    };

    let putRequest = fetch(`https://crudcrud.com/api/ed15035d29334714aea125808cd7db37/alumno/${idAlumno}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumnoModificar)
    });

    putRequest.then((value) => {
        alert('Registro modificado');
    })
    .catch((errorValue) => {
        alert(errorValue);
    })
}