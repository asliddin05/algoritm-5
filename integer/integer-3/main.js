let integer3 = (F,kb) => {
    F = prompt("Enter your flie's size in a byte");
    kb = 1024;
    return "Your file's size is " + Math.floor(F / kb) + "kb";
}

console.log(integer3());