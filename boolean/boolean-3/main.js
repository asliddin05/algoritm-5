let boolean3 = (A) => {
    A = +prompt()
    for(let i = 1; i <= A; i++){
        if(A % 2 == 0){
            return true;
        } else {
            return false;
        }
    }
}
console.log(boolean3());