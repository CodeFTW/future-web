import { compose } from 'recompose';
import { Profile } from './Profile';
import { getLoggedUserContext } from '../../user/userContext';

const enhance = getLoggedUserContext();

export const ProfileContainer = compose(enhance)(Profile);
