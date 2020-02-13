import React from 'react';
import classnames from 'classnames';
import Button from '../Button';

import ModalPromise from './Modal';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Alert(props: { data: any; confirm: any; cancel: any }) {
  const { data, confirm, cancel } = props;

  return (
    <>
      <Header cancel={cancel}>{data.title}</Header>
      <Body>
        <div className="content">{data.content}</div>
      </Body>
      <Footer>
        <Button.Self type="primary" onClick={confirm}>
          {data.confirmText}
        </Button.Self>
      </Footer>
    </>
  );
}

export default (opt: any) => {
  return ModalPromise(Alert, {
    backDrop: opt.backDrop || true, //点击背景是否关闭
    className: classnames('x-modal-alert', opt.className),
    size: opt.size || 'sm',
    data: {
      title: opt.title || '系统提示', //标题
      content: opt.content || '请输入文本消息', //内容
      confirmText: opt.confirmText || '确认', //按钮文案
    },
  });
};
