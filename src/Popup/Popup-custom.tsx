import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface PopupCustomProps {
  title: string;
  fixedTop: any;
  children: any;
  onBack: (num: number) => void;
  onCancel: () => void;
}

// function componentWillUpdate(nextProps, nextState) {
//   if (nextProps.pageIndex - this.props.pageIndex === 1) {// 下一页
//       this.tempScrollTop.push(document.getElementById('popupCustomContent').scrollTop);
//       document.getElementById('popupCustomContent').scrollTop = 0;
//   } else if (nextProps.pageIndex - this.props.pageIndex === -1) {// 上一页
//       document.getElementById('popupCustomContent').scrollTop = this.tempScrollTop[this.tempScrollTop.length-1];
//       this.tempScrollTop.pop();
//   }
// }

function handleBack(onBack: (num: number) => void, pageIndex: number, setPageIndex: any) {
  setPageIndex(pageIndex - 1);
  if (typeof onBack === 'function') {
    onBack(pageIndex - 1);
  }
}

function handleCancel(onCancel: () => void) {
  if (typeof onCancel === 'function') {
    onCancel();
  }
}

const PopupCustom = (props: PopupCustomProps) => {
  const { title, fixedTop, children, onCancel, onBack } = props;
  const [pageIndex, setPageIndex] = React.useState(0);
  const classes = classNames('Popup__btn Popup__btn_type_back', {
    [`Popup__btn_type_back_state_true`]: pageIndex !== 0,
  });

  return (
    <div className="Popup__window PopupCustom">
      {!!title && <h6 className="Popup__title">{title}</h6>}
      {fixedTop}
      <div className="Popup__content">{children}</div>
      <a
        className="Popup__btn Popup__btn_type_cancel"
        onClick={() => {
          handleCancel(onCancel);
        }}
      >
        <Icon kind="close" />
      </a>
      <a
        className={classes}
        onClick={() => {
          handleBack(onBack, pageIndex, setPageIndex);
        }}
      >
        <Icon kind="back" />
      </a>
    </div>
  );
};

PopupCustom.propTypes = {
  title: PropTypes.string,
  fixedTop: PropTypes.any,
  children: PropTypes.any,
  onBack: PropTypes.func,
  onCancel: PropTypes.func,
};

export default React.memo(PopupCustom);
