import React from 'react';
import { Snackbar } from 'material-ui';
import {connect, Provider} from 'react-redux';
import {createStore, compose} from 'redux';

const KEY_MESSAGE = 'future-web-ui-alert-message';

const initialState = {
    message: ''
};
const reducer = (state=initialState, action ) => {
    switch (action.type) {
        case KEY_MESSAGE:
            return {...state, message: action.message};
        default:
            return state;
    }
};

const store = createStore(reducer);

const mapStateToProps = state => {
    return{message: state.message};
};

const setMessage = message => ({type: KEY_MESSAGE, message});
const mapDispatchToProps = dispatch => {
    return {
        setMessage: message => dispatch(setMessage(message))
    }
};

const closer = ({ setMessage }) => () => {
    setMessage('');
};

export const withAlert = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export const AlertProvider = (props) => {
    return (<Provider store={store}>{props.children}</Provider>);
};

export const showAlert = (message) => store.dispatch(setMessage(message));

export const Alert = withAlert((props) => {
  const { autoHideDuration = 3000, message } = props;
  const hasMessage = !!message;

  if (!hasMessage) {
    return null;
  }

  return (
    <Snackbar
      message={message}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={true}
      onClose={closer(props)}
    />
  );
});
