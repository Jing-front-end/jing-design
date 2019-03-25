import React, { TouchEvent, MouseEvent, useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { util } from '..';

import '../_style/index.less';
import './index.less';

let touchX = 0;
let touchXPos = 0;
let touchY = 0;
let touchYPos = 0;

const buttonColor = tuple('blue', 'orange', 'green', 'red', 'yellow');
const buttonType = tuple('small');
const buttonState = tuple('loading', 'disable', 'active');

export interface ButtonProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  type?: string;
  state?: string;
  primary?: boolean;
  className?: string;
  children?: any;
}

const Button = (props: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const { color, type, state, primary, className, children, href } = props;

  const classes = classNames('Button', className, {
    [`Button__color_${color}`]: color,
    [`Button__type_${type}`]: type,
    [`Button__state_${state}`]: state,
    ['Button__type_primary']: primary,
    ['Button__state_active']: isActive,
    ['Button__ua-pc']: util.isPC,
  });

  function handleTouchStart(e: TouchEvent) {
    touchX = e.changedTouches[0].pageX;
    touchY = e.changedTouches[0].pageY;
    setIsActive(true);
  }

  function handleMouseDown(e: MouseEvent) {
    touchX = e.pageX;
    touchY = e.pageY;
    setIsActive(true);
  }

  function handleTouchMove(e: TouchEvent) {
    touchXPos = e.changedTouches[0].pageX;
    touchYPos = e.changedTouches[0].pageY;
    if (
      Math.abs(touchXPos - touchX) > util.global.moveOffset ||
      Math.abs(touchYPos - touchY) > util.global.moveOffset
    ) {
      setIsActive(false);
    }
  }

  function handleMouseMove(e: MouseEvent) {
    touchXPos = e.pageX;
    touchYPos = e.pageY;
    if (
      Math.abs(touchXPos - touchX) > util.global.moveOffset ||
      Math.abs(touchYPos - touchY) > util.global.moveOffset
    ) {
      setIsActive(false);
    }
  }

  function handleTouchEnd() {
    setIsActive(false);
  }

  function handleMouseUp() {
    setIsActive(false);
  }

  function handleClick(e: MouseEvent) {
    const { onClick } = props;
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  let tempJXS;

  if (href) {
    tempJXS = (
      <a
        className={classes}
        href={href}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  } else {
    tempJXS = (
      <span
        className={classes}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        {children}
      </span>
    );
  }
  return tempJXS;
};

Button.defaultProps = {
  color: 'blue',
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(buttonColor),
  type: PropTypes.oneOf(buttonType),
  state: PropTypes.oneOf(buttonState),
  primary: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(Button);
