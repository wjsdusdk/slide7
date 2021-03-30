var slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
    slides.style.left = -num * 330 + "px";
    currentIdx = num;
}

nextBtn.addEventListener("click", function () {
    // 마지막 페이지가 아니라면
    if (currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1);
        console.log(currentIdx);
    } else {
        moveSlide(0);
    } // 3개씩 보여주기 때문에 -3
});

prevBtn.addEventListener("click", function () {
    // 첫 페이지가 아니라면
    if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
});
