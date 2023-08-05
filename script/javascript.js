document.getElementById("nav").addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
});

function toggleContent() {
    var cardContent = document.getElementById("card-content");
    var readMoreBtn = document.querySelector(".read-more-btn");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};

function toggleContentone() {
    var cardContent = document.getElementById("card-content1");
    var readMoreBtn = document.querySelector(".read-more-btn1");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};

function toggleContenttwo() {
    var cardContent = document.getElementById("card-content2");
    var readMoreBtn = document.querySelector(".read-more-btn2");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};
function toggleContentthree() {
    var cardContent = document.getElementById("card-content3");
    var readMoreBtn = document.querySelector(".read-more-btn3");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};
function toggleContentfour() {
    var cardContent = document.getElementById("card-content4");
    var readMoreBtn = document.querySelector(".read-more-btn4");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};
function toggleContentfive() {
    var cardContent = document.getElementById("card-content5");
    var readMoreBtn = document.querySelector(".read-more-btn5");

    if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
        readMoreBtn.innerText = "...Read More";
    } else {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        readMoreBtn.innerText = "...Read less";
    }
};
