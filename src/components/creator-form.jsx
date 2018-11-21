import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Spin,
  Icon,
  Alert,
} from 'antd';
import moment from 'moment';
import * as CustomPropTypes from '../custom-prop-types';

const Spinner = () => (
  <Spin
    style={{
      marginRight: '.9em',
      marginTop: '.85em',
    }}
    indicator={
      <Icon type="loading" style={{ fontSize: 20 }} spin />
    }
  />
);

const FormItem = Form.Item;
const hasErrors = fieldsError => (
  Object.keys(fieldsError).some(field => fieldsError[field])
);

class CreatorForm extends Component {
  constructor(props) {
    super(props);

    const { invoices, action } = props;

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      submitted: false,
      isSaving: false,
    };

    if (action === 'update') {
      this.id = window.location.href.slice(
        window.location.href.lastIndexOf('/') + 1,
      );
      [this.invoiceData] = invoices.filter(entry => (
        entry.id === this.id
      ));
    }
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();

    const { form, saveInvoice, action } = this.props;

    form.validateFields((err, {
      /* eslint-disable camelcase */
      invoiceNumber: number,
      invoiceDate: date_created,
      supplyDate: date_supply,
      comment,
      /* eslint-disable camelcase */
    }) => {
      if (!err) {
        this.setState({
          isSaving: true,
          saveError: false,
        });

        const dataToSave = {
          number: +number,
          date_created: date_created.format('DD MMMM YYYY'),
          date_supply: date_supply.format('DD MMMM YYYY'),
          comment,
        };

        if (action === 'update') {
          dataToSave.id = this.id;
        }

        saveInvoice(dataToSave).then(() => (
          this.setState({
            submitted: true,
            isSaving: false,
          })
        ), saveErr => (
          this.setState({
            isSaving: false,
            saveError: saveErr.message,
          })
        ));
      }
    });
  }

  render() {
    const { state, props } = this;
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = props.form;

    const invoiceNumberError = isFieldTouched('invoiceNumber') && getFieldError('invoiceNumber');
    const invoiceDateError = isFieldTouched('invoiceDate') && getFieldError('invoiceDate');
    const supplyDateError = isFieldTouched('supplyDate') && getFieldError('supplyDate');

    return (
      <div style={{
        border: '1px solid #ECECED',
        background: '#fff',
        paddingBottom: '.5em',
        marginTop: '2em',
      }}
      >
        {state.submitted && <Redirect push to="/" />}

        <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark>
          <div style={{
            margin: '1.4em',
            border: '1px solid #ECECED',
            paddingBottom: '1.8em',
          }}
          >
            <Row>
              <Col xs={24} md={8}>
                <FormItem
                  label="Number"
                  validateStatus={invoiceNumberError ? 'error' : ''}
                  help={invoiceNumberError || ''}
                  style={{ width: '100%', padding: '1em' }}
                  wrapperCol={{ span: 24 }}
                >
                  {getFieldDecorator('invoiceNumber', {
                    initialValue: this.invoiceData && this.invoiceData.number,
                    rules: [{
                      required: true,
                      pattern: /^[0-9]+$/,
                      message: 'Please input invoice number!',
                    }],
                  })(
                    <Input
                      placeholder="Invoice number"
                    />,
                  )}
                </FormItem>
              </Col>

              <Col xs={12} md={8}>
                <FormItem
                  label="Invoice Date"
                  validateStatus={invoiceDateError ? 'error' : ''}
                  help={invoiceDateError || ''}
                  style={{ width: '100%', padding: '1em' }}
                  wrapperCol={{ span: 24 }}
                >
                  {getFieldDecorator('invoiceDate', {
                    initialValue: this.invoiceData && moment(this.invoiceData.date_created, 'DD MMMM YYYY'),
                    rules: [{
                      type: 'object',
                      required: true,
                      message: 'Please specify date!',
                    }],
                  })(
                    <DatePicker style={{ width: '100%' }} />,
                  )}
                </FormItem>
              </Col>

              <Col xs={12} md={8}>
                <FormItem
                  label="Supply Date"
                  validateStatus={supplyDateError ? 'error' : ''}
                  help={supplyDateError || ''}
                  style={{ width: '100%', padding: '1em' }}
                  wrapperCol={{ span: 24 }}
                >
                  {getFieldDecorator('supplyDate', {
                    initialValue: this.invoiceData && moment(this.invoiceData.date_supply, 'DD MMMM YYYY'),
                    rules: [{
                      type: 'object',
                      required: true,
                      message: 'Please specify date!',
                    }],
                  })(
                    <DatePicker style={{ width: '100%' }} />,
                  )}
                </FormItem>
              </Col>
            </Row>

            <FormItem
              label="Comment"
              style={{ width: '100%', padding: '1em' }}
              wrapperCol={{ span: 24 }}
            >
              {getFieldDecorator('comment', {
                initialValue: this.invoiceData && this.invoiceData.comment,
              })(
                <Input.TextArea rows="2" />,
              )}
            </FormItem>
          </div>

          <Row
            type="flex"
            justify="end"
            style={{
              paddingBottom: '.8em',
              paddingRight: '.4em',
            }}
          >
            {state.saveError && (
              <Alert
                message={state.saveError}
                type="error"
                style={{
                  marginRight: '1.4em',
                  marginLeft: '1.4em',
                  flexGrow: '1',
                }}
              />
            )}
            {state.isSaving && <Spinner />}
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                disabled={hasErrors(getFieldsError()) || state.isSaving}
              >
                Save
              </Button>
            </FormItem>
          </Row>
        </Form>
      </div>
    );
  }
}

CreatorForm.propTypes = {
  invoices: PropTypes.arrayOf(
    CustomPropTypes.invoice,
  ).isRequired,
  action: CustomPropTypes.action.isRequired,
  saveInvoice: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.any.isRequired,
};

const WrappedCreatorForm = Form.create()(CreatorForm);

export default WrappedCreatorForm;
