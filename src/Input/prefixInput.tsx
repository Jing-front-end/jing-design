import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import RegInput from './reg';
import { InputProps } from './input';
import Prefix from './prefix';
import Icon from '../icon';

export interface PhoneProps extends InputProps {
  value?: string;
  icon?: string;
  className?: string;
  reg?: RegExp | any;
}

const filterValue = (val: any) => {
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
    <Prefix
      {...props}
      children={null}
      render={() => {
        return <Icon kind={icon} />;
      }}
    />
  );

  return (
    <Prefix icon={icon} className={className}>
      <RegInput {...props} type={'text'} reg={reg || /^[1]([3-9])[0-9]{9}$/} value={_value} />
    </Prefix>
  );
};

// class Phone extends React.Component<PhoneProps, PasswordState> {

//   static defaultProps = {
//     placeholder: '请输入您的密码',
//   }

//   input: HTMLInputElement;

//   state: PasswordState = {
//     visible: false,
//   }

//   getIcon() {
//     return <Icon kind="eye" />
//   }

//   render() {
//     const { value } = this.props;
//     return (
//       // <RegInput {...props} type={'text'} reg={/^[1]([3-9])[0-9]{9}$/} value={_value}
//     );
//   }
// }

// const InputPassWord = (props: PassWordProps,) => {
//   const { placeholder } = props;
//   return (
//     <Input type="password" placeholder={placeholder} />
//   )
// }

export default Phone;
