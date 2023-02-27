
const slide = document.querySelector(".slide_topics");
const onClick = document.querySelector(".btnOnClick_topic");

let firstImg = slide.querySelectorAll('a')[0];
let firstImgWidth = firstImg.clientWidth + 49

onClick.addEventListener("click", () => {
  const result = () => slide.scrollLeft = slide.scrollLeft + firstImgWidth;
  if (result() > (slide.clientWidth + 49))
    slide.scrollLeft = 0;
})


const slideMentors = document.querySelector(".slide_mentors");
const btn = document.querySelector(".btnOnClick_mentors");

let firstA = slide.querySelectorAll('a')[0];
let firstA_Width = firstA.clientWidth + 49

btn.addEventListener("click", () => {
  const result = () => slideMentors.scrollLeft = slideMentors.scrollLeft + firstA_Width;
  if (result() > (slideMentors.clientWidth + 49))
    slideMentors.scrollLeft = 0;
})


const carousel = document.querySelector(".footer__m");
const btnCarousel = document.querySelectorAll(".btnCarousel");

let firstCarousel = carousel.querySelectorAll('.footerContainer')[0];

btnCarousel.forEach((btn) => {
  btn.addEventListener("click", () => {
    let carouselWidth = firstCarousel.clientWidth + 1;
    carousel.scrollLeft += btn.id == "Left" ? -carouselWidth : carouselWidth
  })
})