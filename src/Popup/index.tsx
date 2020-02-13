import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Mask from '../Mask/index';

import './index.less';

/**
 * @param type 不同类型
 *
 */
export interface PopupProps {
  children?: string;
  isShow?: boolean;
  enableMask?: boolean;
  className?: string;
  onClose?: () => void;
}

function handleSubmit(onClose: () => void) {
  if (typeof onClose === 'function') {
    onClose();
  }
}

const Popup = (props: PopupProps, {}) => {
  const { children, isShow, enableMask, className, onClose } = props;

  const classes = classnames(
    'jqb-popup',
    {
      'jqb-popup__toggle': isShow,
    },
    className,
  );

  return (
    <div>
      <Mask
        transparent={enableMask}
        style={{ display: isShow ? 'block' : 'none' }}
        onClick={onClose}
      />
      <div className={classes}>{children}</div>
    </div>
  );
};

Popup.defaultProps = {
  isShow: false,
  enableMask: false,
};

Popup.propTypes = {
  isShow: PropTypes.bool,
  enableMask: PropTypes.bool,
  onClose: PropTypes.func,
};

export default React.memo(Popup);
