let integer21 = (N,s,m) => {
    N = +prompt();
    s = N % 60;
    m = Math.floor(N / 60);
    return "Kun boshidan boshlab " + m + " minut " + s + " soniya vaqt o'tdi";
}
console.log(integer21());