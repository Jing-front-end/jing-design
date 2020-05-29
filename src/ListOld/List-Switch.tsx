import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

// let touchX = 0;
// let touchY = 0;

export interface ListSwitchProps {
  icon?: string;
  title: string;
  desc: string;
  isTurnedOn: boolean;
  turn: (isTurnedOn: boolean) => void;
}

function clicked(turn: (isTurnedOn: boolean) => void, isTurnedOn: boolean) {
  if (typeof turn === 'function') {
    if (isTurnedOn === true) {
      turn(false);
    } else {
      turn(true);
    }
  }
}

const ListSwitch = (props: ListSwitchProps) => {
  const [isActive, setIsActive] = useState(false);

  const { icon, title, desc, isTurnedOn, turn } = props;

  const classes1 = classNames('ListSwitch__content', {
    [`ListSwitch__content_state_hasicon`]: icon !== undefined,
  });

  const classes2 = classNames('ListSwitch__btn', {
    [`ListSwitch__btn_state_on`]: isTurnedOn === true,
    [`ListSwitch__btn_state_active`]: isActive === true,
  });

  function onTouchStart() {
    // document.addEventListener('touchmove', e.preventDefault(), { passive: false });
    setIsActive(true);
    // touchX = e.changedTouches[0].pageX;
    // touchY = e.changedTouches[0].pageY;
  }

  function onTouchEnd() {
    // document.removeEventListener('touchmove', e.preventDefault(), { passive: false });
    setIsActive(false);
  }

  // function onTouchMove(e:TouchEvent) {
  //   //定义坐标
  //   $this.data({
  //     x: $.touchX - $this.data('_x'),
  //     y: $.touchY - $this.data('_y'),
  //   });
  //   //移动超出范围
  //   if (
  //     Math.abs($this.data('y')) > opt.touchSensitive ||
  //     Math.abs($this.data('x')) > opt.touchSensitive
  //   ) {
  //     $this.removeClass('am-active');
  //     $this.data({ state: $this.hasClass('am-on') });
  //     $this.off($.touchend + '.btnswitch').off($.touchmove + '.btnswitch');
  //     //有改变开关状态
  //     if ($this.data('_state') !== $this.data('state')) {
  //       opt.onSwitch($this.attr('id') || undefined, $this.hasClass('am-on'));
  //     }
  //     //启用页面滚动条
  //     $.scrollY[0] ? $.scrollY[0].enable() : false;
  //   }
  //   //移动在范围内
  //   else {
  //     //切换为关闭
  //     if ($this.hasClass('am-on') && $this.data('x') < (opt.touchSensitive / 4) * -1) {
  //       $this.removeClass('am-on');
  //       $this.data('state', $this.hasClass('am-on'));
  //       $this.off($.touchend + '.btnswitch').on($.touchend + '.btnswitch', function() {
  //         methods._btnTouchMoveEnd($this);
  //       });
  //     }
  //     //切换到开启
  //     else if (!$this.hasClass('am-on') && $this.data('x') > opt.touchSensitive / 4) {
  //       $this.addClass('am-on');
  //       $this.data('state', $this.hasClass('am-on'));
  //       $this.off($.touchend + '.btnswitch').on($.touchend + '.btnswitch', function() {
  //         methods._btnTouchMoveEnd($this);
  //       });
  //     }
  //   }
  //   //解锁
  //   lock = false;
  // }

  // function onTouchMoveEnd() {
  //   setIsActive(false);
  //   clicked(turn, isTurnedOn);
  // }

  return (
    <div className="ListSwitch">
      {icon !== undefined ? (
        <span className="ListSwitch__icon">
          <Icon kind={icon} />
        </span>
      ) : (
        ''
      )}
      <span className={classes1}>
        <span className="ListSwitch__content-title">{title}</span>
        {!!desc ? <span className="ListSwitch__content-desc">{desc}</span> : ''}
      </span>
      <span
        className={classes2}
        onClick={() => {
          clicked(turn, isTurnedOn);
        }}
        onTouchStart={() => {
          onTouchStart();
        }}
        // onTouchMove={(e)=>{this.onTouchMove(e)}}
        onTouchEnd={() => {
          onTouchEnd();
        }}
      >
        <em />
      </span>
    </div>
  );
};

ListSwitch.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  isTurnedOn: PropTypes.bool,
  turn: PropTypes.func,
};

export default React.memo(ListSwitch);
