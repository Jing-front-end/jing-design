import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import '../_style/index.less';
import './index.less';

export interface PopupPromptProps {
  title: string;
  btnSubmitText: string;
  btnCancelText: string;
  onSubmit: () => void;
  onCancel: () => void;
  children: any;
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

const PopupPrompt = (props: PopupPromptProps) => {
  const { children, title, btnCancelText, btnSubmitText, onSubmit, onCancel } = props;

  const classes = classNames('Popup__window PopupPrompt', {
    [`Popup__type_noCancel`]: btnCancelText === '',
    [`Popup__type_noSubmit`]: btnSubmitText === '',
  });

  return (
    <div className={classes}>
      <h6 className="Popup__title">
        <span className="Popup__title-text">{title}</span>
      </h6>
      <div className="Popup__content">{children}</div>
      <a
        className="Popup__btn Popup__btn_type_cancel"
        onClick={() => {
          handleCancel(onCancel);
        }}
      >
        {btnCancelText}
      </a>
      <a
        className="Popup__btn Popup__btn_type_submit"
        onClick={() => {
          handleSubmit(onSubmit);
        }}
      >
        {btnSubmitText}
      </a>
    </div>
  );
};

PopupPrompt.defaultProps = {
  btnSubmitText: '确定',
  btnCancelText: '取消',
};

PopupPrompt.propTypes = {
  title: PropTypes.string,
  btnSubmitText: PropTypes.string,
  btnCancelText: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default React.memo(PopupPrompt);
