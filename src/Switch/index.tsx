import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';

import classnames from 'classnames';
import './index.less';

/**
 * 生成随机不重复数
 * @param {className} string 自定义的class
 * @param {status} boolean 开关选中状态
 * @param {loading} boolean 是否为加载状态
 * @param {disabled} boolean 是否为禁用状态
 * @param {activeColor} string 打开时的背景色
 * @param {onChange} function 点击后的回调
 */
export interface SwitchProps {
  className?: string;
  status: boolean; // 开关状态
  loading?: boolean;
  disabled?: boolean;
  activeColor?: string;
  onChange: (e: any, status: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const { className, status, disabled, activeColor, onChange } = props;

  const [isActive, setIsAcvtive] = useState(false);
  const [isOn, setIsOn] = useState(status);
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    setIsOn(status);
  }, [status]);

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  const rootStyle = {
    borderColor: activeColor,
    backgroundColor: activeColor,
  };

  const emStyle = {
    borderColor: activeColor,
  };

  const classes = classnames(
    'Switch',
    {
      Switch_state_on: isOn,
      Switch_state_active: isActive && !disabled,
      Switch_state_disabled: disabled,
    },
    className,
  );

  function onTouchStart() {
    setIsAcvtive(true);
  }

  function onTouchEnd() {
    setIsAcvtive(false);
  }

  function onHandleClick(e: any) {
    if (isDisabled) {
      return;
    }
    setIsOn(!isOn);
    onChange(e, !isOn);
  }

  return (
    <span
      style={rootStyle}
      className={classes}
      onClick={e => onHandleClick(e)}
      onTouchStart={() => {
        onTouchStart();
      }}
      onTouchEnd={() => {
        onTouchEnd();
      }}
    >
      {isOn ? <em style={emStyle} /> : <em />}
    </span>
  );
};

Switch.defaultProps = {
  className: '',
  status: false,
  loading: false,
  disabled: false,
  activeColor: '#4bd764',
};

Switch.propTypes = {
  className: PropTypes.string,
  status: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  activeColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(Switch);
