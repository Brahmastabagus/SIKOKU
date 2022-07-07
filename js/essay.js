let input = document.querySelector(".form-control");
let button = document.querySelector(".btn");
button.disabled = true;

input.addEventListener('keyup', e => {
    //Check for the input's value
    if (e.target.value == "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

const waktu = document.querySelector('.countdown').innerHTML
var timer2 = waktu;
var interval = setInterval(function () {


    var timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    var hours = parseInt(timer[0], 10);
    var minutes = parseInt(timer[1], 10);
    var seconds = parseInt(timer[2], 10);
    --seconds;

    minutes = (seconds < 0) ? --minutes : minutes;
    hours = (minutes < 0) ? --hours : hours;


    if (hours < 0 && minutes < 0 && seconds < 0) {
        clearInterval(interval);
        $('.countdown').html('selesai');

    } else {

        //do 59 reset here to allow detection of negative values above
        seconds = (seconds < 0) ? 59 : seconds;
        minutes = (minutes < 0) ? 59 : minutes;

        //set new timer value
        timer2 = hours + ':' + minutes + ':' + seconds;

        //start changes for display only
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        // $(selector + "_" + nr).html(hours + ':' + minutes + ':' + seconds);
        $('.countdown').html(hours + ':' + minutes + ':' + seconds);

    }
}, 1000);