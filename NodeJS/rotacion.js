let arr = [1, 2, 3, 4, 5]
let d = 2

function leftRotate(d, arr){
    const n = arr.length
    let rotatedArray = []
    for(let i=0; i<n; i++){
        // rotatedArray[i]=arr[(i+d)%n]
        rotatedArray.push(arr[(i+d)%n])
    }
    return rotatedArray
}

let A = leftRotate(d, arr)
console.log(A)