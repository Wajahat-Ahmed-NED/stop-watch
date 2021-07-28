// const { func } = require("prop-types")

// console.log('I am wasjahat')
var min=0
var sec=0
var millisec=0

var displaymili=document.getElementById('displaymilliSec')
var displaysec=document.getElementById('displaySec')
var displaymin=document.getElementById('displayMin')

// console.log(1)
// // 1000milisec ha
// setTimeout(function(){
//     console.log(2)
// },1000)

// console.log(3)


// function time(){
//     console.log(1)
// }
// setInterval(time,1000)


// var interval=setInterval(function(){
//     console.log(1)
// },1000)

// function start(){
// clearInterval(interval)
// }


// function foo(){
//     console.log(1)
// }

// //iske 2 parameter hoty ha
// setTimeout(foo,1000)//1 sec ke bad ajaega

// setInterval(foo,1000)//hr 1 sec ke bad chalega

function timer(){
    millisec++;
    displaymili.innerHTML=millisec
    if(millisec==100){
        sec++;
        displaysec.innerHTML=sec
        millisec=0;
        if(sec==60){
            min++;
            sec=0;
            displaymin.innerHTML=min
        }
    }
    console.log(millisec)
    console.log(sec)
    console.log(min)
}

// function start(){
//     timer()
//     console.log(millisec)
//     console.log(sec)
// }

var interval;

function start(){
    interval=setInterval(timer,10);
    
    console.log(millisec)
    console.log(sec)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    pause()
    millisec=0;
    sec=0;
    min=0;

    displaymili.innerHTML='0'+0
    displaysec.innerHTML='0'+0
    displaymin.innerHTML='0'+0
}
function startagain(){
    millisec=0;
    sec=0;
    min=0;

    displaymili.innerHTML='0'+0
    displaysec.innerHTML='0'+0
    displaymin.innerHTML='0'+0
}