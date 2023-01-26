let sliderButton = document.querySelectorAll(".slider__control-dot_next")
let sliderF = document.querySelector(".main__slider")
let sliderS = document.querySelector(".main__slider2")

sliderButton[0].addEventListener("click", (e) => {
    sliderF.classList.remove("main__slider_vis")
    sliderS.classList.add("main__slider_vis")
})
sliderButton[1].addEventListener("click", (e) => {
    sliderF.classList.add("main__slider_vis")
    sliderS.classList.remove("main__slider_vis")
})
