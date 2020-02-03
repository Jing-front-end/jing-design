import * as React from 'react';
// import * as PropTypes from 'prop-types';
import Input, { InputProps } from './input';
import Icon from '../Icon';

export interface PasswordProps extends InputProps {
  type?: string;
  placeholder?: string;
}

export interface PasswordState {
  visible: boolean;
}

class Password extends React.Component<PasswordProps, PasswordState> {
  input: HTMLInputElement;

  state: PasswordState = {
    visible: false,
  };

  getIcon() {
    const { type } = this.props;

    if (type === 'password') {
      return (
        <span className="jqb-input-suffix">
          <Icon kind="eye" />
        </span>
      );
    } else {
      return (
        <span className="jqb-input-suffix">
          <Icon kind="eye-on" />
        </span>
      );
    }
  }

  render() {
    const { type, placeholder } = this.props;
    return (
      <>
        <Input type={type} placeholder={placeholder} />
        {this.getIcon}
      </>
    );
  }
}

// const InputPassWord = (props: PassWordProps,) => {
//   const { placeholder } = props;
//   return (
//     <Input type="password" placeholder={placeholder} />
//   )
// }

export default Password;
