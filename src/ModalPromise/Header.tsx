import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export interface HeaderProps {
  className?: string;
  children: React.ReactNode;
  cancel: () => void;
}

const Header = (props: HeaderProps, {}) => {
  const { className, children, cancel } = props;

  return (
    <div className={classnames('jqb-modal__header', className)}>
      <div className="title">{children}</div>
      <div className="close" onClick={cancel} />
    </div>
  );
};

Header.defaultProps = {
  className: '',
  cancel: () => {},
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  cancel: PropTypes.func,
};

export default React.memo(Header);
