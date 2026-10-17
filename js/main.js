function tic() {
    const now = new Date();
    
    let hours = 23 - now.getHours();
    let minutes = 59 - now.getMinutes();
    let seconds = 60 - now.getSeconds();
    
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(tic, 1000);