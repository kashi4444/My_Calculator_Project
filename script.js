const reset = document.querySelector(".reset");
const equal = document.querySelector(".equalTo");
const btns = document.querySelectorAll(".btn");
const del = document.querySelector("#del");
const result = document.querySelector(".result");
const calc = document.querySelectorAll(".evalBtn");
let string = "";
let count=0;
const resetCalc = () => {
    result.innerText = "";
    string = "";
}
const calcRes = () => {
    string = eval(string);
    result.innerText = string;
}
const deleteData = () => {
    string= string.slice(0,count-1);
    count--;
    result.innerText=string;
}

btns.forEach(element => {
    element.addEventListener("click", () => {
        result.innerText += element.innerText;
        string += element.innerText;
        count++;
    })
});

calc.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText == "=") {
            calcRes();
        }else if(element.innerText=="DEL"){
            deleteData();
        } else {
            resetCalc();
        }
    })
})

