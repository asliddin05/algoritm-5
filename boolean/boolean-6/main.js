let boolean6 = (a,b,c) => {
    a = +prompt();
    b = +prompt();
    c = +prompt();
    if(a <=b && a<=c && b<=c){
        return true;
    } else {
        return false;
    }
}
console.log(boolean6());