let boolean2 = (A) => {
    A = +prompt();
    let count = 0;
    for(let i = 1; i <= A; i++){
        if(A % i == 0){
            count++
        }
    }
    if(count === 2){
        return true;
    } else {
        return false;
    }
}
console.log(boolean2());