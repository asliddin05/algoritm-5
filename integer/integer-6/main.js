let integer6 = (son,room1,room10) => {
    son = prompt();
    room1 = son % 10; // 1 xonali son
    room10 = (Math.floor(son / 10) * 10); // 10 xonali son
    if(son < 100){
        return "O'n xonali son: " + room10 +
        " Bir xonali son: " + room1;
    } else {
        return "Faqat 2 xonali son kiriting!";
    }
}
console.log(integer6());