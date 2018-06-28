import { SWILL } from './../constants';

export default {
  updateField: ({ target: { id, value } }) => () => ({
    [id]: value.trim(),
  }),

  submit: () => (state) => {
    const {
      title,
      body,
    } = state;

    if (!title || !body) {
      return state;
    }

    const ideas = [
      {
        title,
        body,
        quality: SWILL,
      },
      ...state.ideas,
    ];

    return {
      ideas,
      title: '',
      body: '',
    };
  },

  changeQuality: ({
    target: {
      id,
      classList: {
        value,
      },
    },
  }) => (state) => {
    const ideas = state.ideas.map((idea, index) => {
      const newIdea = Object.assign({}, idea);

      if (index === (parseInt(id, 10))) {
        newIdea.quality = state.qualityKey[value][newIdea.quality];
      }

      return newIdea;
    });

    return {
      ideas,
    };
  },

  removeIdea: ({ target }) => ({ ideas: currentIdeas }) => {
    const ideas = currentIdeas.filter((idea, idx) => (idx !== (+target.id)));

    return {
      ideas,
    };
  },
};
