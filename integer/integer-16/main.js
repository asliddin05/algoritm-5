let integer16 = (son,room100,room10,room1) => {
    son = +prompt();
    room100 = Math.floor(son / 100) * 100;
    room10 =  (son % 10) * 10;
    room1 = Math.floor((son % 100) / 10);
    return room100 + room10 + room1;
}

console.log(integer16());