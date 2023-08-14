let boolean1 = (A) => {
    A = +prompt();
    if(A > 0){
        return true;
    } else {
        return false;
    }
}
console.log(boolean1());