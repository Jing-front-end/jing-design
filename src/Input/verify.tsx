import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { InputProps } from './input';
// import Icon from '../Icon';
import Clear from './clear';

// function setTimer(timer: number) {
//     setTimeout(() => {
//         timer--
//     }, 1000)
// }

const Verify = (props: InputProps) => {
  const [text, setText] = useState('获取验证码');

  useEffect(() => {
    setText(`重新获取${timer}`);
  }, [text]);
  const timer = 60;
  // let text = '获取验证码';
  function setTimer(time: number) {
    setTimeout(() => {
      time--;
    }, 1000);
  }

  const verifyRender = () => {
    return (
      <div
        onClick={() => {
          setTimer(timer);
          // text = `重新获取(${timer})`
        }}
      >
        {text}
      </div>
    );
  };

  return <Clear {...props} className="jqb-input__group-verify" render={verifyRender()} />;
};
export default React.memo(Verify);
