function if9(a,b){
    a = +prompt();
    b = +prompt();
    if(a !== b){
        return a + b;
    } else if(a === b){
        return 0;
    } else {
        return a, b;
    }
}
console.log(if9());