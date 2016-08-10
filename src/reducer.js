import {
  setInitialState,
  setFiltering,
  setSortBy,
  toggleSortDir,
  setShowing,
  setBeerState,
  INITIAL_STATE
} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'SET_INITIAL_STATE':
      return setInitialState(state);
    default:
      return state;
  }

  return state;
}