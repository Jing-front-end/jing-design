import * as React from 'react';
// import * as PropTypes from 'prop-types';
import Dialog from './Dialog';
// import Portal from '../Portal';
// import classnames from 'classnames';
import { Portal } from 'react-overlays';

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
  container?: any;
}

export interface ModalState {}

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    visible: true,
    container: document.body,
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
      container,
    } = this.props;

    return (
      <Portal container={container}>
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
      </Portal>
    );

    // return (
    //   visible && (
    //     <Dialog
    //       className={className}
    //       size={size}
    //       title={title}
    //       content={content}
    //       visible={visible}
    //       Backdrop={Backdrop}
    //       maxHigher={maxHigher}
    //       cancel={onClose}
    //       confirm={onConfirm}
    //     />
    //   )
    // );
  }
}

export default Modal;
