import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Input, { InputProps } from './input';

export interface RegProps extends InputProps {
  // 类型为正则
  reg?: RegExp | any;
  // value
  value?: string;
  // type
  type?: string;
  // class
  className?: string;
  // change事件
  onChange?: any;
}

const RegInput = (props: RegProps) => {
  const { value, className, reg, onChange } = props;

  const [_value, setValue] = useState(value);
  const [_isValid, setValid] = useState(true);

  useEffect(() => {
    setValue(value);
    setValid(reg.test(value));
  });

  return (
    <Input
      {...props}
      type={'text'}
      value={value}
      className={classnames({ 'jqb-input-error': !_isValid && _value }, className)}
      onChange={(res, e) => {
        setValue(res);
        onChange(res, _isValid, e);
      }}
    />
  );
};

RegInput.defaultProps = {
  reg: /[\s\S]*/,
};

RegInput.propTypes = {};

export default RegInput;
