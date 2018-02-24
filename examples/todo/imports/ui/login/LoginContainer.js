import { compose, withApollo } from 'react-apollo';
import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';
import { withAlert } from '@codeftw/future-web-ui-alert';

const data = loggedUserQuery;

export const LoginContainer = compose(data, withApollo, withAlert)(Login);
