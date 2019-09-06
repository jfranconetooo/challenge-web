import {
    FETCH_ALL_USERS,
    FETCH_ALL_USER_REPOS,
    FETCH_USER_BY_USERNAME,
    CLEAR_FETCHED_USER,
    CLEAR_FETCHED_USER_REPOS
} from './types';
import request from '../../utils/request';


export const fetchAllUsers = () => {
  const action = {
    type: FETCH_ALL_USERS,
    payload: []
  };

  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: '/users' });
      dispatch({ ...action, payload: response });
    } catch (e) {
      dispatch(action);
    }
  };
};

export const fetchUserByUsername = (username) => {
  const action = {
    type: FETCH_USER_BY_USERNAME
  };
  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: `/users/${username}/details` });
      dispatch({ ...action, payload: response });
    } catch (e) {
      dispatch(action);
    }
  };
};

export const fetchAllUserRepos = (username) => {
  const action = {
    type: FETCH_ALL_USER_REPOS
  };

  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: `/users/${username}/repos?type=all`});
      dispatch({ ...action, payload: response });
    } catch (e) {
      dispatch(action);
    }
  };
};


export const clearFetchedUser = () => {
    const action = {
        type: CLEAR_FETCHED_USER
    };
    return action;
};

export const clearFetchedUserRepos = () => {
    const action = {
        type: CLEAR_FETCHED_USER_REPOS
    };
    return action;
};