import { compose, withApollo } from 'react-apollo';
import { withAlert } from '@codeftw/future-web-ui-alert';

import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';

const data = loggedUserQuery;

export const LoginContainer = compose(data, withApollo, withAlert)(Login);
