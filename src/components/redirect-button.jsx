import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';

class RedirectButton extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ redirect: true });
  }

  render() {
    const { state, onClick, props } = this;
    const {
      to,
      children,
      ...passingProps
    } = props;

    return (
      <Button type="primary" onClick={onClick} {...passingProps}>
        {state.redirect && <Redirect push to={to} />}
        {children}
      </Button>
    );
  }
}

export default RedirectButton;
