"use strict";

var _menu = _interopRequireDefault(require("./menu.json"));

var _createTheme = _interopRequireDefault(require("./createTheme"));

var _createMurkup = _interopRequireDefault(require("./createMurkup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listFoodEl = document.querySelector('.js-menu');
var createMurkup = (0, _createMurkup["default"])(_menu["default"]);
listFoodEl.insertAdjacentHTML('afterbegin', createMurkup);
var savedTheme = localStorage.getItem('createTheme');
document.body.classList.add(savedTheme);
var toggleSwitchTheme = document.querySelector('#theme-switch-toggle');
toggleSwitchTheme.addEventListener('click', _createTheme["default"]);