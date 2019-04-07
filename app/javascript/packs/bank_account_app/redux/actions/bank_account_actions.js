import { fetch, headers } from './api/api';
import { BANK_ACCOUNT_INDEX_SUCCESS } from '../constants'

/* ACTIONS
 ===============================================*/
const reduceTestData = (data) => {
  console.log(data) // eslint-disable-line no-console
  return {
    type: BANK_ACCOUNT_INDEX_SUCCESS,
    payload: data,
  }
};

/* REQUEST HELPERS
===============================================*/
const requestTestData = (dispatch) => {
  return fetch(
    '/bank_accounts',
    {
      method: 'GET',
      headers: headers(),
    },
    dispatch
  )
};

/* RESULT HELPERS
===============================================*/
const receiveTestData = (json) => {
  return dispatch => dispatch(reduceTestData(json))
};

/* EXPORTS
===============================================*/
export const listBankAccounts = () => {
  return dispatch => (
    requestTestData(dispatch)
      .then(json => dispatch(receiveTestData(json)))
      .catch(err => console.log(err)) // eslint-disable-line no-console)
  )
};
