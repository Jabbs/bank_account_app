// import { Col, Button, Row } from 'react-bootstrap';
import { Field } from 'redux-form';
import { Component } from 'react';
import TextInput from '../../components/common/redux_forms/inputs/text_input';

class BankAccountForm extends Component {
  render() {
    const { handleSubmit, header, pristine, invalid, onCancel, buttonCopy } = this.props;

    return (
      <div className="field-section">
        <Row>
          <Col md={12}>
            <h1>{header}</h1>
          </Col>
        </Row>

        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Field name="name" label="Bank account" placeholder="Bank account" component={TextInput} />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <Button bsStyle="inverse" bsSize="large" block onClick={onCancel}>Cancel</Button>
            </Col>
            <Col md={7}>
            </Col>
            <Col md={3}>
              <Button bsStyle="primary" bsSize="large" block disabled={pristine || invalid} type='submit'>{buttonCopy}</Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default BankAccountForm;
