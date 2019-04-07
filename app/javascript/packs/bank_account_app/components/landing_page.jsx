import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import { Row, Col } from "react-bootstrap";
import '../assets/styles/app'

import * as bankAccountActions from '../redux/actions/bank_account_actions';
import { getBankAccounts } from '../redux/reducers/bank_account';

class LandingPage extends Component {
  componentDidMount() {
    this.props.listBankAccounts();
  }

  render() {
    if(this.props.bank_accounts[0]) console.log("bank_accounts", this.props.bank_accounts[0].name);
    return(
      <div className="landing-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              Hello World
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bank_accounts: getBankAccounts(state),
  };
};

export default connect(mapStateToProps, bankAccountActions)(LandingPage);
