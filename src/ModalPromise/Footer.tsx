import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export interface FooterProps {
  className?: string;
  style?: object;
  children: React.ReactNode;
}

const Footer = (props: FooterProps, {}) => {
  const { className, children } = props;

  return <div className={classnames('jqb-modal__footer', className)}>{children}</div>;
};

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Footer);
