import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import RedirectButton from './redirect-button';
import InvoiceList from './invoice-list';
import CreatorForm from './creator-form';
import style from '../style.css';
import * as CustomPropTypes from '../custom-prop-types';

const Section = ({ header, children }) => (
  <React.Fragment>
    <Divider
      orientation="left"
      className={style.header}
    >
      {header}
    </Divider>

    {children}
  </React.Fragment>
);

Section.propTypes = {
  header: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

Section.defaultProps = {
  children: '',
};

export const ListPage = ({ invoices, removeInvoice }) => (
  <Section header="Invoices">
    <div className={style.elementUIWrapper}>
      Actions
      <div>
        <RedirectButton to="/create-invoice" size="large">
          Add new
        </RedirectButton>
      </div>
    </div>

    <InvoiceList
      invoices={invoices}
      removeInvoice={removeInvoice}
    />
  </Section>
);

ListPage.propTypes = {
  invoices: PropTypes.arrayOf(
    CustomPropTypes.invoice,
  ).isRequired,
  removeInvoice: PropTypes.func.isRequired,
};

export const CreatorPage = ({ saveInvoice, invoices, action }) => (
  <Section header="Create invoice">
    <CreatorForm
      saveInvoice={saveInvoice}
      invoices={invoices}
      action={action}
    />
  </Section>
);

CreatorPage.propTypes = {
  saveInvoice: PropTypes.func.isRequired,
  invoices: PropTypes.arrayOf(
    CustomPropTypes.invoice,
  ).isRequired,
  action: CustomPropTypes.action.isRequired,
};
