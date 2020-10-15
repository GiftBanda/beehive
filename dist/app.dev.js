"use strict";

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _transition = _interopRequireDefault(require("./transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var H = new _highway["default"].Core({
  transitions: {
    "default": _transition["default"]
  }
});
var active = document.querySelectorAll('.nav-links');
active.forEach(function (link) {
  link.addEventListener('click', changeActive);
});

function changeActive(e) {
  removeBorder();
  this.classList.add('link-border');
}

function removeBorder() {
  active.forEach(function (link) {
    return link.classList.remove('link-border');
  });
}