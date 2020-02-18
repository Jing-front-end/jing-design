import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { util } from '..';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const typeKind = tuple('price', 'number', 'mobile', 'password', 'verifycode', 'text');
// 很多历史图标暂不修改了
const iconKind = tuple(
  'keycode',
  'user',
  'idType',
  'idCard',
  'phone',
  'card',
  'correct',
  'radio_state_on',
  'radio',
  'radio_state_disable',
  'radio_state_disable_on',
  'notepad',
  'security',
  'edit',
  'lock',
  'help',
  'checkbox_state_on',
  'checkbox',
  'checkbox_state_disable',
  'checkbox_state_disable_on',
  'magezine',
  'briefcase',
  'guidepost',
  'paper',
  'cash',
  'notepad2',
  'diamonds',
  'coin',
  'waiting',
  'medal',
  'clothbag',
  'wallet',
  'userRight',
  'mail',
  'telephone',
  'phoneBack',
  'phoneRight',
  'code2',
  'idType2',
  'rmb',
  'house',
  'loop',
  'paper2',
  'coin2',
  'coupon',
  'friend',
  'coupon2',
  'radio-w',
  'home-on',
  'home',
  'menu',
  'history',
  'about',
  'filter',
  'money',
  'forward',
  'more',
  'dock_my_on',
  'dock_pro_on',
  'dock_home_on',
  'location',
  'gold',
  'security2',
  'camera',
  'right2',
  'arrow',
  'right',
  'dock_my',
  'dock_pro',
  'dock_home',
  'keyboard',
  'inputedit',
  'finger',
  'gesture',
  'password',
  'info-w',
  'info',
  'radio_type2_state_on',
  'word',
  'pdf',
  'license',
  'telephone-w',
  'callcenter',
  'slidedown-w',
  'delete',
  'close',
  'back',
  'help-w',
  'sound-w',
  'sound-w-on',
  'callcenter-w',
  'eye-w',
  'eye-w-on',
  'refresh-w',
  'delete-w',
  'close-w',
  'back-w',
  'mail-w',
  'security2-g',
  'logo-g',
  'callcenter-g',
  'delete-bw',
  'offline',
  'infoRed',
  'shell',
  'face',
  'orange',
  'excel',
  'bank0308',
  'bank0105',
  'bank0301',
  'bank0102',
  'bank0104',
  'bank0401',
  'bank0310',
  'bank0302',
  'bank0103',
  'bank0309',
  'bank0305',
  'bank0306',
  'bank0100',
  'bank0303',
  'bank0307',
  'bank0410',
  'bank1005',
  'bank1006',
  'bank0304',
  'bank0450',
  'bank1418',
  'bank0317',
  'bank0403',
  'bank0508',
  'bank6311',
  'bank0408',
  'bank0424',
  'feature-type-1',
  'feature-type-2',
  'feature-type-3',
  'feature-type-4',
  'feature-type-5',
  'feature-type-6',
  'feature-type-7',
  'feature-type-8',
  'feature-type-9',
  'feature-type-10',
  'help-type-1',
  'help-type-2',
  'help-type-3',
  'help-type-4',
);

export interface ListInputProps {
  value: string;
  type: string;
  icon?: string;
  title?: string;
  isEyeOn?: boolean;
  length?: number;
  disabled?: boolean;
  setValue: (v: string) => void;
  onMessageSend?: () => void;
  minVal?: number;
  maxVal?: number;
}

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function eyeClicked(isEyeOn: any, setIsEyeOn: any) {
  if (isEyeOn === true) {
    setIsEyeOn(false);
  } else {
    setIsEyeOn(true);
  }
}

function clearClicked(setValue: any) {
  if (typeof setValue === 'function') {
    setValue('');
  }
}

function inputOnBlur(setIsFocus: any) {
  setTimeout(() => {
    setIsFocus(false);
  }, 250);
  // window.location.replace('#');//为了处理IOS12键盘收起后页面不回弹
}

function inputOnFocus(setIsFocus: any) {
  setIsFocus(true);
}

function bindValue(e: HTMLInputEvent, type: string, setValue: any, minVal: any, maxVal: any) {
  let val = '';
  // 格式化value
  if (type === 'price') {
    if (minVal) {
      if (Number(e.target.value) < minVal) {
        val = util.formatAmount(minVal.toString());
      } else {
        val = util.formatAmount(e.target.value);
      }
    }
    if (maxVal) {
      if (Number(e.target.value) > maxVal) {
        val = util.formatAmount(maxVal.toString());
      } else {
        val = util.formatAmount(e.target.value);
      }
    }
  } else if (type === 'number') {
    val = util.formatNumber(e.target.value);
  } else if (type === 'mobile') {
    val = util.formatNumber(e.target.value);
    val = val.substring(0, 11);
  } else {
    val = e.target.value;
  }
  if (typeof setValue === 'function') {
    setValue(val);
  }
}

