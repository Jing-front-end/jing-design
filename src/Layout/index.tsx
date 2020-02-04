import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';

import '../_style/index.less';
import './index.less';

const inconAnimate = tuple('shake', 'rotate', 'scale');
const iconSize = tuple('normal', 'small', 'mini', 'auto');
const iconColor = tuple('blue', 'grey', 'white');

export interface IconProps {
  animate?: string;
  color?: string;
  size?: string;
  className?: string;
}

// const Icon = (props: IconProps) => {
//   const { kind, size, color, animate} = props;

//   const classes = classNames('Icon', {
//     [`Icon__${kind}`]: kind,
//     [`Icon__size_${size}`]: size,
//     [`Icon__color_grey`]: color === 'grey' || color === undefined,
//     [`Icon__color_blue`]: color === 'blue',
//     [`Icon__color_white`]: color === 'white',
//     [`Icon__animate_shake`]: animate === 'shake',
//     [`Icon__animate_rotate`]: animate === 'rotate',
//     [`Icon__animate_scale`]: animate === 'scale'
//   });

//   return (
//     <i className={classes}>
//       <J
//     </i>
//   )
// }
