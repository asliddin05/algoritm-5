let integer11 = (son,room100,room10,room1) => {
    son = +prompt();
    room100 = Math.floor(son / 100);
    room10 = Math.floor((son % 100) / 10);
    room1 = son % 10;
    if(son < 1000) {
        return room100 + room10 + room1;
    } else {
        return "Faqat 3 xonali son kiriting!";
    }
}
console.log(integer11());