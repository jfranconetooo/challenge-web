/*
 *
 * Users reducer
 *
 */

import {
  FETCH_ALL_USERS,
  FETCH_USER_BY_USERNAME,
  FETCH_ALL_USER_REPOS,
  CLEAR_FETCHED_USER,
  CLEAR_FETCHED_USER_REPOS
} from 'actions/users/types';

const initialState = {
  list: [],
  search: ''
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, list: action.payload };
    case FETCH_USER_BY_USERNAME:
      return { ...state, fetchedUser: action.payload };
    case FETCH_ALL_USER_REPOS:
      return { ...state, fetchedUserRepos: action.payload };
    case CLEAR_FETCHED_USER:
      return { ...state, fetchedUser: {} };
    case CLEAR_FETCHED_USER_REPOS:
      return { ...state, fetchedUserRepos: {} };
    default:
      return state;
  }
};
