import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { InputProps } from './input';
import Icon from '../Icon';
import Clear from './clear';

const Password = (props: InputProps) => {
  const { onFocus, onBlur } = props;

  const [visible, setIsVisible] = useState(false);
  const IconKind = visible ? 'eye-on' : 'eye-off';
  const passwordRender = () => {
    return (
      <Icon
        className="eye-btn"
        kind={IconKind}
        size="small"
        onClick={() => {
          setIsVisible(!visible);
        }}
      />
    );
  };

  return (
    <Clear
      {...props}
      groupClassName="jqb-input__group-password"
      type={visible ? 'text' : 'password'}
      onFocus={e => {
        // tslint:disable-next-line:no-unused-expression
        onFocus && onFocus(e);
      }}
      onBlur={e => {
        // tslint:disable-next-line:no-unused-expression
        onBlur && onBlur(e);
      }}
      render={passwordRender()}
    />
  );
};
export default React.memo(Password);
