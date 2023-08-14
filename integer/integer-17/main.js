let integer17 = (son,room100) => {
    son = +prompt();
    if(son > 999){
        room100 = Math.floor((son % 1000) / 100) * 100;
        return room100;
    } else {
        return "4 xonali son kiriting";
    }
}
console.log(integer17());