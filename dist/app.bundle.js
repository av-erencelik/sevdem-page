/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
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

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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
  } // For old IE

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

/***/ 589:
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss
var styles = __webpack_require__(563);
;// CONCATENATED MODULE: ./src/styles.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/img/bitter.png
const bitter_namespaceObject = __webpack_require__.p + "26fe0bd3ff2a8f433910.png";
;// CONCATENATED MODULE: ./src/img/milk.png
const milk_namespaceObject = __webpack_require__.p + "9f7dcf6393967dbbb7a3.png";
;// CONCATENATED MODULE: ./src/img/milk and bitter.png
const milk_and_bitter_namespaceObject = __webpack_require__.p + "59cab277901ba3e77c95.png";
;// CONCATENATED MODULE: ./src/img/package.png
const package_namespaceObject = __webpack_require__.p + "bcec74ee3413eb69a956.png";
;// CONCATENATED MODULE: ./src/img/rainbow.png
const rainbow_namespaceObject = __webpack_require__.p + "0daca76dae273e67bbb0.png";
;// CONCATENATED MODULE: ./src/img/&.png
const _namespaceObject = __webpack_require__.p + "3bc26ebbf1c1eaa6aa5e.png";
;// CONCATENATED MODULE: ./src/img/birthdayCake.png
const birthdayCake_namespaceObject = __webpack_require__.p + "2dc93b111e5c2b013c31.png";
;// CONCATENATED MODULE: ./src/img/Christmas.png
const Christmas_namespaceObject = __webpack_require__.p + "96cbde78ce35dccdfb26.png";
;// CONCATENATED MODULE: ./src/menu.js










function menuPage(content) {
    content.textContent = ""
    const header = document.createElement('header')
    const container = document.createElement('div')
    const logo = document.createElement('h1')
    const links = document.createElement('div')
    const home = document.createElement('h3')
    const menu = document.createElement('h3')
    const about = document.createElement('h3')

    container.classList.add('container')
    logo.classList.add('logo')
    logo.textContent = "SEVDEM"
    links.classList.add('links')
    menu.classList.add('active')
    home.textContent = "Home"
    menu.textContent = "Menu"
    about.textContent = "About"
    home.setAttribute('id','home')
    menu.setAttribute('id','menu')
    about.setAttribute('id','about')
    
    content.appendChild(header)
    header.appendChild(container)
    container.appendChild(logo)
    container.appendChild(links)
    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(about) 

    const menuMain = document.createElement('div')
    const menuContainer = document.createElement('div')
    const firstCard = document.createElement('div')
    const secondCard = document.createElement('div')
    const thirdCard = document.createElement('div')
    const fourthCard = document.createElement('div')
    const fifthCard = document.createElement('div')
    const sixthCard = document.createElement('div')
    const seventhCard = document.createElement('div')
    const eighthCard = document.createElement('div')
    const firstImg = document.createElement('img')
    const secondImg = document.createElement('img')
    const thirdImg = document.createElement('img')
    const fourthImg = document.createElement('img')
    const fifthImg = document.createElement('img')
    const sixthImg = document.createElement('img')
    const seventhImg = document.createElement('img')
    const eighthImg = document.createElement('img')
    const firstHeader = document.createElement('h4')
    const secondHeader = document.createElement('h4')
    const thirdHeader = document.createElement('h4')
    const fourthHeader = document.createElement('h4')
    const fifthHeader = document.createElement('h4')
    const sixthHeader = document.createElement('h4')
    const seventhHeader = document.createElement('h4')
    const eighthHeader = document.createElement('h4')

    menuMain.classList.add('menu')
    menuContainer.classList.add('menuContainer')
    firstCard.classList.add('card')
    secondCard.classList.add('card')
    thirdCard.classList.add('card')
    fourthCard.classList.add('card')
    fifthCard.classList.add('card')
    sixthCard.classList.add('card')
    seventhCard.classList.add('card')
    eighthCard.classList.add('card')
    firstHeader.classList.add('card-header')
    secondHeader.classList.add('card-header')
    thirdHeader.classList.add('card-header')
    fourthHeader.classList.add('card-header')
    fifthHeader.classList.add('card-header')
    sixthHeader.classList.add('card-header')
    seventhHeader.classList.add('card-header')
    eighthHeader.classList.add('card-header')

    firstImg.src = `${bitter_namespaceObject}`
    secondImg.src = `${milk_namespaceObject}`
    thirdImg.src = `${milk_and_bitter_namespaceObject}`
    fourthImg.src = `${package_namespaceObject}`
    fifthImg.src = `${rainbow_namespaceObject}`
    sixthImg.src = `${_namespaceObject}`
    seventhImg.src = `${birthdayCake_namespaceObject}`
    eighthImg.src = `${Christmas_namespaceObject}`

    firstHeader.textContent = 'BITTER CHOCOLATE'
    secondHeader.textContent = 'MILK CHOCOLATE'
    thirdHeader.textContent = 'ENJOY BOTH TASTES'
    fourthHeader.textContent = 'BUY IN PACK'
    fifthHeader.textContent = 'UNLIMITED TASTES'
    sixthHeader.textContent = '&'
    seventhHeader.textContent = 'NOT ONLY CHOCOLATES'
    eighthHeader.textContent = 'EVEN CHRISTMAS HOMES'

    content.appendChild(menuMain)
    menuMain.appendChild(menuContainer)
    menuContainer.appendChild(firstCard)
    menuContainer.appendChild(secondCard)
    menuContainer.appendChild(thirdCard)
    menuContainer.appendChild(fourthCard)
    menuContainer.appendChild(fifthCard)
    menuContainer.appendChild(sixthCard)
    menuContainer.appendChild(seventhCard)
    menuContainer.appendChild(eighthCard)
    firstCard.appendChild(firstImg)
    firstCard.appendChild(firstHeader)
    secondCard.appendChild(secondImg)
    secondCard.appendChild(secondHeader)
    thirdCard.appendChild(thirdImg)
    thirdCard.appendChild(thirdHeader)
    fourthCard.appendChild(fourthImg)
    fourthCard.appendChild(fourthHeader)
    fifthCard.appendChild(fifthImg)
    fifthCard.appendChild(fifthHeader)
    sixthCard.appendChild(sixthImg)
    sixthCard.appendChild(sixthHeader)
    seventhCard.appendChild(seventhImg)
    seventhCard.appendChild(seventhHeader)
    eighthCard.appendChild(eighthImg)
    eighthCard.appendChild(eighthHeader)

    const homeButton = document.getElementById('home')
    homeButton.addEventListener('click', () => homePage(content))

}
;// CONCATENATED MODULE: ./src/home.js


