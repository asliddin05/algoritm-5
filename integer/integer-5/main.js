let integer4 = (a,b,result) => {
    a = +prompt("Enter a first number");
    b= +prompt("Enter a second number");
    result = 0;
    if(a > b && a > 0 && b > 0 && a % b != 0){
        return "a kesmaga b sonini " + Math.floor(a / b) + " martta joylashtirish mumkin va a kesmada ortib qolgan sonlar yigindisi: " + a % b + " ga teng";
    } else if (a % b == 0){
        return "a kesmaga b sonini " + Math.floor(a / b) + " martta joylashtirish mumkin va a kesmada ortib qolgan sonlar yigindisi mavjud emas";
    }
     else {
        return "Sonni no'tog'ri tartibda  kiritdingiz"
    }
}
console.log(integer4());