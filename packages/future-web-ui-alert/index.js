'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = exports.Alert = function Alert(_ref) {
  var message = _ref.message;

  return _react2.default.createElement(_materialUi.Snackbar, {
    message: message,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: true
  });
};
