function if8(a,b){
    a = +prompt();
    b = +prompt();
    if(a > b){
        return a + " " + b;
    } else {
        return b + " " + a;
    }
}
console.log(if8());