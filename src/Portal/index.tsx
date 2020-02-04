import * as React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

// export default (C: React.ComponentType) => {
//   const CONTAINER = document.querySelector('body');

//   const _Portal = document.createElement('div');

//   class Portal extends React.Component {

//     componentDidMount() {
//       if (!CONTAINER) return;
//       CONTAINER.appendChild(_Portal)
//     }

//     componentWillUnmount() {
//       if (!CONTAINER) return;
//       CONTAINER.removeChild(_Portal)
//     }

//     renderComponent() {
//       return <C {...this.props} />
//     }

//     render() {
//       return ReactDOM.createPortal(this.renderComponent(), _Portal)
//     }
//   }

//   return Portal;
// }
export default (C: React.ComponentType) => {
  const CONTAINER = document.querySelector('body');

  const _Portal = document.createElement('div');

  class Portal extends React.Component {
    componentDidMount() {
      if (!CONTAINER) return;
      CONTAINER.appendChild(_Portal);
    }

    componentWillUnmount() {
      if (!CONTAINER) return;
      CONTAINER.removeChild(_Portal);
    }

    renderComponent() {
      return <C {...this.props} />;
    }

    render() {
      return ReactDOM.createPortal(this.renderComponent(), _Portal);
    }
  }

  return Portal;
};
