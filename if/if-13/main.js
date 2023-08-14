function if13(a,b,c){
    a = +prompt();
    b = +prompt();
    c = +prompt();
    if(a > b && a < c){
        return a;
    } else if( a < b && a > c){
        return a;
    } else if(b > a && b < c){
        return b;
    } else if(b < a && b > c){
        return b;
    } else if(c > a && c < b){
        return c;
    } else if(c < a && c > b){
        return c;
    } else if( a == b && b == a){
        return a;
    }
}
console.log(if13());