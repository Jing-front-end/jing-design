import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../../_util/type';
import util from '../../_util';

import Mask from '../../Mask';
import Button from '../../Button';

import Header from './header';
import Body from './body';
import Footer from './footer';

import '../index.less';

const DialogType = tuple('sm', 'md', 'lg');

export interface DialogProps {
  // 元素是否可见
  visible?: boolean;
  // 元素的标题
  title?: React.ReactNode;
  // 元素的内容
  content?: React.ReactNode;
  // 取消按钮的文本
  cancelText?: string;
  // 确认按钮的文本
  confirmText?: string;
  // 模态框尺寸
  size?: string;
  // Modal body 样式
  bodyStyle?: object;
  // 取消事件
  cancel?: () => void;
  // 确认事件
  confirm?: () => void;
  // 是否显示背景
  Backdrop?: boolean;
  // 元素的class
  className?: string;
  // 是否计算模态框中内容的高度
  maxHigher?: boolean;
}

const Dialog = (props: DialogProps) => {
  const {
    visible,
    title,
    content,
    cancelText,
    confirmText,
    size,
    cancel,
    confirm,
    Backdrop,
    className,
    maxHigher,
  } = props;

  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      document.removeEventListener('touchmove', util.preventDefault);
      const paddingRight = window.innerWidth - document.body.offsetWidth;
      document.body.style.paddingRight = paddingRight + 'px';
      document.body.style.overflow = 'hidden';
    } else {
      document.addEventListener('touchmove', util.preventDefault, { passive: false });
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = 'visible';
    }
  });

  const modalClasses = classnames('jqb-modal', { 'jqb-modal__active': visible }, className);

  return (
    <div className={modalClasses}>
      <Mask onClick={cancel} className={classnames({ 'jqb-noMask': Backdrop })} />
      <div className={`jqb-modal__content jqb-modal__${size}`}>
        <Header cancel={cancel}>{title}</Header>
        <Body maxHigher={maxHigher}>{content}</Body>
        <Footer>
          <Button.Group>
            <Button.Self color="blue" primary onClick={cancel}>
              {cancelText}
            </Button.Self>
            <Button.Self color="orange" onClick={confirm}>
              {confirmText}
            </Button.Self>
          </Button.Group>
        </Footer>
      </div>
    </div>
  );
};

Dialog.defaultProps = {
  visible: false,
  cancelText: '取消',
  confirmText: '确定',
  size: 'md',
  Backdrop: true,
  cancel: () => {},
  confirm: () => {},
};

Dialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.node,
  content: PropTypes.node,
  size: PropTypes.oneOf(DialogType),
  Backdrop: PropTypes.bool,
};

export default Dialog;
