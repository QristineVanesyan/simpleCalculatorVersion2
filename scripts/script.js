/*const num0 = document.getElementById("btn-num0");
const num3 = document.getElementById("btn-num3");
const num2 = document.getElementById("btn-num2");
const num1 = document.getElementById("btn-num1");
const num4 = document.getElementById("btn-num4");
const num5 = document.getElementById("btn-num5");
const num6 = document.getElementById("btn-num6");
const num7 = document.getElementById("btn-num7");
const num8 = document.getElementById("btn-num8");
const num9 = document.getElementById("btn-num9");*/
let count = 0;
let flag = false;
let flag1 = false;
let flag3 = false;
let number = "";
let sign = "";

let btn = document.getElementsByClassName(".button");
const wrapper = document.getElementById('wrapper');

function f() {
    const isButton = event.target.nodeName === 'BUTTON';
    switch (event.target.id) {
        case "btn-num1":
        case "btn-num2":
        case "btn-num3":
        case "btn-num4":
        case "btn-num5":
        case "btn-num6":
        case "btn-num7":
        case "btn-num8":
        case "btn-num9":
        case "btn-num0": {
            number += event.target.value;
            document.getElementById("number").value = number;
            break;
        }
        case "btn-plus": {
            sign = "+";
            if (!number) {
                number = 0;
            }
            count += parseInt(number);
            document.getElementById("number").value = count;
            number = "";
            break;
        }
        case "btn-division": {
            sign = "/";
            if (!number) {
                number = 1;
            }
            if (flag3 === false) {
                count += parseInt(number);
                flag3 = true;
            } else {
                count /= parseInt(number);
                document.getElementById("number").value = count;
            }
            number = "";
            break;
        }
        case "btn-multiplication": {
            sign = "*";
            if (!number) {
                number = 0;
            }
            if (flag1 === false) {
                count += parseInt(number);
                flag1 = true;
            } else {
                count *= parseInt(number);
                document.getElementById("number").value = count;
            }
            number = "";
            break;
        }
        case "btn-minus": {
            sign = "-";
            if (!number) {
                number = 0;
            }
            if (flag === false) {
                count += parseInt(number);
                flag = true;
            } else {
                count -= parseInt(number);

                document.getElementById("number").value = count;
            }
            number = "";
            break;
        }
        case "btn-equal": {
            if (sign === "+") {
                if (!number) {
                    number = 0;
                }
                count += parseInt(number);
                document.getElementById("number").value = count;
                number = "";
            } else if (sign === "-") {
                if (!number) {
                    number = 0;
                }
                count -= parseInt(number);
                document.getElementById("number").value = count;
                number = "";
            } else if (sign === "*") {
                if (!number) {
                    number = 0;
                }
                count *= parseInt(number);
                document.getElementById("number").value = count;
                number = "";
            } else if (sign === "/") {
                debugger;
                if (!number) {
                    number = 1;
                }
                count /= parseInt(number);
                document.getElementById("number").value = count;
                number = "";
            }
            break;
        }
    }
}

wrapper.addEventListener("click", f)


