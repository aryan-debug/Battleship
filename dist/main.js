/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before{\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n}\\nbody{\\n    background-color: #1a1e35;\\n    display: flex;\\n}\\n.players_div{\\n    width:100%;\\n    height:100%;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    margin-top:150px;\\n    color:white;\\n    font-family: 'Play', sans-serif;\\n    letter-spacing: 3px;\\n    font-size: larger;\\n    position: relative;\\n\\n}\\n#first_player_grid, #second_player_grid, #layout_grid{\\n    display: grid;\\n    grid-template-rows: repeat(10, 1fr);\\n    grid-template-columns: repeat(10, 1fr);\\n    margin-top:50px;\\n}\\n.cell{\\n    width:50px;\\n    height:50px;\\n    border: 1px solid white;\\n}\\n.cell.ship{\\n    background-color: white;\\n}\\n.cell.hit{\\n    background-color: red;\\n}\\n.cell.empty{\\n    background-color: greenyellow;\\n}\\n#container{\\n    width: 100vw;\\n    height: 100vh;\\n    display: flex;\\n    justify-content: space-around;  \\n    align-items: center;\\n}\\n#ship_container_div{\\n    display: flex;\\n    width:390px;\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n    margin-top: 50px;\\n    border: 2px solid white;\\n    padding:40px;\\n    gap:70px\\n}\\n.ship_container{\\n    display: flex;\\n}\\n.ship_container.horizontal{\\n    flex-direction: row;\\n}\\n.ship_container.vertical{\\n    flex-direction: column;\\n}\\n\\n#play_button{\\n    width: 100px;\\n    height:50px;\\n    background-color: none;\\n    border: 3px white solid;\\n\\n}\\n#winner_heading{\\n    position: absolute;\\n    top:200px;\\n    color: white;\\n    font-family: \\\"Play\\\", sans-serif;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scripts_game_loop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_loop.js */ \"./src/scripts/game_loop.js\");\n/* harmony import */ var _scripts_dom_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/dom_handler.js */ \"./src/scripts/dom_handler.js\");\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/ai.js":
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AI\": () => (/* binding */ AI)\n/* harmony export */ });\nconst AI = (gameboard, ships) => {\n    const getGameboard = () => { return gameboard };\n    const placeShips = () => {\n        for(let num in ships){\n            let ship = ships[num];\n            let random_y = Math.floor((Math.random() * 10));\n            let random_x = Math.floor((Math.random() * 10));\n            while(!gameboard.placeShip(random_y, random_x, ship)){\n                random_y = Math.floor((Math.random() * 10));\n                random_x = Math.floor((Math.random() * 10));\n            }\n        }\n    }\n    const attack_random = (gameboard) => {\n        let random_y = Math.floor((Math.random() * 10));\n        let random_x = Math.floor((Math.random() * 10));\n        while(gameboard.isAlreadyHit([random_y, random_x])){\n            random_y = Math.floor((Math.random() * 10));\n            random_x = Math.floor((Math.random() * 10));\n        }\n        gameboard.recieveAttack(random_y, random_x)\n    }\n    return { getGameboard, placeShips, attack_random }\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/ai.js?");

/***/ }),

