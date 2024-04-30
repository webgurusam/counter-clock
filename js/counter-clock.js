let isStop = true;

let sec = 0;
let min = 0;
let hr = 0;

// start counter clock by this function
const start = () => {
    if(!!isStop){
        isStop = false;
        timer();
    }
}

// counting up by timer function
const timer = () => {
    if(!isStop){

        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        // increasing the timer value
        sec++;
        
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++;
        }
        if(hr == 24){
            hr = 0;
        }

        // set zero before counting up time
        if(sec < 10){
            sec = '0' + sec;
        }
        if(min < 10){
            min = '0' + min;
        }
        if(hr < 10){
            hr = '0' + hr;
        }

        // set all the values in counting up clock
        second.innerHTML = sec;
        minute.innerHTML = min;
        hour.innerHTML = hr;

        // calling timer function after 1 second
        setTimeout(timer, 1000);
    }
}

// stop the timer by stop function
const stop = () => {
    isStop = true;
}

// reset all counting up values by reset function
const reset = () => {
    isStop = true;

    if(sec < 60){
        sec = 0;
        sec = '0' + sec;
    }
    if(min < 60){
        min = 0;
        min = '0' + min;
    }
    if(hr < 24){
        hr = 0;
        hr = '0' + hr;
    }

    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = hr;
}