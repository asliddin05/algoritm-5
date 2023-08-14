let integer10 = (son,room10,room1) => {
    son = +prompt("Istalgan 3 xonali son kiriting");
    room10 = Math.floor((son % 100) / 10) * 10;
    room1 = son % 10;
    if(son < 1000){
        return " Birlik xona raqami: " + room1 + " O'nlik xona raqami: " + room10;
    }
}
console.log(integer10());