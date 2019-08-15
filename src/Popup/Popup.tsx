import * as React from 'react';
import * as PropTypes from 'prop-types';
import util from '../_util';

import '../_style/index.less';
import './index.less';

export interface PopupProps {
  show: boolean;
  children: any;
  onClose: () => void;
}

const Popup = (props: PopupProps) => {
  const { show, children, onClose } = props;
  const [isShow, setIsShow] = React.useState('false');

  React.useEffect(() => {
    if (show === true && isShow === 'false') {
      setIsShow('true');
    }
  });

  function maskClicked() {
    if (typeof onClose === 'function') {
      setIsShow('ready');
      setTimeout(function() {
        onClose();
        setIsShow('false');
      }, util.global.speed + 200);
    }
  }

  return (
    <div className={`Popup Popup__state_${isShow}`}>
      <div
        className="Popup__mask"
        onClick={() => {
          maskClicked();
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
