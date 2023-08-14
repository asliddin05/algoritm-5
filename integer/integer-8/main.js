let integer8 = (son,room10,room1) => {
    son = +prompt();
    room10 = (son % 10) * 10;
    room1 = Math.floor(son / 10);
    if(son < 100) {
        return room10 + room1;
    } else {
        return "Faqat 2 xonali son kiriting!";
    }
}
console.log(integer8());