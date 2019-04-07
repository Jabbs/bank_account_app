import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import bankAccount, * as fromBankAccount from './bank_account';

export default combineReducers({
  bankAccount,
  form: reduxFormReducer,
  routing: routerReducer,
});

// Selectors:
export const getBankAccounts = (state) => fromBankAccount.getBankAccounts(state.bankAccount);
