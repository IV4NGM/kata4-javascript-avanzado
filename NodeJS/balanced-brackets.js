let s = "{{[[(())]]}}"

function isBalanced(s){
    let openingChars = ["{", "[", "("]
    let closingChars = ["}", "]", ")"]
    if(s.length % 2 != 0){
        return "NO"
    } else if(s.length == 0){
        return "YES"
    } else {
        for(let i = 0; i < s.length; i++){
            let j = closingChars.indexOf(s[i])
            if(j!=-1){
                let k = [...s.slice(0, i)].reverse().indexOf(openingChars[j])
                if(k==-1){
                    return "NO"
                } else {
                    if(isBalanced(s.slice(i-k, i))=="NO"){
                        return "NO"
                    } else {
                        return(isBalanced(s.slice(0, i-k-1) + s.slice(i+1)))
                    }
                }
            }
        }
        return "NO"
    }
}

console.log(isBalanced(s))