/***/ "./src/scripts/dom_handler.js":
/*!************************************!*\
  !*** ./src/scripts/dom_handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkArray\": () => (/* binding */ checkArray),\n/* harmony export */   \"create_gameboard\": () => (/* binding */ create_gameboard),\n/* harmony export */   \"declare_winner\": () => (/* binding */ declare_winner),\n/* harmony export */   \"display_ship\": () => (/* binding */ display_ship),\n/* harmony export */   \"make_gameplay_gui\": () => (/* binding */ make_gameplay_gui),\n/* harmony export */   \"make_layout_gui\": () => (/* binding */ make_layout_gui),\n/* harmony export */   \"removeTag\": () => (/* binding */ removeTag),\n/* harmony export */   \"render_board\": () => (/* binding */ render_board)\n/* harmony export */ });\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_loop */ \"./src/scripts/game_loop.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\nfunction create_gameboard(gameboard, gameboard_div, add_listeners = false, listener = null){\n    const dimensions = gameboard.getDimensions();\n    for(let i = 0; i < dimensions * dimensions; i++){\n        let cell = document.createElement(\"div\");\n        if(add_listeners){\n            cell.addEventListener(\"click\", (e) => listener(e, gameboard, gameboard_div));\n        }\n        cell.classList.add(\"cell\");\n        cell.setAttribute(\"index_value\", i);\n        gameboard_div.appendChild(cell);\n    }\n}\n\nfunction create_ships(conatiner, ships){\n    for(let i = 0; i < ships.length; i++){\n        const current_ship = ships[i];\n        const created_ship = create_ship(current_ship);\n        created_ship.id = i\n        conatiner.append(created_ship)\n    }\n}\n\nfunction create_ship(ship){\n    const ship_container = document.createElement(\"div\");\n    ship_container.classList.add(\"ship_container\");\n    ship_container.classList.add(ship.getType());\n    ship_container.setAttribute(\"draggable\", \"true\");\n    for(let i = 0; i < ship.getShipLength(); i++){\n        const ship = document.createElement(\"div\");\n        ship.classList.add(\"ship\");\n        ship.classList.add(\"cell\");\n        ship_container.append(ship);\n    }\n    return ship_container\n}\n\nfunction add_listeners(tags, listener, callback_func){\n    for(let i = 0; i < tags.length; i++){\n        tags[i].addEventListener(listener, callback_func);\n    }\n}\nfunction display_ship(gameboard, grid){\n    const dimensions = gameboard.getDimensions();\n    const board = gameboard.getBoard();\n    const grid_children = grid.children\n    for(let i = 0; i < dimensions; i++){\n        for(let j = 0; j < dimensions; j++){\n            if(board[i][j].ship_type) {\n                grid_children[i*10 + j].classList.add(\"ship\")\n            }\n        }\n    }\n}\n\nfunction render_board(gameboard, gameboard_div){\n    const dimensions = gameboard.getDimensions();\n    const missed_shots = gameboard.getMissedShots();\n    const board = gameboard.getBoard();\n    for(let i = 0; i < dimensions; i++){\n        for(let j = 0; j < dimensions; j++){\n            const ship_object = board[i][j].ship_type;\n            const ship_index = board[i][j].ship_index;\n            if(ship_object){\n                if(ship_object.getShip()[ship_index].hit){\n                    gameboard_div.querySelector(`div[index_value='${i * 10 + j}']`).classList.add(\"hit\");\n                }\n            }\n            if(missed_shots.length > 0 && checkArray(missed_shots[0], [i, j])){\n                gameboard_div.querySelector(`div[index_value='${i * 10 + j}']`).classList.add(\"empty\");\n            }\n        }\n    }\n}\n\nfunction display_play_button(){\n    const button = document.createElement(\"button\");\n    button.textContent = \"Play!\"\n    button.id = \"play_button\";\n    const container = document.getElementById(\"container\")\n    document.getElementById(\"ship_container_div\").remove();\n    container.append(button);\n    button.addEventListener(\"click\", _game_loop__WEBPACK_IMPORTED_MODULE_0__.start_game)\n}\n\nfunction checkArray(a, b){\n    if(!a.length){\n        return false;\n    }\n    for(let i = 0; i < a.length; i++){\n        if(a[i]!=b[i]){\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction make_gameplay_gui(gameboard_1, gameboard_2){\n    const player_heading = document.createElement(\"h1\");\n    const second_player_heading = document.createElement(\"h1\");\n    const first_player_div = document.createElement(\"div\");\n    const second_player_div = document.createElement(\"div\");\n    const first_player_grid = document.createElement(\"div\");\n    const second_player_grid = document.createElement(\"div\");\n    const conatiner = document.createElement(\"div\");\n    const winner_heading = document.createElement(\"h1\");\n\n\n    first_player_div.classList.add(\"players_div\");\n    second_player_div.classList.add(\"players_div\");\n    player_heading.classList.add(\"heading\");\n    second_player_heading.classList.add(\"heading\");\n    first_player_grid.id = \"first_player_grid\";\n    second_player_grid.id = \"second_player_grid\";\n    conatiner.id = \"container\"\n    winner_heading.id = \"winner_heading\";\n\n\n    player_heading.textContent = \"Player\";\n    second_player_heading.textContent = \"AI\";\n\n    create_gameboard(gameboard_1, first_player_grid);\n    create_gameboard(gameboard_2, second_player_grid, true, handle_click);\n\n    first_player_div.append(player_heading, first_player_grid);\n    second_player_div.append(second_player_heading, second_player_grid);\n    conatiner.append(first_player_div, second_player_div, winner_heading)\n    document.body.append(conatiner)\n}\n\nfunction make_layout_gui(ships, layout_gameboard){\n    const layout_gameboard_div = document.createElement(\"div\");\n    const ship_container_div = document.createElement(\"div\");\n    const conatiner = document.createElement(\"div\");\n\n    layout_gameboard_div.id = \"layout_grid\";\n    ship_container_div.id = \"ship_container_div\"\n    conatiner.id = \"container\";\n\n    create_gameboard(layout_gameboard, layout_gameboard_div);\n    create_ships(ship_container_div, ships);\n\n    conatiner.append(layout_gameboard_div, ship_container_div);\n    document.body.append(conatiner);\n    const ship_container = document.querySelectorAll(\".ship_container\");\n    const cells = document.querySelectorAll(\".cell\")\n    add_rotate_ship_listener(ships, ship_container_div);\n    add_listeners(ship_container, \"dragstart\", handle_ship_drag_start);\n    add_listeners(cells, \"dragenter\", handle_ship_drag_enter);\n    add_listeners(cells, \"dragover\", handle_ship_drag_over);\n    cells.forEach((cell) => cell.addEventListener(\"drop\", (e) => {\n        const coord = e.target.getAttribute(\"index_value\")\n        const y = Math.floor(coord / 10);\n        const x = coord % 10;\n        const ship = ships[e.dataTransfer.getData(\"text/plain\")];\n        if(layout_gameboard.placeShip(y, x, ship)){\n            display_ship(layout_gameboard, layout_gameboard_div);\n            ship_container_div.removeChild(document.getElementById(`${e.dataTransfer.getData(\"text/plain\")}`));\n        }\n        if(!ship_container_div.children.length){\n            display_play_button()\n        }\n    }))\n}\n\nfunction removeTag(tag){\n    document.body.removeChild(tag)\n}\n\nfunction handle_click(e, gameboard, gameboard_div){\n    const index = e.target.getAttribute(\"index_value\");\n    const y = Math.floor(index / 10)\n    const x = index % 10;\n    if(!gameboard.isAlreadyHit([y, x])){\n        (0,_game_loop__WEBPACK_IMPORTED_MODULE_0__.attack_handler)();\n    }\n    if(!gameboard.isAllSunk()){\n        gameboard.recieveAttack(y, x);\n        render_board(gameboard, gameboard_div);\n    }\n}\n\nfunction add_rotate_ship_listener(ships){\n    const ship_divs = document.querySelectorAll(\".ship_container\")\n    for(let i = 0; i < ships.length; i++){\n        const current_ship_div = ship_divs[i];\n        current_ship_div.addEventListener(\"click\", (e) => {\n            const isVertical = current_ship_div.classList.contains(\"vertical\")\n            if(isVertical){\n                current_ship_div.classList.remove(\"vertical\");\n                current_ship_div.classList.add(\"horizontal\");\n                ships[i].changeType(\"horizontal\");\n            }\n            else{\n                current_ship_div.classList.remove(\"horizontal\");\n                current_ship_div.classList.add(\"vertical\");\n                ships[i].changeType(\"vertical\");\n\n            }\n        })\n    }\n}\n\nfunction declare_winner(winner){\n    const winner_heading = document.getElementById(\"winner_heading\");\n    winner_heading.textContent = `${winner} won!`\n\n}\n\n\nfunction handle_ship_drag_start(e){ \n    e.dataTransfer.setData(\"text/plain\", e.target.id)\n}\nfunction handle_ship_drag_enter(e){\n    e.preventDefault();\n}\nfunction handle_ship_drag_over(e){\n    e.preventDefault();\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/dom_handler.js?");

