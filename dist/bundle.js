/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    font-family: Roboto ,Arial, Helvetica, sans-serif;
}
body{
    margin: 0;
    padding: 0;
    /* height: 100vh;
    background: url('./mountain-sky-img.jpg') no-repeat;
    background-size: cover;
    background-position: center; */
}


body {
    /* height: 100vh; */
    margin: 0;
    background-image: url(https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80);
    background-size: cover;
    background-position: center;
    overflow: auto;
  }

  body > *, .input-form{
    margin: 50px auto
  }

h1{
    text-align: center;
    background: #000000a1;
    color: white;
    padding: 20px;
    width: 600px;
    border-radius: 20px;
}

.input-form{
    text-align: center;
}

#loc-input{
    border-radius: 20px;
}

.submit-btn{
    border-radius: 20px;
}

.temp{
    font-size: 3rem;
}

.weather-info-container{
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
}

.main-weather-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 400px;
}

.location-container{
    grid-column: 1/4;
    grid-row: 1;
    text-align: center;
}

.weather-info-container, .input-form, .forecast-container{
    background-color: rgba(0, 0, 0, 0.616);
    border-radius: 20px;
    color: white;
    padding: 20px;
    max-width: 60%;
}

.temp-icon-container{
    grid-row: 2/5;
    grid-column: 1/3;
}

.rain, .humidity, .wind{
    grid-column: 3;
}
.rain{
    grid-row: 1;
}
.humidity{
    grid-row: 2;
}
.wind{
    grid-row: 3;
}

.secondary-weather-container{
    display:grid;
    grid-template-rows: repeat(4, 1fr);
}

.forecast-container{
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;

}

.forecast-day-container{
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    justify-items: center;
    background-color: rgba(0, 0, 0, 0.479);
    border-radius: 20px;
}

/* Toggle Temp Btns */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

  form.input-form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
}

.switch-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.switch{
    grid-column: 1/3;
    grid-row: 1/2;
}
.temp-F{
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 1;
    margin: 0;
    color: black;
    pointer-events: none;


}

.temp-C{
    grid-column: 2/3;
    grid-row: 1/2;
    z-index: 1;
    margin: 0;
    color: black;
    pointer-events: none;


}

@media(max-width: 960px){
    .weather-info-container{
        display: grid;
        justify-content: inherit;
        align-items: center;
        justify-items: center;
    }
    .main-weather-container{

    }

    .secondary-weather-container{
        grid-row: 1/2;
        grid-template-rows: repeat(2, 1fr);
        align-self: center;
        justify-items: center;
    }
}