function homePage(content) {
    content.textContent=""
    const header = document.createElement('header')
    const container = document.createElement('div')
    const logo = document.createElement('h1')
    const links = document.createElement('div')
    const home = document.createElement('h3')
    const menu = document.createElement('h3')
    const about = document.createElement('h3')

    container.classList.add('container')
    logo.classList.add('logo')
    logo.textContent = "SEVDEM"
    links.classList.add('links')
    home.classList.add('active')
    home.textContent = "Home"
    menu.textContent = "Menu"
    about.textContent = "About"
    home.setAttribute('id','home')
    menu.setAttribute('id','menu')
    about.setAttribute('id','about')
    
    content.appendChild(header)
    header.appendChild(container)
    container.appendChild(logo)
    container.appendChild(links)
    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(about) 

    const main = document.createElement('main')
    const slogan = document.createElement('div')
    const mainSlogan = document.createElement('h1')
    const secondSlogan = document.createElement('h3')
    const orderButton = document.createElement('button')

    orderButton.textContent = "Order Now"
    mainSlogan.textContent = "Sevdem Will Brighten Your Day"
    secondSlogan.textContent = "7/24 Open"
    slogan.classList.add('slogan')

    content.appendChild(main)
    main.appendChild(slogan)
    slogan.appendChild(mainSlogan)
    slogan.appendChild(secondSlogan)
    main.appendChild(orderButton)

    const menuButton = document.getElementById('menu')
    menuButton.addEventListener('click', () => menuPage(content))
}
;// CONCATENATED MODULE: ./src/main.js



const content = document.getElementById('content')

homePage(content)


// menuPage(content)
})();

/******/ })()
;