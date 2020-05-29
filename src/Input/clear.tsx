import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';
import Group from './group';
import Input from './input';
import { InputProps } from './input';

export interface ClearProps extends InputProps {
  render?: any;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
}

function useClearBtn(value: any) {
  const [status, setStatus] = useState(value);
  const changeStatus = (res: any) => {
    setStatus(res);
  };
  const updateStatus = (v: any) => {
    if (v === undefined || v.length === 0) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };
  return { status, changeStatus, updateStatus };
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

const Clear = (props: ClearProps) => {
  const {
    className,
    groupClassName,
    style,
    groupStyle,
    placeholder,
    type,
    maxLength,
    minLength,
    disabled,
    value,
    onChange,
    onFocus,
    onBlur,
    onEnter,
    onClear,
    render,
  } = props;

  const { status, changeStatus, updateStatus } = useClearBtn(false);
  const oInput = useInputValue(value);

  useEffect(() => {
    oInput.updateValue(value);
  }, [value]);

  return (
    <Group className={classnames(groupClassName)} style={groupStyle}>
      <Input
        className={classnames(className)}
        style={style}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        value={oInput.value}
        onChange={(res, e) => {
          updateStatus(res);
          oInput.onChange(e);
          // tslint:disable-next-line:no-unused-expression
          onChange && onChange(res, e);
        }}
        onFocus={e => {
          // tslint:disable-next-line:no-unused-expression
          onFocus && onFocus(e);
          updateStatus(value || oInput.value);
        }}
        onBlur={e => {
          changeStatus(false);
          // tslint:disable-next-line:no-unused-expression
          onBlur && onBlur(e);
        }}
        onEnter={onEnter}
      />
      <Icon
        className={classnames('clear-btn', { show: status })}
        kind="delete"
        size="mini"
        onClick={e => {
          oInput.updateValue('');
          // tslint:disable-next-line:no-unused-expression
          onChange && onChange('');
          // tslint:disable-next-line:no-unused-expression
          onClear && onClear(e);
        }}
      />
      {render}
    </Group>
  );
};

Clear.defaultProps = {
  className: '',
  groupClassName: '',
  disabled: false,
  error: false,
  style: null,
  groupStyle: null,
  onChange: function() {},
  onFocus: function() {},
  onBlur: function() {},
  onEnter: function() {},
  onClear: function() {},
};

Clear.propTypes = {
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  style: PropTypes.object,
  groupStyle: PropTypes.object,
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
  render: PropTypes.any,
};

export default React.memo(Clear);
