/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/geolocation.js":
/*!****************************!*\
  !*** ./src/geolocation.js ***!
  \****************************/
/***/ (function(module) {

eval("\r\nfunction locationName () {\r\n  return fetch('https://get.geojs.io/v1/ip/geo.json')\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      return data.region\r\n    })\r\n    .catch(() => { alert('Не удалось установить местоположение') })\r\n}\r\n\r\nasync function locationCoords () {\r\n  const response = await fetch('https://get.geojs.io/v1/ip/geo.json')\r\n  const data = await response.json()\r\n\r\n  return [+data.latitude, +data.longitude]\r\n}\r\n\r\nmodule.exports = {\r\n  locationName: locationName,\r\n  locationCoords: locationCoords\r\n}\r\n\n\n//# sourceURL=webpack://gitpages/./src/geolocation.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const weather = __webpack_require__(/*! ./weather */ \"./src/weather.js\")\r\n\r\nconst button = document.querySelector('#button')\r\nconst input = document.querySelector('#input')\r\n\r\nlet arrInput = []\r\n\r\nbutton.addEventListener('click', click)\r\n\r\nemptyList()\r\n\r\nfunction click () {\r\n  listnerInput(input)\r\n  createList()\r\n  weather.weatherHistory(input.value)\r\n}\r\n\r\nfunction listnerInput (cityNameInput) { //  input добавляе в localStorage\r\n  arrInput.push(cityNameInput.value)\r\n  if (arrInput.length > 10) {\r\n    arrInput.shift()\r\n  }\r\n\r\n  localStorage.setItem('cityNameInput', JSON.stringify(arrInput))\r\n}\r\n\r\nfunction emptyList () { // создание списка из localStorage\r\n  try {\r\n    arrInput = JSON.parse(localStorage.getItem('cityNameInput')) || []\r\n  } catch (e) {\r\n    arrInput = []\r\n  }\r\n\r\n  createList()\r\n}\r\n\r\nfunction createList () { // заполнение списка\r\n  const p = document.createElement('p')\r\n  p.id = 'list'\r\n  for (let i = 0; i < arrInput.length; i++) {\r\n    const p2 = document.createElement('p')\r\n    p2.append(arrInput[i])\r\n    p2.onclick = () => { weather.weatherHistory(arrInput[i]) }\r\n    p.append(p2)\r\n  }\r\n  document.querySelector('#list').replaceWith(p)\r\n}\r\n\n\n//# sourceURL=webpack://gitpages/./src/list.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./list */ \"./src/list.js\")\r\n// const module1 = require('./module_1')\r\nconst map = __webpack_require__(/*! ./map */ \"./src/map.js\")\r\n\r\n// module1.a()\r\n//map.map()\r\n\r\nconst weather = __webpack_require__(/*! ./weather */ \"./src/weather.js\")\r\nweather.weather()\r\n\n\n//# sourceURL=webpack://gitpages/./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global ymaps */\r\n\r\nconst geolocation = __webpack_require__(/*! ./geolocation */ \"./src/geolocation.js\")\r\n\r\n// Функция ymaps.ready() будет вызвана, когда\r\n// загрузятся все компоненты API, а также когда будет готово DOM-дерево.\r\n\r\n/*function map () {\r\n  geolocation.locationCoords().then(renderMap)\r\n}\r\n*/\r\nvar myMap\r\n\r\nfunction renderMap(coords) {\r\n  if (myMap) {\r\n    myMap.setCenter(coords)\r\n    return\r\n  }\r\n  ymaps.ready(init)\r\n    \r\n  function init () {\r\n      // eslint-disable-next-line no-new\r\n    myMap=new ymaps.Map('map', {\r\n      center: coords,\r\n      zoom: 7\r\n    })\r\n  }\r\n  console.log(\"!!!!!!!!!!!!!!!!!!!!!\", coords)\r\n}\r\n\r\nmodule.exports = {\r\n  renderMap: renderMap,\r\n  //map: map\r\n}\r\n\n\n//# sourceURL=webpack://gitpages/./src/map.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const geolocation = __webpack_require__(/*! ./geolocation */ \"./src/geolocation.js\")\r\nconst map=__webpack_require__(/*! ./map */ \"./src/map.js\")\r\n\r\nfunction weather () {\r\n  geolocation.locationName().then(weatherHistory)\r\n}\r\nfunction weatherHistory (city) {\r\n  const temp = document.querySelector('#temperature')\r\n  const cityName = document.querySelector('#City')\r\n  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=4901a019dc4603210f8a661644c0e40c`)\r\n    .then(response => {\r\n      return response.json()\r\n    }).then(data => {\r\n      cityName.innerHTML = city;\r\n      coordWeather=[data.coord.lat,data.coord.lon];\r\n      map.renderMap(coordWeather);\r\n      console.log(coordWeather);\r\n      temp.innerHTML = data.main.temp + `<img src=\"https://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png\"/>`\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n  weather: weather,\r\n  weatherHistory: weatherHistory\r\n}\r\n\n\n//# sourceURL=webpack://gitpages/./src/weather.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;