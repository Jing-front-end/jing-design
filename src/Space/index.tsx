import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';

import '../_style/index.less';

const scaleDegree = tuple('1', '2', '3', '4', '5', '6');

export interface SpaceProps {
  scale?: string;
  className?: string;
}

const Space = (props: SpaceProps) => {
  const { scale, className } = props;

  const classes = classNames(className, {
    [`am-space-${scale}`]: scale,
  });

  return <div className={classes} />;
};

Space.defaultProps = {
  scale: '1',
};

Space.propTypes = {
  scale: PropTypes.oneOf(scaleDegree),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(Space);
