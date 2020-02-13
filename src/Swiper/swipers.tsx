import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Swipers from 'swiper';
import '../../node_modules/swiper/css/swiper.min.css';

import { tuple } from '../_util/type';

const dotsType = tuple('bullets', 'fraction', 'progressbar');

export interface SwiperProps {
  // class
  className?: string;
  // style
  style?: React.CSSProperties;
  // 是否自动播放
  autoplay?: boolean;
  // 指示点类型
  indicatorDotsType?: (typeof dotsType)[number];
  // 面板指示点
  indicatorDots?: boolean;
  // 指示点的颜色
  indicatorColor?: string;
  // 选中时的指示点的颜色
  indicatorActiveColor?: string;
  // 自动切换时间间隔
  interval?: number;
  // 滑动动画时长
  duration?: number;
  // 是否垂直
  vertical?: boolean;
  // 滚动条
  scrollbar?: boolean;
  // children
  children?: React.ReactNode;
  // 点击回调
  onChange?: () => void;
}

export interface SwiperItemProps {
  className?: string;
  style?: React.CSSProperties;
  itemId: string;
  children: React.ReactNode;
}

const SwiperItem = (props: SwiperItemProps) => {
  const { className, style, itemId, children } = props;

  const classes = classnames('swiper-slide', className);

  return (
    <div className={classes} style={style} item-id={itemId}>
      {children}
    </div>
  );
};

const SwiperPagination = (props: SwiperProps) => {
  const { indicatorDotsType, indicatorDots, indicatorActiveColor } = props;

  const spanClass = classnames('swiper-pagination-bullet', {
    'swiper-pagination-bullet-active': indicatorActiveColor,
  });

  const paginationClass = classnames('swiper-pagination', `swiper-pagination-${indicatorDotsType}`);

  return indicatorDots ? (
    <div className={paginationClass}>
      <span className={spanClass} />
    </div>
  ) : null;
};

const Swiper = (props: SwiperProps) => {
  const {
    className,
    style,
    autoplay,
    indicatorDots,
    indicatorColor,
    indicatorActiveColor,
    interval,
    duration,
    vertical,
    scrollbar,
    children,
    onChange,
  } = props;
  // swiper-container-initialized swiper-container-horizontal
  const classes = classnames('swiper-container', className, {
    'swiper-container-vertical': vertical,
    'swiper-container-horizontal': !vertical,
  });

  return (
    <div className={classes}>
      <div className="swiper-wrapper">{children}</div>
      {/* 如果需要分页 */}
      {SwiperPagination(props)}
      {/* 如果需要左右点击 */}
      {/* <div className="swiper-button-pre"></div>
      <div className="swiper-button-next"></div> */}
      {/* 如果需要滚动条 */}
      {scrollbar ? (
        <div className="swiper-scrollbar">
          <div className="swiper-scrollbar-drag" />
        </div>
      ) : null}
    </div>
  );
};

Swiper.defaultProps = {
  indicatorDotsType: 'bullets',
};

Swiper.propTypes = {
  indicatorDotsType: PropTypes.oneOf(dotsType),
};

export { SwiperItem, Swiper };
