export const CHANGE_SHAPE = 'CHANGE_SHAPE';
export const SET_SHAPE = 'SET_SHAPE';

export const changeshape = (key) => ({
  type: CHANGE_SHAPE,
  key,

});

export const setShape = (newShape, key) => ({
  type: SET_SHAPE,
  newShape,
  key,
});
