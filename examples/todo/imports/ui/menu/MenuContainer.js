import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Menu } from './Menu';

export const MenuContainer = compose(withApollo, withRouter)(Menu);
