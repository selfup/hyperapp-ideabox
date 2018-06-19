import {
  SWILL,
  PLAUSIBLE,
  GENIUS,
} from './../constants';

export default {
  ideas: [],
  title: '',
  body: '',
  qualityKey: {
    add: {
      swill: PLAUSIBLE,
      plausible: GENIUS,
      genius: GENIUS,
    },
    sub: {
      swill: SWILL,
      plausible: SWILL,
      genius: PLAUSIBLE,
    },
  },
};
