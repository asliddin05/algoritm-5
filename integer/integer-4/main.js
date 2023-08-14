let integer4 = (a,b,result) => {
    a = +prompt("Enter a first number");
    b= +prompt("Enter a second number");
    result = 0;
    if(a > b && a > 0 && b > 0){
        return "a sonining ichiga b sonini " + a / b + " martta joylashtirish mumkin";
    } else {
        return "Sonni no'tog'ri kiritdingiz"
    }
}
console.log(integer4());