'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = exports.showMessage = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showMessage = exports.showMessage = function showMessage(message, _ref) {
  var setShowAlert = _ref.setShowAlert;

  console.log('show');
  _jsCookie2.default.set('message', message);
  setShowAlert(true);
};

var getMessage = function getMessage() {
  console.log('get');
  return _jsCookie2.default.get('message');
};

var closer = function closer(_ref2) {
  var setShowAlert = _ref2.setShowAlert;
  return function () {
    console.log('closer');
    _jsCookie2.default.remove('message');
    setShowAlert(false);
  };
};

var Alert = exports.Alert = function Alert(props) {
  console.log(props);
  var _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === undefined ? 3000 : _props$autoHideDurati,
      showAlert = props.showAlert;

  var message = getMessage();
  var hasMessage = !!message;

  if (!hasMessage) {
    return null;
  }

  console.log({ hasMessage: hasMessage });

  return _react2.default.createElement(_materialUi.Snackbar, {
    message: message,
    autoHideDuration: autoHideDuration,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: showAlert,
    onClose: closer(props)
  });
};
