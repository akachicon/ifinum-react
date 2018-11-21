import uuid from 'uuid/v4';
import db from './db.json';

const DELAY_TIME = 200;

const delay = time => (
  new Promise(resolve => (
    setTimeout(resolve, time)
  ))
);

const delayWrapper = (f, time = DELAY_TIME) => (
  (...args) => (
    delay(time).then(() => f(...args))
  )
);

const exports = {};
const api = {
  readRecords() {
    return JSON.parse(JSON.stringify(db.invoices));
  },

  writeRecord(record) {
    const forbidden = db.invoices.some(entry => (
      // eslint-disable-next-line eqeqeq
      record.number === entry.number
    ));

    if (forbidden) {
      throw new Error('Provided number already exists!');
    }

    // Babel minify plugin did not support following code at the moment of the development.
    // To solve specify versions of a browser w/o object rest/spread support.

    db.invoices.push({
      ...record,
      id: uuid(),
    });
  },

  updateRecord(record) {
    const forbidden = db.invoices.some(entry => (
      record.number === entry.number
      && record.id !== entry.id
    ));

    if (forbidden) {
      throw new Error('Provided number already exists!');
    }

    db.invoices.forEach((invoice, idx) => {
      if (invoice.id === record.id) {
        db.invoices[idx] = {
          ...invoice,
          ...record,
        };
      }
    });
  },

  removeRecord(recordId) {
    db.invoices = db.invoices.filter(invoice => (
      invoice.id !== recordId
    ));
  },
};

Object.keys(api).forEach((expKey) => {
  exports[expKey] = delayWrapper(api[expKey]);
});

export const {
  readRecords,
  writeRecord,
  updateRecord,
  removeRecord,
} = exports;
