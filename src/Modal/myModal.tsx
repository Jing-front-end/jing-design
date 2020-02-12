import * as React from 'react';
import classnames from 'classnames';
// import Mask from '../Mask';
// import Portal from '../Portal/myPortal';

export interface ModalProps {
  visible?: boolean;
  container?: React.ReactNode;
  overlay?: boolean;
  className?: string;
  Backdrop?: boolean;
  children?: any;
  size?: string;
  backdropCancel?: () => void;
}

export interface ModalState {}

class Modal extends React.Component<ModalProps, {}> {
  static defaultProps = {
    container: document.body,
    overlay: true,
    Backdrop: true,
    size: 'md',
  };

  modalRef = (ref: any) => {
    if (ref) {
      // console.log('ref', ref)
    } else {
      document.body.removeChild(ref);
    }
  };
  // close = () => {
  //   const { container } = this.props;
  //   // ReactDOM.unmountComponentAtNode(_Modal);
  //   container.removeChild(_Modal);
  // }

  render() {
    const { visible, container, className, Backdrop, size, children, backdropCancel } = this.props;

    const modalClasses = classnames('jqb-modal', { 'jqb-modal__active': visible }, className);

    // console.log('visible', visible)
    // console.log('container', container)
    return (
      // <Portal container={container}>
      //   <div ref={this.modalRef} role="dialog" className={modalClasses}>
      //     <div>test</div>
      //     {/* <Mask onClick={backdropCancel} className={classnames({ 'jqb-noMask': Backdrop })} /> */}
      //     <div className={classnames(`jqb-modal__content jqb-modal__${size}`)}>{children}</div>
      //   </div>
      // </Portal>
      <div />
    );
  }
}

export default Modal;
