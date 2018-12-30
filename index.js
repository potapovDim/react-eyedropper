"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _html2canvas = _interopRequireDefault(require("html2canvas"));

var _getCanvasPixelColor2 = _interopRequireDefault(require("get-canvas-pixel-color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeDropper =
/*#__PURE__*/
function (_Component) {
  _inherits(EyeDropper, _Component);

  function EyeDropper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EyeDropper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EyeDropper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "eyeDropper", function (e) {
      var initializedColor = _this.props.initializedColor;

      var removeEventListener = function removeEventListener() {
        document.removeEventListener('click', _this.eyeDropper);
      };

      (0, _html2canvas.default)(e.toElement, {
        onrendered: function onrendered(canvas) {
          var x = e.offsetX == undefined ? e.layerX : e.offsetX;
          var y = e.offsetY == undefined ? e.layerY : e.offsetY;

          var _getCanvasPixelColor = (0, _getCanvasPixelColor2.default)(canvas, x, y),
              r = _getCanvasPixelColor.r,
              g = _getCanvasPixelColor.g,
              b = _getCanvasPixelColor.b,
              a = _getCanvasPixelColor.a;

          a === 0 ? initializedColor({
            r: 255,
            g: 255,
            b: 255
          }) : initializedColor({
            r: r,
            g: b,
            b: g
          });
          removeEventListener();
        }
      });
      document.body.style.cursor = 'default';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initEyeDropper", function (event) {
      _this.props.onInit && _this.props.onInit();
      document.body.style.cursor = 'cell';
      document.addEventListener('click', _this.eyeDropper);
    });

    return _this;
  }

  _createClass(EyeDropper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title;
      var classNameComponent = className ? className : "eye dropper";
      var titleComponent = title ? title : '+';
      return _react.default.createElement("div", {
        className: classNameComponent,
        onClick: this.initEyeDropper
      }, titleComponent);
    }
  }]);

  return EyeDropper;
}(_react.Component);

_defineProperty(EyeDropper, "propTypes", {
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  initializedColor: _propTypes.default.func.isRequired,
  onInit: _propTypes.default.func
});

var _default = EyeDropper;
exports.default = _default;
