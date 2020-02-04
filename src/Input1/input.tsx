import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import { tuple } from '../_util/type';
import Group from './group';
import Prefix from './prefix';
import { Icon } from 'src';

export const InputSizes = tuple('small', 'default', 'large');

export interface InputProps {
  // class 样式
  className?: string;
  // input的唯一标识，有传入点击title会聚焦
  name?: string;
  // input的类型
  type?: string;
  // input的值
  value?: string;
  // 前缀
  icon?: string;
  // input的占位符
  placeholder?: string;
  // disabled 是否能点击
  disabled?: boolean;
  // 错误
  error?: boolean;
  // 最少长度
  minLength?: number;
  // 最长长度
  maxLength?: number;
  // 正则不匹配时显示的错误文案
  errorword?: string;
  // 是否显示清除按钮
  clear?: boolean;
  // input中的value改变时触发
  // 不知道写何类型为好，待完善
  onChange?: any;
  // 获取焦点时的事件
  onFocus?: () => void;
  // 失去焦点时的事件
  onBlur?: () => void;
  // 键盘回车事件
  onEnter?: (value: any, event: any) => void;
  // 带前缀图标的 input
  prefix?: React.ReactNode | string;
  // 带后缀图标的 input
  suffix?: React.ReactNode | string;
  style?: React.CSSProperties;
  size?: (typeof InputSizes)[number];
}

class Input extends React.Component<InputProps, {}> {
  // static Password: typeof Password;

  static defaultProps = {
    type: 'text',
    disabled: false,
    clear: true,
  };

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    size: PropTypes.oneOf(InputSizes),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    allowClear: PropTypes.bool,
    clear: PropTypes.bool,
  };

  static Group: typeof Group;

  state = {
    isFocus: false,
    inputValue: false,
  };

  handleClearValue = () => {
    this.setState({
      inputValue: '',
    });
  };

  renderCloseIcon() {
    const { isFocus } = this.state;
    return (
      <span className="jqb-input__close" onClick={this.handleClearValue}>
        <Icon kind="delete" size="small" />
      </span>
    );
    // return (
    //   isFocus ? <Icon kind="delete" /> : null
    // )
  }

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState(
      {
        isFocus: false,
      },
      () => {
        // tslint:disable-next-line:no-unused-expression
        onBlur && onBlur();
      },
    );
  };

  handleFocus = () => {
    const { onFocus } = this.props;
    // this.renderCloseIcon()
    this.setState(
      {
        isFocus: true,
      },
      () => {
        // tslint:disable-next-line:no-unused-expression
        onFocus && onFocus();
      },
    );
  };

  render() {
    const { value, style, className, type, maxLength, minLength, onChange } = this.props;

    return (
      <>
        <input
          type={type}
          style={style}
          value={value}
          className={classnames('jqb-input', className)}
          maxLength={maxLength}
          minLength={minLength}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={e => {
            // tslint:disable-next-line:no-unused-expression
            onChange && onChange(e.target.value);
          }}
        />
        {this.renderCloseIcon()}
      </>
    );
  }
}

export default Input;
