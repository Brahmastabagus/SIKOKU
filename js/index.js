//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

produks = document.querySelectorAll('.accordion-item')
produks.forEach((produk) => {
    produk.addEventListener("click",
        function () {
            pro = produk.querySelector('.accordion-button')
            if (pro.className == 'accordion-button') {
                produk.querySelector('.img').style.transform = "rotate(180deg)";
            } else if (pro.className == 'accordion-button accordion-button-1') {
                produk.querySelector('.img').style.transform = "rotate(180deg)";
            } else {
                pro.querySelector('.img').style.transform = "rotate(360deg)";
            }
        });
})