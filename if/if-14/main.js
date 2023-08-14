function if14(a,b,c){
    if(a > b && a > c && c > b){
        return a + " " + c;
    } else if(a > b && a > c && b > c){
        return a + " " + b;
    }
    else if(b > a && b > c && a > c){
        return b + " " + a;
    } else if(c > a && c > b && a > b){
        return c + " "  + a;
    } else if(c > a && x > b && b > a){
        return c + " " + b;
    }
}
console.log(if14());