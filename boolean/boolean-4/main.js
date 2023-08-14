let boolean4 = (a,b) => {
    a = +prompt();
    b = +prompt();
    if(a > 2 && b <= 3){
        return true;
    } else {
        return false;
    }
}
console.log(boolean4());