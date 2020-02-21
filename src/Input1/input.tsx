import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import { tuple } from '../_util/type';
import Group from './group';
import Prefix from './prefix';
import { Icon } from 'src';

export const InputSizes = tuple('small', 'default', 'large');

/**
 * Input 输入框组件
 * @param {className} string 输入框组件样式名
 * @param {name} string input的唯一标识，有传入点击title会聚焦
 * @param {type} string input的类型
 * @param {value} string input的值
 * @param {icon} string  Icon
 * @param {placeholder} string input的占位符
 * @param {disabled} bool 是否能点击
 * @param {error} bool 错误提示
 * @param {minLength} number 最少长度
 * @param {maxLength} number 最长长度
 * @param {errorword} string 正则不匹配时显示的错误文案
 * @param {clear} boolean 清除
 * @param {onChange} function input中的value改变时触发
 * @param {onFocus} function 获取焦点时的事件
 * @param {onBlur} function 失去焦点时的事件
 * @param {prefix} object 带前缀图标的 input
 * @param {suffix} object 带后缀图标的 input
 * @param {style} object input 的样式
 * @param {size} object input 的尺寸
 **/
export interface InputProps {
  className?: string;
  name?: string;
  type?: string;
  value?: string;
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  minLength?: number;
  maxLength?: number;
  errorword?: string;
  clear?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  style?: React.CSSProperties;
  size?: (typeof InputSizes)[number];
}

class Input extends React.Component<InputProps, {}> {
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
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    errorword: PropTypes.string,
    clear: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    style: PropTypes.object,
    size: PropTypes.oneOf(InputSizes),
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
