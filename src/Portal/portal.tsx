import * as React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

export interface PortalProps {
  container?: any;
  children?: React.ReactNode;
}

export interface PortalState {}

const CONTAINER = document.querySelector('body');

const _Portal = document.createElement('div');

class Portal extends React.Component<PortalProps, PortalState> {
  static propTypes = {
    children: PropTypes.node,
    container: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
      PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
    ]),
  };

  constructor(props: PortalProps) {
    super(props);
  }

  componentDidMount() {
    if (!CONTAINER) return;
    CONTAINER.appendChild(_Portal);
  }

  componentWillUnmount() {
    if (!CONTAINER) return;
    CONTAINER.removeChild(_Portal);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, _Portal);
  }
}

export default Portal;
