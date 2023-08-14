function if12(a,b,c){
    a = +prompt();
    b = +prompt();
    c = +prompt();
    if(a < b && a < c){
        return a;
    } else if(b < a && b < c){
        return b;
    } else {
        return c;
    }
}
console.log(if12());