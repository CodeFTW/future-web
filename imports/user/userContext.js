import { getContext } from 'recompose';
import PropTypes from 'prop-types';

export const getLoggedUserContext = () =>
  getContext({
    loggedUser: PropTypes.object,
  });