function startCountDown(
  isSent: boolean,
  setIsSent: (bool: boolean) => void,
  setBtnText: (str: string) => void,
  onMessageSend: any,
) {
  const second = 60;
  if (isSent === false) {
    timeCountDown(second, setIsSent, setBtnText);
    setIsSent(true);
    if (typeof onMessageSend === 'function') {
      onMessageSend();
    }
  }
}

// function endCountDown() {
//   typeof(this.props.onEndCountDown) === 'function' && this.props.onEndCountDown();
// }

function timeCountDown(
  second: number,
  setIsSent: (bool: boolean) => void,
  setBtnText: (str: string) => void,
) {
  if (second > 1) {
    second--;
    setBtnText(second + '秒后重试');
    setTimeout(function() {
      timeCountDown(second, setIsSent, setBtnText);
    }, 1000);
  } else {
    setIsSent(false);
    setBtnText('获取验证码');
    // endCountDown();
  }
}

const ListInput = (props: ListInputProps) => {
  const {
    value,
    type,
    icon,
    title,
    length,
    disabled,
    setValue,
    onMessageSend,
    minVal,
    maxVal,
  } = props;

  const [isFocus, setIsFocus] = React.useState(false);
  const [isEyeOn, setIsEyeOn] = React.useState(props.isEyeOn || false);
  const [isSent, setIsSent] = React.useState(false);
  const [btnText, setBtnText] = React.useState('获取验证码');

  const classes = classNames('ListInput', {
    [`ListInput__type_verifycode`]: type === 'verifycode',
  });

  const eyeClasses = classNames('ListInput__content-eye', {
    [`ListInput__content-eye_state_on`]: isEyeOn === true,
  });

  const verifycodeClasses = classNames('ListInput__link-text', {
    [`am-color-black1`]: isSent === true,
    [`am-color-blue`]: isSent === false,
  });

  const iconClasses = classNames('ListInput__content', {
    [`ListInput__content_state_hasicon`]: icon !== undefined,
  });

  let isShowClear = false;
  if (value !== '' && isFocus === true) {
    isShowClear = true;
  } else {
    isShowClear = false;
  }

  let inputType = '';
  let placeholder = '';
  let eyeJSX;
  let linkJSX;

  if (type === 'mobile') {
    inputType = 'tel';
    placeholder = title ? title : '请输入11位手机号码';
  } else if (type === 'password') {
    inputType = isEyeOn === true ? 'text' : 'password';
    placeholder = title ? title : '请输入登录密码';
    eyeJSX = (
      <a
        onClick={() => {
          eyeClicked(isEyeOn, setIsEyeOn);
        }}
        className={eyeClasses}
      />
    );
  } else if (type === 'verifycode') {
    inputType = 'input';
    placeholder = title ? title : '请输入短信验证码';
    linkJSX = (
      <span className="ListInput__link">
        <a
          className={verifycodeClasses}
          onClick={() => {
            startCountDown(isSent, setIsSent, setBtnText, onMessageSend);
          }}
        >
          {btnText}
        </a>
      </span>
    );
  } else if (type === 'number') {
    inputType = 'text';
    placeholder = title ? title : '请输入数字';
  } else if (type === 'price') {
    inputType = 'text';
    placeholder = title ? title : '请输入金额';
  } else {
    inputType = 'text';
    placeholder = title ? title : '请输入';
  }

  return (
    <div className={classes}>
      {icon !== undefined ? (
        <span className="ListInput__icon">
          <Icon kind={icon} color="blue" />
        </span>
      ) : (
        ''
      )}
      <span className={iconClasses}>
        {eyeJSX}
        <a
          onClick={() => {
            clearClicked(setValue);
          }}
          className={'ListInput__content-clear' + ' ' + (isShowClear ? 'am-show' : 'am-hide')}
        />
        <input
          maxLength={length}
          disabled={disabled}
          value={value}
          onBlur={() => {
            inputOnBlur(setIsFocus);
          }}
          onFocus={() => {
            inputOnFocus(setIsFocus);
          }}
          onChange={e => {
            bindValue(e, type, setValue, minVal, maxVal);
          }}
          className="ListInput__content-input"
          type={inputType}
          placeholder={placeholder}
        />
      </span>
      {linkJSX}
    </div>
  );
};

ListInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(typeKind),
  icon: PropTypes.oneOf(iconKind),
  title: PropTypes.string,
  isEyeOn: PropTypes.bool,
  length: PropTypes.number,
  disabled: PropTypes.bool,
  setValue: PropTypes.func,
  onMessageSend: PropTypes.func,
  minVal: PropTypes.number,
  maxVal: PropTypes.number,
};

export default React.memo(ListInput);
