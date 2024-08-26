let close1 = document.querySelector(".close")
let overLay = document.querySelector(".overlay")
let MainImg = overLay.querySelector("img")
let card = document.querySelectorAll(".card .container .box");


console.log(card)
close1.addEventListener("click", () => {
    overLay.style.display = "none"
})

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function (e) {
        overLay.style.display = "flex"
        MainImg.src = this.querySelector("img").src
    })
}