const slides = document.querySelectorAll('.slide')
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = ` ${index*100}% `
    }
)

const goNext = () => {
    counter++;
    slideImg();
}
const goPrev = () => {
    counter--;
    slideImg();
}
const slideImg = ()  => {
    slides.forEach( (slide) => {
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}