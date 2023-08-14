let integer22 = (N,s,m) => {
    N = +prompt();
    s = Math.floor((N / 60) / 60);
    m = Math.floor(N / 60) % 60;
    return "Kun boshidan boshlab " + s + " soat " + m + " daqiqa vaqt o'tdi";
}
console.log(integer22());