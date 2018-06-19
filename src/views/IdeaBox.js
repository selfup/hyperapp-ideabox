import { h } from 'hyperapp';
import Inputs from './Inputs';
import Ideas from './Ideas';

export default (state, actions) =>
  <div>
    <div class="idea-box">
      <h1>
        <a href="https://github.com/hyperapp/hyperapp">HyperApp </a>
        IdeaBox
      </h1>
      {Inputs(state, actions)}
    </div>
    <section class="ideas">
      {Ideas(state, actions)}
    </section>
  </div>;
