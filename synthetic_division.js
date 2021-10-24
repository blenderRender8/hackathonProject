function synthetic_division(polynomial, factor) {
    console.log(polynomial)
    let result = [parseFloat(polynomial[0])];
    for (var i = 1; i < polynomial.length; i++) {
        let ival = parseFloat(polynomial[i]);
        console.log(ival);
        result.push(ival + (result[i - 1] * factor));
    }
    remainder = result.pop();
    console.log(result)
    return [render(result), remainder];
}

function to_sup(s) {
    if (s == 1) return "";
    s = s.toString()
    return s.sup();
    // let sups = ['â°', 'Â¹', 'Â²', 'Â³', 'â´', 'âµ', 'â¶', 'â·', 'â¸', 'â¹'];
    // if (s == 1) {
    //     return "";
    // }
    // let result = [];
    // for (var i = 0; i < (s.toString()).length; i++) {
    //     result.push(sups[parseFloat((s).toString()[i])]);
    // }
    // return result.join('');
}

function render(polynomial) {
    //polynomial looks like [1]

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
                term += coefficient.toString();
            }
            term += "x";
            term += to_sup(polynomial.length - 1 - i);
            val += term;
        }
    }
    let constant = parseFloat(polynomial[polynomial.length - 1]);
    console.log(constant);
    if (constant > 0 && polynomial.length > 1) {
        val += "+";
    }
    if (constant != 0) {
        val += constant.toString();
    }
    return val;
}

// // function run() {
// //     while (true) {
// //         try {
// //             console.log("What is your polynomial without variables?");
//             // polynomial = list(map(int, input("example: xÂ³ + 5x - 2 becomes 1 0 5 -2 > ").split(" ")));
// //             if (polynomial.length > 1) {
// //                 break;
// //             } else {
// //                 console.log("That didn't work. Please enter more than one number.");
// //             }
// //         catch (ValueError v) {
// //             console.log("That didn't work. Try only entering numbers,\nor not adding more than 1 space between numbers");
// //         }
// //     console.log("What is one known root you want to divide by? (int)");
// //     let factor = int(input("example: (x-2) would be positive 2 > "));
//     let answer = synthetic_division(polynomial, factor);
//     if (factor > 0) {
//         divisor = `(x${-1*factor})`;
//     } else if (factor < 0) {
//         divisor = `(x+${-1*factor})`;
//     } else {
//         divisor = "x";
//     }
//     if (answer[1] != 0) {
//         rem = `+(${answer[1]}/${divisor})`;
//     } else {
//         rem = "";
//     }
// // }

// run()
function notgood_code(){
    let divisor = (document.querySelector("#dividend").value).split(", ")
    console.log("divisor ", divisor)
    let dividend = parseFloat(document.querySelector("#divisor").value)
    let val = synthetic_division(divisor, dividend)
    console.log(val)
    document.querySelector("#endResult").innerHTML = `<p id="endResult">Quotient: ${val[0]} and remainder ${val[1]}</p>`;
}
["#divisor", "#dividend"].forEach((i) => document.querySelector(i).addEventListener("input", () => notgood_code()))
