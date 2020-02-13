import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

import ModalPromise from './Modal';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export interface ConfirmSelfProps {
  data?: any;
  confirm?: () => void;
  cancel?: () => void;
}

function Confirm(props: ConfirmSelfProps) {
  const { data, confirm, cancel } = props;

  return (
    <>
      <Header cancel={cancel}>{data.title}</Header>
      <Body>
        <div className="content">{data.content}</div>
      </Body>
      <Footer>
        <Button.Group>
          <Button.Self color="blue" primary onClick={cancel}>
            取消
          </Button.Self>
          <Button.Self color="blue" primary onClick={confirm}>
            确认
          </Button.Self>
        </Button.Group>
      </Footer>
    </>
  );
}

export interface ConfirmProps {
  backDrop?: boolean;
  className?: string;
  size?: string;
  title?: string;
  content?: string;
  confirmText?: string;
}

export default (opt: ConfirmProps = {}) => {
  const { backDrop, className, size, title, content, confirmText } = opt;
  return ModalPromise(Confirm, {
    backDrop: backDrop || true,
    className: classnames('jqb-modal__confirm', className),
    size: size || 'sm',
    data: {
      title: title || '系统提示',
      content: content || '请输入文本消息',
      confirmText: confirmText || '确认',
    },
  });
};
