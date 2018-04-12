import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Home } from '../home/Home';
import { getLoggedUserContext } from '../../user/userContext';

export const HomeContainer = compose(withRouter, getLoggedUserContext())(Home);
