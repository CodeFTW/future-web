import { compose, withApollo } from 'react-apollo';
import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';

export const LoginContainer = compose(loggedUserQuery, withApollo)(Login);
