import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import Util from '../_util';

import './index.less';

export interface MsgListProps {
  msgDate?: string;
  msgCheck?: boolean;
  isSign: boolean;
  isRead: boolean;
  msgContent: string;
  contentLength: number;
  onCheckClick?: () => void;
}

const MsgList = (props: MsgListProps) => {
  const { msgDate, msgCheck, isSign, isRead, msgContent, contentLength, onCheckClick } = props;

  const classes = classnames('MessageList', { 'MessageList-sign': isSign });

  return (
    <div className={classes}>
      {isRead && <i className="MessageList-read" />}
      <strong>{msgDate}</strong>
      {msgCheck ? (
        <div className="MessageList-check" onClick={onCheckClick}>
          <span className="MessageList-check__title">查看详情</span>
          <span className="MessageList-check__icon">
            <Icon kind="arrow" color="blue" />
          </span>
        </div>
      ) : null}
      <p>{Util.strSubChar(msgContent, contentLength)}</p>
    </div>
  );
};

MsgList.defaultProps = {
  msgDate: '',
  msgCheck: false,
  isSign: false,
  isRead: false,
  contentLength: 100,
  msgContent: '',
};

MsgList.propTypes = {
  msgDate: PropTypes.string,
  msgCheck: PropTypes.bool,
  isSign: PropTypes.bool,
  isRead: PropTypes.bool,
  msgContent: PropTypes.string,
  contentLength: PropTypes.number,
  onCheckClick: PropTypes.func,
};

export default React.memo(MsgList);
