let integer22 = (N,st,m,s) => {
    N = +prompt();
    st = Math.floor((N / 60) / 60);
    m = Math.floor(N / 60) % 60;
    // return "Kun boshidan boshlab " + st + " soat " + m + " daqiqa " + s + " soniya vaqt o'tdi";
    return m;
}
console.log(integer22());