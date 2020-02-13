import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface PopupConfirmProps {
  title: string;
  btnSubmitText: string;
  btnCancelText: string;
  onSubmit: () => void;
  onCancel: () => void;
}

function handleSubmit(onSubmit: () => void) {
  if (typeof onSubmit === 'function') {
    onSubmit();
  }
}

function handleCancel(onCancel: () => void) {
  if (typeof onCancel === 'function') {
    onCancel();
  }
}

const PopupConfirm = (props: PopupConfirmProps) => {
  const { title, btnSubmitText, btnCancelText, onSubmit, onCancel } = props;

  return (
    <div className="Popup__window PopupConfirm">
      <h6 className="Popup__title">
        <span className="Popup__title-text">{title}</span>
      </h6>
      <a
        className="Popup__btn Popup__btn_type_cancel"
        href="javascript:void(0)"
        onClick={() => {
          handleCancel(onCancel);
        }}
      >
        {btnCancelText}
      </a>
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

PopupConfirm.defaultProps = {
  btnSubmitText: '确定',
  btnCancelText: '取消',
};

PopupConfirm.propTypes = {
  title: PropTypes.string,
  btnSubmitText: PropTypes.string,
  btnCancelText: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default React.memo(PopupConfirm);
