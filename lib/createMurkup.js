"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMurkupList;

var _gallery_foods = _interopRequireDefault(require("../templates/gallery_foods.hbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createMurkupList(cardsFood) {
  return (0, _gallery_foods["default"])(cardsFood);
}