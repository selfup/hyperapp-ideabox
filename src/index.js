import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './views/IdeaBox';

app(
  state,
  actions,
  view,
  document.body,
);
