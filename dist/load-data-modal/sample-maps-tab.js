"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@kepler.gl/components");
var _styles = require("@kepler.gl/styles");
var _reactIntl = require("react-intl");
var _defaultSettings = require("../../constants/default-settings");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5; // Copyright (c) 2023 Uber Technologies, Inc.
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
var StyledMapIcon = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: url(\"", "icon-demo-map.jpg\");\n  background-repeat: no-repeat;\n  background-size: 64px 48px;\n  width: 64px;\n  height: 48px;\n  border-radius: 2px;\n\n  ", ";\n"])), _defaultSettings.ASSETS_URL, _styles.media.portable(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 48px;\n    height: 32px;\n  "]))));
var StyledTrySampleData = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 12px;\n  flex-grow: 1;\n  justify-content: flex-end;\n  color: ", ";\n\n  .demo-map-title {\n    margin-left: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n  }\n\n  .demo-map-label {\n    font-size: 11px;\n\n    ", ";\n  }\n\n  .demo-map-action {\n    display: flex;\n    font-size: 14px;\n    align-items: center;\n    color: ", ";\n    cursor: pointer;\n\n    ", ";\n\n    :hover {\n      color: ", ";\n    }\n\n    span {\n      white-space: nowrap;\n    }\n\n    svg {\n      margin-left: 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      font-size: 10px;\n    "]))), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      font-size: 12px;\n    "]))), function (props) {
  return props.theme.textColorLT;
});
var SampleMapsTab = function SampleMapsTab(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledTrySampleData, {
    className: "try-sample-data"
  }, /*#__PURE__*/_react["default"].createElement(StyledMapIcon, {
    className: "demo-map-icon"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "demo-map-title"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "demo-map-label"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'sampleMapsTab.noData',
    defaultMessage: "No Data"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "demo-map-action",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'sampleMapsTab.trySampleData',
    defaultMessage: "Sample Maps"
  }), /*#__PURE__*/_react["default"].createElement(_components.Icons.ArrowRight, {
    height: "16px"
  }))));
};
var _default = SampleMapsTab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9zdHlsZWRDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfc3R5bGVzIiwiX3JlYWN0SW50bCIsIl9kZWZhdWx0U2V0dGluZ3MiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGVtcGxhdGVPYmplY3QyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl90ZW1wbGF0ZU9iamVjdDQiLCJfdGVtcGxhdGVPYmplY3Q1Iiwib2JqIiwiX19lc01vZHVsZSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJzdHJpbmdzIiwicmF3Iiwic2xpY2UiLCJPYmplY3QiLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidmFsdWUiLCJTdHlsZWRNYXBJY29uIiwic3R5bGVkIiwiZGl2IiwiQVNTRVRTX1VSTCIsIm1lZGlhIiwicG9ydGFibGUiLCJTdHlsZWRUcnlTYW1wbGVEYXRhIiwicHJvcHMiLCJ0aGVtZSIsInN1YnRleHRDb2xvckxUIiwidGV4dENvbG9yTFQiLCJTYW1wbGVNYXBzVGFiIiwiX3JlZiIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybWF0dGVkTWVzc2FnZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJJY29ucyIsIkFycm93UmlnaHQiLCJoZWlnaHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9sb2FkLWRhdGEtbW9kYWwvc2FtcGxlLW1hcHMtdGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxyXG4vL1xyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vL1xyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy9cclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4vLyBUSEUgU09GVFdBUkUuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtJY29uc30gZnJvbSAnQGtlcGxlci5nbC9jb21wb25lbnRzJztcclxuaW1wb3J0IHttZWRpYX0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuaW1wb3J0IHtBU1NFVFNfVVJMfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTdHlsZWRNYXBJY29uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0FTU0VUU19VUkx9aWNvbi1kZW1vLW1hcC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDY0cHggNDhweDtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUcnlTYW1wbGVEYXRhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xyXG5cclxuICAuZGVtby1tYXAtdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuZGVtby1tYXAtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgICR7bWVkaWEucG9ydGFibGVgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGB9O1xyXG4gIH1cclxuXHJcbiAgLmRlbW8tbWFwLWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBgfTtcclxuXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2FtcGxlTWFwc1RhYiA9ICh7b25DbGlja30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFRyeVNhbXBsZURhdGEgY2xhc3NOYW1lPVwidHJ5LXNhbXBsZS1kYXRhXCI+XHJcbiAgICAgIDxTdHlsZWRNYXBJY29uIGNsYXNzTmFtZT1cImRlbW8tbWFwLWljb25cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbWFwLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLW1hcC1sYWJlbFwiPlxyXG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydzYW1wbGVNYXBzVGFiLm5vRGF0YSd9IGRlZmF1bHRNZXNzYWdlPVwiTm8gRGF0YVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLW1hcC1hY3Rpb25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnc2FtcGxlTWFwc1RhYi50cnlTYW1wbGVEYXRhJ30gZGVmYXVsdE1lc3NhZ2U9XCJTYW1wbGUgTWFwc1wiIC8+XHJcbiAgICAgICAgICA8SWNvbnMuQXJyb3dSaWdodCBoZWlnaHQ9XCIxNnB4XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZFRyeVNhbXBsZURhdGE+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZU1hcHNUYWI7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBb0JBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGlCQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxVQUFBLEdBQUFKLE9BQUE7QUFFQSxJQUFBSyxnQkFBQSxHQUFBTCxPQUFBO0FBQTRELElBQUFNLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUExQjVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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