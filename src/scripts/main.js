AOS.init();

let eventDate = new Date("Dec 10 2023 09:00:00");
let eventTimeStamp = eventDate.getTime();

const countTime = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const timeToEvent = document.getElementById('contador');

    if(nowTimeStamp>eventTimeStamp){
        if(nowTimeStamp>(eventTimeStamp+432000000)){
            timeToEvent.innerHTML = ` já terminou. Mas não se preocupe, ano que vem tem mais!`;
            const button = document.querySelector('.button--primary');


            if(!button.classList.contains('button--disabled')){
                button.classList.add('button--disabled');
            }

        }
        else{
            timeToEvent.innerHTML = ` já começou!!!`;
        }
    }
    else {
        
        const daysInMS = 1000 * 60 * 60 * 24;
        const hoursInMS = 1000 * 60 * 60;
        const minInMS = 1000 * 60;
        const secInMS = 1000;
        
        const daysToEvent = Math.floor((eventTimeStamp - nowTimeStamp) / (daysInMS)) ;
        const hoursToEvent = Math.floor(((eventTimeStamp - nowTimeStamp) % daysInMS) / hoursInMS);
        const minToEvent = Math.floor((((eventTimeStamp - nowTimeStamp) % daysInMS) % hoursInMS) / minInMS);
        const secToEvent = Math.floor(((((eventTimeStamp - nowTimeStamp) % daysInMS) % hoursInMS) % minInMS) / secInMS);
        
        
        timeToEvent.innerHTML = ` começa em ${daysToEvent}d ${hoursToEvent}h ${minToEvent}min ${secToEvent}s`;
    }

}, 1000);