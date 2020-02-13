import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../_util/type';
import util from '../_util';

import Portal from '../Portal';
import Mask from '../Mask';

export interface ContainerProps {
  visible?: boolean;
  className?: string;
  children?: React.ReactChild;
  Backdrop?: boolean;
  size?: String;
  cancel?: () => void;
  backdropCancel?: () => void;
}

const DialogType = tuple('sm', 'md', 'lg');

const Container = (props: ContainerProps) => {
  const { visible, className, children, backdropCancel, Backdrop, size } = props;
  const modalClasses = classnames('jqb-modal', { 'jqb-modal__active': visible }, className);

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

  return (
    <div className={modalClasses}>
      <Mask onClick={backdropCancel} className={classnames({ 'jqb-noMask': Backdrop })} />
      <div className={`jqb-modal__content jqb-modal__${size}`}>{children}</div>
    </div>
  );
};

Container.defaultProps = {
  className: '',
  Backdrop: true,
  size: 'md',
};

Container.propTypes = {
  children: PropTypes.node,
  Backdrop: PropTypes.bool,
  size: PropTypes.oneOf(DialogType),
  backdropCancel: PropTypes.func,
};

export default Portal(Container);
