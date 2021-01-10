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
let number = 0;
const division = document.getElementById("btn-division");
const multiplication = document.getElementById("btn-multiplication");
const minus = document.getElementById("btn-minus");
const plus = document.getElementById("btn-plus");

const cancel = document.getElementById("btn-cancel");
const equal = document.getElementById("btn-equal");

let btn = document.getElementsByClassName(".button");

const wrapper = document.getElementById('wrapper');
function f()
{
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
        case "btn-num0":{
           number = event.target.value;
        break;
        }
        case "btn-multiplication":
        {
            count*=number;  break;
        }
        case "btn-division":
        {
            count/=number;  break;
        }
        case "btn-plus":
        {
            count+=number;  break;
        }
        case "btn-minus":
        {
            count-=number;  break;
        }

    }
console.log(count);
}
wrapper.addEventListener("click",f)

/*console.log(num9);
console.log(num8);
console.log(num7);
console.log(num6);
console.log(num5);
console.log(num4);
console.log(num3);
console.log(num2);
console.log(num1);
console.log(num0);*/
console.log(multiplication);
console.log(division);
console.log(plus);
console.log(minus);















