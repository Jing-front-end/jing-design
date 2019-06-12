import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface PopupAlertSelectProps {
  title: string;
  btnCancelText: string;
  onCancel: () => void;
  list: Array<PopupAlertSelectItemProps>;
  onSubmit: (index: number) => void;
}

interface PopupAlertSelectItemProps {
  btnSubmitText: string;
}

function handleSubmit(onSubmit: (index: number) => void, index: number) {
  if (typeof onSubmit === 'function') {
    onSubmit(index);
  }
}

function handleCancel(onCancel: () => void) {
  if (typeof onCancel === 'function') {
    onCancel();
  }
}

const PopupAlertSelect = (props: PopupAlertSelectProps) => {
  const { title, btnCancelText, onCancel, list, onSubmit } = props;

  return (
    <div className="Popup__window PopupAlertSelect">
      <h6 className="Popup__title">
        <span className="Popup__title-text">{title}</span>
      </h6>
      {list.map((item: PopupAlertSelectItemProps, index: number) => (
        <a
          key={item.btnSubmitText}
          className="Popup__btn Popup__btn_type_submit"
          onClick={() => {
            handleSubmit(onSubmit, index);
          }}
        >
          {item.btnSubmitText}
        </a>
      ))}
      <a
        className="Popup__btn Popup__btn_type_cancel"
        onClick={() => {
          handleCancel(onCancel);
        }}
      >
        {btnCancelText}
      </a>
    </div>
  );
};

PopupAlertSelect.defaultProps = {
  btnCancelText: '取消',
};

PopupAlertSelect.propTypes = {
  title: PropTypes.string,
  btnCancelText: PropTypes.string,
  onCancel: PropTypes.func,
  list: PropTypes.array,
  onSubmit: PropTypes.func,
};

export default React.memo(PopupAlertSelect);
