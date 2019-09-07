import {
    FETCH_ALL_USERS,
    FETCH_ALL_USER_REPOS,
    FETCH_USER_BY_USERNAME,
    CLEAR_FETCHED_USER,
    CLEAR_FETCHED_USER_REPOS
} from './types';
import request from '../../utils/request';
import { get } from 'lodash';
/**
 * Handle response errors.
 */

const handleResponseError = (error, ownProps) => {
    if (ownProps.history) {
        let path
        if (get(error, 'response.status', false)) path = `/error/${error.response.status}`;
        else path = '/error/500';
        ownProps.history.push(path)
    }
};

export const fetchAllUsers = (since, ownProps) => {
  const action = {
    type: FETCH_ALL_USERS,
    payload: []
  };

  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: `/users?since=${since}` });
      dispatch({ ...action, payload: response });
    } catch (e) {
      handleResponseError(e, ownProps)
    }
  };
};

export const fetchUserByUsername = (username, ownProps) => {
  const action = {
    type: FETCH_USER_BY_USERNAME
  };
  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: `/users/${username}/details` });
      dispatch({ ...action, payload: response });
    } catch (e) {
      handleResponseError(e, ownProps);
    }
  };
};

export const fetchAllUserRepos = (username, ownProps) => {
  const action = {
    type: FETCH_ALL_USER_REPOS
  };

  return async (dispatch) => {
    try {
      const response = await request({ method: 'GET', url: `/users/${username}/repos?type=all`});
      dispatch({ ...action, payload: response });
    } catch (e) {
      handleResponseError(e, ownProps);
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