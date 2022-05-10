console.log("working");

const element1 = document.getElementById("message");
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);

const element2 = document.getElementsByClassName("impMesaage");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3 = document.getElementsByTagName("span");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerText);
console.log(element3[1].innerText);


function changeText(){
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "Hello World!!" 
    console.log(changeText[0].innerText);

}

function changeColor(){
    const changeColor = document.getElementsByClassName("impMesaage");
    changeColor[0].style.color = "red";
 
}
