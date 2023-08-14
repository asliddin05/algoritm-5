let boolean5 = (a,b) => {
    a = +prompt();
    b = +prompt();
    if(a >= 0 && b < -2){
        return true;
    } else {
        return false;
    }
}
console.log(boolean5());