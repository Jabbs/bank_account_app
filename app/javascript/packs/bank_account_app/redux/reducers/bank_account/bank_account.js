import { combineReducers } from 'redux';

const bankAccounts = (state = [], action) => {
  switch (action.type) {
    case 'BANK_ACCOUNT_INDEX_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  bankAccounts,
});

// Selectors:
export const getBankAccounts = (state) => state.bankAccounts;
