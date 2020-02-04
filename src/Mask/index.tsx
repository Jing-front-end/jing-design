import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.less';

export interface MaskProps {
  className?: string;
  transparent?: boolean;
  style?: object;
  onClick?: () => void;
}

function handleClick(onClick: () => void) {
  if (typeof onClick === 'function') {
    // e.preventDefault();
    onClick();
  }
}
/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
const Mask = (props: MaskProps, {}) => {
  const { className, transparent, style, onClick, ...others } = props;

  const classes = classnames(
    {
      'jqb-mask': !transparent,
      'jqb-mask_transparent': transparent,
    },
    className,
  );

  return <div className={classes} style={style} {...others} onClick={onClick} />;
};

Mask.defaultProps = {
  transparent: false,
};

Mask.propTypes = {
  className: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default React.memo(Mask);
