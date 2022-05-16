//grab the button
const score= document.querySelector("#score");
const btn= document.querySelector(".btn");
console.log(document.querySelector(".question1"))
function results(){
    var c=0;
    var q1=document.querySelector(".question1").value;
    var q2=document.querySelector(".question2").value;
    var q3=document.querySelector(".question3").value;
    var q4=document.querySelector(".question4").value;
    var q5=document.querySelector(".question5").value;
    if (q1=="variable") {c+20}
    if (q2=="Letters") {c+20}
    if (q3=="None") {c+20}
    if (q4=="Cross loop") {c+20}
    if (q5=="Line") {c+20}
    console.log (q1)
    return c;
}
btn.addEventListener("click",()=>{score.textContent=results()})