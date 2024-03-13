function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}
document.getElementById("menu-btn").addEventListener("click", toggleNavbar);

////////////////////////

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

///////////////////////

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

///////////////////////////////////////
const sidebar = document.querySelector(".sidebar");
const btnBar = document.querySelector(".btn-bar");

btnBar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

////////////////////////////////////

const item1 = document.querySelector(".item1");
const model = document.querySelector(".model");
const btnModel = document.querySelector(".btn-model");

item1.addEventListener("click", () => {
  model.style.transform = "scale(1) transform: translate(-50%, -50%);";
  model.style.opacity = 1;
});

btnModel.addEventListener("click", () => {
  model.style.transform = "scale(0) transform: translate(-50%, -50%);";
  model.style.opacity = 0;
});
