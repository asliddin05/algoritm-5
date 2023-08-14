let integer12 = (son,room100,room10,room1) => {
    son = +prompt();
    room100 = (son % 10) * 100;
    room10 = Math.floor((son % 100) / 10) * 10;
    room1 = Math.floor(son / 100);
    if(son < 1000) {
        return room100 + room10 + room1;
    } else {
        return "Faqat 3 xonali son kiriting!";
    }
}
console.log(integer12());