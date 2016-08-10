import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = {};

export function setState (state, newState) {
  return state.merge(fromJS(newState));
};