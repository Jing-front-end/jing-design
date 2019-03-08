import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';

import '../_style/index.less';
import './index.less';

const iconAnimate = tuple('shake');
const iconType = tuple('normal', 'feature');
const iconSize = tuple('normal', 'small', 'mini');
const iconKind = tuple(
  'user',
  'idType',
  'idCard',
  'phone',
  'card',
  'correct',
  'radio_state_on',
  'radio',
  'radio_state_disable',
  'radio_state_disable_on',
  'code',
  'notepad',
  'security',
  'edit',
  'lock',
  'help',
  'checkbox_state_on',
  'checkbox',
  'checkbox_state_disable',
  'checkbox_state_disable_on',
  'magezine',
  'briefcase',
  'guidepost',
  'paper',
  'cash',
  'notepad2',
  'diamonds',
  'coin',
  'waiting',
  'medal',
  'clothbag',
  'wallet',
  'userRight',
  'mail',
  'telephone',
  'phoneBack',
  'phoneRight',
  'code2',
  'idType2',
  'rmb',
  'house',
  'loop',
  'paper2',
  'coin2',
  'coupon',
  'friend',
  'coupon2',
  'radio-w',
  'home-on',
  'home',
  'menu',
  'history',
  'about',
  'filter',
  'money',
  'forward',
  'more',
  'dock_my_on',
  'dock_pro_on',
  'dock_home_on',
  'location',
  'gold',
  'security2',
  'camera',
  'right2',
  'arrow',
  'right',
  'dock_my',
  'dock_pro',
  'dock_home',
  'keyboard',
  'inputedit',
  'finger',
  'gesture',
  'password',
  'info-w',
  'info',
  'radio_type2_state_on',
  'word',
  'pdf',
  'license',
  'telephone-w',
  'callcenter',
  'slidedown-w',
  'delete',
  'close',
  'back',
  'help-w',
  'sound-w',
  'sound-w-on',
  'callcenter-w',
  'eye-w',
  'eye-w-on',
  'refresh-w',
  'delete-w',
  'close-w',
  'back-w',
  'mail-w',
  'security2-g',
  'logo-g',
  'callcenter-g',
  'delete-bw',
  'offline',
  'infoRed',
  'shell',
  'face',
  'orange',
  'excel',
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

export interface IconProps {
  animate?: string;
  hasColor?: boolean;
  type?: string;
  size?: string;
  icon?: string;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { animate, hasColor, type, size, icon, className } = props;

  const classes = classNames('Icon', className, {
    [`Icon__animate_${animate}`]: animate,
    [`Icon__color_${hasColor}`]: hasColor === false,
    [`Icon__type_${type}`]: type && type !== 'normal',
    [`Icon__size_${size}`]: size && size !== 'normal',
    [`Icon__icon_${icon}`]: icon,
  });

  // 图标type为feature或help时，需在图标窗口中放置空白png图占位
  const iconImg = (type === 'feature' || type === 'help') && (
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP//////ACH5BAEHAAAALAAAAAABAAEAAAICRAEAOw==" />
  );
  return <span className={classes}>{iconImg}</span>;
};

Icon.propTypes = {
  animate: PropTypes.oneOf(iconAnimate),
  hasColor: PropTypes.bool,
  type: PropTypes.oneOf(iconType),
  size: PropTypes.oneOf(iconSize),
  icon: PropTypes.oneOf(iconKind),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Icon;
