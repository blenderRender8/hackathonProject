function synthetic_division(polynomial: string[], factor: number) {
    let result = [polynomial[0]];
    for (var i = 1; i < len(polynomial)), i++) {
        result.push(polynomial[i] + (result[i - 1] * factor));
    }
    remainder = result.pop();
    return [result, remainder];
}

function to_sup(s: number) {
    let sups = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
    if (s == 1) {
        return "";
    }
    let result = [];
    for (var i = 0; i < parseString(s).length(); i++) {
        result.push(sups[parseInt(parseString(s)[i])]);
    }
    return result.join('');
}

function render(polynomial: number[]) {
    let val = "";
    let term = "";
    for (var i = 0; i < polynomial.length - 1; i++) {
        if (i > 0 && polynomial[i] != 0) {
            val += "+";
        }
        term = "";
        coefficient = polynomial[i];
        if (coefficient != 0) {
            if (coefficient != 1) {
                term += str(coefficient);
            }
            term += "x";
            term += to_sup(len(polynomial) - 1 - i);
            val += term;
        }
    }
    let constant = parseInt(polynomial[-1]);
    if (constant > 0 && polynomial.length > 1) {
        val += "+";
    }
    if (constant != 0) {
        val += str(constant);
    }
    return val;
}

// function run() {
//     while (true) {
//         try {
//             console.log("What is your polynomial without variables?");
            polynomial = list(map(int, input("example: x³ + 5x - 2 becomes 1 0 5 -2 > ").split(" ")));
//             if (polynomial.length > 1) {
//                 break;
//             } else {
//                 console.log("That didn't work. Please enter more than one number.");
//             }
//         catch (ValueError v) {
//             console.log("That didn't work. Try only entering numbers,\nor not adding more than 1 space between numbers");
//         }
//     console.log("What is one known root you want to divide by? (int)");
//     let factor = int(input("example: (x-2) would be positive 2 > "));
    let answer = synthetic_division(polynomial, factor);
    if (factor > 0) {
        divisor = f"(x{-1*factor})";
    } else if (factor < 0) {
        divisor = f"(x+{-1*factor})";
    } else {
        divisor = f"x";
    }
    if (answer[1] != 0) {
        rem = f"+({answer[1]}/{divisor})";
    } else {
        rem = "";
    }
    console.log(f"divisor: {divisor}\nquotient: {render(list(answer[0]))}{rem}");
// }

run()

document.querySelector("#endScore").innerText = "Overall Grade: " + synthetic_division(document.querySelector("#dividend"), document.querySelector("#divisor"))
