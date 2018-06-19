import { h, app } from 'hyperapp';
import appActions from './../src/actions';
import appState from './../src/state';
import IdeaBox from './../src/views/IdeaBox';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('Counter test', (done) => {
  const view = (state, actions) => h(
    'div',
    {
      oncreate() {
        const html = document.body.innerHTML;

        expect(html.includes('asdf')).toBe(true);
        expect(html.includes('foobar')).toBe(true);

        done();
      },
    },
    [IdeaBox(state, actions)],
  );

  const main = app(appState, appActions, view, document.body);

  main.updateField({
    target: {
      id: 'title',
      value: 'asdf',
    },
  });

  main.updateField({
    target: {
      id: 'body',
      value: 'foobar',
    },
  });

  main.submit();
});
