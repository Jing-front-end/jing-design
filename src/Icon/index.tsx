import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import JingqbIcon from './Icon';

import '../_style/index.less';
import './index.less';

const iconAnimate = tuple('shake', 'rotate', 'scale');
const iconSize = tuple('normal', 'small', 'mini', 'auto');
const iconColor = tuple('blue', 'grey', 'white');
const iconKind = tuple(
  'arrow',
  'back',
  'card-id',
  'card-user',
  'circle',
  'clock',
  'close',
  'chain',
  'favorite',
  'eye-on',
  'eye-off',
  'delete',
  'heart',
  'heart-on',
  'locker',
  'keycode',
  'message',
  'more',
  'orientation',
  'play-white',
  'play',
  'phone',
  'qq',
  'setting',
  'share',
  'sort',
  'sort-up',
  'sort-down',
  'user',
  'wechat',
  'L-adduser',
  'L-addressbook',
  'L-briefcase',
  'L-callcenter',
  'L-jingshell',
  'L-paper',
  'L-productinfo',
  'L-setting',
);

export interface IconProps {
  animate?: string;
  color?: string;
  size?: string;
  kind: string;
  className?: string;
  onClick?: (e: any) => void;
}

const Icon = (props: IconProps) => {
  const { kind, size, color, animate, className, onClick } = props;

  const classes = classNames(
    'Icon',
    {
      [`Icon__${kind}`]: kind,
      [`Icon__size_${size}`]: size,
      [`Icon__color_grey`]: color === 'grey' || color === undefined,
      [`Icon__color_blue`]: color === 'blue',
      [`Icon__color_white`]: color === 'white',
      [`Icon__animate_shake`]: animate === 'shake',
      [`Icon__animate_rotate`]: animate === 'rotate',
      [`Icon__animate_scale`]: animate === 'scale',
    },
    className,
  );

  return (
    <i className={classes} onClick={onClick}>
      <JingqbIcon kind={kind} />
    </i>
  );
};

Icon.defaultProps = {
  size: 'normal',
};

Icon.propTypes = {
  animate: PropTypes.oneOf(iconAnimate),
  color: PropTypes.oneOf(iconColor),
  size: PropTypes.oneOf(iconSize),
  kind: PropTypes.oneOf(iconKind),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

export default React.memo(Icon);
