import * as React from 'react';
import * as PropTypes from 'prop-types';
import util from '../_util';

import '../_style/index.less';
import './index.less';

export interface PopupProps {
  show: boolean;
  children: any;
  onClose: () => void;
  preventDefault: boolean;
}

const Popup = (props: PopupProps) => {
  const { show, children, onClose, preventDefault } = props;
  const [isShow, setIsShow] = React.useState('false');

  React.useEffect(() => {
    if (show === true && isShow === 'false') {
      setIsShow('true');
      if (preventDefault === true) {
        document.removeEventListener('touchmove', util.preventDefault);
      }
    } else if (show === false && isShow === 'true') {
      setIsShow('ready');
      setTimeout(function() {
        setIsShow('false');
        if (preventDefault === true) {
          document.addEventListener('touchmove', util.preventDefault, { passive: false });
        }
      }, util.global.speed + 200);
    }
  });

  return (
    <div className={`Popup Popup__state_${isShow}`}>
      <div className="Popup__mask" onClick={onClose} />
      {children}
    </div>
  );
};

Popup.defaultProps = {
  preventDefault: false,
};

Popup.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func,
  preventDefault: PropTypes.bool,
};

export default React.memo(Popup);
