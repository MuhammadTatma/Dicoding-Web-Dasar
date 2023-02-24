const slider = document.querySelector(".slider");

const sliderArrow = document.querySelectorAll(".slider-arrow")
const sliderImages = document.querySelectorAll(".slider img");
const firstImage = sliderImages[0];
let width = firstImage.clientWidth+2;
sliderArrow.forEach( arrow => {
    arrow.addEventListener("click", () => {
        console.log("p");
        if(arrow.id == "next"){
            slider.scrollLeft += width;
        }else{
            slider.scrollLeft -= width;
        }
    })
}); 