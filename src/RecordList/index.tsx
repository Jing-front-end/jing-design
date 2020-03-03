import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

import './index.less';

export interface RecordListProps {
  leftTopText: string;
  leftBottomText: string;
  rightTopText: string;
  rightBottomText: string;
  hasAction: boolean;
  actionNode: Node;
  hasLink?: boolean;
  colWidth: number;
  onClick: () => void;
}

const RecordAction = (children: any) => <div className="RecordList-action">{children}</div>;

const RecordList = (props: RecordListProps) => {
  const {
    leftTopText,
    leftBottomText,
    rightTopText,
    rightBottomText,
    hasAction,
    actionNode,
    hasLink,
    colWidth,
    onClick,
  } = props;
  const classes = classnames('RecordList', {
    'RecordList-noLink': !hasLink,
    'RecordList-Action': hasAction,
  });

  const leftClasses = classnames(`col-xs-${colWidth}`);
  const rightClasses = classnames(`col-xs-${24 - colWidth} am-align-right`);

  const rightTopClasses = classnames('am-sm ellipsis', {
    'RecordList-centerText': rightBottomText === '',
  });
  const rightBottomClasses = classnames('am-sm ellipsis', {
    'RecordList-centerText': rightTopText === '',
  });

  function onLinkClick(click: () => void) {
    if (typeof onClick !== 'function') {
      throw new Error(`${click}为函数`);
    } else {
      if (hasLink) {
        click();
      }
    }
  }

  return (
    <div
      className={classes}
      onClick={() => {
        onLinkClick(onClick);
      }}
    >
      {RecordAction(actionNode)}
      <div className={leftClasses}>
        <div className="am-sm ellipsis">{leftTopText}</div>
        <div className="am-sm ellipsis">{leftBottomText}</div>
      </div>
      <div className={rightClasses}>
        <div className={rightTopClasses}>{rightTopText}</div>
        <div className={rightBottomClasses}>{rightBottomText}</div>
      </div>
      {hasLink && (
        <span className="RecordList-arrowicon">
          <Icon kind="arrow" size="small" />
        </span>
      )}
    </div>
  );
};

RecordList.defaultProps = {
  hasLink: false,
  hasAction: false,
  colWidth: 12,
};

RecordList.PropTypes = {
  leftTopText: PropTypes.string,
  leftBottomText: PropTypes.string,
  rightTopText: PropTypes.string,
  rightBottomText: PropTypes.string,
  hasLink: PropTypes.bool,
  hasAction: PropTypes.bool,
  colWidth: PropTypes.number,
  onClick: PropTypes.func,
};

export default React.memo(RecordList);
