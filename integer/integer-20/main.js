let integer20 = (N,s,m) => {
    N = +prompt();
    s = 60;
    m = 60;
    return "Kun boshidan boshlab " + Math.floor((N / s) / m) + " soat vaqt o'tdi";
}
console.log(integer20());