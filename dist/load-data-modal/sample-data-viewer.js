"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _d3Format = require("d3-format");
var _components = require("@kepler.gl/components");
var _reactIntl = require("react-intl");
var _templateObject, _templateObject2, _templateObject3, _templateObject4; // Copyright (c) 2023 Uber Technologies, Inc.
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var numFormat = (0, _d3Format.format)(',');
var StyledSampleGallery = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
var StyledSampleMap = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  line-height: 22px;\n  width: 30%;\n  max-width: 480px;\n  margin-bottom: 50px;\n\n  .sample-map__image {\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: 12px;\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n    position: relative;\n    line-height: 0;\n\n    img {\n      max-width: 100%;\n    }\n    :hover {\n      cursor: pointer;\n      opacity: 1;\n    }\n  }\n\n  .sample-map__size {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 24px;\n  }\n\n  :hover {\n    .sample-map__image__caption {\n      opacity: 0.8;\n      transition: opacity 0.4s ease;\n    }\n  }\n"])), function (props) {
  return props.theme.textColorLT;
});
var StyledImageCaption = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 16px;\n  margin-top: 10px;\n  opacity: 0;\n"])), function (props) {
  return props.theme.labelColorLT;
});
var StyledError = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: red;\n  font-size: 14px;\n  margin-bottom: 16px;\n"])));
var SampleMap = function SampleMap(_ref) {
  var id = _ref.id,
    sample = _ref.sample,
    onClick = _ref.onClick,
    locale = _ref.locale;
  return /*#__PURE__*/_react["default"].createElement(StyledSampleMap, {
    id: id,
    className: "sample-map-gallery__item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sample-map"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sample-map__image",
    onClick: onClick
  }, sample.imageUrl && /*#__PURE__*/_react["default"].createElement("img", {
    src: sample.imageUrl
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sample-map__title"
  }, sample.label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sample-map__size"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'sampleDataViewer.rowCount',
    values: {
      rowCount: numFormat(sample.size)
    }
  })), /*#__PURE__*/_react["default"].createElement(StyledImageCaption, {
    className: "sample-map__image__caption"
  }, sample.description)));
};
var SampleMapGallery = function SampleMapGallery(_ref2) {
  var sampleMaps = _ref2.sampleMaps,
    onLoadSample = _ref2.onLoadSample,
    error = _ref2.error,
    isMapLoading = _ref2.isMapLoading,
    locale = _ref2.locale,
    loadSampleConfigurations = _ref2.loadSampleConfigurations;
  (0, _react.useEffect)(function () {
    if (!sampleMaps.length) {
      loadSampleConfigurations();
    }
  }, [sampleMaps, loadSampleConfigurations]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sample-data-modal"
  }, error ? /*#__PURE__*/_react["default"].createElement(StyledError, null, error.message) : isMapLoading ? /*#__PURE__*/_react["default"].createElement(_components.LoadingDialog, {
    size: 64
  }) : /*#__PURE__*/_react["default"].createElement(StyledSampleGallery, {
    className: "sample-map-gallery"
  }, sampleMaps.filter(function (sp) {
    return sp.visible;
  }).map(function (sp) {
    return /*#__PURE__*/_react["default"].createElement(SampleMap, {
      id: sp.id,
      sample: sp,
      key: sp.id,
      onClick: function onClick() {
        return onLoadSample(sp);
      },
      locale: locale
    });
  })));
};
SampleMapGallery.propTypes = {
  sampleMaps: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onLoadSample: _propTypes["default"].func.isRequired,
  loadSampleConfigurations: _propTypes["default"].func.isRequired,
  error: _propTypes["default"].object
};
var _default = SampleMapGallery;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcHJvcFR5cGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9zdHlsZWRDb21wb25lbnRzIiwiX2QzRm9ybWF0IiwiX2NvbXBvbmVudHMiLCJfcmVhY3RJbnRsIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0Iiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJzdHJpbmdzIiwicmF3Iiwic2xpY2UiLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidmFsdWUiLCJudW1Gb3JtYXQiLCJmb3JtYXQiLCJTdHlsZWRTYW1wbGVHYWxsZXJ5Iiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkU2FtcGxlTWFwIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVkSW1hZ2VDYXB0aW9uIiwibGFiZWxDb2xvckxUIiwiU3R5bGVkRXJyb3IiLCJTYW1wbGVNYXAiLCJfcmVmIiwiaWQiLCJzYW1wbGUiLCJvbkNsaWNrIiwibG9jYWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImltYWdlVXJsIiwic3JjIiwibGFiZWwiLCJGb3JtYXR0ZWRNZXNzYWdlIiwidmFsdWVzIiwicm93Q291bnQiLCJzaXplIiwiZGVzY3JpcHRpb24iLCJTYW1wbGVNYXBHYWxsZXJ5IiwiX3JlZjIiLCJzYW1wbGVNYXBzIiwib25Mb2FkU2FtcGxlIiwiZXJyb3IiLCJpc01hcExvYWRpbmciLCJsb2FkU2FtcGxlQ29uZmlndXJhdGlvbnMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtZXNzYWdlIiwiTG9hZGluZ0RpYWxvZyIsImZpbHRlciIsInNwIiwidmlzaWJsZSIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2xvYWQtZGF0YS1tb2RhbC9zYW1wbGUtZGF0YS12aWV3ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbi8vIFRIRSBTT0ZUV0FSRS5cclxuXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XHJcbmltcG9ydCB7TG9hZGluZ0RpYWxvZ30gZnJvbSAnQGtlcGxlci5nbC9jb21wb25lbnRzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IG51bUZvcm1hdCA9IGZvcm1hdCgnLCcpO1xyXG5cclxuY29uc3QgU3R5bGVkU2FtcGxlR2FsbGVyeSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU2FtcGxlTWFwID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIC5zYW1wbGUtbWFwX19pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNhbXBsZS1tYXBfX3NpemUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIC5zYW1wbGUtbWFwX19pbWFnZV9fY2FwdGlvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSW1hZ2VDYXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2FtcGxlTWFwID0gKHtpZCwgc2FtcGxlLCBvbkNsaWNrLCBsb2NhbGV9KSA9PiAoXHJcbiAgPFN0eWxlZFNhbXBsZU1hcCBpZD17aWR9IGNsYXNzTmFtZT1cInNhbXBsZS1tYXAtZ2FsbGVyeV9faXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzYW1wbGUtbWFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FtcGxlLW1hcF9faW1hZ2VcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICB7c2FtcGxlLmltYWdlVXJsICYmIDxpbWcgc3JjPXtzYW1wbGUuaW1hZ2VVcmx9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYW1wbGUtbWFwX190aXRsZVwiPntzYW1wbGUubGFiZWx9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FtcGxlLW1hcF9fc2l6ZVwiPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICBpZD17J3NhbXBsZURhdGFWaWV3ZXIucm93Q291bnQnfVxyXG4gICAgICAgICAgdmFsdWVzPXt7cm93Q291bnQ6IG51bUZvcm1hdChzYW1wbGUuc2l6ZSl9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3R5bGVkSW1hZ2VDYXB0aW9uIGNsYXNzTmFtZT1cInNhbXBsZS1tYXBfX2ltYWdlX19jYXB0aW9uXCI+XHJcbiAgICAgICAge3NhbXBsZS5kZXNjcmlwdGlvbn1cclxuICAgICAgPC9TdHlsZWRJbWFnZUNhcHRpb24+XHJcbiAgICA8L2Rpdj5cclxuICA8L1N0eWxlZFNhbXBsZU1hcD5cclxuKTtcclxuXHJcbmNvbnN0IFNhbXBsZU1hcEdhbGxlcnkgPSAoe1xyXG4gIHNhbXBsZU1hcHMsXHJcbiAgb25Mb2FkU2FtcGxlLFxyXG4gIGVycm9yLFxyXG4gIGlzTWFwTG9hZGluZyxcclxuICBsb2NhbGUsXHJcbiAgbG9hZFNhbXBsZUNvbmZpZ3VyYXRpb25zXHJcbn0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzYW1wbGVNYXBzLmxlbmd0aCkge1xyXG4gICAgICBsb2FkU2FtcGxlQ29uZmlndXJhdGlvbnMoKTtcclxuICAgIH1cclxuICB9LCBbc2FtcGxlTWFwcywgbG9hZFNhbXBsZUNvbmZpZ3VyYXRpb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbXBsZS1kYXRhLW1vZGFsXCI+XHJcbiAgICAgIHtlcnJvciA/IChcclxuICAgICAgICA8U3R5bGVkRXJyb3I+e2Vycm9yLm1lc3NhZ2V9PC9TdHlsZWRFcnJvcj5cclxuICAgICAgKSA6IGlzTWFwTG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ0RpYWxvZyBzaXplPXs2NH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U3R5bGVkU2FtcGxlR2FsbGVyeSBjbGFzc05hbWU9XCJzYW1wbGUtbWFwLWdhbGxlcnlcIj5cclxuICAgICAgICAgIHtzYW1wbGVNYXBzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoc3AgPT4gc3AudmlzaWJsZSlcclxuICAgICAgICAgICAgLm1hcChzcCA9PiAoXHJcbiAgICAgICAgICAgICAgPFNhbXBsZU1hcFxyXG4gICAgICAgICAgICAgICAgaWQ9e3NwLmlkfVxyXG4gICAgICAgICAgICAgICAgc2FtcGxlPXtzcH1cclxuICAgICAgICAgICAgICAgIGtleT17c3AuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxvYWRTYW1wbGUoc3ApfVxyXG4gICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRTYW1wbGVHYWxsZXJ5PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNhbXBsZU1hcEdhbGxlcnkucHJvcFR5cGVzID0ge1xyXG4gIHNhbXBsZU1hcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIG9uTG9hZFNhbXBsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBsb2FkU2FtcGxlQ29uZmlndXJhdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZU1hcEdhbGxlcnk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW9CQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxVQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxpQkFBQSxHQUFBRCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUksU0FBQSxHQUFBSixPQUFBO0FBQ0EsSUFBQUssV0FBQSxHQUFBTCxPQUFBO0FBQ0Es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