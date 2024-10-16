/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

//When calling code from console, use numbers for base & exp, below is declaring variables
// from console is like: exponent(10,3)
function exponent(base, exp) {
    let answer = base**exp;
    return answer;
    //return instead of console.log means its not undefined, and gives back an answer so you cna use it in other math later
    // if console.log you would have to do console.log(answer) to get your number
    //return statement ends all code, wont run console.log after return, itll turn grey
}

//returns random integer (whole #) between min and max values inclusive
function randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}


//Part 1

//ask console to_fahrenheit(37)
function to_fahrenheit(celsius) {
    //+(Math.round makes it so it rounds to closest whole number
    //Math.floor would round down, and Math.ciel would round up no matter what
    let f = +(Math.round(celsius * 9/5) + 32);
    return f;
}

//Part 2

function to_celsius(fahrenheit) {
    let c = +(Math.round(fahrenheit - 32) * 5/9);
    return c;
}

//Skip roll dice Part 3
function roll_dice(qty, sides) {
    return randInt(1, sides);
}

//Part 4

function area_circle(radius) {
    let a_c = +(Math.PI * radius**2);
    return a_c;
}

//Part 5

function cylinder_volume(radius, height) {
    let c_v = +(area_circle(radius) * height);
    return c_v;
}

//Part 6

function percent(score, total) {
    let test_score = score / total;
    let test_score_percent = +(Math.round(test_score * 100));
    console.log (`${test_score_percent}%`);
    return test_score;
}

