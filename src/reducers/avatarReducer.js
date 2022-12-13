import { SET_SHAPE } from '../actions/avatarActions';

const initialState = {
  shape: {
    body: {
      id: 1,
      url: '/Images/body/light.png',
    },
    hair: {
      id: 1,
      url: '/Images/hair/01.png',
    },
    eyes: {
      id: 1,
      url: '/Images/eye/default.png',
    },
    nose: {
      id: 1,
      url: '/Images/nose/default.png',
    },
    mouth: {
      id: 1,
      url: '/Images/mouth/smile.png',
    },
    clothing: {
      id: 1,
      url: '/Images/clothing/hoodie.png',
    },
    facialHair: {
      id: 1,
      url: '/Images/facial_hair/no-facial.png',
    },
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SHAPE: {
      const newShape = state.shape;
      newShape[action.key] = action.newShape;
      return {
        ...state,
        shape: { ...newShape },
      }; }
    default:
      return state;
  }
}

export default reducer;
