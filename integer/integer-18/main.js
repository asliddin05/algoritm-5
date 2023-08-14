let integer19 = (son,room1000) => {
    son = +prompt();
    if(son > 999) {
        room1000 = Math.floor(son / 1000) * 1000;
        return room1000;
    } else {
        return "4 xonali son kiriting"
    }
}
console.log(integer19());