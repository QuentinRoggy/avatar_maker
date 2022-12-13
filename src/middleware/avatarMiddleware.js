/* eslint-disable max-len */
import { CHANGE_SHAPE, setShape } from '../actions/avatarActions';
import { shapeDatas } from '../data/avatar';

const avatarMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_SHAPE: {
      const avatar = store.getState().avatar.shape;

      console.log('DATA ACTION KEY', shapeDatas[action.key]);

      console.log('ACTION KEY : ', action.key);

      console.log('DATAS LENGTH : ', shapeDatas[action.key].length);

      const currentIndex = shapeDatas[action.key].findIndex((item) => item.id === avatar[action.key].id);

      console.log('CURRENT INDEX : ', currentIndex);

      let newIndex = null;

      if (currentIndex + 1 > shapeDatas[action.key].length - 1) {
        newIndex = 0;
      }
      else {
        newIndex = currentIndex + 1;
      }

      store.dispatch(setShape(shapeDatas[action.key][newIndex], action.key));

      break; }

    default:
      break;
  }
  next(action);
};

export default avatarMiddleware;
