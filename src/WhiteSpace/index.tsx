import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../_util/type';

import './index.less';

export interface WhiteSpaceProps {
  size?: string;
}

const whiteSpaceSize = tuple('xs', 'sm', 'md', 'lg', 'xl');

const WhiteSpace = (props: WhiteSpaceProps) => {
  const { size } = props;

  const _classSize = `jqb-whitespace-${size}`;
  const classes = classnames('jqb-whitespace', _classSize);

  return <div className={classes} />;
};

WhiteSpace.defaultProps = {
  size: 'md',
};

WhiteSpace.propTypes = {
  size: PropTypes.oneOf(whiteSpaceSize),
};

export default React.memo(WhiteSpace);
