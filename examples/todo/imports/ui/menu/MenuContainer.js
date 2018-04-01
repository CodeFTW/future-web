import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Menu } from './Menu';
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../core/reduxCore/store';

export const MenuContainer = compose(withApollo, withRouter)(
  connect(mapStateToProps, mapDispatchToProps)(Menu)
);
