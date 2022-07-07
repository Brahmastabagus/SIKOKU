const data = document.querySelector('.tambah')

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let huruf = 0

data.addEventListener('click', () => {
    const pilihan = document.createElement("INPUT");
    pilihan.setAttribute("type", "text");
    pilihan.setAttribute("placeholder", alphabet[huruf++]);
    huruf--
    pilihan.setAttribute("name", "pilihan" + alphabet[huruf++])
    pilihan.classList.add("form-control")
    pilihan.classList.add("mt-2")
    pilihan.classList.add("pilihan")
    document.body.querySelector('.form').appendChild(pilihan);

    huruf--

    var point = document.createElement("INPUT");
    point.setAttribute("type", "number");
    point.setAttribute("placeholder", "Point " +  alphabet[huruf++]);
    huruf--
    point.setAttribute("name", "point" + alphabet[huruf++])
    point.classList.add("form-control")
    point.classList.add("mt-2")
    point.classList.add("point")
    document.body.querySelector('.form').appendChild(point);
})
const hapus = document.querySelector(".icon")

hapus.addEventListener("click", () => {
    const form = document.querySelector(".form")
    form.removeChild(form.lastChild)
    form.removeChild(form.lastChild)
    huruf--
})