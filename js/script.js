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

let activeItems;
let elementStyleLeft;
let elementStyleRight;

function selecting(){
  setTimeout(()=>{
    activeItems = document.querySelectorAll(".owl-item.active");
    itemsLeft = document.querySelector(".owl-item.leftalign");
    itemsRight = document.querySelector(".owl-item.rightalign");

    console.log(itemsLeft);
    if(itemsLeft){
      itemsLeft.classList.remove("leftalign");
      itemsLeft.classList.remove("centeralign");
      itemsLeft.classList.remove("rightalign");
    }
    if(itemsRight){
      itemsRight.classList.remove("leftalign");
      itemsRight.classList.remove("centeralign");
      itemsRight.classList.remove("rightalign");
    }
    
    activeItems[0].classList.remove("leftalign");
    activeItems[0].classList.remove("centeralign");
    activeItems[0].classList.remove("rightalign");
    
    activeItems[1].classList.remove("leftalign");
    activeItems[1].classList.remove("centeralign");
    activeItems[1].classList.remove("rightalign");
    
    activeItems[2].classList.remove("leftalign");
    activeItems[2].classList.remove("centeralign");
    activeItems[2].classList.remove("rightalign");

    
    activeItems[0].classList.add("leftalign");
    activeItems[1].classList.add("centeralign");
    activeItems[2].classList.add("rightalign");
  }, 100)
}

let leftArrow;
let rightArrow;

setTimeout(()=>{
  leftArrow = document.querySelector(".fa-angle-left");
  rightArrow = document.querySelector(".fa-angle-right");

  leftArrow.addEventListener("click", () => {
    selecting();
  })

  rightArrow.addEventListener("click", () => {
    selecting();
  })
},200);

selecting();

