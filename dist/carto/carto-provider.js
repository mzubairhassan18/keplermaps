"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@carto/toolkit");
var _console = _interopRequireDefault(require("global/console"));
var _cartoIcon = _interopRequireDefault(require("./carto-icon"));
var _cloudProviders = require("@kepler.gl/cloud-providers");
var _utils = require("@kepler.gl/utils");
var _reducers = require("@kepler.gl/reducers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var NAME = 'carto';
var DISPLAY_NAME = 'CARTO';
var NAMESPACE = 'keplergl';
var DOMAIN = 'carto.com';
var PRIVATE_STORAGE_ENABLED = true;
var SHARING_ENABLED = true;
var CartoProvider = /*#__PURE__*/function (_Provider) {
  _inherits(CartoProvider, _Provider);
  var _super = _createSuper(CartoProvider);
  function CartoProvider(clientId) {
    var _this;
    _classCallCheck(this, CartoProvider);
    _this = _super.call(this, {
      name: NAME,
      displayName: DISPLAY_NAME,
      icon: _cartoIcon["default"]
    });
    _this.clientId = clientId;
    _this.thumbnail = {
      width: 300,
      height: 200
    };
    _this.currentMap = null;
    _this._folderLink = "https://{user}.".concat(DOMAIN, "/dashboard/maps/external");

    // Initialize CARTO API
    _this._carto = new _toolkit.OAuthApp({
      authorization: "https://".concat(DOMAIN, "/oauth2"),
      scopes: 'schemas:c datasets:rw:*'
    }, {
      serverUrlTemplate: "https://{user}.".concat(DOMAIN, "/"),
      namespace: NAMESPACE
    });
    _this._carto.setClientID(clientId);
    return _this;
  }

  /**
   * The CARTO toolkit library takes care of the login process.
   */
  _createClass(CartoProvider, [{
    key: "login",
    value: function login(onCloudLoginSuccess) {
      var _this2 = this;
      try {
        this._carto.login().then(function () {
          onCloudLoginSuccess && onCloudLoginSuccess(_this2.name);
        });
      } catch (error) {
        this._manageErrors(error);
      }
    }
  }, {
    key: "logout",
    value: function logout(onCloudLogoutSuccess) {
      try {
        this._carto.oauth.clear();
        this._carto.oauth._carto.sync();
        onCloudLogoutSuccess();
      } catch (error) {
        this._manageErrors(error);
      }
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.clientId !== null;
    }
  }, {
    key: "hasPrivateStorage",
    value: function hasPrivateStorage() {
      return PRIVATE_STORAGE_ENABLED;
    }
  }, {
    key: "hasSharingUrl",
    value: function hasSharingUrl() {
      return SHARING_ENABLED;
    }
  }, {
    key: "uploadMap",
    value: function () {
      var _uploadMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var _ref$mapData, mapData, _ref$options, options, _options$isPublic, isPublic, _options$overwrite, overwrite, _mapData$map, _mapData$map2, config, datasets, info, thumbnail, cartoDatasets, cs, title, description, name, thumbnailBase64, result, regex, capturedName, visName;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$mapData = _ref.mapData, mapData = _ref$mapData === void 0 ? {} : _ref$mapData, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
              _context.prev = 1;
              _options$isPublic = options.isPublic, isPublic = _options$isPublic === void 0 ? true : _options$isPublic, _options$overwrite = options.overwrite, overwrite = _options$overwrite === void 0 ? true : _options$overwrite;
              _mapData$map = mapData.map, _mapData$map2 = _mapData$map === void 0 ? {} : _mapData$map, config = _mapData$map2.config, datasets = _mapData$map2.datasets, info = _mapData$map2.info, thumbnail = mapData.thumbnail;
              cartoDatasets = datasets.map(this._convertDataset);
              _context.next = 7;
              return this._carto.getCustomStorage();
            case 7:
              cs = _context.sent;
              title = info.title, description = info.description;
              name = title;
              if (!(mapData && thumbnail)) {
                _context.next = 16;
                break;
              }
              _context.next = 13;
              return this._blobToBase64(mapData.thumbnail);
            case 13:
              _context.t0 = _context.sent;
              _context.next = 17;
              break;
            case 16:
              _context.t0 = null;
            case 17:
              thumbnailBase64 = _context.t0;
              if (!overwrite) {
                _context.next = 24;
                break;
              }
              _context.next = 21;
              return cs.updateVisualization({
                id: this.currentMap.id,
                name: name,
                description: description,
                thumbnail: thumbnailBase64,
                config: JSON.stringify(config),
                isprivate: this.currentMap.isprivate
              }, cartoDatasets);
            case 21:
              result = _context.sent;
              _context.next = 30;
              break;
            case 24:
              // TODO: Ask for changing current shared map generation because of being too oriented to file based clouds
              // Check public name generation and replace
              regex = /(?:^keplergl_)([a-z0-9]+)(?:.json$)/;
              capturedName = name.match(regex);
              visName = capturedName ? "sharedmap_".concat(capturedName[1]) : name;
              _context.next = 29;
              return cs.createVisualization({
                name: visName,
                description: description,
                thumbnail: thumbnailBase64,
                config: JSON.stringify(config),
                isprivate: !isPublic
              }, cartoDatasets, true);
            case 29:
              result = _context.sent;
            case 30:
              if (result) {
                this.currentMap = result;
              }
              return _context.abrupt("return", {
                shareUrl: this._getMapPermalinkFromParams({
                  mapId: result.id,
                  owner: this._carto.username,
                  privateMap: !isPublic
                }, true),
                folderLink: this._folderLink.replace('{user}', this._carto.username)
              });
            case 34:
              _context.prev = 34;
              _context.t1 = _context["catch"](1);
              this._manageErrors(_context.t1);
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 34]]);
      }));
      function uploadMap(_x) {
        return _uploadMap.apply(this, arguments);
      }
      return uploadMap;
    }()
    /**
     * Returns the access token. If it has expired returns null. The toolkit library loads it
     * from localStorage automatically
     */
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var accessToken = null;
      try {
        accessToken = this._carto.oauth.expired ? null : this._carto.oauth.token;
      } catch (error) {
        this._manageErrors(error, false);
      }
      return accessToken;
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      var username = null;
      try {
        username = this._carto.oauth.expired ? null : this._carto.username;
      } catch (error) {
        this._manageErrors(error, false);
      }
      return username;
    }

    /**
     * The CARTO cloud provider polls the created window internally to parse the URL
     * @param {*} location
     */
  }, {
    key: "getAccessTokenFromLocation",
    value: function getAccessTokenFromLocation(location) {
      return;
    }
  }, {
    key: "downloadMap",
    value: function () {
      var _downloadMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(queryParams) {
        var username, mapId, privateMap, visualization, currentUsername, cs, datasets;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              username = queryParams.owner, mapId = queryParams.mapId, privateMap = queryParams.privateMap;
              if (!(!username || !mapId)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return");
            case 4:
              if (!(privateMap.trim().toLowerCase() === 'true')) {
                _context2.next = 17;
                break;
              }
              _context2.next = 7;
              return this._carto.login();
            case 7:
              currentUsername = this.getUserName();
              if (!(currentUsername && currentUsername === username)) {
                _context2.next = 15;
                break;
              }
              _context2.next = 11;
              return this._carto.getCustomStorage();
            case 11:
              cs = _context2.sent;
              _context2.next = 14;
              return cs.getVisualization(mapId);
            case 14:
              visualization = _context2.sent;
            case 15:
              _context2.next = 20;
              break;
            case 17:
              _context2.next = 19;
              return this._carto.PublicStorageReader.getVisualization(username, mapId);
            case 19:
              visualization = _context2.sent;
            case 20:
              if (visualization) {
                _context2.next = 22;
                break;
              }
              throw new Error("Can't find map with ID: ".concat(mapId));
            case 22:
              // These are the options required for the action. For now, all datasets that come from CARTO are CSV
              datasets = visualization.datasets.map(function (dataset) {
                var datasetId = dataset.name;
                return {
                  info: {
                    id: datasetId,
                    label: datasetId,
                    description: dataset.description,
                    dataUrl: '',
                    configUrl: '',
                    panelDisabled: true
                  },
                  data: dataset.file
                };
              }); // const datasets = visualization.datasets.map(dataset => dataset.file);
              this.currentMap = visualization.vis;
              return _context2.abrupt("return", {
                map: {
                  datasets: datasets,
                  config: visualization.vis.config,
                  info: {
                    title: visualization.vis.name,
                    description: visualization.vis.description
                  }
                },
                format: 'csv'
              });
            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](0);
              this._manageErrors(_context2.t0);
            case 30:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 27]]);
      }));
      function downloadMap(_x2) {
        return _downloadMap.apply(this, arguments);
      }
      return downloadMap;
    }()
  }, {
    key: "listMaps",
    value: function () {
      var _listMaps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var username, cs, visualizations, formattedVis, _iterator, _step, vis;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this._carto.login();
            case 3:
              username = this.getUserName();
              _context3.next = 6;
              return this._carto.getCustomStorage();
            case 6:
              cs = _context3.sent;
              _context3.next = 9;
              return cs.getVisualizations();
            case 9:
              visualizations = _context3.sent;
              formattedVis = []; // Format visualization object
              _iterator = _createForOfIteratorHelper(visualizations);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  vis = _step.value;
                  formattedVis.push({
                    id: vis.id,
                    title: vis.name,
                    description: vis.description,
                    privateMap: vis.isprivate,
                    thumbnail: vis.thumbnail === 'undefined' ? null : vis.thumbnail,
                    lastModification: new Date(Date.parse(vis.lastmodified)),
                    loadParams: {
                      owner: username,
                      mapId: vis.id,
                      privateMap: vis.isprivate.toString()
                    }
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              formattedVis = formattedVis.sort(function (a, b) {
                return b.lastModification - a.lastModification;
              });
              return _context3.abrupt("return", formattedVis);
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](0);
              this._manageErrors(_context3.t0);
            case 20:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 17]]);
      }));
      function listMaps() {
        return _listMaps.apply(this, arguments);
      }
      return listMaps;
    }()
  }, {
    key: "getShareUrl",
    value: function getShareUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.getMapUrl(fullUrl);
    }
  }, {
    key: "getMapUrl",
    value: function getMapUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var mapParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (mapParams) {
        return this._getMapPermalinkFromParams(mapParams, fullUrl);
      } else if (this.currentMap) {
        return this._getMapPermalinkFromParams({
          mapId: this.currentMap.id,
          owner: this.getUserName(),
          privateMap: this.currentMap.isPrivate
        }, fullUrl);
      }
    }
  }, {
    key: "getManagementUrl",
    value: function getManagementUrl() {
      return this._folderLink.replace('{user}', this._carto.username);
    }
  }, {
    key: "getCurrentVisualization",
    value: function getCurrentVisualization() {
      return this.currentMap ? {
        title: this.currentMap.name,
        description: this.currentMap.description
      } : null;
    }

    // PRIVATE
  }, {
    key: "_getMapPermalinkFromParams",
    value: function _getMapPermalinkFromParams(_ref2) {
      var mapId = _ref2.mapId,
        owner = _ref2.owner,
        privateMap = _ref2.privateMap;
      var fullURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var mapLink = this._composeURL({
        mapId: mapId,
        owner: owner,
        privateMap: privateMap
      });
      return fullURL ? "".concat(window.location.protocol, "//").concat(window.location.host, "/").concat(mapLink) : "/".concat(mapLink);
    }
  }, {
    key: "_convertDataset",
    value: function _convertDataset(_ref3) {
      var dataset = _ref3.data;
      var allData = dataset.allData,
        fields = dataset.fields,
        id = dataset.id;
      var columns = fields.map(function (field) {
        return {
          name: field.name,
          type: field.type
        };
      });
      var dataContainer = (0, _utils.createDataContainer)(_toConsumableArray(allData));
      var file = (0, _reducers.formatCsv)(dataContainer, fields);
      return {
        name: id,
        columns: columns,
        file: file
      };
    }

    // eslint-disable-next-line complexity
  }, {
    key: "_manageErrors",
    value: function _manageErrors(error) {
      var throwException = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var message;
      if (error && error.message) {
        message = error.message;
        switch (error.message) {
          case 'No client ID has been specified':
            _console["default"].error('No ClientID set for CARTO provider');
            break;
          case 'Cannot set the client ID more than once':
            _console["default"].error('CARTO provider already initialized');
            break;
          case (error.message.match(/relation "[a-zA-Z0-9_]+" does not exist/) || {}).input:
            _console["default"].error('CARTO custom storage is not properly initialized');
            message = 'Custom storage is not properly initialized';
            break;
          case (error.message.match(/Failed to copy to keplergl_[a-zA-Z0-9_]+: Too many retries/) || {}).input:
            _console["default"].error('CARTO Rate limit exceeded');
            message = "Failed to upload. You've exceeded the number of datasets allowed with your plan. Consider upgrading your plan.";
            break;
          case (error.message.match(/[a-zA-Z0-9_\s:]+: DB Quota exceeded/) || {}).input:
            _console["default"].error('CARTO DB Quota exceeded');
            message = "Failed to upload. You've exceeded your account's disk storage limit. Consider upgrading your plan.";
            break;
          default:
            _console["default"].error("CARTO provider: ".concat(message));
        }
      } else {
        message = 'General error in CARTO provider';
        _console["default"].error(message);
      }

      // Use 'CARTO' as error code in order to show provider in notifications
      if (throwException) {
        throw new Error(message);
      }
    }
  }, {
    key: "_composeURL",
    value: function _composeURL(_ref4) {
      var mapId = _ref4.mapId,
        owner = _ref4.owner,
        privateMap = _ref4.privateMap;
      return "demo/map/carto?mapId=".concat(mapId, "&owner=").concat(owner, "&privateMap=").concat(privateMap);
    }
  }, {
    key: "_blobToBase64",
    value: function _blobToBase64(blob) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () {
          if (!reader.error) {
            resolve(reader.result);
          } else {
            reject(reader.error);
          }
        };
        reader.readAsDataURL(blob);
      });
    }
  }]);
  return CartoProvider;
}(_cloudProviders.Provider);
exports["default"] = CartoProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdG9vbGtpdCIsInJlcXVpcmUiLCJfY29uc29sZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfY2FydG9JY29uIiwiX2Nsb3VkUHJvdmlkZXJzIiwiX3V0aWxzIiwiX3JlZHVjZXJzIiwib2JqIiwiX19lc01vZHVsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJUeXBlRXJyb3IiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIm8iLCJhbGxvd0FycmF5TGlrZSIsIml0IiwibGVuZ3RoIiwiaSIsIkYiLCJzIiwibiIsImRvbmUiLCJ2YWx1ZSIsImUiLCJfZSIsImYiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwiZXJyIiwiY2FsbCIsInN0ZXAiLCJuZXh0IiwiX2UyIiwibWluTGVuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3NldFByb3RvdHlwZU9mIiwicCIsImJpbmQiLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJOQU1FIiwiRElTUExBWV9OQU1FIiwiTkFNRVNQQUNFIiwiRE9NQUlOIiwiUFJJVkFURV9TVE9SQUdFX0VOQUJMRUQiLCJTSEFSSU5HX0VOQUJMRUQiLCJDYXJ0b1Byb3ZpZGVyIiwiX1Byb3ZpZGVyIiwiX3N1cGVyIiwiY2xpZW50SWQiLCJfdGhpcyIsImljb24iLCJDYXJ0b0ljb24iLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnRNYXAiLCJfZm9sZGVyTGluayIsImNvbmNhdCIsIl9jYXJ0byIsIk9BdXRoQXBwIiwiYXV0aG9yaXphdGlvbiIsInNjb3BlcyIsInNlcnZlclVybFRlbXBsYXRlIiwibmFtZXNwYWNlIiwic2V0Q2xpZW50SUQiLCJsb2dpbiIsIm9uQ2xvdWRMb2dpblN1Y2Nlc3MiLCJfdGhpczIiLCJfbWFuYWdlRXJyb3JzIiwibG9nb3V0Iiwib25DbG91ZExvZ291dFN1Y2Nlc3MiLCJvYXV0aCIsImNsZWFyIiwic3luYyIsImlzRW5hYmxlZCIsImhhc1ByaXZhdGVTdG9yYWdlIiwiaGFzU2hhcmluZ1VybCIsIl91cGxvYWRNYXAiLCJfY2FsbGVlIiwiX3JlZiIsIl9yZWYkbWFwRGF0YSIsIm1hcERhdGEiLCJfcmVmJG9wdGlvbnMiLCJvcHRpb25zIiwiX29wdGlvbnMkaXNQdWJsaWMiLCJpc1B1YmxpYyIsIl9vcHRpb25zJG92ZXJ3cml0ZSIsIm92ZXJ3cml0ZSIsIl9tYXBEYXRhJG1hcCIsIl9tYXBEYXRhJG1hcDIiLCJjb25maWciLCJkYXRhc2V0cyIsImNhcnRvRGF0YXNldHMiLCJjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWxCYXNlNjQiLCJyZWdleCIsImNhcHR1cmVkTmFtZSIsInZpc05hbWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibWFwIiwiX2NvbnZlcnREYXRhc2V0IiwiZ2V0Q3VzdG9tU3RvcmFnZSIsIl9ibG9iVG9CYXNlNjQiLCJ0MCIsInVwZGF0ZVZpc3VhbGl6YXRpb24iLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc3ByaXZhdGUiLCJtYXRjaCIsImNyZWF0ZVZpc3VhbGl6YXRpb24iLCJzaGFyZVVybCIsIl9nZXRNYXBQZXJtYWxpbmtGcm9tUGFyYW1zIiwibWFwSWQiLCJvd25lciIsInVzZXJuYW1lIiwicHJpdmF0ZU1hcCIsImZvbGRlckxpbmsiLCJyZXBsYWNlIiwidDEiLCJ1cGxvYWRNYXAiLCJfeCIsImdldEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJleHBpcmVkIiwidG9rZW4iLCJnZXRVc2VyTmFtZSIsImdldEFjY2Vzc1Rva2VuRnJvbUxvY2F0aW9uIiwibG9jYXRpb24iLCJfZG93bmxvYWRNYXAiLCJfY2FsbGVlMiIsInF1ZXJ5UGFyYW1zIiwidmlzdWFsaXphdGlvbiIsImN1cnJlbnRVc2VybmFtZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImdldFZpc3VhbGl6YXRpb24iLCJQdWJsaWNTdG9yYWdlUmVhZGVyIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImxhYmVsIiwiZGF0YVVybCIsImNvbmZpZ1VybCIsInBhbmVsRGlzYWJsZWQiLCJkYXRhIiwiZmlsZSIsInZpcyIsImZvcm1hdCIsImRvd25sb2FkTWFwIiwiX3gyIiwiX2xpc3RNYXBzIiwiX2NhbGxlZTMiLCJ2aXN1YWxpemF0aW9ucyIsImZvcm1hdHRlZFZpcyIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2V0VmlzdWFsaXphdGlvbnMiLCJsYXN0TW9kaWZpY2F0aW9uIiwiRGF0ZSIsInBhcnNlIiwibGFzdG1vZGlmaWVkIiwibG9hZFBhcmFtcyIsInNvcnQiLCJhIiwiYiIsImxpc3RNYXBzIiwiZ2V0U2hhcmVVcmwiLCJmdWxsVXJsIiwiZ2V0TWFwVXJsIiwibWFwUGFyYW1zIiwiaXNQcml2YXRlIiwiZ2V0TWFuYWdlbWVudFVybCIsImdldEN1cnJlbnRWaXN1YWxpemF0aW9uIiwiX3JlZjIiLCJmdWxsVVJMIiwibWFwTGluayIsIl9jb21wb3NlVVJMIiwid2luZG93IiwicHJvdG9jb2wiLCJob3N0IiwiX3JlZjMiLCJhbGxEYXRhIiwiZmllbGRzIiwiY29sdW1ucyIsImZpZWxkIiwiZGF0YUNvbnRhaW5lciIsImNyZWF0ZURhdGFDb250YWluZXIiLCJmb3JtYXRDc3YiLCJ0aHJvd0V4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJDb25zb2xlIiwiX3JlZjQiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC1wcm92aWRlcnMvY2FydG8vY2FydG8tcHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbi8vIFRIRSBTT0ZUV0FSRS5cclxuXHJcbmltcG9ydCB7T0F1dGhBcHB9IGZyb20gJ0BjYXJ0by90b29sa2l0JztcclxuaW1wb3J0IENvbnNvbGUgZnJvbSAnZ2xvYmFsL2NvbnNvbGUnO1xyXG5pbXBvcnQgQ2FydG9JY29uIGZyb20gJy4vY2FydG8taWNvbic7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcclxuaW1wb3J0IHtjcmVhdGVEYXRhQ29udGFpbmVyfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcclxuaW1wb3J0IHtmb3JtYXRDc3Z9IGZyb20gJ0BrZXBsZXIuZ2wvcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgTkFNRSA9ICdjYXJ0byc7XHJcbmNvbnN0IERJU1BMQVlfTkFNRSA9ICdDQVJUTyc7XHJcbmNvbnN0IE5BTUVTUEFDRSA9ICdrZXBsZXJnbCc7XHJcbmNvbnN0IERPTUFJTiA9ICdjYXJ0by5jb20nO1xyXG5jb25zdCBQUklWQVRFX1NUT1JBR0VfRU5BQkxFRCA9IHRydWU7XHJcbmNvbnN0IFNIQVJJTkdfRU5BQkxFRCA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0b1Byb3ZpZGVyIGV4dGVuZHMgUHJvdmlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNsaWVudElkKSB7XHJcbiAgICBzdXBlcih7bmFtZTogTkFNRSwgZGlzcGxheU5hbWU6IERJU1BMQVlfTkFNRSwgaWNvbjogQ2FydG9JY29ufSk7XHJcblxyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgdGhpcy50aHVtYm5haWwgPSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDB9O1xyXG4gICAgdGhpcy5jdXJyZW50TWFwID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9mb2xkZXJMaW5rID0gYGh0dHBzOi8ve3VzZXJ9LiR7RE9NQUlOfS9kYXNoYm9hcmQvbWFwcy9leHRlcm5hbGA7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDQVJUTyBBUElcclxuICAgIHRoaXMuX2NhcnRvID0gbmV3IE9BdXRoQXBwKFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYGh0dHBzOi8vJHtET01BSU59L29hdXRoMmAsXHJcbiAgICAgICAgc2NvcGVzOiAnc2NoZW1hczpjIGRhdGFzZXRzOnJ3OionXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZXJ2ZXJVcmxUZW1wbGF0ZTogYGh0dHBzOi8ve3VzZXJ9LiR7RE9NQUlOfS9gLFxyXG4gICAgICAgIG5hbWVzcGFjZTogTkFNRVNQQUNFXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY2FydG8uc2V0Q2xpZW50SUQoY2xpZW50SWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIENBUlRPIHRvb2xraXQgbGlicmFyeSB0YWtlcyBjYXJlIG9mIHRoZSBsb2dpbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIGxvZ2luKG9uQ2xvdWRMb2dpblN1Y2Nlc3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuX2NhcnRvLmxvZ2luKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgb25DbG91ZExvZ2luU3VjY2VzcyAmJiBvbkNsb3VkTG9naW5TdWNjZXNzKHRoaXMubmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5fbWFuYWdlRXJyb3JzKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ291dChvbkNsb3VkTG9nb3V0U3VjY2Vzcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5fY2FydG8ub2F1dGguY2xlYXIoKTtcclxuICAgICAgdGhpcy5fY2FydG8ub2F1dGguX2NhcnRvLnN5bmMoKTtcclxuICAgICAgb25DbG91ZExvZ291dFN1Y2Nlc3MoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuX21hbmFnZUVycm9ycyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnRJZCAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhhc1ByaXZhdGVTdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIFBSSVZBVEVfU1RPUkFHRV9FTkFCTEVEO1xyXG4gIH1cclxuXHJcbiAgaGFzU2hhcmluZ1VybCgpIHtcclxuICAgIHJldHVybiBTSEFSSU5HX0VOQUJMRUQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGxvYWRNYXAoe21hcERhdGEgPSB7fSwgb3B0aW9ucyA9IHt9fSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2lzUHVibGljID0gdHJ1ZSwgb3ZlcndyaXRlID0gdHJ1ZX0gPSBvcHRpb25zO1xyXG4gICAgICBjb25zdCB7bWFwOiB7Y29uZmlnLCBkYXRhc2V0cywgaW5mb30gPSB7fSwgdGh1bWJuYWlsfSA9IG1hcERhdGE7XHJcblxyXG4gICAgICBjb25zdCBjYXJ0b0RhdGFzZXRzID0gZGF0YXNldHMubWFwKHRoaXMuX2NvbnZlcnREYXRhc2V0KTtcclxuXHJcbiAgICAgIGNvbnN0IGNzID0gYXdhaXQgdGhpcy5fY2FydG8uZ2V0Q3VzdG9tU3RvcmFnZSgpO1xyXG5cclxuICAgICAgY29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbn0gPSBpbmZvO1xyXG4gICAgICBjb25zdCBuYW1lID0gdGl0bGU7XHJcblxyXG4gICAgICBjb25zdCB0aHVtYm5haWxCYXNlNjQgPVxyXG4gICAgICAgIG1hcERhdGEgJiYgdGh1bWJuYWlsID8gYXdhaXQgdGhpcy5fYmxvYlRvQmFzZTY0KG1hcERhdGEudGh1bWJuYWlsKSA6IG51bGw7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICBpZiAob3ZlcndyaXRlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgY3MudXBkYXRlVmlzdWFsaXphdGlvbihcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuY3VycmVudE1hcC5pZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogdGh1bWJuYWlsQmFzZTY0LFxyXG4gICAgICAgICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZyksXHJcbiAgICAgICAgICAgIGlzcHJpdmF0ZTogdGhpcy5jdXJyZW50TWFwLmlzcHJpdmF0ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhcnRvRGF0YXNldHNcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRPRE86IEFzayBmb3IgY2hhbmdpbmcgY3VycmVudCBzaGFyZWQgbWFwIGdlbmVyYXRpb24gYmVjYXVzZSBvZiBiZWluZyB0b28gb3JpZW50ZWQgdG8gZmlsZSBiYXNlZCBjbG91ZHNcclxuICAgICAgICAvLyBDaGVjayBwdWJsaWMgbmFtZSBnZW5lcmF0aW9uIGFuZCByZXBsYWNlXHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvKD86XmtlcGxlcmdsXykoW2EtejAtOV0rKSg/Oi5qc29uJCkvO1xyXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkTmFtZSA9IG5hbWUubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgIGNvbnN0IHZpc05hbWUgPSBjYXB0dXJlZE5hbWUgPyBgc2hhcmVkbWFwXyR7Y2FwdHVyZWROYW1lWzFdfWAgOiBuYW1lO1xyXG5cclxuICAgICAgICByZXN1bHQgPSBhd2FpdCBjcy5jcmVhdGVWaXN1YWxpemF0aW9uKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiB2aXNOYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGh1bWJuYWlsOiB0aHVtYm5haWxCYXNlNjQsXHJcbiAgICAgICAgICAgIGNvbmZpZzogSlNPTi5zdHJpbmdpZnkoY29uZmlnKSxcclxuICAgICAgICAgICAgaXNwcml2YXRlOiAhaXNQdWJsaWNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYXJ0b0RhdGFzZXRzLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXAgPSByZXN1bHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hhcmVVcmw6IHRoaXMuX2dldE1hcFBlcm1hbGlua0Zyb21QYXJhbXMoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcElkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLl9jYXJ0by51c2VybmFtZSxcclxuICAgICAgICAgICAgcHJpdmF0ZU1hcDogIWlzUHVibGljXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZm9sZGVyTGluazogdGhpcy5fZm9sZGVyTGluay5yZXBsYWNlKCd7dXNlcn0nLCB0aGlzLl9jYXJ0by51c2VybmFtZSlcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuX21hbmFnZUVycm9ycyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBhY2Nlc3MgdG9rZW4uIElmIGl0IGhhcyBleHBpcmVkIHJldHVybnMgbnVsbC4gVGhlIHRvb2xraXQgbGlicmFyeSBsb2FkcyBpdFxyXG4gICAqIGZyb20gbG9jYWxTdG9yYWdlIGF1dG9tYXRpY2FsbHlcclxuICAgKi9cclxuICBnZXRBY2Nlc3NUb2tlbigpIHtcclxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBhY2Nlc3NUb2tlbiA9IHRoaXMuX2NhcnRvLm9hdXRoLmV4cGlyZWQgPyBudWxsIDogdGhpcy5fY2FydG8ub2F1dGgudG9rZW47XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLl9tYW5hZ2VFcnJvcnMoZXJyb3IsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyTmFtZSgpIHtcclxuICAgIGxldCB1c2VybmFtZSA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VybmFtZSA9IHRoaXMuX2NhcnRvLm9hdXRoLmV4cGlyZWQgPyBudWxsIDogdGhpcy5fY2FydG8udXNlcm5hbWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLl9tYW5hZ2VFcnJvcnMoZXJyb3IsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcm5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgQ0FSVE8gY2xvdWQgcHJvdmlkZXIgcG9sbHMgdGhlIGNyZWF0ZWQgd2luZG93IGludGVybmFsbHkgdG8gcGFyc2UgdGhlIFVSTFxyXG4gICAqIEBwYXJhbSB7Kn0gbG9jYXRpb25cclxuICAgKi9cclxuICBnZXRBY2Nlc3NUb2tlbkZyb21Mb2NhdGlvbihsb2NhdGlvbikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZG93bmxvYWRNYXAocXVlcnlQYXJhbXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtvd25lcjogdXNlcm5hbWUsIG1hcElkLCBwcml2YXRlTWFwfSA9IHF1ZXJ5UGFyYW1zO1xyXG5cclxuICAgICAgaWYgKCF1c2VybmFtZSB8fCAhbWFwSWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB2aXN1YWxpemF0aW9uO1xyXG5cclxuICAgICAgaWYgKHByaXZhdGVNYXAudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2NhcnRvLmxvZ2luKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJuYW1lID0gdGhpcy5nZXRVc2VyTmFtZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcm5hbWUgJiYgY3VycmVudFVzZXJuYW1lID09PSB1c2VybmFtZSkge1xyXG4gICAgICAgICAgY29uc3QgY3MgPSBhd2FpdCB0aGlzLl9jYXJ0by5nZXRDdXN0b21TdG9yYWdlKCk7XHJcbiAgICAgICAgICB2aXN1YWxpemF0aW9uID0gYXdhaXQgY3MuZ2V0VmlzdWFsaXphdGlvbihtYXBJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpc3VhbGl6YXRpb24gPSBhd2FpdCB0aGlzLl9jYXJ0by5QdWJsaWNTdG9yYWdlUmVhZGVyLmdldFZpc3VhbGl6YXRpb24odXNlcm5hbWUsIG1hcElkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF2aXN1YWxpemF0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIG1hcCB3aXRoIElEOiAke21hcElkfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGVzZSBhcmUgdGhlIG9wdGlvbnMgcmVxdWlyZWQgZm9yIHRoZSBhY3Rpb24uIEZvciBub3csIGFsbCBkYXRhc2V0cyB0aGF0IGNvbWUgZnJvbSBDQVJUTyBhcmUgQ1NWXHJcbiAgICAgIGNvbnN0IGRhdGFzZXRzID0gdmlzdWFsaXphdGlvbi5kYXRhc2V0cy5tYXAoZGF0YXNldCA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YXNldElkID0gZGF0YXNldC5uYW1lO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICBpZDogZGF0YXNldElkLFxyXG4gICAgICAgICAgICBsYWJlbDogZGF0YXNldElkLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YXNldC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZGF0YVVybDogJycsXHJcbiAgICAgICAgICAgIGNvbmZpZ1VybDogJycsXHJcbiAgICAgICAgICAgIHBhbmVsRGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOiBkYXRhc2V0LmZpbGVcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IGRhdGFzZXRzID0gdmlzdWFsaXphdGlvbi5kYXRhc2V0cy5tYXAoZGF0YXNldCA9PiBkYXRhc2V0LmZpbGUpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50TWFwID0gdmlzdWFsaXphdGlvbi52aXM7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcDoge1xyXG4gICAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgICBjb25maWc6IHZpc3VhbGl6YXRpb24udmlzLmNvbmZpZyxcclxuICAgICAgICAgIGluZm86IHt0aXRsZTogdmlzdWFsaXphdGlvbi52aXMubmFtZSwgZGVzY3JpcHRpb246IHZpc3VhbGl6YXRpb24udmlzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiAnY3N2J1xyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5fbWFuYWdlRXJyb3JzKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxpc3RNYXBzKCkge1xyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHBhZ2luYXRpb24gdXNpbmcge3R5cGU9J2FsbCcsIHBhZ2VPZmZzZXQ9MCwgcGFnZVNpemU9LTF9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLl9jYXJ0by5sb2dpbigpO1xyXG4gICAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuZ2V0VXNlck5hbWUoKTtcclxuICAgICAgY29uc3QgY3MgPSBhd2FpdCB0aGlzLl9jYXJ0by5nZXRDdXN0b21TdG9yYWdlKCk7XHJcblxyXG4gICAgICBjb25zdCB2aXN1YWxpemF0aW9ucyA9IGF3YWl0IGNzLmdldFZpc3VhbGl6YXRpb25zKCk7XHJcbiAgICAgIGxldCBmb3JtYXR0ZWRWaXMgPSBbXTtcclxuXHJcbiAgICAgIC8vIEZvcm1hdCB2aXN1YWxpemF0aW9uIG9iamVjdFxyXG4gICAgICBmb3IgKGNvbnN0IHZpcyBvZiB2aXN1YWxpemF0aW9ucykge1xyXG4gICAgICAgIGZvcm1hdHRlZFZpcy5wdXNoKHtcclxuICAgICAgICAgIGlkOiB2aXMuaWQsXHJcbiAgICAgICAgICB0aXRsZTogdmlzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdmlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgcHJpdmF0ZU1hcDogdmlzLmlzcHJpdmF0ZSxcclxuICAgICAgICAgIHRodW1ibmFpbDogdmlzLnRodW1ibmFpbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdmlzLnRodW1ibmFpbCxcclxuICAgICAgICAgIGxhc3RNb2RpZmljYXRpb246IG5ldyBEYXRlKERhdGUucGFyc2UodmlzLmxhc3Rtb2RpZmllZCkpLFxyXG4gICAgICAgICAgbG9hZFBhcmFtczoge1xyXG4gICAgICAgICAgICBvd25lcjogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG1hcElkOiB2aXMuaWQsXHJcbiAgICAgICAgICAgIHByaXZhdGVNYXA6IHZpcy5pc3ByaXZhdGUudG9TdHJpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtYXR0ZWRWaXMgPSBmb3JtYXR0ZWRWaXMuc29ydCgoYSwgYikgPT4gYi5sYXN0TW9kaWZpY2F0aW9uIC0gYS5sYXN0TW9kaWZpY2F0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiBmb3JtYXR0ZWRWaXM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLl9tYW5hZ2VFcnJvcnMoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2hhcmVVcmwoZnVsbFVybCA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNYXBVcmwoZnVsbFVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXBVcmwoZnVsbFVybCA9IHRydWUsIG1hcFBhcmFtcyA9IG51bGwpIHtcclxuICAgIGlmIChtYXBQYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcFBlcm1hbGlua0Zyb21QYXJhbXMobWFwUGFyYW1zLCBmdWxsVXJsKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50TWFwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRNYXBQZXJtYWxpbmtGcm9tUGFyYW1zKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcElkOiB0aGlzLmN1cnJlbnRNYXAuaWQsXHJcbiAgICAgICAgICBvd25lcjogdGhpcy5nZXRVc2VyTmFtZSgpLFxyXG4gICAgICAgICAgcHJpdmF0ZU1hcDogdGhpcy5jdXJyZW50TWFwLmlzUHJpdmF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVsbFVybFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TWFuYWdlbWVudFVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb2xkZXJMaW5rLnJlcGxhY2UoJ3t1c2VyfScsIHRoaXMuX2NhcnRvLnVzZXJuYW1lKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWaXN1YWxpemF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hcFxyXG4gICAgICA/IHt0aXRsZTogdGhpcy5jdXJyZW50TWFwLm5hbWUsIGRlc2NyaXB0aW9uOiB0aGlzLmN1cnJlbnRNYXAuZGVzY3JpcHRpb259XHJcbiAgICAgIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIFBSSVZBVEVcclxuXHJcbiAgX2dldE1hcFBlcm1hbGlua0Zyb21QYXJhbXMoe21hcElkLCBvd25lciwgcHJpdmF0ZU1hcH0sIGZ1bGxVUkwgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBtYXBMaW5rID0gdGhpcy5fY29tcG9zZVVSTCh7bWFwSWQsIG93bmVyLCBwcml2YXRlTWFwfSk7XHJcbiAgICByZXR1cm4gZnVsbFVSTFxyXG4gICAgICA/IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9LyR7bWFwTGlua31gXHJcbiAgICAgIDogYC8ke21hcExpbmt9YDtcclxuICB9XHJcblxyXG4gIF9jb252ZXJ0RGF0YXNldCh7ZGF0YTogZGF0YXNldH0pIHtcclxuICAgIGNvbnN0IHthbGxEYXRhLCBmaWVsZHMsIGlkfSA9IGRhdGFzZXQ7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gZmllbGRzLm1hcChmaWVsZCA9PiAoe1xyXG4gICAgICBuYW1lOiBmaWVsZC5uYW1lLFxyXG4gICAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGNyZWF0ZURhdGFDb250YWluZXIoWy4uLmFsbERhdGFdKTtcclxuXHJcbiAgICBjb25zdCBmaWxlID0gZm9ybWF0Q3N2KGRhdGFDb250YWluZXIsIGZpZWxkcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogaWQsXHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGZpbGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG4gIF9tYW5hZ2VFcnJvcnMoZXJyb3IsIHRocm93RXhjZXB0aW9uID0gdHJ1ZSkge1xyXG4gICAgbGV0IG1lc3NhZ2U7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgIGNhc2UgJ05vIGNsaWVudCBJRCBoYXMgYmVlbiBzcGVjaWZpZWQnOlxyXG4gICAgICAgICAgQ29uc29sZS5lcnJvcignTm8gQ2xpZW50SUQgc2V0IGZvciBDQVJUTyBwcm92aWRlcicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQ2Fubm90IHNldCB0aGUgY2xpZW50IElEIG1vcmUgdGhhbiBvbmNlJzpcclxuICAgICAgICAgIENvbnNvbGUuZXJyb3IoJ0NBUlRPIHByb3ZpZGVyIGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKGVycm9yLm1lc3NhZ2UubWF0Y2goL3JlbGF0aW9uIFwiW2EtekEtWjAtOV9dK1wiIGRvZXMgbm90IGV4aXN0LykgfHwge30pLmlucHV0OlxyXG4gICAgICAgICAgQ29uc29sZS5lcnJvcignQ0FSVE8gY3VzdG9tIHN0b3JhZ2UgaXMgbm90IHByb3Blcmx5IGluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgICBtZXNzYWdlID0gJ0N1c3RvbSBzdG9yYWdlIGlzIG5vdCBwcm9wZXJseSBpbml0aWFsaXplZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIChcclxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UubWF0Y2goL0ZhaWxlZCB0byBjb3B5IHRvIGtlcGxlcmdsX1thLXpBLVowLTlfXSs6IFRvbyBtYW55IHJldHJpZXMvKSB8fCB7fVxyXG4gICAgICAgICkuaW5wdXQ6XHJcbiAgICAgICAgICBDb25zb2xlLmVycm9yKCdDQVJUTyBSYXRlIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gdXBsb2FkLiBZb3UndmUgZXhjZWVkZWQgdGhlIG51bWJlciBvZiBkYXRhc2V0cyBhbGxvd2VkIHdpdGggeW91ciBwbGFuLiBDb25zaWRlciB1cGdyYWRpbmcgeW91ciBwbGFuLlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAoZXJyb3IubWVzc2FnZS5tYXRjaCgvW2EtekEtWjAtOV9cXHM6XSs6IERCIFF1b3RhIGV4Y2VlZGVkLykgfHwge30pLmlucHV0OlxyXG4gICAgICAgICAgQ29uc29sZS5lcnJvcignQ0FSVE8gREIgUXVvdGEgZXhjZWVkZWQnKTtcclxuICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICBcIkZhaWxlZCB0byB1cGxvYWQuIFlvdSd2ZSBleGNlZWRlZCB5b3VyIGFjY291bnQncyBkaXNrIHN0b3JhZ2UgbGltaXQuIENvbnNpZGVyIHVwZ3JhZGluZyB5b3VyIHBsYW4uXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgQ29uc29sZS5lcnJvcihgQ0FSVE8gcHJvdmlkZXI6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZSA9ICdHZW5lcmFsIGVycm9yIGluIENBUlRPIHByb3ZpZGVyJztcclxuICAgICAgQ29uc29sZS5lcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgJ0NBUlRPJyBhcyBlcnJvciBjb2RlIGluIG9yZGVyIHRvIHNob3cgcHJvdmlkZXIgaW4gbm90aWZpY2F0aW9uc1xyXG4gICAgaWYgKHRocm93RXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jb21wb3NlVVJMKHttYXBJZCwgb3duZXIsIHByaXZhdGVNYXB9KSB7XHJcbiAgICByZXR1cm4gYGRlbW8vbWFwL2NhcnRvP21hcElkPSR7bWFwSWR9Jm93bmVyPSR7b3duZXJ9JnByaXZhdGVNYXA9JHtwcml2YXRlTWFwfWA7XHJcbiAgfVxyXG5cclxuICBfYmxvYlRvQmFzZTY0KGJsb2IpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZWFkZXIuZXJyb3IpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBb0JBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtBQUNBLElB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