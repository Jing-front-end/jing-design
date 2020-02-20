import * as React from 'react';
import Notification from 'rc-notification';

import 'rc-notification/dist/rc-notification.min.css';
import './index.less';

function showMessage(text: string, duration = 1500, type = 'success') {
  Notification.newInstance(
    {},
    (notification: {
      notice: (arg0: { content: JSX.Element; duration: number }) => void;
      destroy: () => void;
    }) => {
      notification.notice({
        content: (
          <div className="jqb-toast">
            <i className={`iconfont icon-${type}`} />
            <span className="jqb-toast__span">{text}</span>
          </div>
        ),
        duration,
      });
      notification.destroy();
    },
  );
}

export default {
  success(text: string, duration = 1.5) {
    showMessage(text, duration, 'success');
  },
  error(text: string, duration = 1.5) {
    showMessage(text, duration, 'error');
  },
  warning(text: string, duration = 1.5) {
    showMessage(text, duration, 'warning');
  },
  warn(text: string, duration = 1.5) {
    showMessage(text, duration, 'warning');
  },
  info(text: string, duration = 1.5) {
    showMessage(text, duration, 'info');
  },
};
