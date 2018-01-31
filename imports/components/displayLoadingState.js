import { branch, renderComponent } from 'recompose';
import { Loading } from './Loading';

export const displayLoadingState = branch(
  props => props.data && props.data.loading,
  renderComponent(Loading)
);
