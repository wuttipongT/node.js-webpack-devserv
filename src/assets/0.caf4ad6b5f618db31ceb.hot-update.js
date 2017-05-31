webpackHotUpdate(0,{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(46);
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);


var body = document.querySelector('body');
body.style.backgroundColor = "#000";
console.log(other); //[1, 2, 3, [4]]
// debugger;

/***/ })

})