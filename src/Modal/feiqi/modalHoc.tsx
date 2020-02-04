// 废弃，原想把confirm，alert均以 hoc 的形式来简化其中的操作（目前是拆分出container）
import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
// import Portal from '../Portal';
// import PortalComponent from '../Portal/portal';
import classnames from 'classnames';
import Portal from '../../Portal/portal';

import Mask from '../../Mask';

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
  title?: String;
  content?: React.ReactNode;
  data?: any;
}

export interface ModalState {}

const Modal = (C: any, opt: object) => {
  const CONTAINER = document.querySelector('body');

  const _Modal = document.createElement('div');

  const _opt = {
    backDrop: false,
    size: 'md',
    className: '',
    data: null,
  };

  Object.assign(_opt, opt);
  if (CONTAINER) {
    CONTAINER.appendChild(_Modal);
  }

  class ModalBox extends React.Component<ModalProps, {}> {
    timer: any;

    constructor(props: ModalProps) {
      super(props);
      this.state = {
        className: '',
      };
      this.timer = null;
    }

    componentDidMount() {
      this.timer = window.setTimeout(() => {
        this.setState({
          className: 'jqb-modal__fade',
        });
      }, 50);
    }

    confirm = () => {
      this.close();
      // tslint:disable-next-line:no-console
      console.log('confirm');
    };

    cancel = () => {
      this.close();
      // tslint:disable-next-line:no-console
      console.log('cancel');
    };

    close() {
      ReactDOM.unmountComponentAtNode(_Modal);
      if (CONTAINER) {
        CONTAINER.removeChild(_Modal);
      }
      clearTimeout(this.timer);
      this.timer = null;
    }

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
        data,
      } = this.props;

      return (
        <div className={classnames('jqb-modal', _opt.className, className)}>
          <Mask onClick={this.cancel} className={classnames({ 'jqb-noMask': Backdrop })} />
          <div className={`jqb-modal__content jqb-modal__${size}`}>
            <C confirm={this.confirm} cancel={this.cancel} data={data} />
          </div>
        </div>
      );
    }
  }

  return ReactDOM.createPortal(<ModalBox />, _Modal);
};

export default Modal;
