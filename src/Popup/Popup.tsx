import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { util } from '..';

import '../_style/index.less';
import './index.less';

export interface PopupProps {
  show: boolean;
  children: any;
  onClose: () => void;
}

function maskClicked(onClose: () => void) {
  if (typeof onClose === 'function') {
    onClose();
  }
}

const Popup = (props: PopupProps) => {
  const { show, children, onClose } = props;

  return (
    <div className={`Popup Popup__state_${show}`}>
      <div
        className="Popup__mask"
        onClick={() => {
          maskClicked(onClose);
        }}
      />
      {children}
    </div>
  );
};

Popup.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func,
};

export default React.memo(Popup);
