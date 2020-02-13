import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export interface BodyProps {
  className?: string;
  maxHigher?: boolean;
  children: React.ReactNode;
}

const Body = (props: BodyProps) => {
  const { className, children } = props;

  return <div className={classnames('jqb-modal__body', className)}>{children}</div>;
};

Body.defaultProps = {
  className: '',
};

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Body);
