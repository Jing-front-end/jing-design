import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface NoticeBarProps {
  close?: boolean;
  single?: boolean;
  marquee?: boolean;
  speed?: number;
  showMore?: boolean;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const rightContent = ({ close, showMore }: NoticeBarProps) => {
  if (close && showMore) {
    return new Error('close 与 showMore 不能同时存在');
  }
  if (close && !showMore) {
    return (
      <div className="jqb-noticebar__icon">
        <Icon kind="close" size="small" />
      </div>
    );
  }
  if (showMore && !close) {
    return (
      <div className="jqb-noticebar__more">
        <span className="jqb-noticebar__more-text">查看更多</span>
        <div className="jqb-noticebar__more-icon">
          <Icon kind="arrow" size="small" />
        </div>
      </div>
    );
  }
};

const NoticeBar = (props: NoticeBarProps) => {
  const { single, marquee, speed, className, children } = props;

  // console.log('props', props)

  const classes = classnames(
    'jqb-noticebar',
    { 'jqb-noticebar__single': single },
    { 'jqb-noticebar__marquee': marquee },
    className,
  );

  return (
    <div className={classes}>
      <div className="jqb-noticebar__content">
        <div className="jqb-noticebar__content-icon">
          <Icon kind="eye-on" size="small" />
        </div>
        <div className="jqb-noticebar__content-text">
          <div className="jqb-noticebar__content-inner" style={{ animationDuration: `${speed}s` }}>
            {children}
          </div>
        </div>
      </div>
      {rightContent(props)}
    </div>
  );
};

NoticeBar.defaultProps = {
  close: false,
  marquee: false,
  speed: 100,
  showMore: false,
};

NoticeBar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  marquee: PropTypes.bool,
  speed: PropTypes.number,
  showMore: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(NoticeBar);
