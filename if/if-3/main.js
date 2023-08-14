function if2(son){
    son = +prompt();
    if(son > 0){
        return son + 1;
    } else if(son === 0){
        son = 10;
        return son;
    } else {
        return son -2;
    }
}
console.log(if2());