let integer14 = (son, room100,room10) => {
    son = +prompt();
    room100 = (son % 10) * 100;
    room10 = Math.floor(son / 10);
    return room100 + room10;
}
console.log(integer14());