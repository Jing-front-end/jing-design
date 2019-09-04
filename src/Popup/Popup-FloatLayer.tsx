import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface PopupFloatLayerProps {
  innerHTML: any;
  onClick: () => void;
}

function handleSubmit(onClick: () => void) {
  if (typeof onClick === 'function') {
    onClick();
  }
}

const PopupFloatLayer = (props: PopupFloatLayerProps) => {
  const { innerHTML, onClick } = props;

  return (
    <div
      onClick={() => {
        handleSubmit(onClick);
      }}
      className="Popup__window PopupFloatLayer"
    >
      {innerHTML}
    </div>
  );
};

PopupFloatLayer.propTypes = {
  innerHTML: PropTypes.any,
  onClick: PropTypes.func,
};

export default React.memo(PopupFloatLayer);
