// dropdown 
window.onload = dropdown();
function dropdown(){
  let dropdownSelect = document.querySelector(".dropdown-select");
  let choosenValue = document.querySelector("p.select");
  let dropdownArrow = document.querySelector(".dropdown-img");
  let dropdownMenu = document.querySelector(".dropdown-content");
  let dropList = document.querySelectorAll(".dropdown-content p");
  // initially it should hide on load.
  dropdownMenu.classList.toggle("hide");
  // clicking dropdown area.
  dropdownSelect.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hide");
    selectDropdownValue();
  });
  // clicking outside the dropdown area it should hide.
  document.addEventListener("click", (e) => {
    if (e.target !== dropdownSelect && e.target !== dropdownArrow && e.target !== choosenValue) {
      dropdownMenu.classList.add("hide");
    }
  });
  // function to choose the dropdown value.
  function selectDropdownValue() {  
    dropList.forEach((e) => {
      e.addEventListener("click", () => {
        let selectedValue = e.innerText;
        choosenValue.innerText = selectedValue;
      });
    });
  }
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

// let activeItems;
// let elementStyleLeft;
// let elementStyleRight;

// function selecting(){
//   setTimeout(()=>{
//     activeItems = document.querySelectorAll(".owl-item.active");
//     itemsLeft = document.querySelector(".owl-item.leftalign");
//     itemsRight = document.querySelector(".owl-item.rightalign");

//     console.log(itemsLeft);
//     if(itemsLeft){
//       itemsLeft.classList.remove("leftalign");
//       itemsLeft.classList.remove("centeralign");
//       itemsLeft.classList.remove("rightalign");
//     }
//     if(itemsRight){
//       itemsRight.classList.remove("leftalign");
//       itemsRight.classList.remove("centeralign");
//       itemsRight.classList.remove("rightalign");
//     }
    
//     activeItems[0].classList.remove("leftalign");
//     activeItems[0].classList.remove("centeralign");
//     activeItems[0].classList.remove("rightalign");
    
//     activeItems[1].classList.remove("leftalign");
//     activeItems[1].classList.remove("centeralign");
//     activeItems[1].classList.remove("rightalign");
    
//     activeItems[2].classList.remove("leftalign");
//     activeItems[2].classList.remove("centeralign");
//     activeItems[2].classList.remove("rightalign");

    
//     activeItems[0].classList.add("leftalign");
//     activeItems[1].classList.add("centeralign");
//     activeItems[2].classList.add("rightalign");
//   }, 100)
// }

// let leftArrow;
// let rightArrow;

// setTimeout(()=>{
//   leftArrow = document.querySelector(".fa-angle-left");
//   rightArrow = document.querySelector(".fa-angle-right");

//   leftArrow.addEventListener("click", () => {
//     selecting();
//   })

//   rightArrow.addEventListener("click", () => {
//     selecting();
//   })
// },200);

// selecting();

// window.addEventListener('resize', function(event) {
//   console.log("resizing");
//   location.reload();
// }, true);
