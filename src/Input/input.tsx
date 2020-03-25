import React, { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

// import Icon from '../icon';

import { tuple } from '../_util/type';
// import Group from './group';
// import Textarea from './Textarea';
// import Prefix from './prefix';
// import suffix from './suffix';
// import Phone from './phone';
// import Password from './password';
// import Search from './search';
// import Verify from './verify';
// import Clear from './clear';

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
 * @param {clearable} boolean 显示 清除图标
 * @param {onChange} function input中的value改变时触发
 * @param {onFocus} function 获取焦点时的事件
 * @param {onBlur} function 失去焦点时的事件
 * @param {prefix} object 带前缀图标的 input
 * @param {suffix} object 带后缀图标的 input
 * @param {style} object input 的样式
 * @param {size} object input 的尺寸
 * @param {children} any children 渲染内容
 * @param {onClear} function Clear 中点击 x 后的回调
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
  clearable?: boolean;
  onChange?: (value: string, e?: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onEnter?: (value: any, e: any) => void;
  onClear?: (e: any) => void;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  style?: React.CSSProperties;
  size?: typeof InputSizes[number];
  children?: any;
}

function useInputValue(initialValue: string | undefined) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(e => {
    setValue(e.currentTarget.value);
  }, []);

  const updateValue = function(v: any) {
    setValue(v);
  };

  return { value, onChange, updateValue };
}

const Input = (props: InputProps) => {
  const {
    type,
    style,
    value,
    className,
    disabled,
    placeholder,
    error,
    maxLength,
    minLength,
    onFocus,
    onBlur,
    onChange,
    onEnter,
  } = props;

  const oInput = useInputValue(value);

  const [isBan, setIsBan] = useState(disabled);

  const [isError, setIsError] = useState(error);

  useEffect(() => {
    oInput.updateValue(value);
  }, [value]);

  useEffect(() => {
    setIsBan(disabled);
  }, [disabled]);

  useEffect(() => {
    setIsError(error);
  }, [error]);

  return (
    <input
      type={type}
      style={style}
      value={oInput.value}
      className={classnames('jqb-input', className, { 'jqb-input__error': isError })}
      disabled={isBan}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={e => {
        oInput.onChange(e);
        // tslint:disable-next-line:no-unused-expression
        onChange && onChange(e.target.value, e);
      }}
      onKeyDown={e => {
        if (e.keyCode === 13 && onEnter) {
          onEnter(e.target.value, e);
        }
      }}
    />
  );
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: false,
  style: null,
  onChange: function() {},
  onFocus: function() {},
  onBlur: function() {},
  onEnter: function() {},
  onClear: function() {},
};

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  type: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onClear: PropTypes.func,
};

export default React.memo(Input);
