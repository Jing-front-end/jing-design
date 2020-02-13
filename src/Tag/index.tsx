import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../_util/type';

import './index.less';

export interface TagProps {
  children: string;
  color?: string;
  size?: string;
}

const tagSize = tuple('normal', 'small');

const Tag = (props: TagProps, {}) => {
  const { children, color, size } = props;

  const _classSize = `tag-${size}`;
  const classes = classnames('tag', _classSize);

  return (
    <span className={classes} style={{ color: color, borderColor: color }}>
      {children}
    </span>
  );
};

Tag.defaultProps = {
  color: '#ddd',
  size: 'small',
};

Tag.propTypes = {
  size: PropTypes.oneOf(tagSize),
};

export default React.memo(Tag);
