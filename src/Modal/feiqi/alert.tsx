import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Modal from './modal';

export default function alert(title: React.ReactNode, content: React.ReactNode) {
  // let closed = false;

  if (!title && !content) {
    return {
      close: () => {},
    };
  }

  const div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  ReactDOM.render(<Modal title={title} content={content} />, div);

  return {
    close,
  };
}
