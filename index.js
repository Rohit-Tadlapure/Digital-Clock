

setInterval(()=>{
    const time = document.querySelector("#ISOtime");
    const dateAndUTC = document.querySelector('#dateAndUTC');
    const epochInMilliSec = document.querySelector('#epochInMilliSec')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AM_PM = "AM";
    
    
    // let milliSec = Date.now();

    if(hours > 12){
        hours = hours - 12;
        AM_PM = "PM";

    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    ISOtime.textContent = hours + ":" + minutes + ":" + seconds + " " + AM_PM;
    dateAndUTC.textContent = date.toString().slice(0,33);

    // epochInMilliSec.textContent = "Current Epoch Time in MilliSec : " + Math.floor(date.getTime()/1000);
    
    let secSinceEpoch = function secSinceEpoch(){
        return Math.floor(Date.now()/1000) || 0
    }

    epochInMilliSec.textContent = "Current Epoch Time in MilliSec : " + secSinceEpoch();

    // console.log(date.now()-date);
    
});
