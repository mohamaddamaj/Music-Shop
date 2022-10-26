//start header
let toUp = document.querySelector(".to-up");
let header = document.querySelector("header");
let spanDate = document.getElementById("currentDate");

const date = new Date();
spanDate.innerHTML = date.getFullYear();

window.onscroll = function () {
  header.classList.toggle("fixed-top", window.scrollY > 54);
  if (this.scrollY > 600) {
    toUp.classList.add("show");
  } else {
    toUp.classList.remove("show");
  }
};

toUp.onclick = function () {
  window.scrollTo({ top: 0 });
};
// End header

let toggleMenu = document.querySelector(".navbar-toggle");
let toggleIcon = document.querySelector(".navbar-toggle i");
let navbar = document.getElementById("navbar");
let navbarMenu = document.querySelector("#navbar nav");

toggleMenu.onclick = function (e) {
  e.stopPropagation();
  navbar.classList.toggle("navbar-mobile");
  toggleIcon.classList.toggle("fa-times");
};

document.addEventListener("click", function (e) {
  if (e.target != toggleMenu && e.target != navbarMenu) {
    if (navbar.classList.contains("navbar-mobile")) {
      console.log(e.target);
      navbar.classList.toggle("navbar-mobile");
      toggleIcon.classList.toggle("fa-times");
    }
  }
});

navbarMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Setting Box
document.querySelector(".setting-handle").onclick = function (e) {
  document.querySelector(".setting-box").classList.toggle("sideBar");
  document.querySelector(".setting-handle .fa-cog").classList.toggle("fa-spin");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-option li");
console.log(colorsLi);

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // change colors
    document.documentElement.style.setProperty(
      "--bs-primary",
      e.target.dataset.color
    );
    // remoce class 'active' from siblings
    colorsLi.forEach((x) => {
      x.classList.remove("active");
      x.removeAttribute("class");
    });
    // add class 'active' to the clicked li
    e.target.classList.add("active");
  });
});

// Random Backgrounds
let backgroundOption = true;
let backgroundInterval;
const randomBackground = document.querySelectorAll(".background-option span");
randomBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    // remoce class 'active' from siblings
    randomBackground.forEach((x) => {
      x.classList.remove("active");
      x.removeAttribute("class");
    });
    // add class 'active' to the clicked li
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomImages();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});

// Select Landing Page Element
let imgSlider = document.getElementById("imageSlider");

// Array of Images
let imgArray = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.png",
];

imgSlider.src = "/images/Instuments/3.jpeg";

function randomImages() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      let random = Math.floor(Math.random() * imgArray.length);
      imgSlider.src = "images/arts/" + imgArray[random];
    }, 1000);
  }
}
randomImages();

let btnFaq = document.querySelectorAll(".btn-faq");

btnFaq.forEach((btn) => {
  btn.onclick = function () {
    this.parentElement.parentElement.children[1].classList.toggle("show");
    // e.stopPropagation();
    // if (e.target !== btn) {
    //   var target =
    //     e.target.parentElement.parentElement.parentElement.children[1];
    //   target.classList.toggle("show");
    // }
  };
});

let portfolioFilter = document.querySelectorAll("#portfolio-filter li");
let boxes = document.querySelectorAll(".image-container .box");

portfolioFilter.forEach((li) => {
  li.onclick = function (e) {
    portfolioFilter.forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.toggle("active");
    if (e.currentTarget.dataset.filter === "*") {
      boxes.forEach((box) => {
        box.style.display = "block";
      });
    } else {
      boxes.forEach((box) => {
        box.style.display = "none";
      });

      document
        .querySelectorAll(e.currentTarget.dataset.filter)
        .forEach((box) => {
          box.style.display = "block";
        });
    }
  };
});
