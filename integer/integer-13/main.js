let integer11 = (son,room100,room1) => {
    son = +prompt();
    room100 = (son % 100) * 10;
    room1 = Math.floor(son / 100);
    if(son < 1000) {
        return room100 + room1;
    } else {
        return "Faqat 3 xonali son kiriting!";
    }
}
console.log(integer11());