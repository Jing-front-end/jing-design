import React, { TouchEvent, MouseEvent, useState } from 'react';
import * as PropTypes from 'prop-types';

import classnames from 'classnames';
import { util } from '..';

interface KeyProps {
  className?: string;
  text: string | number;
  type: string;
  onPress: (text: string | number, type: string) => void;
}

let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;

const Key = (props: KeyProps) => {
  const [isActive, setIsActive] = useState(false);

  const { className, text, type, onPress } = props;

  let deleteTimer: any = null;
  let deleteInterval: any = null;

  function onTouchStart(event: TouchEvent) {
    event.stopPropagation();
    startX = event.changedTouches[0].pageX;
    startY = event.changedTouches[0].pageY;
    setIsActive(true);
    if (type === 'delete') {
      valDelete();
      // deleteTimer = setTimeout(function () {
      //   // 长按删除
      //   // deleteInterval = setInterval(valDelete, 150);
      // }, 750)
    }
  }

  function valDelete() {
    // console.log('删除值')
  }

  function onTouchMove(event: TouchEvent) {
    if (type === 'delete') {
      clearTimeout(deleteTimer);
      clearInterval(deleteInterval);
    }
    const touch = event.touches[0];
    offsetX = Math.abs(touch.clientX - startX);
    offsetY = Math.abs(touch.clientY - startY);
    if (
      (offsetX > offsetY && offsetX > util.global.moveOffset) ||
      (offsetY > offsetX && offsetY > util.global.moveOffset)
    ) {
      setIsActive(false);
    }
  }

  function onTouchEnd() {
    if (type === 'delete') {
      // console.log('释放touch清除定时器')
      clearTimeout(deleteTimer);
      clearInterval(deleteInterval);
      deleteTimer = null;
      deleteInterval = null;
    } else {
      // onPress(text, type);
    }
    if (isActive) {
      if (type === 'emty') {
        return;
      }
      if (type !== 'delete') {
        onPress(text, type);
      }
      setIsActive(false);
    }
  }

  function onMouseDown(event: MouseEvent) {
    event.stopPropagation();
    startX = event.pageX;
    startY = event.pageY;
    setIsActive(true);
  }

  function onMouseMove(event: MouseEvent) {
    // const touch = event.touches[0];
    offsetX = Math.abs(event.pageX - startX);
    offsetY = Math.abs(event.pageY - startY);
    if (
      (offsetX > offsetY && offsetX > util.global.moveOffset) ||
      (offsetY > offsetX && offsetY > util.global.moveOffset)
    ) {
      setIsActive(false);
    }
  }

  function onMouseUp() {
    if (isActive) {
      if (type === 'emty') {
        return;
      }
      if (type !== 'delete') {
        onPress(text, type);
      }
      setIsActive(false);
    }
  }

  const spanClasses = classnames(`${className}-span`, {
    [`${className}-span-active`]: isActive && type !== 'emty',
  });

  return (
    <div
      className={className}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <span className={spanClasses}>{text}</span>
    </div>
  );
};

Key.defaultProps = {
  text: '',
  type: '',
};

Key.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onPress: PropTypes.func,
};

export default React.memo(Key);
