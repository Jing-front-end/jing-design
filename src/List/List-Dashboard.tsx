import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import numeral from './numeral';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const iconKind = tuple('cash', 'diamonds', 'gold');

export interface DashboardProps {
  icon: string;
  href?: string;
  showEye?: boolean;
  leftTitle: string;
  rightTitle: string;
  leftValue: number;
  rightValue: number;
  onClick?: () => {};
}

const Dashboard = (props: DashboardProps) => {
  const { icon, href, leftTitle, rightTitle, leftValue, rightValue, onClick } = props;

  const rbClasses = classNames('ListDashboard__content-rb', {
    [`am-color-orange`]: rightValue > 0,
    [`am-color-green`]: rightValue < 0,
    [`am-color-black2`]: rightValue === 0,
  });

  let tempJSX;
  const tempJSXInner = (
    <div>
      <span className="ListDashboard__icon">
        <Icon icon={icon} />
      </span>
      <span className="ListDashboard__content">
        <span className="ListDashboard__content-lt">{leftTitle}</span>
        <span className="ListDashboard__content-rt">{rightTitle}</span>
        <span className="ListDashboard__content-lb am-color-black2">
          {leftValue === 0 ? '暂无资产' : numeral(leftValue).format('0,0.00')}
          {leftValue !== 0 && ' 元'}
        </span>
        <span className={rbClasses}>
          {rightValue === 0 ? '暂无收益' : numeral(rightValue).format('0,0.00')}
          {rightValue !== 0 && ' 元'}
        </span>
      </span>
    </div>
  );
  if (href || onClick) {
    tempJSX = (
      <a className="ListDashboard ListDashboard__type_link" to={href} onClick={onClick}>
        {tempJSXInner}
      </a>
    );
  } else {
    tempJSX = <div className="ListDashboard">{tempJSXInner}</div>;
  }
  return tempJSX;
};

Dashboard.propTypes = {
  icon: PropTypes.oneOf(iconKind),
  href: PropTypes.string,
  showEye: PropTypes.bool,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  leftValue: PropTypes.number,
  rightValue: PropTypes.number,
  onClick: PropTypes.func,
};

export default React.memo(Dashboard);
