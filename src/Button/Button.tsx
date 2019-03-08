import React, { Component } from 'react';
import Link from 'umi/link';
import { util } from '..';
import Group from './Button-group';

import '../_style/index.less';
import './index.less';

let touchX = 0;
let touchXPos = 0;
let touchY = 0;
let touchYPos = 0;

export interface ButtonProps {
  to: string;
  href: string;
  onClick: object;
  color: string;
  type: string;
  state: string;
  primary: boolean;
}

export interface ButtonState {
  active: boolean;
}

export default class Button extends Component<ButtonProps, ButtonState> {
  static Group: typeof Group;

  state = {
    active: false,
  };

  tempProps = {
    btnClass: '',
  };

  constructor(props: ButtonProps) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setProps() {
    const props = {
      btnClass: '',
    };
    const { color, type, state, primary } = this.props;
    const { active } = this.state;
    props.btnClass = color
      ? util.addClass(props.btnClass, `Button__color_${color}`)
      : (props.btnClass = util.addClass(props.btnClass, `Button__color_blue`));
    props.btnClass = type ? util.addClass(props.btnClass, `Button__type_${type}`) : props.btnClass;
    props.btnClass = state
      ? util.addClass(props.btnClass, `Button__state_${state}`)
      : props.btnClass;
    props.btnClass =
      primary === true ? util.addClass(props.btnClass, 'Button__type_primary') : props.btnClass;
    props.btnClass =
      active === true ? util.addClass(props.btnClass, 'Button__state_active') : props.btnClass;
    return props;
  }

  setDom() {
    let tempJXS;
    const { to, children, href } = this.props;

    if (to) {
      tempJXS = (
        <Link
          to={to}
          className={util.addClass('Button', this.tempProps.btnClass)}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick}
        >
          {children}
        </Link>
      );
    } else if (href) {
      tempJXS = (
        <a
          className={util.addClass('Button', this.tempProps.btnClass)}
          href={href}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick}
        >
          {children}
        </a>
      );
    } else {
      tempJXS = (
        <span
          className={util.addClass('Button', this.tempProps.btnClass)}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick}
        >
          {children}
        </span>
      );
    }
    return tempJXS;
  }

  handleTouchStart(e: React.TouchEvent) {
    touchX = e.changedTouches[0].pageX;
    touchY = e.changedTouches[0].pageY;
    this.setState({
      active: true,
    });
  }

  handleTouchMove(e: React.TouchEvent) {
    touchXPos = e.changedTouches[0].pageX;
    touchYPos = e.changedTouches[0].pageY;
    if (
      Math.abs(touchXPos - touchX) > util.global.moveOffset ||
      Math.abs(touchYPos - touchY) > util.global.moveOffset
    ) {
      this.setState({
        active: false,
      });
    }
  }

  handleTouchEnd() {
    this.setState({
      active: false,
    });
  }

  handleClick(e: React.MouseEvent) {
    const { onClick } = this.props;
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  render() {
    this.tempProps = this.setProps();
    return this.setDom();
  }
}
