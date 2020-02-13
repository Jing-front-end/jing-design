import React, { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'omit.js';

import { tuple } from '../_util/type';

import ClearableLabeledInput from './clearableLabeledInput';
import Group from './group';
import Textarea from './textarea';

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

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value == null) {
    return '';
  }
  return value;
}

export function resolveOnChange(
  target: HTMLInputElement | HTMLTextAreaElement,
  e:
    | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | React.MouseEvent<HTMLElement, MouseEvent>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
) {
  if (onChange) {
    let event = e;
    if (e.type === 'click') {
      event = Object.create(e);
      event.target = target;
      event.currentTarget = target;
      const originalInputValue = target.value;
      target.value = '';
      onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
      target.value = originalInputValue;
      return;
    }
    onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  }
}

export function getInputClassName(size?: (typeof InputSizes)[number], disabled?: boolean) {
  return classnames({
    [`jqb-input-sm`]: size === 'small',
    [`jqb-input-lg`]: size === 'large',
    [`jqb-input-disabled`]: disabled,
  });
}

class Input extends React.Component<InputProps, {}> {
  static Group: typeof Group;
  static Textarea: typeof Textarea;

  // static Password: typeof Password;

  static defaultProps = {
    type: 'text',
    disabled: false,
    clear: true,
    onChange: function() {},
    onFocus: function() {},
    onBlur: function() {},
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
  };

  input: HTMLInputElement;

  focus() {
    this.input.focus();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e.currentTarget.value);
  };

  handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.setState(
      {
        value: '',
      },
      () => {
        this.focus();
      },
    );
    resolveOnChange(this.input, e, this.props.onChange);
  };

  // handleBlur = (e) => {

  // }
  renderInput() {
    const { className, size, disabled } = this.props;
    const otherProps = omit(this.props, ['prefix', 'size', 'suffix', 'prefix']);
    return (
      <input
        {...otherProps}
        className={classnames(getInputClassName(size, disabled), className)}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    const { value } = this.props;

    return (
      <ClearableLabeledInput
        {...this.props}
        inputType="input"
        value={fixControlledValue(value)}
        element={this.renderInput()}
        handleReset={this.handleReset}
      />
    );
  }
}

export default Input;
