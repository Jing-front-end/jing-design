import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import util from '../../_util';

export interface BodyProps {
  className?: string;
  maxHigher?: boolean;
  children: React.ReactNode;
}

let fontSize = 12;
const cssFontSize = getComputedStyle(document.getElementsByTagName('html')[0]).fontSize;
if (cssFontSize !== null) {
  fontSize = parseInt(cssFontSize, 0);
}

const Body = (props: BodyProps, {}) => {
  const { className, maxHigher, children } = props;

  return (
    <div
      className={classnames('jqb-modal__body', className)}
      style={{ maxHeight: maxHigher ? util.global.winH * 0.8 - 6.75 * fontSize : 0 }}
    >
      {children}
    </div>
  );
};

Body.defaultProps = {
  className: '',
  maxHigher: true,
};

Body.propTypes = {
  className: PropTypes.string,
  maxHigher: PropTypes.bool,
  children: PropTypes.node,
};

export default React.memo(Body);
