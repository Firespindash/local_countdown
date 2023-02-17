var newYear = nextYear();

function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days':    Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours':   Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    }
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function() {
        var clock = document.getElementById(id); 
        var timer = updateTimer(deadline); 

        clock.innerHTML =  '<span>' + timer.days    + '</span>'
                             +'<span>' + timer.hours   + '</span>'
                             +'<span>' + timer.minutes + '</span>'
                             +'<span>' + timer.seconds + '</span>';

        if (timer.total < 1) { 
            clearInterval(timerInterval);
            clock.innerHTML ='<span>0</span><span>0</span><span>0</span><span>0</span>';
            document.getElementById('newyear').innerHTML = "Happy " + newYear + "!!!";
            reviewIt();
            setTimeout(function() { showIt() }, 1000);
            setTimeout(function() { animateIt() }, 1700);
        }
    }, 1000);
}

function reviewIt() {
    document.getElementsByClassName('newyear-container')[0].style.opacity = "1";
}

function showIt() {
    document.getElementsByClassName('newyear-container')[0].style.top = "0";
}

function animateIt() {
    document.getElementById('newyear').style.opacity = "1";
}

function nextYear() {
    return new Date().getFullYear() + 1;
}

window.onload = function(){
    function newYear() {
        year = nextYear();
        str = "January 1, " + year + " 00:00:00";
        return new Date(str);
    }

    function test() { // For debugging
        str = "January 1, " + new Date().getFullYear() + " 00:00:00";
        return new Date(str);
    }

    var deadline = newYear();
    startTimer("clock", deadline); 
}
