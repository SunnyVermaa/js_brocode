// const PI = 3.14;
// let radius;
// let circumference;



// document.getElementById("submitbtn").onclick = function() {
//     radius = document.getElementById("textid").value;
//     radius = Number(radius)
//     circumference = 2 * radius * PI;
//     near = Math.floor(circumference * 100)/100
//     document.getElementById("myh3").textContent =  `your circumference is ${near} cm`
// }

//------------------------------------------------------------------------

// const countno = document.getElementById("countno")
// const increase = document.getElementById("increase")
// const decrease = document.getElementById("decrease")
// const reset = document.getElementById("reset")
// let count = 0

// increase.onclick = function() {
//     count ++;
//     countno.textContent = count;
// }

// decrease.onclick = function() {
//     count --;
//     countno.textContent = count;
// }

// reset.onclick = function(){
//     count = 0;
//     countno.textContent = count;
// }

//------------------------------------------------------------------------

// const checkbtn = document.getElementById("checkbtn");
// const acceptc = document.getElementById("acceptc");
// const declinec = document.getElementById("declinec");
// const bothacc = document.getElementById("bothacc");
// const firstp = document.getElementById("firstp");
// const secondp = document.getElementById("secondp");
// const btn = document.getElementById("btn")

// btn.onclick = function(){
//     if(checkbtn.checked){
//         firstp.textContent = 'now you are ready to go'

//         if(acceptc.checked){
//             secondp.textContent= 'you allowed all the terms and conditions which we mention'
//         }
//         else if(declinec.checked){
//             secondp.textContent = 'you declined the terms and condition so exit'
//         }
//         else if(bothacc.checked){
//             secondp.textContent = 'you accept terms and condition but in certain condition'
//         }
//         else{
//             secondp.textContent = ' please select any condition'
//         }
//     }
//     else{
//         firstp.textContent = 'first you have to check for allowed the terms and condition'
//     }
// }

// const num = document.getElementById("num");
// const tofarenhigh = document.getElementById("tofarenhigh")
// const tocelcius = document.getElementById("tocelcius")
// const result = document.getElementById("result")

// let temprature;

// function convert(){
//     if(tofarenhigh.checked){
//         temprature = Number(num.value)
//         temprature = temprature *9 /5 +32;
//         result.textContent = ((temprature.toFixed(1)) + "º F");
//     }
//     else if(tocelcius.checked){
//         temprature = Number(num.value)
//         temprature = (temprature - 32) * (5/9)
//         result.textContent = ((temprature.toFixed(1)) + "º C");
//     }
//     else{
//         result.textContent = 'select any things'
//     }
// }

// //---------------------------------------------------------------
// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice");
// const dName = document.getElementById("dName")
// const dimage = document.getElementById("dimage")


// const values = [];
// const images = [];

//    num = numOfDice.value;
  
//    for(let i = 0; i< num; i++){
//     const value = Math.floor(Math.random()*6) +1;
//     values.push(value)

//     images.push(` <img src="./images/${value}.png" alt="${value}">`)
    
//    }

//    dName.textContent =` dice ${values.join(", ")}`
//    dimage.innerHTML = `images ${images.join('')}`
   
// }


//---------------------------------------------------------------------------------------------------------


// function calculator(){
//     const Pamount = document.getElementById("pAmmount");
// const interest = document.getElementById("interest");
// const months = document.getElementById("months");
// const total = document.getElementById("total");

//    let amount = Number(Pamount.value);
//    let inter = Number(interest.value /100);
//    let mon = Number(months.value);

//    const result = amount  + (amount * inter * mon);

//    total.textContent = `is for ${mon} months are ₹${result}`;
// }


//------------------------------------------------------------------------------------------

// function updateClock(){
//     const now = new Date()
//     let hours = now.getHours();
//     const medrian = hours >= 12 ? "PM": "AM";
//     hours = hours % 12 || 12
//     hours = hours.toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0)
//     const second = now.getSeconds().toString().padStart(2,0)

//     const timeString = `${hours}:${minutes}:${second} ${medrian}`

//     document.getElementById("clock").textContent = timeString
// }

// setInterval(updateClock,1000)

//-------------------------------------------------------

const display = document.getElementById("watch");

let timer = null;
let starttimer = 0;
let elispetimer = 0;
let isRunning = false;



function start(){
    if(!isRunning){
        starttimer = Date.now() - elispetimer;
        timer = setInterval(updatewatch, 10);
        isRunning = true;
    }

}

function stop(){
if(isRunning){
    clearInterval(timer)
    elispetimer = Date.now() - starttimer
    isRunning = false
}

}

function reset(){

    clearInterval(timer)
    starttimer = 0;
    elispetimer = 0;
    isRunning = false
    display.textContent = "00 : 00 : 00 : 00"

}

function updatewatch(){
 const currenttime = Date.now();
 elispetimer = currenttime - starttimer;

 let hours = Math.floor(elispetimer / (1000 * 60 * 60));
 let minutes = Math.floor(elispetimer / (1000 * 60)% 60);
 let second = Math.floor(elispetimer / (1000) %60);
 let millisecond = Math.floor(elispetimer %1000 /10);

 hours = String(hours).padStart(2,0);
 minutes = String(minutes).padStart(2,0);
 second = String(second).padStart(2,0);
 millisecond = String(millisecond).padStart(2,0);

 display.textContent = ` ${hours} : ${minutes} : ${second} : ${millisecond}`
}