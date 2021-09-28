// dropdown
let counter = 0;
let clickableParagraph = document.querySelector("p.select");
let clickableImg = document.querySelector(".dropdown-img");
let dropdownContent = document.querySelector(".dropdown-content");

clickableParagraph.addEventListener("click", () => {
  counter += 1;
  if (counter % 2 == 0) {
    dropdownContent.style.display = "none";
  } else {
    dropdown();
  }
});

clickableImg.addEventListener("click", () => {
  counter += 1;
  if (counter % 2 == 0) {
    dropdownContent.style.display = "none";
  } else {
    dropdown();
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== clickableParagraph && e.target !== clickableImg) {
    dropdownContent.style.display = "none";
  }
});

function dropdown() {
  dropdownContent.style.display = "block";
  let dropList = document.querySelectorAll(".dropdown-content p");
  dropList.forEach((e) => {
    e.addEventListener("click", () => {
      let selectedValue = e.innerHTML;
      console.log(selectedValue);
      clickableParagraph.innerHTML = selectedValue;
      dropdownContent.style.display = "none";
    });
  });
}

// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
