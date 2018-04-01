import { createStore } from 'redux';
import { reducers } from './reducers';
import { toggleMenu } from './actions';

export const mapStateToProps = state => ({ open: state.toggleMenu.open });
export const mapDispatchToProps = dispatch => ({
  toggleMenu: value => () => {
    dispatch(toggleMenu(!value));
  },
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Make the devtools able
);
