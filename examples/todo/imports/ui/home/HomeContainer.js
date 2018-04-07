import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Home } from './Home';
import { getLoggedUserContext } from '../../user/userContext';

export const HomeContainer = compose(withRouter, getLoggedUserContext())(Home);
