let boolean10 = (a,b) => {
    a = +prompt();
    b = +prompt();
    let count1 = 0;
    let count2 = 0;
    for(let i = 1; i <= a; i++){
        if(a % i == 0){
            count1++;
        }
    }
    for(let j = 1; j <= b; j++){
        if(b % j == 0){
            count2++;
        }
    }
    if((count1 == 2 && count2 !== 2) || (count1 !== 2 && count2 == 2)){
        return true;
    } else {
        return false;
    }
}
console.log(boolean10());