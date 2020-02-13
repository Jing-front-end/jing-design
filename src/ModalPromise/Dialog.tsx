import classnames from 'classnames';
import Modal from './Modal';

export interface OptProps {
  backDrop?: boolean;
  size?: string;
  className: string;
  data: any;
}

export default (C: any, opt: OptProps = {}) => {
  const _opt = {
    backDrop: opt.backDrop || false,
    size: opt.size || 'md',
    className: classnames(opt.className),
    data: opt.data,
  };

  return Modal(C, _opt);
};
