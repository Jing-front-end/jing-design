import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface PopupAlertProps {
  title: string;
  btnSubmitText: string;
  onSubmit: () => void;
}

function handleSubmit(onSubmit: () => void) {
  if (typeof onSubmit === 'function') {
    onSubmit();
  }
}

const PopupAlert = (props: PopupAlertProps) => {
  const { title, btnSubmitText, onSubmit } = props;

  return (
    <div className="Popup__window PopupAlert">
      <h6 className="Popup__title">
        <span className="Popup__title-text">{title}</span>
      </h6>
      <a
        className="Popup__btn Popup__btn_type_submit"
        href="javascript:void(0)"
        onClick={() => {
          handleSubmit(onSubmit);
        }}
      >
        {btnSubmitText}
      </a>
    </div>
  );
};

PopupAlert.defaultProps = {
  btnSubmitText: '确定',
};

PopupAlert.propTypes = {
  title: PropTypes.string,
  btnSubmitText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default React.memo(PopupAlert);
