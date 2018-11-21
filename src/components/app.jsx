import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  writeRecord,
  readRecords,
  removeRecord,
  updateRecord,
} from '../api';
import { ListPage, CreatorPage } from './pages';
import style from '../style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.createInvoice = this.createInvoice.bind(this);
    this.updateInvoice = this.updateInvoice.bind(this);
    this.removeInvoice = this.removeInvoice.bind(this);
    this.state = {
      invoices: [],
    };
  }

  componentDidMount() {
    this.readInvoices();
  }

  readInvoices() {
    return readRecords().then((invoices) => {
      this.setState({ invoices });

      return Promise.resolve(invoices);
    });
  }

  createInvoice(invoice) {
    return writeRecord(invoice).then(() => (
      this.readInvoices()
    ));
  }

  updateInvoice(invoice) {
    return updateRecord(invoice).then(() => (
      this.readInvoices()
    ));
  }

  removeInvoice(invoiceId) {
    return removeRecord(invoiceId).then(() => (
      this.readInvoices()
    ));
  }

  render() {
    const { invoices } = this.state;
    const { createInvoice, removeInvoice, updateInvoice } = this;

    return (
      <Router>
        <div className={style.wrapper}>
          <h1>
            Invoice App
          </h1>

          <Route
            path="/"
            exact
            render={() => (
              <ListPage
                invoices={invoices}
                removeInvoice={removeInvoice}
              />
            )}
          />

          <Route
            path="/create-invoice"
            render={() => (
              <CreatorPage
                saveInvoice={createInvoice}
                action="create"
                invoices={invoices}
              />
            )}
          />

          <Route
            path="/edit-invoice"
            render={() => (
              <CreatorPage
                saveInvoice={updateInvoice}
                action="update"
                invoices={invoices}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
