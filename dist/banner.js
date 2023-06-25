"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@kepler.gl/components");
var _templateObject; // Copyright (c) 2023 Uber Technologies, Inc.
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledBanner = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: ", "px;\n  justify-content: space-between;\n  padding: 0 40px;\n  position: absolute;\n  transition: top 1s;\n  width: 100%;\n  z-index: 9999;\n\n  svg:hover {\n    cursor: pointer;\n  }\n\n  top: ", "px;\n"])), function (props) {
  return props.bgColor;
}, function (props) {
  return props.fontColor;
}, function (props) {
  return props.height;
}, function (props) {
  return props.visible ? 0 : -100;
});
var Banner = function Banner(_ref) {
  var _ref$bgColor = _ref.bgColor,
    bgColor = _ref$bgColor === void 0 ? '#1F7CF4' : _ref$bgColor,
    _ref$fontColor = _ref.fontColor,
    fontColor = _ref$fontColor === void 0 ? '#FFFFFF' : _ref$fontColor,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 30 : _ref$height,
    children = _ref.children,
    onClose = _ref.onClose,
    show = _ref.show;
  return /*#__PURE__*/_react["default"].createElement(StyledBanner, {
    className: "top-banner",
    bgColor: bgColor,
    fontColor: fontColor,
    height: height,
    visible: show
  }, /*#__PURE__*/_react["default"].createElement("div", null, children), /*#__PURE__*/_react["default"].createElement(_components.Icons.Delete, {
    height: "14px",
    onClick: onClose
  }));
};
var _default = Banner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9zdHlsZWRDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfdGVtcGxhdGVPYmplY3QiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsInN0cmluZ3MiLCJyYXciLCJzbGljZSIsIk9iamVjdCIsImZyZWV6ZSIsImRlZmluZVByb3BlcnRpZXMiLCJ2YWx1ZSIsIlN0eWxlZEJhbm5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYmdDb2xvciIsImZvbnRDb2xvciIsImhlaWdodCIsInZpc2libGUiLCJCYW5uZXIiLCJfcmVmIiwiX3JlZiRiZ0NvbG9yIiwiX3JlZiRmb250Q29sb3IiLCJfcmVmJGhlaWdodCIsImNoaWxkcmVuIiwib25DbG9zZSIsInNob3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbnMiLCJEZWxldGUiLCJvbkNsaWNrIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvYmFubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxyXG4vL1xyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vL1xyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy9cclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4vLyBUSEUgU09GVFdBUkUuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtJY29uc30gZnJvbSAnQGtlcGxlci5nbC9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZEJhbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJnQ29sb3J9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmZvbnRDb2xvcn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IHRvcCAxcztcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICBzdmc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgdG9wOiAke3Byb3BzID0+IChwcm9wcy52aXNpYmxlID8gMCA6IC0xMDApfXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQmFubmVyID0gKHtcclxuICBiZ0NvbG9yID0gJyMxRjdDRjQnLFxyXG4gIGZvbnRDb2xvciA9ICcjRkZGRkZGJyxcclxuICBoZWlnaHQgPSAzMCxcclxuICBjaGlsZHJlbixcclxuICBvbkNsb3NlLFxyXG4gIHNob3dcclxufSkgPT4gKFxyXG4gIDxTdHlsZWRCYW5uZXJcclxuICAgIGNsYXNzTmFtZT1cInRvcC1iYW5uZXJcIlxyXG4gICAgYmdDb2xvcj17YmdDb2xvcn1cclxuICAgIGZvbnRDb2xvcj17Zm9udENvbG9yfVxyXG4gICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICB2aXNpYmxlPXtzaG93fVxyXG4gID5cclxuICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPEljb25zLkRlbGV0ZSBoZWlnaHQ9XCIxNHB4XCIgb25DbGljaz17b25DbG9zZX0gLz5cclxuICA8L1N0eWxlZEJhbm5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFvQkEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsaUJBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtBQUE0QyxJQUFBRyxlQUFBLEVBdEI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLFNBQUFKLHVCQUFBSyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSx1QkFBQUMsT0FBQSxFQUFBQyxHQUFBLFNBQUFBLEdBQUEsSUFBQUEsR0FBQSxHQUFBRCxPQUFBLENBQUFFLEtBQUEsY0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFELE1BQUEsQ0FBQUUsZ0JBQUEsQ0FBQUwsT0FBQSxJQUFBQyxHQUFBLElBQUFLLEtBQUEsRUFBQUgsTUFBQSxDQUFBQyxNQUFBLENBQUFILEdBQUE7QUFNQSxJQUFNTSxZQUFZLEdBQUdDLDRCQUFNLENBQUNDLEdBQUcsQ0FBQWIsZUFBQSxLQUFBQSxlQUFBLEdBQUFHLHNCQUFBLHdUQUVULFVBQUFXLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLE9BQU87QUFBQSxHQUNqQyxVQUFBRCxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDRSxTQUFTO0FBQUEsR0FFdkIsVUFBQUYsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0csTUFBTTtBQUFBLEdBWXhCLFVBQUFILEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQUEsQ0FBQyxDQUMzQztBQUVELElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBQyxJQUFBO0VBQUEsSUFBQUMsWUFBQSxHQUFBRCxJQUFBLENBQ1ZMLE9BQU87SUFBUEEsT0FBTyxHQUFBTSxZQUFBLGNBQUcsU0FBUyxHQUFBQSxZQUFBO0lBQUFDLGNBQUEsR0FBQUYsSUFBQSxDQUNuQkosU0FBUztJQUFUQSxTQUFTLEdBQUFNLGNBQUEsY0FBRyxTQUFTLEdBQUFBLGNBQUE7SUFBQUMsV0FBQSxHQUFBSCxJQUFBLENBQ3JCSCxNQUFNO0lBQU5BLE1BQU0sR0FBQU0sV0FBQSxjQUFHLEVBQUUsR0FBQUEsV0FBQTtJQUNYQyxRQUFRLEdBQUFKLElBQUEsQ0FBUkksUUFBUTtJQUNSQyxPQUFPLEdBQUFMLElBQUEsQ0FBUEssT0FBTztJQUNQQyxJQUFJLEdBQUFOLElBQUEsQ0FBSk0sSUFBSTtFQUFBLG9CQUVKL0IsTUFBQSxZQUFBZ0MsYUFBQSxDQUFDaEIsWUFBWTtJQUNYaUIsU0FBUyxFQUFDLFlBQVk7SUFDdEJiLE9BQU8sRUFBRUEsT0FBUTtJQUNqQkMsU0FBUyxFQUFFQSxTQUFVO0lBQ3JCQyxNQUFNLEVBQUVBLE1BQU87SUFDZkMsT0FBTyxFQUFFUTtFQUFLLGdCQUVkL0IsTUFBQSxZQUFBZ0MsYUFBQSxjQUFNSCxRQUFjLENBQUMsZUFDckI3QixNQUFBLFlBQUFnQyxhQUFBLENBQUM1QixXQUFBLENBQUE4QixLQUFLLENBQUNDLE1BQU07SUFBQ2IsTUFBTSxFQUFDLE1BQU07SUFBQ2MsT0FBTyxFQUFFTjtFQUFRLENBQUUsQ0FDbkMsQ0FBQztBQUFBLENBQ2hCO0FBQUMsSUFBQU8sUUFBQSxHQUVhYixNQUFNO0FBQUFjLE9BQUEsY0FBQUQsUUFBQSJ9