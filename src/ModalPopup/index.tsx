import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Transition, { ENTERED, ENTERING, EXITING } from 'react-transition-group/Transition';

import Mask from '../Mask/index';
import { Portal } from 'react-overlays';

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
  container: any;
}

function handleSubmit(onClose: () => void) {
  if (typeof onClose === 'function') {
    onClose();
  }
}

const Popup = (props: PopupProps, {}) => {
  const { container, isShow, children, enableMask, className, onClose } = props;

  const classes = classnames(
    'jqb-popup',
    {
      'jqb-popup__toggle': isShow,
    },
    className,
  );

  return (
    <Portal container={container}>
      {isShow ? (
        <Mask
          transparent={enableMask}
          style={{ display: isShow ? 'block' : 'none' }}
          onClick={onClose}
        />
      ) : null}
      {isShow ? <div className={classes}>{children}</div> : null}
    </Portal>
  );
};

Popup.defaultProps = {
  isShow: false,
  enableMask: false,
  container: document.body,
};

Popup.propTypes = {
  isShow: PropTypes.bool,
  enableMask: PropTypes.bool,
  onClose: PropTypes.func,
};

export default React.memo(Popup);
