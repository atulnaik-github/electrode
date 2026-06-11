// const currencyMenus = document.querySelectorAll(".currency-menu");
// const languageMenus = document.querySelectorAll(".language-menu");

// // currency dropdown
// currencyMenus.forEach((menu) => {
//   const currencyDDL = menu.querySelector(".currency-ddl");

//   menu.addEventListener("click", function (event) {
//     event.stopPropagation();

//     // close all language dropdowns
//     document.querySelectorAll(".language-ddl").forEach((ddl) => {
//       ddl.classList.remove("show");
//     });

//     // toggle current currency dropdown
//     currencyDDL.classList.toggle("show");
//   });
// });

// // language dropdown
// languageMenus.forEach((menu) => {
//   const languageDDL = menu.querySelector(".language-ddl");

//   menu.addEventListener("click", function (event) {
//     event.stopPropagation();

//     // close all currency dropdowns
//     document.querySelectorAll(".currency-ddl").forEach((ddl) => {
//       ddl.classList.remove("show");
//     });

//     // toggle current language dropdown
//     languageDDL.classList.toggle("show");
//   });
// });

// // account menu
// const accountMenu = document.querySelector(".account-menu");
// const accountDDL = document.querySelector(".account-ddl");

// accountMenu.addEventListener("click", function () {
//   event.stopPropagation();
//   accountDDL.classList.toggle("show");
// });

// // outside click
// window.addEventListener("click", function () {
//   if (document.querySelector(".account-ddl").classList.contains("show")) {
//     document.querySelector(".account-ddl").classList.remove("show");
//   }

//   document.querySelectorAll(".currency-ddl").forEach((ddl) => {
//     ddl.classList.remove("show");
//   });

//   document.querySelectorAll(".language-ddl").forEach((ddl) => {
//     ddl.classList.remove("show");
//   });
// });

const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownMenus.forEach((menu) => {
  const dropdown = menu.querySelector(".dropdown");
  const icon = menu.querySelector(".dropdown-icon");

  menu.addEventListener("click", function (event) {
    event.stopPropagation();
    // all dropdown close
    document.querySelectorAll(".dropdown").forEach((ddl) => {
      if (ddl !== dropdown) {
        ddl.classList.remove("show");
      }
    });

    // ddl icons reset
    document.querySelectorAll(".dropdown-icon").forEach((i) => {
      if (i !== icon) {
        i.classList.remove("rotate-180");
      }
    });

    // current toggle
    dropdown.classList.toggle("show");
    // toggle icon if exists
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});

// category dropdown
const categoryDropDownMenu = document.querySelector(".open-shop-by-category");
const categoryDropDown = document.querySelector(".category-dropdown");

categoryDropDownMenu.addEventListener("click", function () {
  event.stopPropagation();
  categoryDropDown.classList.toggle("show");
  const icon = categoryDropDownMenu.querySelector(".dropdown-icon");
  icon.classList.toggle("rotate-180");
});

// mobile toggle menu
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenu = document.querySelector(".close-mobile-toggle-menu");
const mobileToggleMenu = document.querySelector(".mobile-toggle-menu");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

mobileMenu.addEventListener("click", function () {
  event.stopPropagation();
  mobileToggleMenu.classList.add("show-toggle-menu");
  sidebarOverlay.classList.add("show-overlay");
  document.body.classList.add("menu-open");
});

closeMobileMenu.addEventListener("click", function () {
  mobileToggleMenu.classList.remove("show-toggle-menu");
  sidebarOverlay.classList.remove("show-overlay");
  document.body.classList.remove("menu-open");
});

// outside click
window.addEventListener("click", function () {
  document.querySelectorAll(".dropdown").forEach((ddl) => {
    ddl.classList.remove("show");
  });

  document.querySelectorAll(".dropdown-icon").forEach((i) => {
    i.classList.remove("rotate-180");
  });

  if (
    mobileToggleMenu.classList.contains("show-toggle-menu") &&
    !mobileToggleMenu.contains(event.target)
  ) {
    mobileToggleMenu.classList.remove("show-toggle-menu");
    sidebarOverlay.classList.remove("show-overlay");
    document.body.classList.remove("menu-open");
  }
});

// const signIn = document.querySelector(".sign-in");
// signIn.addEventListener("click", function () {
//   console.log("clicked");
// });
