function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
    });
};

const scrollUp = document.getElementById("scroll-to-top");

scrollUp.addEventListener("click", scrollToTop);

