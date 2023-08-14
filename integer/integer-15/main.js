let integer15 = (son,room10,room100) => {
    son = +prompt();
    room100 = Math.floor((son % 100) / 10) * 100;
    room10 = Math.floor(son / 100) * 10 + (son % 10);
    return room100 + room10;
}
console.log(integer15());