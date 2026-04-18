'use strict';

// element toggle function
const elementToggleFunc = function (elem) { if (elem) elem.classList.toggle("active"); }

// theme toggle variables
const themeBtn = document.querySelector("[data-theme-btn]");

// check for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
  }
}

// theme toggle function
const themeToggleFunc = function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("theme");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
}

if (themeBtn) themeBtn.addEventListener("click", themeToggleFunc);

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    if (modalImg) {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    }
    if (modalTitle) modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    if (modalText) modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// project modal variables
const projectItem = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = projectModalContainer ? projectModalContainer.querySelector("[data-overlay]") : null;

// project modal elements
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalText = document.querySelector("[data-project-modal-text]");

// project modal toggle function
const projectModalFunc = function () {
  if (projectModalContainer) projectModalContainer.classList.toggle("active");
  if (projectOverlay) projectOverlay.classList.toggle("active");
}

// add click event to all project items
for (let i = 0; i < projectItem.length; i++) {
  projectItem[i].addEventListener("click", function (e) {
    const img = this.querySelector("img");
    const title = this.querySelector(".project-title");
    const category = this.querySelector(".project-category");
    const text = this.querySelector(".project-text");

    if (img && projectModalImg) {
      projectModalImg.src = img.src;
      projectModalImg.alt = img.alt;
    }
    if (title && projectModalTitle) projectModalTitle.innerHTML = title.innerHTML;
    if (category && projectModalCategory) projectModalCategory.innerHTML = category.innerHTML;
    if (text && projectModalText) projectModalText.innerHTML = text.innerHTML;

    projectModalFunc();
  });
}

// add click event to project modal close button
if (projectModalCloseBtn) projectModalCloseBtn.addEventListener("click", projectModalFunc);
if (projectOverlay) projectOverlay.addEventListener("click", projectModalFunc);

// achievement modal variables
const achievementItem = document.querySelectorAll(".achievement-post-item");
const achievementModalContainer = document.querySelector("[data-achievement-modal-container]");
const achievementModalCloseBtn = document.querySelector("[data-achievement-modal-close-btn]");
const achievementOverlay = achievementModalContainer ? achievementModalContainer.querySelector("[data-overlay]") : null;

// achievement modal elements
const achievementModalImg = document.querySelector("[data-achievement-modal-img]");
const achievementModalTitle = document.querySelector("[data-achievement-modal-title]");
const achievementModalCategory = document.querySelector("[data-achievement-modal-category]");
const achievementModalDate = document.querySelector("[data-achievement-modal-date]");
const achievementModalText = document.querySelector("[data-achievement-modal-text]");

// achievement modal toggle function
const achievementModalFunc = function () {
  if (achievementModalContainer) achievementModalContainer.classList.toggle("active");
  if (achievementOverlay) achievementOverlay.classList.toggle("active");
}

// add click event to all achievement items
for (let i = 0; i < achievementItem.length; i++) {
  achievementItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    const img = this.querySelector("img");
    const title = this.querySelector(".achievement-item-title");
    const category = this.querySelector(".achievement-category");
    const date = this.querySelector("time");
    const text = this.querySelector(".achievement-text");

    if (img && achievementModalImg) {
      achievementModalImg.src = img.src;
      achievementModalImg.alt = img.alt;
    }
    if (title && achievementModalTitle) achievementModalTitle.innerHTML = title.innerHTML;
    if (category && achievementModalCategory) achievementModalCategory.innerHTML = category.innerHTML;
    if (date && achievementModalDate) {
      achievementModalDate.innerHTML = date.innerHTML;
      achievementModalDate.setAttribute("datetime", date.getAttribute("datetime"));
    }
    if (text && achievementModalText) achievementModalText.innerHTML = text.innerHTML;

    achievementModalFunc();
  });
}

// add click event to achievement modal close button
if (achievementModalCloseBtn) achievementModalCloseBtn.addEventListener("click", achievementModalFunc);
if (achievementOverlay) achievementOverlay.addEventListener("click", achievementModalFunc);

// certification modal variables
const certificationItem = document.querySelectorAll(".certification-post-item");
const certificationModalContainer = document.querySelector("[data-certification-modal-container]");
const certificationModalCloseBtn = document.querySelector("[data-certification-modal-close-btn]");
const certificationOverlay = certificationModalContainer ? certificationModalContainer.querySelector("[data-overlay]") : null;

// certification modal elements
const certificationModalImg = document.querySelector("[data-certification-modal-img]");
const certificationModalTitle = document.querySelector("[data-certification-modal-title]");
const certificationModalText = document.querySelector("[data-certification-modal-text]");