@media(max-width:750px){
    .main-weather-container{
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        width: inherit;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,iDAAiD;AACrD;AACA;IACI,SAAS;IACT,UAAU;IACV;;;kCAG8B;AAClC;;;AAGA;IACI,mBAAmB;IACnB,SAAS;IACT,qLAAqL;IACrL,sBAAsB;IACtB,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE;EACF;;AAEF;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,2DAA2D;IAC3D,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,qBAAqB;IACrB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA,qBAAqB;AACrB;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,SAAS;IACT,YAAY;IACZ,oBAAoB;;;AAGxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,SAAS;IACT,YAAY;IACZ,oBAAoB;;;AAGxB;;AAEA;IACI;QACI,aAAa;QACb,wBAAwB;QACxB,mBAAmB;QACnB,qBAAqB;IACzB;IACA;;IAEA;;IAEA;QACI,aAAa;QACb,kCAAkC;QAClC,kBAAkB;QAClB,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,0BAA0B;QAC1B,kCAAkC;QAClC,cAAc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    font-family: Roboto ,Arial, Helvetica, sans-serif;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    /* height: 100vh;\r\n    background: url('./mountain-sky-img.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center; */\r\n}\r\n\r\n\r\nbody {\r\n    /* height: 100vh; */\r\n    margin: 0;\r\n    background-image: url(https://images.unsplash.com/photo-1578241561880-0a1d5db3cb8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80);\r\n    background-size: cover;\r\n    background-position: center;\r\n    overflow: auto;\r\n  }\r\n\r\n  body > *, .input-form{\r\n    margin: 50px auto\r\n  }\r\n\r\nh1{\r\n    text-align: center;\r\n    background: #000000a1;\r\n    color: white;\r\n    padding: 20px;\r\n    width: 600px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.input-form{\r\n    text-align: center;\r\n}\r\n\r\n#loc-input{\r\n    border-radius: 20px;\r\n}\r\n\r\n.submit-btn{\r\n    border-radius: 20px;\r\n}\r\n\r\n.temp{\r\n    font-size: 3rem;\r\n}\r\n\r\n.weather-info-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-weather-container{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: repeat(4, 1fr);\r\n    width: 400px;\r\n}\r\n\r\n.location-container{\r\n    grid-column: 1/4;\r\n    grid-row: 1;\r\n    text-align: center;\r\n}\r\n\r\n.weather-info-container, .input-form, .forecast-container{\r\n    background-color: rgba(0, 0, 0, 0.616);\r\n    border-radius: 20px;\r\n    color: white;\r\n    padding: 20px;\r\n    max-width: 60%;\r\n}\r\n\r\n.temp-icon-container{\r\n    grid-row: 2/5;\r\n    grid-column: 1/3;\r\n}\r\n\r\n.rain, .humidity, .wind{\r\n    grid-column: 3;\r\n}\r\n.rain{\r\n    grid-row: 1;\r\n}\r\n.humidity{\r\n    grid-row: 2;\r\n}\r\n.wind{\r\n    grid-row: 3;\r\n}\r\n\r\n.secondary-weather-container{\r\n    display:grid;\r\n    grid-template-rows: repeat(4, 1fr);\r\n}\r\n\r\n.forecast-container{\r\n    min-height: 100px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.forecast-day-container{\r\n    display: grid;\r\n    grid-template-rows: repeat(auto-fit, 1fr);\r\n    justify-items: center;\r\n    background-color: rgba(0, 0, 0, 0.479);\r\n    border-radius: 20px;\r\n}\r\n\r\n/* Toggle Temp Btns */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n  \r\n  .switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n  form.input-form {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2%;\r\n}\r\n\r\n.switch-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    align-items: center;\r\n}\r\n\r\n.switch{\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n}\r\n.temp-F{\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    z-index: 1;\r\n    margin: 0;\r\n    color: black;\r\n    pointer-events: none;\r\n\r\n\r\n}\r\n\r\n.temp-C{\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n    z-index: 1;\r\n    margin: 0;\r\n    color: black;\r\n    pointer-events: none;\r\n\r\n\r\n}\r\n\r\n@media(max-width: 960px){\r\n    .weather-info-container{\r\n        display: grid;\r\n        justify-content: inherit;\r\n        align-items: center;\r\n        justify-items: center;\r\n    }\r\n    .main-weather-container{\r\n\r\n    }\r\n\r\n    .secondary-weather-container{\r\n        grid-row: 1/2;\r\n        grid-template-rows: repeat(2, 1fr);\r\n        align-self: center;\r\n        justify-items: center;\r\n    }\r\n}\r\n\r\n@media(max-width:750px){\r\n    .main-weather-container{\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: repeat(3, 1fr);\r\n        width: inherit;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dataRecieverModule.js":
/*!*******************************************!*\
  !*** ./src/modules/dataRecieverModule.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherModule: () => (/* binding */ weatherModule)
/* harmony export */ });
function weatherModule(api){
    let apiKey = api

    
    async function getWeatherData(location, units){

    
        // let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
        let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no`
    
        let res = await fetch(url)
        let data = await res.json()
    
        return data
    }

    return {getWeatherData}

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_dataRecieverModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dataRecieverModule */ "./src/modules/dataRecieverModule.js");

// import mountainIMG from './mountain-sky-img.jpg'



const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let lastWeatherData = {}

let inputForm = document.querySelector('.input-form')
let isCelsius = document.querySelector('#units-input')

//Weather info Elements
let conditionElement = document.querySelector('.condition')
let iconElement = document.querySelector('.icon')
let temperatureElement = document.querySelector('.temp')
let cityElement = document.querySelector('.city')
let stateElement = document.querySelector('.state')
let countryElement = document.querySelector('.country')
let timeElement = document.querySelector('.time')
let humidityElement = document.querySelector('.humidity')
let rainElement = document.querySelector('.rain')
let windElement = document.querySelector('.wind')

let forecastContainer = document.querySelector('.forecast-container')

let apiKey = '46859bc2bfea42b09c9170947231208' //Api Key not important to hide since it's a free key

let weatherApiSession = (0,_modules_dataRecieverModule__WEBPACK_IMPORTED_MODULE_1__.weatherModule)(apiKey)

inputForm.addEventListener('submit', handleInputForm)

isCelsius.addEventListener('click',handleTempSwitch)

function handleTempSwitch(e){
    handleRenderDataByUnits(lastWeatherData)
}

function handleRenderDataByUnits(data){
    if(isCelsius.checked){
        RenderDOM.renderCurrentWeatherInfo_C(data)
        RenderDOM.renderForecastInfo_C(data)
    }
    else{
        RenderDOM.renderCurrentWeatherInfo_F(data)
        RenderDOM.renderForecastInfo_F(data)
    }
}

async function handleInputForm(e){
    e.preventDefault()
    let [location, units] = grabInputs()
    let data = await weatherApiSession.getWeatherData(location, units)
    lastWeatherData =  await data
    console.log(data);
    handleRenderDataByUnits(data)
}

function grabInputs(){
    let locInput = document.querySelector('#loc-input')
    let unitsInput = document.querySelector('#units-input')
    console.log(unitsInput.checked);
    return [locInput.value, unitsInput.value]
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


class RenderDOM{
    static renderCurrentWeatherInfo_F(data){
        iconElement.setAttribute('src', 'https:' + data.current.condition.icon)
        conditionElement.textContent = data.current.condition.text
        cityElement.textContent = data.location.name
        stateElement.textContent = data.location.region
        countryElement.textContent = data.location.country

        let dateObj = new Date(data.location.localtime)
        let dateTime = data.location.localtime.slice(11)
        timeElement.textContent = `${days[dateObj.getDay()]} ${dateTime}`

        // console.log(dateObj.toJSON());
        // timeElement.textContent = data.location.localtime

        temperatureElement.textContent = `${data.current.temp_f}F`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`
        windElement.textContent = `${data.current.wind_mph}mph`
    }

    static renderCurrentWeatherInfo_C(data){
        iconElement.setAttribute('src', 'https:' + data.current.condition.icon)
        conditionElement.textContent = data.current.condition.text
        cityElement.textContent = data.location.name
        stateElement.textContent = data.location.region
        countryElement.textContent = data.location.country

        let dateObj = new Date(data.location.localtime)
        let dateTime = data.location.localtime.slice(11)
        timeElement.textContent = `${days[dateObj.getDay()]} ${dateTime}`

        // console.log(dateObj.toJSON());
        // timeElement.textContent = data.location.localtime

        temperatureElement.textContent = `${data.current.temp_c}C`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`
        windElement.textContent = `${data.current.wind_kph}kph`
    }

    static renderForecastInfo_F(data){
        removeAllChildNodes(forecastContainer)

        let forecastArr = data.forecast.forecastday
        forecastArr.forEach(day => {
            // console.log(day.date);
            // console.log(day.day.condition.text);
            // console.log(day.day.avgtemp_f);

            let forecastDayContainer = document.createElement('div')
            forecastDayContainer.classList.add('forecast-day-container')

            let forecastIcon = document.createElement('img')
            forecastIcon.setAttribute('src','https:' + day.day.condition.icon)
            forecastDayContainer.appendChild(forecastIcon)

            let forecastDate = document.createElement('p')
            let dateObj = new Date(day.date.replace(/-/g, '\/')) //Date constructor needs hyphens replaced by dashes otherwise the constructor will be one day off
            forecastDate.textContent = days[dateObj.getDay()]
            forecastDayContainer.appendChild(forecastDate)

            let forecastCondition = document.createElement('p')
            forecastCondition.textContent = day.day.condition.text
            forecastDayContainer.appendChild(forecastCondition)

            let forecastTemp = document.createElement('p')
            forecastTemp.textContent = `${day.day.avgtemp_f}F`
            forecastDayContainer.appendChild(forecastTemp)
            

            forecastContainer.appendChild(forecastDayContainer)
        })
    }

    static renderForecastInfo_C(data){
        removeAllChildNodes(forecastContainer)

        let forecastArr = data.forecast.forecastday
        forecastArr.forEach(day => {
            // console.log(day.date);
            // console.log(day.day.condition.text);
            // console.log(day.day.avgtemp_f);

            let forecastDayContainer = document.createElement('div')
            forecastDayContainer.classList.add('forecast-day-container')

            let forecastIcon = document.createElement('img')
            forecastIcon.setAttribute('src','https:' + day.day.condition.icon)
            forecastDayContainer.appendChild(forecastIcon)

            let forecastDate = document.createElement('p')
            let dateObj = new Date(day.date.replace(/-/g, '\/')) //Date constructor needs hyphens replaced by dashes otherwise the constructor will be one day off
            forecastDate.textContent = days[dateObj.getDay()]
            forecastDayContainer.appendChild(forecastDate)

            let forecastCondition = document.createElement('p')
            forecastCondition.textContent = day.day.condition.text
            forecastDayContainer.appendChild(forecastCondition)

            let forecastTemp = document.createElement('p')
            forecastTemp.textContent = `${day.day.avgtemp_c}C`
            forecastDayContainer.appendChild(forecastTemp)
            

            forecastContainer.appendChild(forecastDayContainer)
        })
    }
}


//Render New York on load
async function initialLoad(){
    let initialData = await weatherApiSession.getWeatherData('New York', 'F')
    console.log(initialData);
    lastWeatherData = initialData
    RenderDOM.renderCurrentWeatherInfo_F(initialData)
    RenderDOM.renderForecastInfo_F(initialData)
}

initialLoad()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysb0hBQW9IO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9B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QUFzQjtBQUMvRCxxQ0FBcUMsc0RBQXNEO0FBQzNGLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RhdGFSZWNpZXZlck1vZHVsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byAsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5ib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vbW91bnRhaW4tc2t5LWltZy5qcGcnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc4MjQxNTYxODgwLTBhMWQ1ZGIzY2I4YT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIGJvZHkgPiAqLCAuaW5wdXQtZm9ybXtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvXHJcbiAgfVxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmlucHV0LWZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2MtaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50ZW1we1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tYWluLXdlYXRoZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubG9jYXRpb24tY29udGFpbmVye1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lciwgLmlucHV0LWZvcm0sIC5mb3JlY2FzdC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi50ZW1wLWljb24tY29udGFpbmVye1xyXG4gICAgZ3JpZC1yb3c6IDIvNTtcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbn1cclxuXHJcbi5yYWluLCAuaHVtaWRpdHksIC53aW5ke1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbn1cclxuLnJhaW57XHJcbiAgICBncmlkLXJvdzogMTtcclxufVxyXG4uaHVtaWRpdHl7XHJcbiAgICBncmlkLXJvdzogMjtcclxufVxyXG4ud2luZHtcclxuICAgIGdyaWQtcm93OiAzO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXdlYXRoZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxufVxyXG5cclxuLmZvcmVjYXN0LWNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmZvcmVjYXN0LWRheS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDc5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFRvZ2dsZSBUZW1wIEJ0bnMgKi9cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIGZvcm0uaW5wdXQtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyJTtcclxufVxyXG5cclxuLnN3aXRjaC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zd2l0Y2h7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxufVxyXG4udGVtcC1Ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG5cclxufVxyXG5cclxuLnRlbXAtQ3tcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk2MHB4KXtcclxuICAgIC53ZWF0aGVyLWluZm8tY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1haW4td2VhdGhlci1jb250YWluZXJ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktd2VhdGhlci1jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzUwcHgpe1xyXG4gICAgLm1haW4td2VhdGhlci1jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxl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bEIscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvICxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9tb3VudGFpbi1za3ktaW1nLmpwZycpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzgyNDE1NjE4ODAtMGExZDVkYjNjYjhhP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgYm9keSA+ICosIC5pbnB1dC1mb3Jte1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0b1xcclxcbiAgfVxcclxcblxcclxcbmgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1mb3Jte1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb2MtaW5wdXR7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1pbmZvLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4td2VhdGhlci1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaW5mby1jb250YWluZXIsIC5pbnB1dC1mb3JtLCAuZm9yZWNhc3QtY29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE2KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtaWNvbi1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtcm93OiAyLzU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxufVxcclxcblxcclxcbi5yYWluLCAuaHVtaWRpdHksIC53aW5ke1xcclxcbiAgICBncmlkLWNvbHVtbjogMztcXHJcXG59XFxyXFxuLnJhaW57XFxyXFxuICAgIGdyaWQtcm93OiAxO1xcclxcbn1cXHJcXG4uaHVtaWRpdHl7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbn1cXHJcXG4ud2luZHtcXHJcXG4gICAgZ3JpZC1yb3c6IDM7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktd2VhdGhlci1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNvbnRhaW5lcntcXHJcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1kYXktY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDc5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9nZ2xlIFRlbXAgQnRucyAqL1xcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnN3aXRjaCBpbnB1dCB7IFxcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2xpZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIHdpZHRoOiAyNnB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcclxcbiAgLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybS5pbnB1dC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMiU7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoe1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbn1cXHJcXG4udGVtcC1Ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50ZW1wLUN7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xcclxcbiAgICAud2VhdGhlci1pbmZvLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYWluLXdlYXRoZXItY29udGFpbmVye1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRhcnktd2VhdGhlci1jb250YWluZXJ7XFxyXFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOjc1MHB4KXtcXHJcXG4gICAgLm1haW4td2VhdGhlci1jb250YWluZXJ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gd2VhdGhlck1vZHVsZShhcGkpe1xyXG4gICAgbGV0IGFwaUtleSA9IGFwaVxyXG5cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKXtcclxuXHJcbiAgICBcclxuICAgICAgICAvLyBsZXQgdXJsID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSZhcWk9bm9gXHJcbiAgICAgICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9eWVzJmFsZXJ0cz1ub2BcclxuICAgIFxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0V2VhdGhlckRhdGF9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHt3ZWF0aGVyTW9kdWxlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbi8vIGltcG9ydCBtb3VudGFpbklNRyBmcm9tICcuL21vdW50YWluLXNreS1pbWcuanBnJ1xyXG5cclxuaW1wb3J0IHt3ZWF0aGVyTW9kdWxlfSBmcm9tICcuL21vZHVsZXMvZGF0YVJlY2lldmVyTW9kdWxlJ1xyXG5cclxuY29uc3QgZGF5cyA9IFsnU3VuZGF5JywnTW9uZGF5JywnVHVlc2RheScsJ1dlZG5lc2RheScsJ1RodXJzZGF5JywnRnJpZGF5JywnU2F0dXJkYXknXTtcclxuY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywnRmVicnVhcnknLCdNYXJjaCcsJ0FwcmlsJywnTWF5JywnSnVuZScsJ0p1bHknLCdBdWd1c3QnLCdTZXB0ZW1iZXInLCdPY3RvYmVyJywnTm92ZW1iZXInLCdEZWNlbWJlciddO1xyXG5cclxubGV0IGxhc3RXZWF0aGVyRGF0YSA9IHt9XHJcblxyXG5sZXQgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZvcm0nKVxyXG5sZXQgaXNDZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzLWlucHV0JylcclxuXHJcbi8vV2VhdGhlciBpbmZvIEVsZW1lbnRzXHJcbmxldCBjb25kaXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpXHJcbmxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJylcclxubGV0IHRlbXBlcmF0dXJlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJylcclxubGV0IGNpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKVxyXG5sZXQgc3RhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRlJylcclxubGV0IGNvdW50cnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnknKVxyXG5sZXQgdGltZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpXHJcbmxldCBodW1pZGl0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxyXG5sZXQgcmFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbicpXHJcbmxldCB3aW5kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJylcclxuXHJcbmxldCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1jb250YWluZXInKVxyXG5cclxubGV0IGFwaUtleSA9ICc0Njg1OWJjMmJmZWE0MmIwOWM5MTcwOTQ3MjMxMjA4JyAvL0FwaSBLZXkgbm90IGltcG9ydGFudCB0byBoaWRlIHNpbmNlIGl0J3MgYSBmcmVlIGtleVxyXG5cclxubGV0IHdlYXRoZXJBcGlTZXNzaW9uID0gd2VhdGhlck1vZHVsZShhcGlLZXkpXHJcblxyXG5pbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlSW5wdXRGb3JtKVxyXG5cclxuaXNDZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVUZW1wU3dpdGNoKVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGVtcFN3aXRjaChlKXtcclxuICAgIGhhbmRsZVJlbmRlckRhdGFCeVVuaXRzKGxhc3RXZWF0aGVyRGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUmVuZGVyRGF0YUJ5VW5pdHMoZGF0YSl7XHJcbiAgICBpZihpc0NlbHNpdXMuY2hlY2tlZCl7XHJcbiAgICAgICAgUmVuZGVyRE9NLnJlbmRlckN1cnJlbnRXZWF0aGVySW5mb19DKGRhdGEpXHJcbiAgICAgICAgUmVuZGVyRE9NLnJlbmRlckZvcmVjYXN0SW5mb19DKGRhdGEpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIFJlbmRlckRPTS5yZW5kZXJDdXJyZW50V2VhdGhlckluZm9fRihkYXRhKVxyXG4gICAgICAgIFJlbmRlckRPTS5yZW5kZXJGb3JlY2FzdEluZm9fRihkYXRhKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvcm0oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBbbG9jYXRpb24sIHVuaXRzXSA9IGdyYWJJbnB1dHMoKVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBpU2Vzc2lvbi5nZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpXHJcbiAgICBsYXN0V2VhdGhlckRhdGEgPSAgYXdhaXQgZGF0YVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBoYW5kbGVSZW5kZXJEYXRhQnlVbml0cyhkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiBncmFiSW5wdXRzKCl7XHJcbiAgICBsZXQgbG9jSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jLWlucHV0JylcclxuICAgIGxldCB1bml0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzLWlucHV0JylcclxuICAgIGNvbnNvbGUubG9nKHVuaXRzSW5wdXQuY2hlY2tlZCk7XHJcbiAgICByZXR1cm4gW2xvY0lucHV0LnZhbHVlLCB1bml0c0lucHV0LnZhbHVlXVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFJlbmRlckRPTXtcclxuICAgIHN0YXRpYyByZW5kZXJDdXJyZW50V2VhdGhlckluZm9fRihkYXRhKXtcclxuICAgICAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczonICsgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKVxyXG4gICAgICAgIGNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxuICAgICAgICBjaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZVxyXG4gICAgICAgIHN0YXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ucmVnaW9uXHJcbiAgICAgICAgY291bnRyeUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnlcclxuXHJcbiAgICAgICAgbGV0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSlcclxuICAgICAgICBsZXQgZGF0ZVRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgxMSlcclxuICAgICAgICB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RheXNbZGF0ZU9iai5nZXREYXkoKV19ICR7ZGF0ZVRpbWV9YFxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlT2JqLnRvSlNPTigpKTtcclxuICAgICAgICAvLyB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lXHJcblxyXG4gICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2Z9RmBcclxuICAgICAgICBodW1pZGl0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWBcclxuICAgICAgICByYWluRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgXHJcbiAgICAgICAgd2luZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQud2luZF9tcGh9bXBoYFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5kZXJDdXJyZW50V2VhdGhlckluZm9fQyhkYXRhKXtcclxuICAgICAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczonICsgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKVxyXG4gICAgICAgIGNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxuICAgICAgICBjaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZVxyXG4gICAgICAgIHN0YXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ucmVnaW9uXHJcbiAgICAgICAgY291bnRyeUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnlcclxuXHJcbiAgICAgICAgbGV0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSlcclxuICAgICAgICBsZXQgZGF0ZVRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgxMSlcclxuICAgICAgICB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RheXNbZGF0ZU9iai5nZXREYXkoKV19ICR7ZGF0ZVRpbWV9YFxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlT2JqLnRvSlNPTigpKTtcclxuICAgICAgICAvLyB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lXHJcblxyXG4gICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2N9Q2BcclxuICAgICAgICBodW1pZGl0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWBcclxuICAgICAgICByYWluRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgXHJcbiAgICAgICAgd2luZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQud2luZF9rcGh9a3BoYFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5kZXJGb3JlY2FzdEluZm9fRihkYXRhKXtcclxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGZvcmVjYXN0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAgICAgZm9yZWNhc3RBcnIuZm9yRWFjaChkYXkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXkuZGF0ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheS5kYXkuY29uZGl0aW9uLnRleHQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXkuZGF5LmF2Z3RlbXBfZik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9yZWNhc3REYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBmb3JlY2FzdERheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXktY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBmb3JlY2FzdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCdodHRwczonICsgZGF5LmRheS5jb25kaXRpb24uaWNvbilcclxuICAgICAgICAgICAgZm9yZWNhc3REYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJY29uKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcmVjYXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBsZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKGRheS5kYXRlLnJlcGxhY2UoLy0vZywgJ1xcLycpKSAvL0RhdGUgY29uc3RydWN0b3IgbmVlZHMgaHlwaGVucyByZXBsYWNlZCBieSBkYXNoZXMgb3RoZXJ3aXNlIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIG9uZSBkYXkgb2ZmXHJcbiAgICAgICAgICAgIGZvcmVjYXN0RGF0ZS50ZXh0Q29udGVudCA9IGRheXNbZGF0ZU9iai5nZXREYXkoKV1cclxuICAgICAgICAgICAgZm9yZWNhc3REYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXRlKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcmVjYXN0Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIGZvcmVjYXN0Q29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF5LmRheS5jb25kaXRpb24udGV4dFxyXG4gICAgICAgICAgICBmb3JlY2FzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbmRpdGlvbilcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JlY2FzdFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgZm9yZWNhc3RUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF5LmRheS5hdmd0ZW1wX2Z9RmBcclxuICAgICAgICAgICAgZm9yZWNhc3REYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5Q29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbmRlckZvcmVjYXN0SW5mb19DKGRhdGEpe1xyXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoZm9yZWNhc3RDb250YWluZXIpXHJcblxyXG4gICAgICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgICAgICBmb3JlY2FzdEFyci5mb3JFYWNoKGRheSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheS5kYXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5LmRheS5jb25kaXRpb24udGV4dCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheS5kYXkuYXZndGVtcF9mKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JlY2FzdERheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRheS1jb250YWluZXInKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGZvcmVjYXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsJ2h0dHBzOicgKyBkYXkuZGF5LmNvbmRpdGlvbi5pY29uKVxyXG4gICAgICAgICAgICBmb3JlY2FzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pXHJcblxyXG4gICAgICAgICAgICBsZXQgZm9yZWNhc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIGxldCBkYXRlT2JqID0gbmV3IERhdGUoZGF5LmRhdGUucmVwbGFjZSgvLS9nLCAnXFwvJykpIC8vRGF0ZSBjb25zdHJ1Y3RvciBuZWVkcyBoeXBoZW5zIHJlcGxhY2VkIGJ5IGRhc2hlcyBvdGhlcndpc2UgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgb25lIGRheSBvZmZcclxuICAgICAgICAgICAgZm9yZWNhc3REYXRlLnRleHRDb250ZW50ID0gZGF5c1tkYXRlT2JqLmdldERheSgpXVxyXG4gICAgICAgICAgICBmb3JlY2FzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdERhdGUpXHJcblxyXG4gICAgICAgICAgICBsZXQgZm9yZWNhc3RDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgZm9yZWNhc3RDb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0XHJcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29uZGl0aW9uKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcmVjYXN0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBmb3JlY2FzdFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXkuZGF5LmF2Z3RlbXBfY31DYFxyXG4gICAgICAgICAgICBmb3JlY2FzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXApXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vUmVuZGVyIE5ldyBZb3JrIG9uIGxvYWRcclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbExvYWQoKXtcclxuICAgIGxldCBpbml0aWFsRGF0YSA9IGF3YWl0IHdlYXRoZXJBcGlTZXNzaW9uLmdldFdlYXRoZXJEYXRhKCdOZXcgWW9yaycsICdGJylcclxuICAgIGNvbnNvbGUubG9nKGluaXRpYWxEYXRhKTtcclxuICAgIGxhc3RXZWF0aGVyRGF0YSA9IGluaXRpYWxEYXRhXHJcbiAgICBSZW5kZXJET00ucmVuZGVyQ3VycmVudFdlYXRoZXJJbmZvX0YoaW5pdGlhbERhdGEpXHJcbiAgICBSZW5kZXJET00ucmVuZGVyRm9yZWNhc3RJbmZvX0YoaW5pdGlhbERhdGEpXHJcbn1cclxuXHJcbmluaXRpYWxMb2FkKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=