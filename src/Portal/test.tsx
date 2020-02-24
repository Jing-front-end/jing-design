import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReactDom from 'react-dom';

const useCreatePortal = typeof ReactDom.createPortal === 'function';
const isBrowser = typeof window !== 'undefined';

export interface PortalProps {
  children: any;
}

class Portal extends React.Component<PortalProps, {}> {
  static propsTypes = {
    children: PropTypes.node.isRequired,
  };

  container: HTMLElement;

  constructor(props: PortalProps) {
    super(props);

    if (isBrowser) {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);

      this.renderLayer();
    }
  }
  componentDidUpdate() {
    this.renderLayer();
  }

  componentWillUnmount() {
    if (!useCreatePortal) {
      ReactDom.unmountComponentAtNode(this.container);
    }
    document.body.removeChild(this.container);
  }

  renderLayer() {
    if (!useCreatePortal) {
      ReactDom.unstable_renderSubtreeIntoContainer(this, this.props.children, this.container);
    }
  }

  render() {
    if (!useCreatePortal) {
      return ReactDom.createPortal(this.props.children, this.container);
    }
    return null;
  }
}

export default Portal;
