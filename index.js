let num1=1000
let num2=500
document.getElementById("num1-el").innerHTML=num1 +","
document.getElementById("num2-el").innerHTML=num2

let sumEl=document.getElementById("sum-el")
let subEl=document.getElementById("sub-el")
function sum(){
    sumEl.innerHTML="sum is "+(num1+num2)
}
function sub(){
    subEl.innerHTML="The difference is "+(num1-num2)
}

