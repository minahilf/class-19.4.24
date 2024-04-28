"use strict";
let marksheet = (marks) => {
    if (marks >= 90) {
        console.log("You got A1  grade!");
    }
    else if (marks >= 80) {
        console.log("you got A grade");
    }
    else if (marks >= 70) {
        console.log("you got B grade");
    }
    else if (marks >= 60) {
        console.log("you got C grade");
    }
    else if (marks >= 50) {
        console.log("You got D grade");
    }
    else {
        console.log("Fail");
    }
};
marksheet(90);
