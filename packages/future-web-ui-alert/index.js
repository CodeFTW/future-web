'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alert = exports.showAlert = exports.AlertProvider = exports.withAlert = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY_MESSAGE = 'future-web-ui-alert-message';

var initialState = {
    message: ''
};
var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case KEY_MESSAGE:
            return { ...state, message: action.message };
        default:
            return state;
    }
};

var store = (0, _redux.createStore)(reducer);

var mapStateToProps = function mapStateToProps(state) {
    return { message: state.message };
};

var _setMessage = function _setMessage(message) {
    return { type: KEY_MESSAGE, message: message };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setMessage: function setMessage(message) {
            return dispatch(_setMessage(message));
        }
    };
};

var closer = function closer(_ref) {
    var setMessage = _ref.setMessage;
    return function () {
        setMessage('');
    };
};

var withAlert = exports.withAlert = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps));

var AlertProvider = exports.AlertProvider = function AlertProvider(props) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        props.children
    );
};

var showAlert = exports.showAlert = function showAlert(message) {
    return store.dispatch(_setMessage(message));
};

var Alert = exports.Alert = withAlert(function (props) {
    var _props$autoHideDurati = props.autoHideDuration,
        autoHideDuration = _props$autoHideDurati === undefined ? 3000 : _props$autoHideDurati,
        message = props.message;

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
        open: true,
        onClose: closer(props)
    });
});
