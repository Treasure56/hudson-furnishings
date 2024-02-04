let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".button");
let currentSlide = 1;

// image slider manual navigation
let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// image slider auto play
let repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  let reapeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      if (i >= slides.length) {
        i = 0;
      }

      reapeater();
    }, 10000);
  };

  reapeater();
};

repeat();

``;

const starGroup = document.querySelectorAll(".card .star");
starGroup.forEach((group) => {
  const stars = group.querySelectorAll("i");
  stars.forEach((star, starIndex) => {
    const index = starIndex + 1;
    star.addEventListener("click", (e) => {
      const checked = Array.from(star.classList).includes("star-checked");
      if (checked) {
        star.classList.remove("star-checked");
        return;
      }
      stars.forEach((s, i) => {
        s.classList.remove("star-checked");
        if (i < index) s.classList.add("star-checked");
      });
    });
  });
});

let count = localStorage.getItem("visits") || 0;
document.getElementById("counter").innerText = count;
count++;
document.getElementById("counter").innerText = count;
localStorage.setItem("visits", count);

const togglePopup = () => {
  document.getElementById("popup").classList.toggle("d-none");
};
const setPopupContent = ({ src, title, price, description }) => {
  const popup = document.getElementById("popup");
  popup.querySelector("#title").textContent = title;
  popup.querySelector("#description").textContent = description;
  popup.querySelector("#price").textContent = price;
  popup.querySelector("#img").src = src;
};

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const img = card.querySelector("img");
  const src = img.src;
  const title = card.querySelector("#title").textContent;
  const price = card.querySelector("#price").textContent;
  const description = card.dataset.description;
  img.onclick = (_) => {
    setPopupContent({ src, title, price, description });
    togglePopup();
  };
});
