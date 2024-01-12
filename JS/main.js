let toggler = document.querySelector(".list");
let listSpans = document.querySelectorAll(".list span");
let megaMenu = document.querySelector(".mega-menu");

toggler.addEventListener("click", function () {
  if (toggler.dataset.stat == "false") {
    listSpans.forEach((el) => {
      el.classList.add("open");
    });
    megaMenu.classList.add("open");
    toggler.dataset.stat = "true";
  } else {
    listSpans.forEach((el) => {
      el.classList.remove("open");
    });
    megaMenu.classList.remove("open");
    toggler.dataset.stat = "false";
  }
});
