import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import RegInput from './reg';
import { InputProps } from './input';
import Prefix from './prefix';

export interface PhoneProps extends InputProps {
  value?: any;
  icon?: string;
  className?: string;
  reg?: RegExp | any;
}

const filterValue = (val: string) => {
  const _reg = /^[0-9]*$/;
  let _val = '';
  if (_reg.test(val)) {
    _val = val;
  } else {
    _val = val.replace(/[^\d]/g, '');
  }
  return _val;
};

const Phone = (props: PhoneProps) => {
  const { value, icon, className, reg } = props;

  const { _value, setValue } = useState(value);

  useEffect(() => {
    setValue(filterValue(value));
  }, [value]);

  return (
    <Prefix icon={icon} className={className}>
      <RegInput {...props} type="text" reg={reg || /^[1]([3-9])[0-9]{9}$/} value={_value} />
    </Prefix>
  );
};

export default Phone;
