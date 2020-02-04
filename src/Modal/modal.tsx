import * as React from 'react';
// import * as PropTypes from 'prop-types';
import Dialog from './Dialog';
import Portal from '../Portal';
// import classnames from 'classnames';

export interface ModalProps {
  visible?: boolean;
  className?: string;
  size?: any;
  overlay?: boolean;
  onHide?: () => void;
  closeOnEsc?: any;
  show?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  Backdrop?: boolean;
  maxHigher?: boolean;
  title?: String;
  content?: React.ReactNode;
  data?: any;
}

export interface ModalState {}

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    visible: true,
  };

  render() {
    const {
      visible,
      className,
      size,
      title,
      content,
      onClose,
      onConfirm,
      Backdrop,
      maxHigher,
    } = this.props;

    return (
      visible && (
        <Dialog
          className={className}
          size={size}
          title={title}
          content={content}
          visible={visible}
          Backdrop={Backdrop}
          maxHigher={maxHigher}
          cancel={onClose}
          confirm={onConfirm}
        />
      )
    );
  }
}

export default Portal(Modal);
