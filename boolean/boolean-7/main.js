let boolean7 = (a,b,c) => {
    a = +prompt();
    b = +prompt();
    c = +prompt();
    if( b >= a && b <= c){
        return true;
    } else {
        return false;
    }
}
console.log(boolean7());