let input = document.querySelector(".form-control");
let button = document.querySelector(".token .btn");
button.disabled = true;

input.addEventListener('keyup', e => {
    //Check for the input's value
    if (e.target.value == "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});