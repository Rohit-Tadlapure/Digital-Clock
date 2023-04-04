
setInterval(()=>{
    const time = document.querySelector("#ISOtime");
    const dateAndUTC = document.querySelector('#dateAndUTC');
    const epochInMilliSec = document.querySelector('#epochInMilliSec');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AM_PM = "AM";

    //converting time into 12 hours format
    if(hours > 12){
        hours = hours - 12;
        AM_PM = "PM";
    }

    //adding zero before single digit number
    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    let secSinceEpoch = function secSinceEpoch(){
        return Math.floor(Date.now()/1000) || 0 ;
    }

    ISOtime.textContent = hours + ":" + minutes + ":" + seconds + " " + AM_PM;
    dateAndUTC.textContent = date.toString().slice(0,15) + " "+ date.toString().slice(25,33);
    epochInMilliSec.textContent = "Current Epoch Time in MilliSec : " + secSinceEpoch();
});

