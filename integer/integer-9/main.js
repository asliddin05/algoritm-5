let integer9 = (son,room100) => {
    son = +prompt("Istalgan 3 xonali son kiriting");
    room100 = Math.floor(son / 100) * 100;
    if(son < 1000){
        return "Yuzlik xona raqami: " + room100;
    }
}
console.log(integer9());