// certification modal toggle function
const certificationModalFunc = function () {
  if (certificationModalContainer) certificationModalContainer.classList.toggle("active");
  if (certificationOverlay) certificationOverlay.classList.toggle("active");
}

// add click event to all certification items
for (let i = 0; i < certificationItem.length; i++) {
  certificationItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    const img = this.querySelector("img");
    const title = this.querySelector(".certification-item-title");
    const text = this.querySelector(".certification-text");

    if (img && certificationModalImg) {
      certificationModalImg.src = img.src;
      certificationModalImg.alt = img.alt;
    }
    if (title && certificationModalTitle) certificationModalTitle.innerHTML = title.innerHTML;
    if (text && certificationModalText) certificationModalText.innerHTML = text.innerHTML;

    certificationModalFunc();
  });
}

// add click event to certification modal close button
if (certificationModalCloseBtn) certificationModalCloseBtn.addEventListener("click", certificationModalFunc);
if (certificationOverlay) certificationOverlay.addEventListener("click", certificationModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// achievement filter variables
const achievementFilterBtn = document.querySelectorAll("[data-achievement-filter-btn]");
const achievementFilterItems = document.querySelectorAll("[data-achievement-filter-item]");
const achievementSelect = document.querySelector("[data-achievement-select]");
const achievementSelectItems = document.querySelectorAll("[data-achievement-select-item]");
const achievementSelectValue = document.querySelector("[data-achievement-select-value]");

const achievementFilterFunc = function (selectedValue) {
  for (let i = 0; i < achievementFilterItems.length; i++) {
    if (selectedValue === "all") {
      achievementFilterItems[i].classList.add("active");
    } else if (selectedValue === achievementFilterItems[i].dataset.category) {
      achievementFilterItems[i].classList.add("active");
    } else {
      achievementFilterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedAchievementBtn = achievementFilterBtn[0];

for (let i = 0; i < achievementFilterBtn.length; i++) {
  achievementFilterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (achievementSelectValue) achievementSelectValue.innerText = this.innerText;
    achievementFilterFunc(selectedValue);
    if (lastClickedAchievementBtn) lastClickedAchievementBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedAchievementBtn = this;
  });
}

// add event in all select items
for (let i = 0; i < achievementSelectItems.length; i++) {
  achievementSelectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (achievementSelectValue) achievementSelectValue.innerText = this.innerText;
    elementToggleFunc(achievementSelect);
    achievementFilterFunc(selectedValue);
  });
}

if (achievementSelect) {
  achievementSelect.addEventListener("click", function () { elementToggleFunc(this); });
}

// certification filter variables
const certificationFilterBtn = document.querySelectorAll("[data-certification-filter-btn]");
const certificationFilterItems = document.querySelectorAll("[data-certification-filter-item]");
const certificationSelect = document.querySelector("[data-certification-select]");
const certificationSelectItems = document.querySelectorAll("[data-certification-select-item]");
const certificationSelectValue = document.querySelector("[data-certification-select-value]");

const certificationFilterFunc = function (selectedValue) {
  for (let i = 0; i < certificationFilterItems.length; i++) {
    if (selectedValue === "all") {
      certificationFilterItems[i].classList.add("active");
    } else if (selectedValue === certificationFilterItems[i].dataset.category) {
      certificationFilterItems[i].classList.add("active");
    } else {
      certificationFilterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedCertificationBtn = certificationFilterBtn[0];

for (let i = 0; i < certificationFilterBtn.length; i++) {
  certificationFilterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (certificationSelectValue) certificationSelectValue.innerText = this.innerText;
    certificationFilterFunc(selectedValue);
    if (lastClickedCertificationBtn) lastClickedCertificationBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedCertificationBtn = this;
  });
}

// add event in all select items
for (let i = 0; i < certificationSelectItems.length; i++) {
  certificationSelectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (certificationSelectValue) certificationSelectValue.innerText = this.innerText;
    elementToggleFunc(certificationSelect);
    certificationFilterFunc(selectedValue);
  });
}

if (certificationSelect) {
  certificationSelect.addEventListener("click", function () { elementToggleFunc(this); });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedPage = this.textContent.trim().toLowerCase();
    for (let j = 0; j < pages.length; j++) {
      if (clickedPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        if (navigationLinks[j]) navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        if (navigationLinks[j]) navigationLinks[j].classList.remove("active");
      }
    }
  });
}