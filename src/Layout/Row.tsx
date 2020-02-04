import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';

import '../_style/index.less';
import './index.less';

// const rowAs = tuple('div', 'span')

export interface RowProps {
  className?: string;
  children?: string;
}

const Row = (props: RowProps) => {
  const { className, children } = props;

  const classes = classNames('row', className);

  return <div className={classes}>{children}</div>;
};

Row.defaultProps = {};

Row.propTypes = {};

export default React.memo(Row);
