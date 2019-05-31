import * as React from 'react';
import * as PropTypes from 'prop-types';
import { tuple } from '../_util/type';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const iconKind = tuple(
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
);

export interface CardSelectProps {
  icon: string;
  href: string;
  lt: string;
  lb: string;
  rc: string;
  online: boolean;
  onClick: () => void;
}

const CardSelect = (props: CardSelectProps) => {
  const { icon, lt, lb, rc, href, onClick, online } = props;

  const tempJSXInner = (
    <div>
      <span className="ListCardSelect__icon">
        <Icon icon={icon} />
      </span>
      <span className="ListCardSelect__content">
        <span className="ListCardSelect__content-lt">
          {lt}{' '}
          <span className="ListCardSelect__content-lt-desc">
            {online === true ? '在线支付' : online === false ? '线下汇款' : ''}
          </span>
        </span>
        <span className="ListCardSelect__content-lb">{lb}</span>
        <span className={`ListCardSelect__content-rc ${rc === '超出单笔限额' && 'am-color-red'}`}>
          {rc}
        </span>
      </span>
    </div>
  );

  let tempJSX;
  if (onClick || href) {
    tempJSX = (
      <a className="ListCardSelect ListCardSelect__type_link" href={href} onClick={onClick}>
        {tempJSXInner}
      </a>
    );
  } else {
    tempJSX = <div className="ListCardSelect">{tempJSXInner}</div>;
  }
  return tempJSX;
};

CardSelect.propTypes = {
  icon: PropTypes.oneOf(iconKind),
  href: PropTypes.string,
  lt: PropTypes.string,
  lb: PropTypes.string,
  rc: PropTypes.string,
  online: PropTypes.bool,
  onClick: PropTypes.func,
};

export default React.memo(CardSelect);
