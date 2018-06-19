import { SWILL } from './../src/constants';
import actions from './../src/actions';

test('updateField', () => {
  const updateField = actions.updateField({
    target: {
      id: 'title',
      value: 'wow ',
    },
  })();

  expect(updateField).toEqual({
    title: 'wow',
  });
});

test('submit', () => {
  const submit = actions.submit()({
    title: 'a',
    body: 'b',
    ideas: [],
  });

  expect(submit).toEqual({
    title: '',
    body: '',
    ideas: [{
      title: 'a',
      body: 'b',
      quality: SWILL,
    }],
  });
});
