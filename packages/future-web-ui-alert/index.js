'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertProvider = exports.Alert = exports.withAlert = exports.showAlert = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COOKIE_KEY_MESSAGE = 'future-web-ui-alert-message';

var showAlert = exports.showAlert = function showAlert(message, _ref) {
  var setShowAlert = _ref.setShowAlert;

  _jsCookie2.default.set(COOKIE_KEY_MESSAGE, message);
  setShowAlert(true);
};

var getMessage = function getMessage() {
  return _jsCookie2.default.get(COOKIE_KEY_MESSAGE);
};

var closer = function closer(_ref2) {
  var setShowAlert = _ref2.setShowAlert;
  return function () {
    _jsCookie2.default.remove(COOKIE_KEY_MESSAGE);
    setShowAlert(false);
  };
};

var withAlert = exports.withAlert = (0, _recompose.getContext)({
  setShowAlert: _propTypes2.default.func,
  openAlert: _propTypes2.default.bool
});

var Alert = exports.Alert = withAlert(function (props) {
  var _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === undefined ? 3000 : _props$autoHideDurati,
      openAlert = props.openAlert;

  var message = getMessage();
  var hasMessage = !!message;

  if (!hasMessage) {
    return null;
  }

  return _react2.default.createElement(_materialUi.Snackbar, {
    message: message,
    autoHideDuration: autoHideDuration,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: openAlert,
    onClose: closer(props)
  });
});

var enhance = (0, _recompose.compose)((0, _recompose.withState)('alertState', 'setAlertState', { openAlert: false }), (0, _recompose.withContext)({
  openAlert: _propTypes2.default.bool,
  setShowAlert: _propTypes2.default.func
}, function (_ref3) {
  var alertState = _ref3.alertState,
      setAlertState = _ref3.setAlertState;
  return {
    openAlert: alertState.openAlert,
    setShowAlert: function setShowAlert(openAlert) {
      setAlertState({ ...alertState, openAlert: openAlert });
    }
  };
}));

var AlertProvider = exports.AlertProvider = enhance(function (props) {
  return props.children;
});
