import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

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

interface ModalState {
  className?: string;
}

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

  if (CONTAINER !== null) {
    CONTAINER.appendChild(_Modal);
  }

  class ModalBox extends React.Component<ModalProps, ModalState> {
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
    };

    cancel = () => {
      this.close();
    };

    close() {
      ReactDOM.unmountComponentAtNode(_Modal);
      if (CONTAINER !== null) {
        CONTAINER.removeChild(_Modal);
      }
      clearTimeout(this.timer);
      this.timer = null;
    }

    render() {
      const { className } = this.state;

      const { size, backDrop } = _opt;
      return (
        <div className={classnames('jqb-modal', _opt.className, className)}>
          <div
            className="jqb-modal__bg"
            onClick={() => {
              // tslint:disable-next-line:no-unused-expression
              backDrop && this.cancel();
            }}
          />
          <div className={`jqb-modal__content jqb-modal__${size}`}>
            <C {...this.props} />
          </div>
        </div>
      );
    }
  }
  return ReactDOM.render(<ModalBox />, _Modal);
};

export default Modal;
