function if9(a,b){
    a = +prompt();
    b = +prompt();
    if(a !== b){
        if(a > b){
            return a;
        } else {
            return b;
        }
    } else if(a === b){
        return 0;
    } else {
        return a, b;
    }
}
console.log(if9());