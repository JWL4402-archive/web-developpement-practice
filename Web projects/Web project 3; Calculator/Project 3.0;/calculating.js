var numpad = document.getElementsByClassName("numpad");
var operator = document.getElementsByClassName("operator");
var number1 = null;
var sign = null;
var answer = null;

numpad[0].onclick = function() {
    number = 1;
    document.getElementById("current").innerHTML = number;
}
numpad[1].onclick = function() {
    number = 2;
    document.getElementById("current").innerHTML = number;
}
numpad[2].onclick = function() {
    number = 3;
    document.getElementById("current").innerHTML = number;
}
numpad[3].onclick = function() {
    number = 4;
    document.getElementById("current").innerHTML = number;
}
numpad[4].onclick = function() {
    number = 5;
    document.getElementById("current").innerHTML = number;
}
numpad[5].onclick = function() {
    number = 6;
    document.getElementById("current").innerHTML = number;
}
numpad[6].onclick = function() {
    number = 7;
    document.getElementById("current").innerHTML = number;
}
numpad[7].onclick = function() {
    number = 8;
    document.getElementById("current").innerHTML = number;
}
numpad[8].onclick = function() {
    number = 9;
    document.getElementById("current").innerHTML = number;
}

operator[0].onclick = function() {
    number1 = number;
    sign = "+";
}
operator[1].onclick = function() {
    number1 = number;
    sign = "-";
}
operator[2].onclick = function() {
    if (sign == "+") {
        answer = number1 + number;
    } else if (sign == "-") {
        answer = number1 - number;
    }
    document.getElementById("result").innerHTML = answer;
}




// var numpad = document.getElementsByClassName("numpad");
// var numbers = [];
// var number1 = 0;
// var storedNum; // The number that is stored. This is so that we can input a second number to operate with.

// function compile(input) {
//     numbers.push(input);
//     for (i = 0; i < numbers.length; i++) {
//         number1 += (numbers[i] * Math.pow(10, numbers.length - (i + 1)));
//     }
// }

// for (i = 0; i < numpad.length; i++) {

//     numpad[i].addEventListener("click", function(){
        
//         compile()
//     }, false);
// }