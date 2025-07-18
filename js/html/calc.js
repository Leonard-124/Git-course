

const hoursInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

const hoursOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');
 
 const startTimerButtonElement = document.getElementById('startTimer');

 let targetTime;;
 let timeInterval;

 const updateTimer = () => {
    if (targetTime) {
        const differenceInSeconds = Math.floor(targetTime - Date.now())/1000;
        if(differenceInSeconds < 1) {
            clearInterval(timeInterval);
        }
        const hours = Math.floor(differenceInSeconds/3600);
        const minutes = Math.floor(differenceInSeconds/60)% 60;
        const seconds = Math.floor(differenceInSeconds % 60);

        hoursOutputElement.textContent = `${hours} hours`;
        minutesOutputElement.textContent = `${minutes} minutes`;
        secondsOutputElement.textContent = `${seconds} seconds`;
    }
 }
 startTimerButtonElement.addEventListener('click', () => {
    const futureHours = parseInt(hoursInputElement.value);
    const futureMinutes = parseInt(minutesInputElement.value);
    const futureSeconds = parseInt(secondsInputElement.value);

    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    date.setHours(currentHours + futureHours);
    date.setMinutes(currentMinutes + futureMinutes);
    date.setSeconds(currentSeconds + futureSeconds);

    targetTime = date.getTime();
    localStorage.setItem('targetTime', targetTime);
    updateTimer();
    timeInterval = setInterval(updateTimer,500)
 });

 const storedTargetTime = localStorage.getItem('targetTime')

 if(storedTargetTime) {
    targetTime = storedTargetTime;
    updateTimer();
    timeInterval = setInterval(updateTimer, 500);
 }
 updateTimer();




    