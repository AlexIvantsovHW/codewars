function calculateString(st) {
    const cleanedString = st.replace(/[^0-9.+\-*\/]/g, '');
    const match = cleanedString.match(/([0-9.]+)([+\-*\/])([0-9.]+)/);
    if (!match) {
        return "Invalid input format";
    }
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;
        default:
            return "Unsupported operator";
    }
    const roundedResult = Math.round(result).toString();
    return roundedResult;
}


console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"));//"47"
console.log(calculateString("sdfsd23454sdf*2342"));//"54929268"
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"));//"-210908"
console.log(calculateString("fsdfsd234.4554s4234df+sf234442"));//"234676"
console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c"));//12