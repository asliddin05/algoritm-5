let integer7 = (son,room10,room1) => {
    son = prompt("Istalgan ikki xonali son kiriting");
    room10 = Math.floor(son / 10);
    room1 = son % 10;
    if(son < 100){
        return room10 + room1;
    }
}

console.log(integer7());