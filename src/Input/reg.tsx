import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Input, { InputProps } from './input';

/**
 * Input 正则Input
 * @param {reg} RegExp 输入框的正则
 * @param {value} string 输入框的值
 * @param {type} string 输入框样式
 * @param {className} string 自定义class
 * @param {onChange} function  输入值后的回调
 **/
export interface RegProps extends InputProps {
  reg: RegExp;
  value: string;
  type?: string;
  className?: string;
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
      type="text"
      value={value}
      className={classnames({ 'jqb-input-error': !_isValid && _value }, className)}
      onChange={res => {
        setValue(res);
        onChange(res, _isValid);
      }}
    />
  );
};

RegInput.defaultProps = {
  reg: /[\s\S]*/,
};

RegInput.propTypes = {};

export default RegInput;