/***/ }),

/***/ "./src/scripts/game_loop.js":
/*!**********************************!*\
  !*** ./src/scripts/game_loop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attack_handler\": () => (/* binding */ attack_handler),\n/* harmony export */   \"start_game\": () => (/* binding */ start_game)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _ai_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai.js */ \"./src/scripts/ai.js\");\n/* harmony import */ var _dom_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom_handler.js */ \"./src/scripts/dom_handler.js\");\n\n\n\n\n\n\n\nconst player_gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(10);\nconst ai_gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(10);\n\nconst ai_ships = [\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, \"horizontal\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, \"vertical\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, \"horizontal\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, \"vertical\")\n]\n\nconst player_ships = [\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, \"vertical\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, \"vertical\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, \"horizontal\"),\n    (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, \"horizontal\")\n]\nconst ai = (0,_ai_js__WEBPACK_IMPORTED_MODULE_3__.AI)(ai_gameboard, ai_ships);\n\n(0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.make_layout_gui)(player_ships, player_gameboard);\n\nfunction start_game(){\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.removeTag)(document.getElementById(\"container\"))\n    ;(0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.make_gameplay_gui)(player_gameboard, ai_gameboard);\n    ai.placeShips();\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.display_ship)(player_gameboard, document.getElementById(\"first_player_grid\"));\n}\n\n\n\nfunction attack_handler(){\n    ai.attack_random(player_gameboard);\n    if((player_gameboard.isAllSunk() || ai_gameboard.isAllSunk())){\n        const winner = player_gameboard.isAllSunk() ? \"AI\" : \"Player\"\n        ;(0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.declare_winner)(winner)\n        return\n    }\n    (0,_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.render_board)(player_gameboard, document.getElementById(\"first_player_grid\"))\n\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/game_loop.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _dom_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_handler */ \"./src/scripts/dom_handler.js\");\n\nconst Gameboard = (dimensions) => {\n    const board = [];\n    const shots_hit = [];\n    const missed_shots = []\n    const getBoard = () => {return board};\n    const getDimensions = () => { return dimensions };\n    const getMissedShots = () => {return missed_shots};\n    const createBoard = () => {\n        for(let i = 0; i < dimensions; i++){\n            board.push([])\n            for(let j = 0; j < dimensions; j++){\n                board[i].push({\"ship_type\": undefined, \"ship_index\": undefined});\n            }\n        }\n    }\n    createBoard();\n    const placeShip = (y, x, ship) => {\n        if(!isWithinBounds(y, x, ship)){\n            return false;\n        }\n        if(isIntersecting(y, x, ship)){\n            return false;\n        }\n        for(let i = 0; i < ship.getShipLength(); i++){\n            board[y + (i * (ship.getType() === \"vertical\"))][x + (i * (ship.getType() === \"horizontal\"))].ship_type = ship;\n            board[y + (i * (ship.getType() === \"vertical\"))][x + (i * (ship.getType() === \"horizontal\"))].ship_index = i;\n        }\n        return true;\n    }\n    const recieveAttack = (y, x) => {\n        const coord = board[y][x].ship_type;\n        if(isAlreadyHit([y, x])){\n            return false;\n        }\n        shots_hit.push([y, x]);\n        if(coord){\n            coord.hit(board[y][x].ship_index)\n            return true\n        }\n        else{\n            missed_shots.unshift([y, x])\n            return true;\n        }\n\n    } \n    const isAlreadyHit = (coords) => {\n        if(!shots_hit.length){\n            return false;\n        }\n        for(let i = 0; i < shots_hit.length; i++){\n            if((shots_hit[i][0] === coords[0]) && (shots_hit[i][1] === coords[1])){\n                return true;\n            }\n        }\n        return false;\n    }\n    const isAllSunk = () => {\n        for(let i = 0; i < board.length; i++){\n            for(let j = 0; j < board[i].length; j++){\n                if(board[i][j].ship_type){\n                    if(!board[i][j].ship_type.isSunk()){\n                        return false;\n                    }\n                }\n            }\n        }\n        return true;\n    }\n    const isWithinBounds = (y, x, ship) => {\n        return ship.getType() === \"horizontal\" ? (x + ship.getShipLength()) < dimensions + 1: (y + ship.getShipLength()) <  dimensions + 1\n    }\n    //TODO: Figure out how this works and write tests for it\n    const isIntersecting = (y, x, ship) => {\n        for(let i = 0; i < ship.getShipLength(); i++){\n            if((board[y + (i * (ship.getType() === \"vertical\"))][x + (i * (ship.getType() === \"horizontal\"))].ship_type)){\n                return true;\n            }\n        }\n        return false;\n    }\n    return {getBoard, getMissedShots, getDimensions, placeShip, recieveAttack, isAllSunk, isAlreadyHit}\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = (gameboard) => {\n    const getGameboard = () => { return gameboard };\n    return { getGameboard }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (len, t) => {\n    const length = len;\n    let type = t;\n    const ship = []\n    const getShipLength = () => {return length};\n    const getType = () => {return type};\n    const getShip = () => {return ship}\n    const changeType = (new_type) => {type = new_type};\n    const createShip = () => {\n        for(let i = 0; i < length; i++){\n            ship.push({\"hit\": false});\n        }\n    }\n    createShip()\n    const hit = (index) => {\n        ship[index].hit = true;\n    }\n    const isSunk = () => {\n        for(let i = 0; i < length; i++) {\n            if(!ship[i].hit){\n                return false;\n            }\n        }\n        return true;\n    }\n\n    return {getShipLength, getType,getShip, createShip, changeType, hit, isSunk}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;