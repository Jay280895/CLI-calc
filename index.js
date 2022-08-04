"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var frstStr = (0, readline_sync_1.question)("Enter the first number:\n ");
    var scndStr = (0, readline_sync_1.question)("Enter the second number:\n ");
    var operator = (0, readline_sync_1.question)("Enter the operator:\n ");
    var frstNum = parseInt(frstStr);
    var scndNum = parseInt(scndStr);
    // console.log(typeof frstStr);
    if (operator == "+") {
        console.log(frstNum + scndNum);
    }
    else if (operator == "-") {
        console.log(frstNum + scndNum);
    }
    else if (operator == "*") {
        console.log(frstNum * scndNum);
    }
    else if (operator == "/") {
        console.log(frstNum / scndNum);
    }
    else {
        console.log("Only Add Subtract Multiply and Divide is avalible right now");
    }
}
main();

// prime number checker
