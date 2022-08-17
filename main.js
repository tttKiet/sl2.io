// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelectorAll(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide[0].clientWidth;

//   slidesContainer.scrollLeft += slideWidth;

//   if (slidesContainer.scrollLeft >= (slide.length - 1) * slideWidth) {
//     slidesContainer.scrollLeft = 0;
//   }
//   console.log(slidesContainer.scrollLeft);
// });
// prevButton.addEventListener("click", () => {
//   const slideWidth = slide[0].clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// ohter3

const slides = document.querySelectorAll(".slide3_container-img");
const iconR = document.querySelector(".icon-right");
const iconL = document.querySelector(".icon-left");
var index = 0;
var n = slides.length;
console.log(slides);

const handleSlideShowNext = () => {
  for (let i = 0; i < n; i++) {
    if (slides[i % n].classList.contains("img1")) {
      slides[i % n].classList.add("img2");
      slides[i % n].classList.remove("img1");
    } else if (slides[i % n].classList.contains("img2")) {
      slides[i % n].classList.add("img5");
      slides[i % n].classList.remove("img2");
    } else if (slides[i % n].classList.contains("img3")) {
      slides[i % n].classList.add("img1");
      slides[i % n].classList.remove("img3");
    } else if (slides[i % n].classList.contains("img4")) {
      slides[i % n].classList.add("img3");
      slides[i % n].classList.remove("img4");
    } else if (slides[i % n].classList.contains("img5")) {
      slides[i % n].classList.add("img4");
      slides[i % n].classList.remove("img5");
    }
  }
};

const handleSlideShowPrev = () => {
  for (let i = 0; i < n; i++) {
    if (slides[i % n].classList.contains("img1")) {
      slides[i % n].classList.add("img3");
      slides[i % n].classList.remove("img1");
    } else if (slides[i % n].classList.contains("img2")) {
      slides[i % n].classList.add("img1");
      slides[i % n].classList.remove("img2");
    } else if (slides[i % n].classList.contains("img3")) {
      slides[i % n].classList.add("img4");
      slides[i % n].classList.remove("img3");
    } else if (slides[i % n].classList.contains("img4")) {
      slides[i % n].classList.add("img5");
      slides[i % n].classList.remove("img4");
    } else if (slides[i % n].classList.contains("img5")) {
      slides[i % n].classList.add("img2");
      slides[i % n].classList.remove("img5");
    }
  }
};

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.top = () => {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  this.start = () => {
    if (!timerObj) {
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  this.reset = (newT = t) => {
    t = newT;
    this.top().start();
  };
}

let timer = new Timer(handleSlideShowNext, 3000);
timer.start();

iconR.onclick = () => {
  timer.reset();
  handleSlideShowNext();
};

iconL.onclick = () => {
  timer.reset();
  handleSlideShowPrev();
};
