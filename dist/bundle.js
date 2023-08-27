/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    
    async function getWeatherData(){
        let [location, units] = grabInputs()
    
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    
        let res = await fetch(url)
        let data = await res.json()
    
        return data
    }
    
    
    
    
    function grabInputs(){
        let locInput = document.querySelector('#loc-input')
        let unitsInput = document.querySelector('#units-input')
    
        return [locInput.value, unitsInput.value]
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dataRecieverModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dataRecieverModule */ "./src/modules/dataRecieverModule.js");



let inputForm = document.querySelector('.input-form')

let apiKey = '46859bc2bfea42b09c9170947231208'

let weatherApiSession = (0,_modules_dataRecieverModule__WEBPACK_IMPORTED_MODULE_0__.weatherModule)(apiKey)
console.log(weatherApiSession);

inputForm.addEventListener('submit', handleInputForm)

async function handleInputForm(e){
    e.preventDefault()
    let data = await weatherApiSession.getWeatherData()
    console.log(data);
    console.log(data.current.temp_f);
    RenderDOM.renderComponents(data)
    
}


let temperatureElement = document.querySelector('.temp')
let locationElement = document.querySelector('.location')
let timeElement = document.querySelector('.time')
let humidityElement = document.querySelector('.humidity')
let rainElement = document.querySelector('.rain')
let windElement = document.querySelector('.wind')


class RenderDOM{
    static renderComponents(data){
        locationElement.textContent = data.location.name
        timeElement.textContent = data.location.time
        temperatureElement.textContent = `${data.current.temp_f}F / ${data.current.temp_c} C`
        humidityElement.textContent = `${data.current.humidity}%`
        rainElement.textContent = `${data.current.chance_of_rain}%`
        windElement.textContent = `${data.current.wind_mph}`

    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsT0FBTyxLQUFLLFNBQVM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwRUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9CQUFvQixNQUFNLHFCQUFxQjtBQUMzRix5Q0FBeUMsc0JBQXNCO0FBQy9ELHFDQUFxQyw0QkFBNEI7QUFDakUscUNBQXFDLHNCQUFzQjtBQUMzRDtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZGF0YVJlY2lldmVyTW9kdWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VhdGhlck1vZHVsZShhcGkpe1xyXG4gICAgbGV0IGFwaUtleSA9IGFwaVxyXG5cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKXtcclxuICAgICAgICBsZXQgW2xvY2F0aW9uLCB1bml0c10gPSBncmFiSW5wdXRzKClcclxuICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7bG9jYXRpb259JmFxaT1ub2BcclxuICAgIFxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBncmFiSW5wdXRzKCl7XHJcbiAgICAgICAgbGV0IGxvY0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYy1pbnB1dCcpXHJcbiAgICAgICAgbGV0IHVuaXRzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdHMtaW5wdXQnKVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIFtsb2NJbnB1dC52YWx1ZSwgdW5pdHNJbnB1dC52YWx1ZV1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldFdlYXRoZXJEYXRhfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7d2VhdGhlck1vZHVsZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7d2VhdGhlck1vZHVsZX0gZnJvbSAnLi9tb2R1bGVzL2RhdGFSZWNpZXZlck1vZHVsZSdcclxuXHJcblxyXG5sZXQgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZvcm0nKVxyXG5cclxubGV0IGFwaUtleSA9ICc0Njg1OWJjMmJmZWE0MmIwOWM5MTcwOTQ3MjMxMjA4J1xyXG5cclxubGV0IHdlYXRoZXJBcGlTZXNzaW9uID0gd2VhdGhlck1vZHVsZShhcGlLZXkpXHJcbmNvbnNvbGUubG9nKHdlYXRoZXJBcGlTZXNzaW9uKTtcclxuXHJcbmlucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVJbnB1dEZvcm0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvcm0oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBkYXRhID0gYXdhaXQgd2VhdGhlckFwaVNlc3Npb24uZ2V0V2VhdGhlckRhdGEoKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQudGVtcF9mKTtcclxuICAgIFJlbmRlckRPTS5yZW5kZXJDb21wb25lbnRzKGRhdGEpXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmxldCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpXHJcbmxldCBsb2NhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxyXG5sZXQgdGltZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpXHJcbmxldCBodW1pZGl0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxyXG5sZXQgcmFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbicpXHJcbmxldCB3aW5kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJylcclxuXHJcblxyXG5jbGFzcyBSZW5kZXJET017XHJcbiAgICBzdGF0aWMgcmVuZGVyQ29tcG9uZW50cyhkYXRhKXtcclxuICAgICAgICBsb2NhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcclxuICAgICAgICB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24udGltZVxyXG4gICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2Z9RiAvICR7ZGF0YS5jdXJyZW50LnRlbXBfY30gQ2BcclxuICAgICAgICBodW1pZGl0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWBcclxuICAgICAgICByYWluRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5jaGFuY2Vfb2ZfcmFpbn0lYFxyXG4gICAgICAgIHdpbmRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfbXBofWBcclxuXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=