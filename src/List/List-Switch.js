/* eslint-disable */
import React, { Component } from 'react';
import { util, Icon } from '../';
import '../_style/index.less';
import './index.less';

export default class ListSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = (obj => {
      for (let key in obj) {
        obj[key] = this.props[key] !== undefined ? this.props[key] : obj[key];
      }
      return obj;
    })({
      value: false,
    });
    util.extend(false, this.state, {
      active: false,
      touchX: 0,
      touchX_: 0,
      touchY: 0,
      touchY_: 0,
      state: null,
      _state: null,
      sensitive: 80,
      lock: false,
    });
  }
  componentWillReceiveProps(nextProps) {
    let tempObject = {};
    for (let key in this.state) {
      if (nextProps[key] !== undefined && this.state[key] !== nextProps[key]) {
        tempObject[key] = nextProps[key];
      }
    }
    this.setState(tempObject);
  }
  componentWillUnmount() {
    //重写组件的setState方法，直接返回空，解决切页面时组件被清除后，setTimeout触发setState时错误
    this.setState = (state, callback) => {
      return;
    };
  }
  setProps() {
    let props = {
      btnState: '',
    };
    if (this.state.value) {
      props.btnState = util.addClass(props.btnState, 'ListSwitch__content-btn_state_on');
    }
    if (this.state.active) {
      props.btnState = util.addClass(props.btnState, 'ListSwitch__content-btn_state_active');
    }
    return props;
  }
  onSwitch() {
    typeof this.props.onSwitch === 'function' && this.props.onSwitch(!this.state.value);
  }
  onTouchStart(e) {
    console.log('start');
    // document.addEventListener('touchmove', e.preventDefault(), { passive: false });
    this.setState({
      active: true,
      touchX: e.changedTouches[0].pageX,
      touchY: e.changedTouches[0].pageY,
    });
  }
  onTouchEnd(e) {
    console.log('end');
    // document.removeEventListener('touchmove', e.preventDefault(), { passive: false });
    this.setState({
      active: false,
    });
  }
  onTouchMove(e) {
    //定义坐标

    $this.data({
      x: $.touchX - $this.data('_x'),
      y: $.touchY - $this.data('_y'),
    });
    //移动超出范围
    if (
      Math.abs($this.data('y')) > opt.touchSensitive ||
      Math.abs($this.data('x')) > opt.touchSensitive
    ) {
      $this.removeClass('am-active');
      $this.data({ state: $this.hasClass('am-on') });
      $this.off($.touchend + '.btnswitch').off($.touchmove + '.btnswitch');
      //有改变开关状态
      if ($this.data('_state') !== $this.data('state')) {
        opt.onSwitch($this.attr('id') || undefined, $this.hasClass('am-on'));
      }
      //启用页面滚动条
      $.scrollY[0] ? $.scrollY[0].enable() : false;
    }
    //移动在范围内
    else {
      //切换为关闭
      if ($this.hasClass('am-on') && $this.data('x') < (opt.touchSensitive / 4) * -1) {
        $this.removeClass('am-on');
        $this.data('state', $this.hasClass('am-on'));
        $this.off($.touchend + '.btnswitch').on($.touchend + '.btnswitch', function() {
          methods._btnTouchMoveEnd($this);
        });
      }
      //切换到开启
      else if (!$this.hasClass('am-on') && $this.data('x') > opt.touchSensitive / 4) {
        $this.addClass('am-on');
        $this.data('state', $this.hasClass('am-on'));
        $this.off($.touchend + '.btnswitch').on($.touchend + '.btnswitch', function() {
          methods._btnTouchMoveEnd($this);
        });
      }
    }
    //解锁
    lock = false;
  }
  onTouchMoveEnd() {
    this.setState({
      active: false,
    });
    this.onSwitch();
  }
  render() {
    let tempJSX = (
      <div className="ListSwitch">
        <span className="ListSwitch__icon">
          <Icon kind={this.props.icon} />
        </span>
        <span
          className={
            this.props.icon
              ? 'ListSwitch__content ListSwitch__content_state_hasicon'
              : 'ListSwitch__content'
          }
        >
          <span className="ListSwitch__content-title">{this.props.title}</span>
          <span
            className={'ListSwitch__content-btn ' + this.setProps().btnState}
            onClick={() => {
              this.onSwitch();
            }}
            onTouchStart={e => {
              this.onTouchStart(e);
            }}
            // onTouchMove={(e)=>{this.onTouchMove(e)}}
            onTouchEnd={e => {
              this.onTouchEnd(e);
            }}
          >
            <em />
          </span>
        </span>
      </div>
    );
    return tempJSX;
  }
}
