import { Field, reduxForm } from 'redux-form';
import { validate } from './form_validations';
import { Component } from 'react';
import { connect } from 'react-redux';
import BankAccountForm from './form.jsx';
import * as bankAccountActions from '../../redux/actions/bank_account_actions';

const ReduxBankAccountForm = reduxForm({
  form: 'bankAccountEntry',  // a unique identifier for this form
  validate,
})(BankAccountForm);

export class NewBankAccount extends Component {
  render() {
    const submitForm = (values) => {
      this.props.submitBankAccountForm(values);
    };

    const initialValues = {
      test: "ing",
    };

    return (
      <ReduxBankAccountForm
        onSubmit={submitForm}
        buttonCopy="Create bank account"
        initialValues={initialValues}
        onCancel={() => {}}
      />
    );
  }
}

export default connect(null, bankAccountActions)(NewBankAccount);
