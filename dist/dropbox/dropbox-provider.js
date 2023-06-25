"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dropbox = require("dropbox");
var _window = _interopRequireDefault(require("global/window"));
var _console = _interopRequireDefault(require("global/console"));
var _dropboxIcon = _interopRequireDefault(require("./dropbox-icon"));
var _defaultSettings = require("../../constants/default-settings");
var _cloudProviders = require("@kepler.gl/cloud-providers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // Copyright (c) 2023 Uber Technologies, Inc.
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
// DROPBOX
var NAME = 'dropbox';
var DISPLAY_NAME = 'Dropbox';
var DOMAIN = 'www.dropbox.com';
var KEPLER_DROPBOX_FOLDER_LINK = "//".concat(DOMAIN, "/home/Apps");
var CORS_FREE_DOMAIN = 'dl.dropboxusercontent.com';
var PRIVATE_STORAGE_ENABLED = true;
var SHARING_ENABLED = true;
var MAX_THUMBNAIL_BATCH = 25;
var IMAGE_URL_PREFIX = 'data:image/gif;base64,';
function parseQueryString(query) {
  var searchParams = new URLSearchParams(query);
  var params = {};
  var _iterator = _createForOfIteratorHelper(searchParams),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      if (p && p.length === 2 && p[0]) params[p[0]] = p[1];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return params;
}
function isConfigFile(err) {
  var summary = err.error && err.error.error_summary;
  return typeof summary === 'string' && Boolean(summary.match(/path\/conflict\/file\//g));
}
var DropboxProvider = /*#__PURE__*/function (_Provider) {
  _inherits(DropboxProvider, _Provider);
  var _super = _createSuper(DropboxProvider);
  function DropboxProvider(clientId, appName) {
    var _this;
    _classCallCheck(this, DropboxProvider);
    _this = _super.call(this, {
      name: NAME,
      displayName: DISPLAY_NAME,
      icon: _dropboxIcon["default"]
    });
    // All cloud-providers providers must implement the following properties

    _this.clientId = clientId;
    _this.appName = appName;
    _this._folderLink = "".concat(KEPLER_DROPBOX_FOLDER_LINK, "/").concat(appName);
    _this._path = "/Apps/".concat(_window["default"].decodeURIComponent(_this.appName));

    // Initialize Dropbox API
    _this._initializeDropbox();
    return _this;
  }

  /**
   * This method will handle the oauth flow by performing the following steps:
   * - Opening a new window
   * - Subscribe to message channel
   * - Receive the token when ready
   * - Close the opened tab
   */
  _createClass(DropboxProvider, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(onCloudLoginSuccess) {
        var _this2 = this;
        var link, authWindow, handleToken;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              link = this._authLink();
              authWindow = _window["default"].open(link, '_blank', 'width=1024,height=716');
              handleToken = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                  var user;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        // TODO: add security step to validate which domain the message is coming from
                        if (authWindow) {
                          authWindow.close();
                        }
                        _window["default"].removeEventListener('message', handleToken);
                        if (e.data.token) {
                          _context.next = 5;
                          break;
                        }
                        _console["default"].warn('Failed to login to Dropbox');
                        return _context.abrupt("return");
                      case 5:
                        _this2._dropbox.setAccessToken(e.data.token);
                        // save user name
                        _context.next = 8;
                        return _this2._getUser();
                      case 8:
                        user = _context.sent;
                        if (_window["default"].localStorage) {
                          _window["default"].localStorage.setItem('dropbox', JSON.stringify({
                            // dropbox token doesn't expire unless revoked by the user
                            token: e.data.token,
                            user: user,
                            timestamp: new Date()
                          }));
                        }
                        if (typeof onCloudLoginSuccess === 'function') {
                          onCloudLoginSuccess();
                        }
                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function handleToken(_x2) {
                  return _ref.apply(this, arguments);
                };
              }();
              _window["default"].addEventListener('message', handleToken);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "downloadMap",
    value: function () {
      var _downloadMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(loadParams) {
        var _this3 = this;
        var token, result, json, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              token = this.getAccessToken();
              if (!token) {
                this.login(function () {
                  return _this3.downloadMap(loadParams);
                });
              }
              _context3.next = 4;
              return this._dropbox.filesDownload(loadParams);
            case 4:
              result = _context3.sent;
              _context3.next = 7;
              return this._readFile(result.fileBlob);
            case 7:
              json = _context3.sent;
              response = {
                map: json,
                format: 'keplergl'
              };
              this._loadParam = loadParams;
              return _context3.abrupt("return", response);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function downloadMap(_x3) {
        return _downloadMap.apply(this, arguments);
      }
      return downloadMap;
    }()
  }, {
    key: "listMaps",
    value: function () {
      var _listMaps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response, _this$_parseEntries, pngs, visualizations, thumbnails;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this._dropbox.filesListFolder({
                path: this._path
              });
            case 3:
              response = _context4.sent;
              _this$_parseEntries = this._parseEntries(response), pngs = _this$_parseEntries.pngs, visualizations = _this$_parseEntries.visualizations; // https://dropbox.github.io/dropbox-sdk-js/Dropbox.html#filesGetThumbnailBatch__anchor
              // up to 25 per request
              // TODO: implement pagination, so we don't need to get all the thumbs all at once
              _context4.next = 7;
              return Promise.all(this._getThumbnailRequests(pngs)).then(function (results) {
                return results.reduce(function (accu, r) {
                  return [].concat(_toConsumableArray(accu), _toConsumableArray(r.entries || []));
                }, []);
              });
            case 7:
              thumbnails = _context4.sent;
              // append to visualizations
              thumbnails && thumbnails.forEach(function (thb) {
                if (thb['.tag'] === 'success' && thb.thumbnail) {
                  var matchViz = visualizations[pngs[thb.metadata.id] && pngs[thb.metadata.id].name];
                  if (matchViz) {
                    matchViz.thumbnail = "".concat(IMAGE_URL_PREFIX).concat(thb.thumbnail);
                  }
                }
              });

              // dropbox returns
              return _context4.abrupt("return", Object.values(visualizations).reverse());
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              throw this._handleDropboxError(_context4.t0);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 12]]);
      }));
      function listMaps() {
        return _listMaps.apply(this, arguments);
      }
      return listMaps;
    }()
  }, {
    key: "getUserName",
    value: function getUserName() {
      // load user from
      if (_window["default"].localStorage) {
        var jsonString = _window["default"].localStorage.getItem('dropbox');
        var user = jsonString && JSON.parse(jsonString).user;
        return user;
      }
      return null;
    }
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(onCloudLogoutSuccess) {
        var token;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              token = this._dropbox.getAccessToken();
              if (!token) {
                _context5.next = 7;
                break;
              }
              _context5.next = 4;
              return this._dropbox.authTokenRevoke();
            case 4:
              if (_window["default"].localStorage) {
                _window["default"].localStorage.removeItem('dropbox');
              }
              // re instantiate dropbox
              this._initializeDropbox();
              onCloudLogoutSuccess();
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function logout(_x4) {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
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

    /**
     *
     * @param mapData map data and config in one json object {map: {datasets: Array<Object>, config: Object, info: Object}
     * @param blob json file blob to upload
     * @param fileName if blob doesn't contain a file name, this field is used
     * @param isPublic define whether the file will be available publicly once uploaded
     * @returns {Promise<DropboxTypes.files.FileMetadata>}
     */
  }, {
    key: "uploadMap",
    value: function () {
      var _uploadMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref2) {
        var mapData, _ref2$options, options, isPublic, map, thumbnail, name, fileName, fileContent, mode, metadata;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              mapData = _ref2.mapData, _ref2$options = _ref2.options, options = _ref2$options === void 0 ? {} : _ref2$options;
              isPublic = options.isPublic;
              map = mapData.map, thumbnail = mapData.thumbnail; // generate file name if is not provided
              name = map.info && map.info.title;
              fileName = "".concat(name, ".json");
              fileContent = map; // FileWriteMode: Selects what to do if the file already exists.
              // Always overwrite if sharing
              mode = options.overwrite || isPublic ? 'overwrite' : 'add';
              _context6.prev = 7;
              _context6.next = 10;
              return this._dropbox.filesUpload({
                path: "".concat(this._path, "/").concat(fileName),
                contents: JSON.stringify(fileContent),
                mode: mode
              });
            case 10:
              metadata = _context6.sent;
              _context6.next = 17;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](7);
              if (!isConfigFile(_context6.t0)) {
                _context6.next = 17;
                break;
              }
              throw this.getFileConflictError();
            case 17:
              _context6.t1 = thumbnail;
              if (!_context6.t1) {
                _context6.next = 21;
                break;
              }
              _context6.next = 21;
              return this._dropbox.filesUpload({
                path: "".concat(this._path, "/").concat(fileName).replace(/\.json$/, '.png'),
                contents: thumbnail,
                mode: mode
              });
            case 21:
              if (!isPublic) {
                _context6.next = 25;
                break;
              }
              _context6.next = 24;
              return this._shareFile(metadata);
            case 24:
              return _context6.abrupt("return", _context6.sent);
            case 25:
              // save private map save map url
              this._loadParam = {
                path: metadata.path_lower
              };
              return _context6.abrupt("return", this._loadParam);
            case 27:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[7, 13]]);
      }));
      function uploadMap(_x5) {
        return _uploadMap.apply(this, arguments);
      }
      return uploadMap;
    }()
    /**
     * Get the share url of current map, this url can be accessed by anyone
     * @param {boolean} fullUrl
     */
  }, {
    key: "getShareUrl",
    value: function getShareUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return fullUrl ? "".concat(_window["default"].location.protocol, "//").concat(_window["default"].location.host, "/").concat(_defaultSettings.MAP_URI).concat(this._shareUrl) : "/".concat(_defaultSettings.MAP_URI).concat(this._shareUrl);
    }

    /**
     * Get the map url of current map, this url can only be accessed by current logged in user
     * @param {boolean} fullUrl
     */
  }, {
    key: "getMapUrl",
    value: function getMapUrl() {
      var fullURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var path = this._loadParam.path;
      var mapLink = "demo/map/dropbox?path=".concat(path);
      return fullURL ? "".concat(_window["default"].location.protocol, "//").concat(_window["default"].location.host, "/").concat(mapLink) : "/".concat(mapLink);
    }
  }, {
    key: "getManagementUrl",
    value: function getManagementUrl() {
      return this._folderLink;
    }

    /**
     * Provides the current dropbox auth token. If stored in localStorage is set onto dropbox handler and returned
     * @returns {any}
     */
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var token = this._dropbox.getAccessToken();
      if (!token && _window["default"].localStorage) {
        var jsonString = _window["default"].localStorage.getItem('dropbox');
        token = jsonString && JSON.parse(jsonString).token;
        if (token) {
          this._dropbox.setAccessToken(token);
        }
      }
      return (token || '') !== '' ? token : null;
    }

    /**
     * This method will extract the auth token from the third party service callback url.
     * @param {object} location the window location provided by react router
     * @returns {?string} the token extracted from the oauth 2 callback URL
     */
  }, {
    key: "getAccessTokenFromLocation",
    value: function getAccessTokenFromLocation(location) {
      if (!(location && location.hash.length)) {
        return null;
      }
      // dropbox token usually start with # therefore we want to remove the '#'
      var query = _window["default"].location.hash.substring(1);
      return parseQueryString(query).access_token;
    }

    // PRIVATE
  }, {
    key: "_initializeDropbox",
    value: function _initializeDropbox() {
      this._dropbox = new _dropbox.Dropbox({
        fetch: _window["default"].fetch
      });
      this._dropbox.setClientId(this.clientId);
    }
  }, {
    key: "_getUser",
    value: function () {
      var _getUser2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return this._dropbox.usersGetCurrentAccount();
            case 3:
              response = _context7.sent;
              _context7.next = 10;
              break;
            case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](0);
              _console["default"].warn(_context7.t0);
              return _context7.abrupt("return", null);
            case 10:
              return _context7.abrupt("return", this._getUserFromAccount(response));
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 6]]);
      }));
      function _getUser() {
        return _getUser2.apply(this, arguments);
      }
      return _getUser;
    }()
  }, {
    key: "_handleDropboxError",
    value: function _handleDropboxError(error) {
      // dropbox list_folder error
      if (error && error.error && error.error.error_summary) {
        return "Dropbox Error: ".concat(error.error.error_summary);
      }
      return error;
    }
  }, {
    key: "_readFile",
    value: function _readFile(fileBlob) {
      return new Promise(function (resolve, reject) {
        var fileReader = new FileReader(fileBlob);
        fileReader.onload = function (_ref3) {
          var result = _ref3.target.result;
          try {
            var json = JSON.parse(result);
            resolve(json);
          } catch (err) {
            reject(err);
          }
        };
        fileReader.readAsText(fileBlob, 'utf-8');
      });
    }

    // append url after map sharing
  }, {
    key: "_getMapPermalink",
    value: function _getMapPermalink(mapLink) {
      var fullUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return fullUrl ? "".concat(_window["default"].location.protocol, "//").concat(_window["default"].location.host, "/").concat(_defaultSettings.MAP_URI).concat(mapLink) : "/".concat(_defaultSettings.MAP_URI).concat(mapLink);
    }

    // append map url after load map from storage, this url is not meant
    // to be directly shared with others
  }, {
    key: "_getMapPermalinkFromParams",
    value: function _getMapPermalinkFromParams(_ref4) {
      var path = _ref4.path;
      var fullURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var mapLink = "demo/map/dropbox?path=".concat(path);
      return fullURL ? "".concat(_window["default"].location.protocol, "//").concat(_window["default"].location.host, "/").concat(mapLink) : "/".concat(mapLink);
    }
    /**
     * It will set access to file to public
     * @param {Object} metadata metadata response from uploading the file
     * @returns {Promise<DropboxTypes.sharing.FileLinkMetadataReference | DropboxTypes.sharing.FolderLinkMetadataReference | DropboxTypes.sharing.SharedLinkMetadataReference>}
     */
  }, {
    key: "_shareFile",
    value: function _shareFile(metadata) {
      var _this4 = this;
      var shareArgs = {
        path: metadata.path_display || metadata.path_lower
      };
      return this._dropbox.sharingListSharedLinks(shareArgs).then(function () {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          links = _ref5.links;
        if (links && links.length) {
          return links[0];
        }
        return _this4._dropbox.sharingCreateSharedLinkWithSettings(shareArgs);
      }).then(function (result) {
        // Update URL to avoid CORS issue
        // Unfortunately this is not the ideal scenario but it will make sure people
        // can share dropbox urls with users without the dropbox account (publish on twitter, facebook)
        _this4._shareUrl = _this4._overrideUrl(result.url);
        return {
          // the full url to be displayed
          shareUrl: _this4.getShareUrl(true),
          folderLink: _this4._folderLink
        };
      });
    }

    /**
     * Generate auth link url to open to be used to handle OAuth2
     * @param {string} path
     */
  }, {
    key: "_authLink",
    value: function _authLink() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auth';
      return this._dropbox.getAuthenticationUrl("".concat(_window["default"].location.origin, "/").concat(path), btoa(JSON.stringify({
        handler: 'dropbox',
        origin: _window["default"].location.origin
      })));
    }

    /**
     * Override dropbox cloud-providers url
     * https://www.dropbox.com/s/bxwwdb81z0jg7pb/keplergl_2018-11-01T23%3A22%3A43.940Z.json?dl=0
     * ->
     * https://dl.dropboxusercontent.com/s/bxwwdb81z0jg7pb/keplergl_2018-11-01T23%3A22%3A43.940Z.json
     * @param metadata
     * @returns {DropboxTypes.sharing.FileLinkMetadataReference}
     */
  }, {
    key: "_overrideUrl",
    value: function _overrideUrl(url) {
      return url ? url.slice(0, url.indexOf('?')).replace(DOMAIN, CORS_FREE_DOMAIN) : null;
    }
  }, {
    key: "_getUserFromAccount",
    value: function _getUserFromAccount(response) {
      return response ? response.name && response.name.abbreviated_name || response.email : null;
    }
  }, {
    key: "_getThumbnailRequests",
    value: function _getThumbnailRequests(pngs) {
      var _this5 = this;
      var batches = Object.values(pngs).reduce(function (accu, c) {
        var lastBatch = accu.length && accu[accu.length - 1];
        if (!lastBatch || lastBatch.length >= MAX_THUMBNAIL_BATCH) {
          // add new batch
          accu.push([c]);
        } else {
          lastBatch.push(c);
        }
        return accu;
      }, []);
      return batches.map(function (batch) {
        return _this5._dropbox.filesGetThumbnailBatch({
          entries: batch.map(function (img) {
            return {
              path: img.path_lower,
              format: 'png',
              size: 'w128h128'
            };
          })
        });
      });
    }

    /**
     * Parse fileListFolder result as visualizations to be shown in load storage map modal
     * @param {*} response
     */
  }, {
    key: "_parseEntries",
    value: function _parseEntries(response) {
      var entries = response.entries,
        cursor = response.cursor,
        has_more = response.has_more;
      if (has_more) {
        this._cursor = cursor;
      }
      var pngs = {};
      var visualizations = {};
      entries.forEach(function (entry) {
        var name = entry.name,
          path_lower = entry.path_lower,
          id = entry.id,
          client_modified = entry.client_modified;
        if (name && name.endsWith('.json')) {
          // find json
          var title = name.replace(/\.json$/, '');
          var viz = {
            name: name,
            title: title,
            id: id,
            lastModification: new Date(client_modified).getTime(),
            loadParams: {
              path: path_lower
            }
          };
          visualizations[title] = viz;
        } else if (name && name.endsWith('.png')) {
          var _title = name.replace(/\.png$/, '');
          pngs[id] = {
            name: _title,
            path_lower: path_lower,
            id: id
          };
        }
      });
      return {
        visualizations: visualizations,
        pngs: pngs
      };
    }
  }]);
  return DropboxProvider;
}(_cloudProviders.Provider);
exports["default"] = DropboxProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZHJvcGJveCIsInJlcXVpcmUiLCJfd2luZG93IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jb25zb2xlIiwiX2Ryb3Bib3hJY29uIiwiX2RlZmF1bHRTZXR0aW5ncyIsIl9jbG91ZFByb3ZpZGVycyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiVHlwZUVycm9yIiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiQXJyYXkiLCJmcm9tIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsImJpbmQiLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiRiIsInMiLCJuIiwiX2UiLCJmIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJ0b1N0cmluZyIsInRlc3QiLCJsZW4iLCJhcnIyIiwiTkFNRSIsIkRJU1BMQVlfTkFNRSIsIkRPTUFJTiIsIktFUExFUl9EUk9QQk9YX0ZPTERFUl9MSU5LIiwiY29uY2F0IiwiQ09SU19GUkVFX0RPTUFJTiIsIlBSSVZBVEVfU1RPUkFHRV9FTkFCTEVEIiwiU0hBUklOR19FTkFCTEVEIiwiTUFYX1RIVU1CTkFJTF9CQVRDSCIsIklNQUdFX1VSTF9QUkVGSVgiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwicXVlcnkiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJhbXMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsImlzQ29uZmlnRmlsZSIsInN1bW1hcnkiLCJlcnJvcl9zdW1tYXJ5IiwibWF0Y2giLCJEcm9wYm94UHJvdmlkZXIiLCJfUHJvdmlkZXIiLCJfc3VwZXIiLCJjbGllbnRJZCIsImFwcE5hbWUiLCJfdGhpcyIsImljb24iLCJEcm9wYm94SWNvbiIsIl9mb2xkZXJMaW5rIiwiX3BhdGgiLCJ3aW5kb3ciLCJkZWNvZGVVUklDb21wb25lbnQiLCJfaW5pdGlhbGl6ZURyb3Bib3giLCJfbG9naW4iLCJfY2FsbGVlMiIsIm9uQ2xvdWRMb2dpblN1Y2Nlc3MiLCJfdGhpczIiLCJsaW5rIiwiYXV0aFdpbmRvdyIsImhhbmRsZVRva2VuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2F1dGhMaW5rIiwib3BlbiIsIl9yZWYiLCJfY2FsbGVlIiwidXNlciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkYXRhIiwidG9rZW4iLCJDb25zb2xlIiwid2FybiIsInNldEFjY2Vzc1Rva2VuIiwiX2dldFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpbWVzdGFtcCIsIkRhdGUiLCJfeDIiLCJhZGRFdmVudExpc3RlbmVyIiwibG9naW4iLCJfeCIsIl9kb3dubG9hZE1hcCIsIl9jYWxsZWUzIiwibG9hZFBhcmFtcyIsIl90aGlzMyIsImpzb24iLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldEFjY2Vzc1Rva2VuIiwiZG93bmxvYWRNYXAiLCJmaWxlc0Rvd25sb2FkIiwiX3JlYWRGaWxlIiwiZmlsZUJsb2IiLCJtYXAiLCJmb3JtYXQiLCJfbG9hZFBhcmFtIiwiX3gzIiwiX2xpc3RNYXBzIiwiX2NhbGxlZTQiLCJfdGhpcyRfcGFyc2VFbnRyaWVzIiwicG5ncyIsInZpc3VhbGl6YXRpb25zIiwidGh1bWJuYWlscyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImZpbGVzTGlzdEZvbGRlciIsInBhdGgiLCJfcGFyc2VFbnRyaWVzIiwiYWxsIiwiX2dldFRodW1ibmFpbFJlcXVlc3RzIiwicmVzdWx0cyIsInJlZHVjZSIsImFjY3UiLCJyIiwiZW50cmllcyIsInRoYiIsInRodW1ibmFpbCIsIm1hdGNoVml6IiwibWV0YWRhdGEiLCJpZCIsInQwIiwiX2hhbmRsZURyb3Bib3hFcnJvciIsImxpc3RNYXBzIiwiZ2V0VXNlck5hbWUiLCJqc29uU3RyaW5nIiwiZ2V0SXRlbSIsInBhcnNlIiwiX2xvZ291dCIsIl9jYWxsZWU1Iiwib25DbG91ZExvZ291dFN1Y2Nlc3MiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJhdXRoVG9rZW5SZXZva2UiLCJyZW1vdmVJdGVtIiwibG9nb3V0IiwiX3g0IiwiaXNFbmFibGVkIiwiaGFzUHJpdmF0ZVN0b3JhZ2UiLCJoYXNTaGFyaW5nVXJsIiwiX3VwbG9hZE1hcCIsIl9jYWxsZWU2IiwiX3JlZjIiLCJtYXBEYXRhIiwiX3JlZjIkb3B0aW9ucyIsIm9wdGlvbnMiLCJpc1B1YmxpYyIsImZpbGVOYW1lIiwiZmlsZUNvbnRlbnQiLCJtb2RlIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwidGl0bGUiLCJvdmVyd3JpdGUiLCJmaWxlc1VwbG9hZCIsImNvbnRlbnRzIiwiZ2V0RmlsZUNvbmZsaWN0RXJyb3IiLCJ0MSIsInJlcGxhY2UiLCJfc2hhcmVGaWxlIiwicGF0aF9sb3dlciIsInVwbG9hZE1hcCIsIl94NSIsImdldFNoYXJlVXJsIiwiZnVsbFVybCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwiTUFQX1VSSSIsIl9zaGFyZVVybCIsImdldE1hcFVybCIsImZ1bGxVUkwiLCJtYXBMaW5rIiwiZ2V0TWFuYWdlbWVudFVybCIsImdldEFjY2Vzc1Rva2VuRnJvbUxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImFjY2Vzc190b2tlbiIsIkRyb3Bib3giLCJmZXRjaCIsInNldENsaWVudElkIiwiX2dldFVzZXIyIiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJ1c2Vyc0dldEN1cnJlbnRBY2NvdW50IiwiX2dldFVzZXJGcm9tQWNjb3VudCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiX3JlZjMiLCJyZWFkQXNUZXh0IiwiX2dldE1hcFBlcm1hbGluayIsIl9nZXRNYXBQZXJtYWxpbmtGcm9tUGFyYW1zIiwiX3JlZjQiLCJfdGhpczQiLCJzaGFyZUFyZ3MiLCJwYXRoX2Rpc3BsYXkiLCJzaGFyaW5nTGlzdFNoYXJlZExpbmtzIiwiX3JlZjUiLCJsaW5rcyIsInNoYXJpbmdDcmVhdGVTaGFyZWRMaW5rV2l0aFNldHRpbmdzIiwiX292ZXJyaWRlVXJsIiwidXJsIiwic2hhcmVVcmwiLCJmb2xkZXJMaW5rIiwiZ2V0QXV0aGVudGljYXRpb25VcmwiLCJvcmlnaW4iLCJidG9hIiwiaGFuZGxlciIsImluZGV4T2YiLCJhYmJyZXZpYXRlZF9uYW1lIiwiZW1haWwiLCJfdGhpczUiLCJiYXRjaGVzIiwiYyIsImxhc3RCYXRjaCIsImJhdGNoIiwiZmlsZXNHZXRUaHVtYm5haWxCYXRjaCIsImltZyIsInNpemUiLCJjdXJzb3IiLCJoYXNfbW9yZSIsIl9jdXJzb3IiLCJjbGllbnRfbW9kaWZpZWQiLCJlbmRzV2l0aCIsInZpeiIsImxhc3RNb2RpZmljYXRpb24iLCJnZXRUaW1lIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWQtcHJvdmlkZXJzL2Ryb3Bib3gvZHJvcGJveC1wcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuLy8gVEhFIFNPRlRXQVJFLlxyXG5cclxuLy8gRFJPUEJPWFxyXG5pbXBvcnQge0Ryb3Bib3h9IGZyb20gJ2Ryb3Bib3gnO1xyXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XHJcbmltcG9ydCBEcm9wYm94SWNvbiBmcm9tICcuL2Ryb3Bib3gtaWNvbic7XHJcbmltcG9ydCB7TUFQX1VSSX0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAa2VwbGVyLmdsL2Nsb3VkLXByb3ZpZGVycyc7XHJcblxyXG5jb25zdCBOQU1FID0gJ2Ryb3Bib3gnO1xyXG5jb25zdCBESVNQTEFZX05BTUUgPSAnRHJvcGJveCc7XHJcbmNvbnN0IERPTUFJTiA9ICd3d3cuZHJvcGJveC5jb20nO1xyXG5jb25zdCBLRVBMRVJfRFJPUEJPWF9GT0xERVJfTElOSyA9IGAvLyR7RE9NQUlOfS9ob21lL0FwcHNgO1xyXG5jb25zdCBDT1JTX0ZSRUVfRE9NQUlOID0gJ2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20nO1xyXG5jb25zdCBQUklWQVRFX1NUT1JBR0VfRU5BQkxFRCA9IHRydWU7XHJcbmNvbnN0IFNIQVJJTkdfRU5BQkxFRCA9IHRydWU7XHJcbmNvbnN0IE1BWF9USFVNQk5BSUxfQkFUQ0ggPSAyNTtcclxuY29uc3QgSU1BR0VfVVJMX1BSRUZJWCA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsJztcclxuXHJcbmZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnkpIHtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcclxuICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICBmb3IgKGNvbnN0IHAgb2Ygc2VhcmNoUGFyYW1zKSB7XHJcbiAgICBpZiAocCAmJiBwLmxlbmd0aCA9PT0gMiAmJiBwWzBdKSBwYXJhbXNbcFswXV0gPSBwWzFdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb25maWdGaWxlKGVycikge1xyXG4gIGNvbnN0IHN1bW1hcnkgPSBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLmVycm9yX3N1bW1hcnk7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdW1tYXJ5ID09PSAnc3RyaW5nJyAmJiBCb29sZWFuKHN1bW1hcnkubWF0Y2goL3BhdGhcXC9jb25mbGljdFxcL2ZpbGVcXC8vZykpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wYm94UHJvdmlkZXIgZXh0ZW5kcyBQcm92aWRlciB7XHJcbiAgY29uc3RydWN0b3IoY2xpZW50SWQsIGFwcE5hbWUpIHtcclxuICAgIHN1cGVyKHtuYW1lOiBOQU1FLCBkaXNwbGF5TmFtZTogRElTUExBWV9OQU1FLCBpY29uOiBEcm9wYm94SWNvbn0pO1xyXG4gICAgLy8gQWxsIGNsb3VkLXByb3ZpZGVycyBwcm92aWRlcnMgbXVzdCBpbXBsZW1lbnQgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzXHJcblxyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgdGhpcy5hcHBOYW1lID0gYXBwTmFtZTtcclxuXHJcbiAgICB0aGlzLl9mb2xkZXJMaW5rID0gYCR7S0VQTEVSX0RST1BCT1hfRk9MREVSX0xJTkt9LyR7YXBwTmFtZX1gO1xyXG4gICAgdGhpcy5fcGF0aCA9IGAvQXBwcy8ke3dpbmRvdy5kZWNvZGVVUklDb21wb25lbnQodGhpcy5hcHBOYW1lKX1gO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgRHJvcGJveCBBUElcclxuICAgIHRoaXMuX2luaXRpYWxpemVEcm9wYm94KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGhhbmRsZSB0aGUgb2F1dGggZmxvdyBieSBwZXJmb3JtaW5nIHRoZSBmb2xsb3dpbmcgc3RlcHM6XHJcbiAgICogLSBPcGVuaW5nIGEgbmV3IHdpbmRvd1xyXG4gICAqIC0gU3Vic2NyaWJlIHRvIG1lc3NhZ2UgY2hhbm5lbFxyXG4gICAqIC0gUmVjZWl2ZSB0aGUgdG9rZW4gd2hlbiByZWFkeVxyXG4gICAqIC0gQ2xvc2UgdGhlIG9wZW5lZCB0YWJcclxuICAgKi9cclxuICBhc3luYyBsb2dpbihvbkNsb3VkTG9naW5TdWNjZXNzKSB7XHJcbiAgICBjb25zdCBsaW5rID0gdGhpcy5fYXV0aExpbmsoKTtcclxuXHJcbiAgICBjb25zdCBhdXRoV2luZG93ID0gd2luZG93Lm9wZW4obGluaywgJ19ibGFuaycsICd3aWR0aD0xMDI0LGhlaWdodD03MTYnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2tlbiA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAvLyBUT0RPOiBhZGQgc2VjdXJpdHkgc3RlcCB0byB2YWxpZGF0ZSB3aGljaCBkb21haW4gdGhlIG1lc3NhZ2UgaXMgY29taW5nIGZyb21cclxuICAgICAgaWYgKGF1dGhXaW5kb3cpIHtcclxuICAgICAgICBhdXRoV2luZG93LmNsb3NlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlVG9rZW4pO1xyXG5cclxuICAgICAgaWYgKCFlLmRhdGEudG9rZW4pIHtcclxuICAgICAgICBDb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2dpbiB0byBEcm9wYm94Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9kcm9wYm94LnNldEFjY2Vzc1Rva2VuKGUuZGF0YS50b2tlbik7XHJcbiAgICAgIC8vIHNhdmUgdXNlciBuYW1lXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLl9nZXRVc2VyKCk7XHJcblxyXG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICdkcm9wYm94JyxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgLy8gZHJvcGJveCB0b2tlbiBkb2Vzbid0IGV4cGlyZSB1bmxlc3MgcmV2b2tlZCBieSB0aGUgdXNlclxyXG4gICAgICAgICAgICB0b2tlbjogZS5kYXRhLnRva2VuLFxyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBvbkNsb3VkTG9naW5TdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgb25DbG91ZExvZ2luU3VjY2VzcygpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZG93bmxvYWRNYXAobG9hZFBhcmFtcykge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHRoaXMubG9naW4oKCkgPT4gdGhpcy5kb3dubG9hZE1hcChsb2FkUGFyYW1zKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9kcm9wYm94LmZpbGVzRG93bmxvYWQobG9hZFBhcmFtcyk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgdGhpcy5fcmVhZEZpbGUocmVzdWx0LmZpbGVCbG9iKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IHtcclxuICAgICAgbWFwOiBqc29uLFxyXG4gICAgICBmb3JtYXQ6ICdrZXBsZXJnbCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fbG9hZFBhcmFtID0gbG9hZFBhcmFtcztcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxpc3RNYXBzKCkge1xyXG4gICAgLy8gbGlzdCBmaWxlc1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gaHR0cHM6Ly9kcm9wYm94LmdpdGh1Yi5pby9kcm9wYm94LXNkay1qcy9Ecm9wYm94Lmh0bWwjZmlsZXNMaXN0Rm9sZGVyX19hbmNob3JcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9kcm9wYm94LmZpbGVzTGlzdEZvbGRlcih7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fcGF0aFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qge3BuZ3MsIHZpc3VhbGl6YXRpb25zfSA9IHRoaXMuX3BhcnNlRW50cmllcyhyZXNwb25zZSk7XHJcbiAgICAgIC8vIGh0dHBzOi8vZHJvcGJveC5naXRodWIuaW8vZHJvcGJveC1zZGstanMvRHJvcGJveC5odG1sI2ZpbGVzR2V0VGh1bWJuYWlsQmF0Y2hfX2FuY2hvclxyXG4gICAgICAvLyB1cCB0byAyNSBwZXIgcmVxdWVzdFxyXG4gICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgcGFnaW5hdGlvbiwgc28gd2UgZG9uJ3QgbmVlZCB0byBnZXQgYWxsIHRoZSB0aHVtYnMgYWxsIGF0IG9uY2VcclxuICAgICAgY29uc3QgdGh1bWJuYWlscyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMuX2dldFRodW1ibmFpbFJlcXVlc3RzKHBuZ3MpKS50aGVuKHJlc3VsdHMgPT5cclxuICAgICAgICByZXN1bHRzLnJlZHVjZSgoYWNjdSwgcikgPT4gWy4uLmFjY3UsIC4uLihyLmVudHJpZXMgfHwgW10pXSwgW10pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBhcHBlbmQgdG8gdmlzdWFsaXphdGlvbnNcclxuICAgICAgdGh1bWJuYWlscyAmJlxyXG4gICAgICAgIHRodW1ibmFpbHMuZm9yRWFjaCh0aGIgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoYlsnLnRhZyddID09PSAnc3VjY2VzcycgJiYgdGhiLnRodW1ibmFpbCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaFZpeiA9IHZpc3VhbGl6YXRpb25zW3BuZ3NbdGhiLm1ldGFkYXRhLmlkXSAmJiBwbmdzW3RoYi5tZXRhZGF0YS5pZF0ubmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtYXRjaFZpeikge1xyXG4gICAgICAgICAgICAgIG1hdGNoVml6LnRodW1ibmFpbCA9IGAke0lNQUdFX1VSTF9QUkVGSVh9JHt0aGIudGh1bWJuYWlsfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGRyb3Bib3ggcmV0dXJuc1xyXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh2aXN1YWxpemF0aW9ucykucmV2ZXJzZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gbWFkZSB0aGUgZXJyb3IgbWVzc2FnZSBodW1hbiByZWFkYWJsZSBmb3IgcHJvdmlkZXIgdXBkYXRlclxyXG4gICAgICB0aHJvdyB0aGlzLl9oYW5kbGVEcm9wYm94RXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck5hbWUoKSB7XHJcbiAgICAvLyBsb2FkIHVzZXIgZnJvbVxyXG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgY29uc3QganNvblN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHJvcGJveCcpO1xyXG4gICAgICBjb25zdCB1c2VyID0ganNvblN0cmluZyAmJiBKU09OLnBhcnNlKGpzb25TdHJpbmcpLnVzZXI7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2dvdXQob25DbG91ZExvZ291dFN1Y2Nlc3MpIHtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5fZHJvcGJveC5nZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBhd2FpdCB0aGlzLl9kcm9wYm94LmF1dGhUb2tlblJldm9rZSgpO1xyXG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZHJvcGJveCcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJlIGluc3RhbnRpYXRlIGRyb3Bib3hcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZURyb3Bib3goKTtcclxuICAgICAgb25DbG91ZExvZ291dFN1Y2Nlc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW5hYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudElkICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaGFzUHJpdmF0ZVN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gUFJJVkFURV9TVE9SQUdFX0VOQUJMRUQ7XHJcbiAgfVxyXG5cclxuICBoYXNTaGFyaW5nVXJsKCkge1xyXG4gICAgcmV0dXJuIFNIQVJJTkdfRU5BQkxFRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1hcERhdGEgbWFwIGRhdGEgYW5kIGNvbmZpZyBpbiBvbmUganNvbiBvYmplY3Qge21hcDoge2RhdGFzZXRzOiBBcnJheTxPYmplY3Q+LCBjb25maWc6IE9iamVjdCwgaW5mbzogT2JqZWN0fVxyXG4gICAqIEBwYXJhbSBibG9iIGpzb24gZmlsZSBibG9iIHRvIHVwbG9hZFxyXG4gICAqIEBwYXJhbSBmaWxlTmFtZSBpZiBibG9iIGRvZXNuJ3QgY29udGFpbiBhIGZpbGUgbmFtZSwgdGhpcyBmaWVsZCBpcyB1c2VkXHJcbiAgICogQHBhcmFtIGlzUHVibGljIGRlZmluZSB3aGV0aGVyIHRoZSBmaWxlIHdpbGwgYmUgYXZhaWxhYmxlIHB1YmxpY2x5IG9uY2UgdXBsb2FkZWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEcm9wYm94VHlwZXMuZmlsZXMuRmlsZU1ldGFkYXRhPn1cclxuICAgKi9cclxuICBhc3luYyB1cGxvYWRNYXAoe21hcERhdGEsIG9wdGlvbnMgPSB7fX0pIHtcclxuICAgIGNvbnN0IHtpc1B1YmxpY30gPSBvcHRpb25zO1xyXG4gICAgY29uc3Qge21hcCwgdGh1bWJuYWlsfSA9IG1hcERhdGE7XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgZmlsZSBuYW1lIGlmIGlzIG5vdCBwcm92aWRlZFxyXG4gICAgY29uc3QgbmFtZSA9IG1hcC5pbmZvICYmIG1hcC5pbmZvLnRpdGxlO1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtuYW1lfS5qc29uYDtcclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gbWFwO1xyXG4gICAgLy8gRmlsZVdyaXRlTW9kZTogU2VsZWN0cyB3aGF0IHRvIGRvIGlmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzLlxyXG4gICAgLy8gQWx3YXlzIG92ZXJ3cml0ZSBpZiBzaGFyaW5nXHJcbiAgICBjb25zdCBtb2RlID0gb3B0aW9ucy5vdmVyd3JpdGUgfHwgaXNQdWJsaWMgPyAnb3ZlcndyaXRlJyA6ICdhZGQnO1xyXG4gICAgbGV0IG1ldGFkYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbWV0YWRhdGEgPSBhd2FpdCB0aGlzLl9kcm9wYm94LmZpbGVzVXBsb2FkKHtcclxuICAgICAgICBwYXRoOiBgJHt0aGlzLl9wYXRofS8ke2ZpbGVOYW1lfWAsXHJcbiAgICAgICAgY29udGVudHM6IEpTT04uc3RyaW5naWZ5KGZpbGVDb250ZW50KSxcclxuICAgICAgICBtb2RlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChpc0NvbmZpZ0ZpbGUoZXJyKSkge1xyXG4gICAgICAgIHRocm93IHRoaXMuZ2V0RmlsZUNvbmZsaWN0RXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2F2ZSBhIHRodW1ibmFpbCBpbWFnZVxyXG4gICAgdGh1bWJuYWlsICYmXHJcbiAgICAgIChhd2FpdCB0aGlzLl9kcm9wYm94LmZpbGVzVXBsb2FkKHtcclxuICAgICAgICBwYXRoOiBgJHt0aGlzLl9wYXRofS8ke2ZpbGVOYW1lfWAucmVwbGFjZSgvXFwuanNvbiQvLCAnLnBuZycpLFxyXG4gICAgICAgIGNvbnRlbnRzOiB0aHVtYm5haWwsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgLy8ga2VlcCBvbiBjcmVhdGUgc2hhcmVVcmxcclxuICAgIGlmIChpc1B1YmxpYykge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2hhcmVGaWxlKG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzYXZlIHByaXZhdGUgbWFwIHNhdmUgbWFwIHVybFxyXG4gICAgdGhpcy5fbG9hZFBhcmFtID0ge3BhdGg6IG1ldGFkYXRhLnBhdGhfbG93ZXJ9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9sb2FkUGFyYW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHNoYXJlIHVybCBvZiBjdXJyZW50IG1hcCwgdGhpcyB1cmwgY2FuIGJlIGFjY2Vzc2VkIGJ5IGFueW9uZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFVybFxyXG4gICAqL1xyXG4gIGdldFNoYXJlVXJsKGZ1bGxVcmwgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gZnVsbFVybFxyXG4gICAgICA/IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9LyR7TUFQX1VSSX0ke3RoaXMuX3NoYXJlVXJsfWBcclxuICAgICAgOiBgLyR7TUFQX1VSSX0ke3RoaXMuX3NoYXJlVXJsfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG1hcCB1cmwgb2YgY3VycmVudCBtYXAsIHRoaXMgdXJsIGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGJ5IGN1cnJlbnQgbG9nZ2VkIGluIHVzZXJcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZ1bGxVcmxcclxuICAgKi9cclxuICBnZXRNYXBVcmwoZnVsbFVSTCA9IHRydWUpIHtcclxuICAgIGNvbnN0IHtwYXRofSA9IHRoaXMuX2xvYWRQYXJhbTtcclxuICAgIGNvbnN0IG1hcExpbmsgPSBgZGVtby9tYXAvZHJvcGJveD9wYXRoPSR7cGF0aH1gO1xyXG4gICAgcmV0dXJuIGZ1bGxVUkxcclxuICAgICAgPyBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS8ke21hcExpbmt9YFxyXG4gICAgICA6IGAvJHttYXBMaW5rfWA7XHJcbiAgfVxyXG5cclxuICBnZXRNYW5hZ2VtZW50VXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvbGRlckxpbms7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm92aWRlcyB0aGUgY3VycmVudCBkcm9wYm94IGF1dGggdG9rZW4uIElmIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2UgaXMgc2V0IG9udG8gZHJvcGJveCBoYW5kbGVyIGFuZCByZXR1cm5lZFxyXG4gICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICovXHJcbiAgZ2V0QWNjZXNzVG9rZW4oKSB7XHJcbiAgICBsZXQgdG9rZW4gPSB0aGlzLl9kcm9wYm94LmdldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICBpZiAoIXRva2VuICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgY29uc3QganNvblN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHJvcGJveCcpO1xyXG4gICAgICB0b2tlbiA9IGpzb25TdHJpbmcgJiYgSlNPTi5wYXJzZShqc29uU3RyaW5nKS50b2tlbjtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fZHJvcGJveC5zZXRBY2Nlc3NUb2tlbih0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAodG9rZW4gfHwgJycpICE9PSAnJyA/IHRva2VuIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgZXh0cmFjdCB0aGUgYXV0aCB0b2tlbiBmcm9tIHRoZSB0aGlyZCBwYXJ0eSBzZXJ2aWNlIGNhbGxiYWNrIHVybC5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gbG9jYXRpb24gdGhlIHdpbmRvdyBsb2NhdGlvbiBwcm92aWRlZCBieSByZWFjdCByb3V0ZXJcclxuICAgKiBAcmV0dXJucyB7P3N0cmluZ30gdGhlIHRva2VuIGV4dHJhY3RlZCBmcm9tIHRoZSBvYXV0aCAyIGNhbGxiYWNrIFVSTFxyXG4gICAqL1xyXG4gIGdldEFjY2Vzc1Rva2VuRnJvbUxvY2F0aW9uKGxvY2F0aW9uKSB7XHJcbiAgICBpZiAoIShsb2NhdGlvbiAmJiBsb2NhdGlvbi5oYXNoLmxlbmd0aCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBkcm9wYm94IHRva2VuIHVzdWFsbHkgc3RhcnQgd2l0aCAjIHRoZXJlZm9yZSB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgJyMnXHJcbiAgICBjb25zdCBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcclxuICAgIHJldHVybiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5KS5hY2Nlc3NfdG9rZW47XHJcbiAgfVxyXG5cclxuICAvLyBQUklWQVRFXHJcbiAgX2luaXRpYWxpemVEcm9wYm94KCkge1xyXG4gICAgdGhpcy5fZHJvcGJveCA9IG5ldyBEcm9wYm94KHtmZXRjaDogd2luZG93LmZldGNofSk7XHJcbiAgICB0aGlzLl9kcm9wYm94LnNldENsaWVudElkKHRoaXMuY2xpZW50SWQpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgX2dldFVzZXIoKSB7XHJcbiAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2Ryb3Bib3gudXNlcnNHZXRDdXJyZW50QWNjb3VudCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgQ29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dldFVzZXJGcm9tQWNjb3VudChyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRHJvcGJveEVycm9yKGVycm9yKSB7XHJcbiAgICAvLyBkcm9wYm94IGxpc3RfZm9sZGVyIGVycm9yXHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuZXJyb3Jfc3VtbWFyeSkge1xyXG4gICAgICByZXR1cm4gYERyb3Bib3ggRXJyb3I6ICR7ZXJyb3IuZXJyb3IuZXJyb3Jfc3VtbWFyeX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcblxyXG4gIF9yZWFkRmlsZShmaWxlQmxvYikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKGZpbGVCbG9iKTtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoe3RhcmdldDoge3Jlc3VsdH19KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVCbG9iLCAndXRmLTgnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBwZW5kIHVybCBhZnRlciBtYXAgc2hhcmluZ1xyXG4gIF9nZXRNYXBQZXJtYWxpbmsobWFwTGluaywgZnVsbFVybCA9IHRydWUpIHtcclxuICAgIHJldHVybiBmdWxsVXJsXHJcbiAgICAgID8gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vJHtNQVBfVVJJfSR7bWFwTGlua31gXHJcbiAgICAgIDogYC8ke01BUF9VUkl9JHttYXBMaW5rfWA7XHJcbiAgfVxyXG5cclxuICAvLyBhcHBlbmQgbWFwIHVybCBhZnRlciBsb2FkIG1hcCBmcm9tIHN0b3JhZ2UsIHRoaXMgdXJsIGlzIG5vdCBtZWFudFxyXG4gIC8vIHRvIGJlIGRpcmVjdGx5IHNoYXJlZCB3aXRoIG90aGVyc1xyXG4gIF9nZXRNYXBQZXJtYWxpbmtGcm9tUGFyYW1zKHtwYXRofSwgZnVsbFVSTCA9IHRydWUpIHtcclxuICAgIGNvbnN0IG1hcExpbmsgPSBgZGVtby9tYXAvZHJvcGJveD9wYXRoPSR7cGF0aH1gO1xyXG4gICAgcmV0dXJuIGZ1bGxVUkxcclxuICAgICAgPyBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS8ke21hcExpbmt9YFxyXG4gICAgICA6IGAvJHttYXBMaW5rfWA7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEl0IHdpbGwgc2V0IGFjY2VzcyB0byBmaWxlIHRvIHB1YmxpY1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZXRhZGF0YSBtZXRhZGF0YSByZXNwb25zZSBmcm9tIHVwbG9hZGluZyB0aGUgZmlsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERyb3Bib3hUeXBlcy5zaGFyaW5nLkZpbGVMaW5rTWV0YWRhdGFSZWZlcmVuY2UgfCBEcm9wYm94VHlwZXMuc2hhcmluZy5Gb2xkZXJMaW5rTWV0YWRhdGFSZWZlcmVuY2UgfCBEcm9wYm94VHlwZXMuc2hhcmluZy5TaGFyZWRMaW5rTWV0YWRhdGFSZWZlcmVuY2U+fVxyXG4gICAqL1xyXG4gIF9zaGFyZUZpbGUobWV0YWRhdGEpIHtcclxuICAgIGNvbnN0IHNoYXJlQXJncyA9IHtcclxuICAgICAgcGF0aDogbWV0YWRhdGEucGF0aF9kaXNwbGF5IHx8IG1ldGFkYXRhLnBhdGhfbG93ZXJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bib3hcclxuICAgICAgLnNoYXJpbmdMaXN0U2hhcmVkTGlua3Moc2hhcmVBcmdzKVxyXG4gICAgICAudGhlbigoe2xpbmtzfSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmtzICYmIGxpbmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGxpbmtzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJvcGJveC5zaGFyaW5nQ3JlYXRlU2hhcmVkTGlua1dpdGhTZXR0aW5ncyhzaGFyZUFyZ3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkwgdG8gYXZvaWQgQ09SUyBpc3N1ZVxyXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhpcyBpcyBub3QgdGhlIGlkZWFsIHNjZW5hcmlvIGJ1dCBpdCB3aWxsIG1ha2Ugc3VyZSBwZW9wbGVcclxuICAgICAgICAvLyBjYW4gc2hhcmUgZHJvcGJveCB1cmxzIHdpdGggdXNlcnMgd2l0aG91dCB0aGUgZHJvcGJveCBhY2NvdW50IChwdWJsaXNoIG9uIHR3aXR0ZXIsIGZhY2Vib29rKVxyXG4gICAgICAgIHRoaXMuX3NoYXJlVXJsID0gdGhpcy5fb3ZlcnJpZGVVcmwocmVzdWx0LnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAvLyB0aGUgZnVsbCB1cmwgdG8gYmUgZGlzcGxheWVkXHJcbiAgICAgICAgICBzaGFyZVVybDogdGhpcy5nZXRTaGFyZVVybCh0cnVlKSxcclxuICAgICAgICAgIGZvbGRlckxpbms6IHRoaXMuX2ZvbGRlckxpbmtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIGF1dGggbGluayB1cmwgdG8gb3BlbiB0byBiZSB1c2VkIHRvIGhhbmRsZSBPQXV0aDJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxyXG4gICAqL1xyXG4gIF9hdXRoTGluayhwYXRoID0gJ2F1dGgnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJvcGJveC5nZXRBdXRoZW50aWNhdGlvblVybChcclxuICAgICAgYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHtwYXRofWAsXHJcbiAgICAgIGJ0b2EoSlNPTi5zdHJpbmdpZnkoe2hhbmRsZXI6ICdkcm9wYm94Jywgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2lufSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGUgZHJvcGJveCBjbG91ZC1wcm92aWRlcnMgdXJsXHJcbiAgICogaHR0cHM6Ly93d3cuZHJvcGJveC5jb20vcy9ieHd3ZGI4MXowamc3cGIva2VwbGVyZ2xfMjAxOC0xMS0wMVQyMyUzQTIyJTNBNDMuOTQwWi5qc29uP2RsPTBcclxuICAgKiAtPlxyXG4gICAqIGh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS9zL2J4d3dkYjgxejBqZzdwYi9rZXBsZXJnbF8yMDE4LTExLTAxVDIzJTNBMjIlM0E0My45NDBaLmpzb25cclxuICAgKiBAcGFyYW0gbWV0YWRhdGFcclxuICAgKiBAcmV0dXJucyB7RHJvcGJveFR5cGVzLnNoYXJpbmcuRmlsZUxpbmtNZXRhZGF0YVJlZmVyZW5jZX1cclxuICAgKi9cclxuICBfb3ZlcnJpZGVVcmwodXJsKSB7XHJcbiAgICByZXR1cm4gdXJsID8gdXJsLnNsaWNlKDAsIHVybC5pbmRleE9mKCc/JykpLnJlcGxhY2UoRE9NQUlOLCBDT1JTX0ZSRUVfRE9NQUlOKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBfZ2V0VXNlckZyb21BY2NvdW50KHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UgPyAocmVzcG9uc2UubmFtZSAmJiByZXNwb25zZS5uYW1lLmFiYnJldmlhdGVkX25hbWUpIHx8IHJlc3BvbnNlLmVtYWlsIDogbnVsbDtcclxuICB9XHJcblxyXG4gIF9nZXRUaHVtYm5haWxSZXF1ZXN0cyhwbmdzKSB7XHJcbiAgICBjb25zdCBiYXRjaGVzID0gT2JqZWN0LnZhbHVlcyhwbmdzKS5yZWR1Y2UoKGFjY3UsIGMpID0+IHtcclxuICAgICAgY29uc3QgbGFzdEJhdGNoID0gYWNjdS5sZW5ndGggJiYgYWNjdVthY2N1Lmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoIWxhc3RCYXRjaCB8fCBsYXN0QmF0Y2gubGVuZ3RoID49IE1BWF9USFVNQk5BSUxfQkFUQ0gpIHtcclxuICAgICAgICAvLyBhZGQgbmV3IGJhdGNoXHJcbiAgICAgICAgYWNjdS5wdXNoKFtjXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFzdEJhdGNoLnB1c2goYyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjY3U7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIGJhdGNoZXMubWFwKGJhdGNoID0+XHJcbiAgICAgIHRoaXMuX2Ryb3Bib3guZmlsZXNHZXRUaHVtYm5haWxCYXRjaCh7XHJcbiAgICAgICAgZW50cmllczogYmF0Y2gubWFwKGltZyA9PiAoe1xyXG4gICAgICAgICAgcGF0aDogaW1nLnBhdGhfbG93ZXIsXHJcbiAgICAgICAgICBmb3JtYXQ6ICdwbmcnLFxyXG4gICAgICAgICAgc2l6ZTogJ3cxMjhoMTI4J1xyXG4gICAgICAgIH0pKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlIGZpbGVMaXN0Rm9sZGVyIHJlc3VsdCBhcyB2aXN1YWxpemF0aW9ucyB0byBiZSBzaG93biBpbiBsb2FkIHN0b3JhZ2UgbWFwIG1vZGFsXHJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZVxyXG4gICAqL1xyXG4gIF9wYXJzZUVudHJpZXMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHtlbnRyaWVzLCBjdXJzb3IsIGhhc19tb3JlfSA9IHJlc3BvbnNlO1xyXG5cclxuICAgIGlmIChoYXNfbW9yZSkge1xyXG4gICAgICB0aGlzLl9jdXJzb3IgPSBjdXJzb3I7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwbmdzID0ge307XHJcbiAgICBjb25zdCB2aXN1YWxpemF0aW9ucyA9IHt9O1xyXG5cclxuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgIGNvbnN0IHtuYW1lLCBwYXRoX2xvd2VyLCBpZCwgY2xpZW50X21vZGlmaWVkfSA9IGVudHJ5O1xyXG4gICAgICBpZiAobmFtZSAmJiBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB7XHJcbiAgICAgICAgLy8gZmluZCBqc29uXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBuYW1lLnJlcGxhY2UoL1xcLmpzb24kLywgJycpO1xyXG4gICAgICAgIGNvbnN0IHZpeiA9IHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWNhdGlvbjogbmV3IERhdGUoY2xpZW50X21vZGlmaWVkKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICBsb2FkUGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBhdGg6IHBhdGhfbG93ZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2aXN1YWxpemF0aW9uc1t0aXRsZV0gPSB2aXo7XHJcbiAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiBuYW1lLmVuZHNXaXRoKCcucG5nJykpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IG5hbWUucmVwbGFjZSgvXFwucG5nJC8sICcnKTtcclxuXHJcbiAgICAgICAgcG5nc1tpZF0gPSB7XHJcbiAgICAgICAgICBuYW1lOiB0aXRsZSxcclxuICAgICAgICAgIHBhdGhfbG93ZXIsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpc3VhbGl6YXRpb25zLFxyXG4gICAgICBwbmdzXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFxQkEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsUUFBQSxHQUFBRCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBRixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUssZ0JBQUEsR0FBQUwsT0FBQTtBQUNBLElBQUFNLGVBQUEsR0FBQU4sT0FBQTtBQUFvRCxTQUFBRSx1QkFBQUssR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsbUJBQUFDLEdBQUEsV0FBQUMsa0JBQUEsQ0FBQUQsR0FBQSxLQUFBRSxnQkFBQSxDQUFBRixHQUFBLEtBQUFHLDJCQUFBLENBQUFILEdBQUEsS0FBQUksa0JBQUE7QUFBQSxTQUFBQSxtQkFBQSxjQUFBQyxTQUFBO0FBQUEsU0FBQUgsaUJBQUFJLElBQUEsZUFBQUMsTUFBQSxvQkFBQUQsSUFB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