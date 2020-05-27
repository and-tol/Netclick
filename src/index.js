"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/style.css");
var var_1 = require("./js/var");
// * Меню
// открытие/закрытие меню
var_1.hamburger === null || var_1.hamburger === void 0 ? void 0 : var_1.hamburger.addEventListener('click', function () {
    var_1.leftMenu === null || var_1.leftMenu === void 0 ? void 0 : var_1.leftMenu.classList.toggle('openMenu');
    var_1.hamburger === null || var_1.hamburger === void 0 ? void 0 : var_1.hamburger.classList.toggle('open');
});
// закрытие меню при клике вне меню
document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target.closest('.left-menu')) {
        var_1.leftMenu.classList.remove('openMenu');
        var_1.hamburger.classList.remove('open');
    }
});
// дроп меню
var_1.leftMenu.addEventListener('click', function (event) {
    var target = event.target;
    var dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        var_1.leftMenu.classList.add('openMenu');
        var_1.hamburger.classList.add('open');
    }
});
// src на картинку из data-backdrop
// * Карточка
var_1.tvCardsImg.forEach(function (card) {
    card.addEventListener('mouseover', function (event) {
        var target = event.target;
        var src = target.getAttribute('src');
        var dataBackdrop = target.getAttribute('data-backdrop');
        src = dataBackdrop;
    });
    card.addEventListener('mouseenter', function (event) {
        var target = event.target;
        var src = target.getAttribute('src');
        var dataBackdrop = target.getAttribute('data-backdrop');
        dataBackdrop = src;
    });
});
