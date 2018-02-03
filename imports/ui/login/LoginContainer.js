import { compose } from 'react-apollo';
import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';

const data = loggedUserQuery;

export const LoginContainer = compose(data)(Login);
