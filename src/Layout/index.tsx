import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import '../_style/index.less';
import './index.less';

export interface LayoutProps {
  className?: string;
  children?: string;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const classes = classNames('container');

  return <div className={classes}>{children}</div>;
};

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(Layout);
