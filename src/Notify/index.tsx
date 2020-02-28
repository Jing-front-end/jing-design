import * as React from 'react';
import Notification from 'rc-notification';
import Icon from '../Icon';

import 'rc-notification/assets/index.css';
import './index.less';

function showMessage(text: string, duration = 3, type = 'success') {
  Notification.newInstance({}, notification => {
    notification.notice({
      content: (
        <div className="jqb-notify">
          {/* Icon 后续替换，暂且先用其他icon代替 */}
          {type === 'success' && <Icon kind="back" />}
          {type === 'warning' && <Icon kind="setting" />}
          {type === 'warn' && <Icon kind="clock" />}
          {type === 'error' && <Icon kind="close" />}
          {type === 'info' && <Icon kind="share" />}
          <span className="jqb-notify__text">{text}</span>
        </div>
      ),
      duration,
    });
  });
}

export default {
  success(text: string, duration = 3) {
    showMessage(text, duration, 'success');
  },
  warning(text: string, duration = 3) {
    showMessage(text, duration, 'warning');
  },
  warn(text: string, duration = 3) {
    showMessage(text, duration, 'warning');
  },
  error(text: string, duration = 3) {
    showMessage(text, duration, 'error');
  },
  info(text: string, duration = 3) {
    showMessage(text, duration, 'info');
  },
};
