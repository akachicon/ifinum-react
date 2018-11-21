import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import RedirectButton from './redirect-button';
import style from '../style.css';
import * as CustomPropTypes from '../custom-prop-types';

const getKey = record => (record.id);
const TableContext = createContext();
const columns = [
  {
    title: 'Create',
    dataIndex: 'date_created',
    width: '15%',
  }, {
    title: 'No',
    dataIndex: 'number',
    width: '15%',
  }, {
    title: 'Supply',
    dataIndex: 'date_supply',
    width: '15%',
  }, {
    title: 'Comment',
    dataIndex: 'comment',
    width: '45%',
  }, {
    title: 'Actions',
    width: '10%',
    dataIndex: 'id',
    render: id => (
      <React.Fragment>
        <RedirectButton
          to={`/edit-invoice/${id}`}
          ghost
          className={style.actionButton}
        >
          Edit
        </RedirectButton>
        {
          <TableContext.Consumer>
            {(removeInvoice) => {
              // The Button supposed to be clicked only once so make it uncontrolled

              const onClick = (e) => {
                removeInvoice(id);

                const button = e.target;

                button.children[0].innerText = 'Removing...';
                button.style.padding = 0;
              };

              return (
                <Button
                  type="danger"
                  onClick={onClick}
                  ghost
                  className={style.actionButton}
                >
                  Remove
                </Button>
              );
            }}
          </TableContext.Consumer>
        }
      </React.Fragment>
    ),
  },
];

const InvoiceList = ({ invoices, removeInvoice }) => (
  <div className={style.elementUIWrapper}>
    Invoices
    <TableContext.Provider value={removeInvoice}>
      <Table dataSource={invoices} rowKey={getKey} columns={columns} pagination={false} />
    </TableContext.Provider>
  </div>
);

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(
    CustomPropTypes.invoice,
  ).isRequired,
  removeInvoice: PropTypes.func.isRequired,
};

export default InvoiceList;
