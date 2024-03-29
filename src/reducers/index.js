/**
 * Create reducers.
 *
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

// Shared reducers
import { usersReducer } from 'reducers/users';


/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    users: usersReducer,
    ...injectedReducers
  });
}
