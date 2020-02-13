import React, { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Password from './password';
import PrefixInput from './prefixInput';
import Group, { GroupProps } from './group';
import { InputProps } from './input';
import Icon from '../Icon';

interface TextareaProps extends InputProps {}

function useInputValue(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(e => {
    setValue(e.currentTarget.value);
  }, []);

  // tslint:disable-next-line:no-shadowed-variable
  const updateValue = function(value: any) {
    setValue(value);
  };

  return { value, onChange, updateValue };
}

function Textarea(props: TextareaProps) {
  const {
    placeholder,
    error,
    value = '',
    className,
    style,
    onChange,
    onEnter,
    onFocus,
    onBlur,
    disabled,
    maxLength,
    minLength,
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
  }, [isError]);

  return (
    <textarea
      value={oInput.value}
      style={style}
      className={classnames('jqb-input jqb-textarea', className, { 'jqb-input-error': isError })}
      disabled={isBan}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      onChange={e => {
        oInput.onChange(e);
        // tslint:disable-next-line:no-unused-expression
        onChange && onChange(e.target.value, e);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={e => {
        if (e.keyCode === 13 && onEnter) {
          onEnter(e.target.value, e);
        }
      }}
    />
  );
}

Textarea.defaultProps = {
  className: '',
};

Textarea.propTypes = {
  className: PropTypes.string,
};

export default Textarea;
