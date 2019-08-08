import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import JingqbIcon from './Icon';

import '../_style/index.less';
import './index.less';

const iconAnimate = tuple('shake');
const iconSize = tuple('normal', 'small', 'mini', 'auto');
const iconColor = tuple('blue', 'grey', 'white');
const iconKind = tuple(
  'back',
  'circle',
  'clock',
  'close',
  'favorite',
  'heart',
  'heart-on',
  'more',
  'play',
  'setting',
  'share',
  'wechat',
);

export interface IconProps {
  animate?: string;
  color?: string;
  size?: string;
  kind: string;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { kind, size, color, animate } = props;

  let _size = '';
  if (size === 'normal' || size === undefined) {
    _size = '1.375rem';
  } else if (size === 'small') {
    _size = '1.03rem';
  } else if (size === 'mini') {
    _size = '0.68rem';
  } else if (size === 'auto') {
    _size = '100%';
  }

  const classes = classNames('Icon', {
    [`Icon__${kind}`]: kind,
    [`Icon__color_grey`]: color === 'grey' || color === undefined,
    [`Icon__color_blue`]: color === 'blue',
    [`Icon__color_white`]: color === 'white',
    [`Icon__animate_shake`]: animate === 'shake',
  });

  return (
    <i className={classes}>
      <JingqbIcon kind={kind} size={_size} />
    </i>
  );
};

Icon.propTypes = {
  animate: PropTypes.oneOf(iconAnimate),
  color: PropTypes.oneOf(iconColor),
  size: PropTypes.oneOf(iconSize),
  kind: PropTypes.oneOf(iconKind),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(Icon);
