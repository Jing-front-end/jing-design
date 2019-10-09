import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface NoticeBarProps {
  href?: string;
  word: string;
  onClick?: () => void;
}

interface HTMLAnchorEvent extends React.MouseEvent {
  currentTarget: HTMLAnchorElement & EventTarget;
}

function doClose(e: HTMLAnchorEvent) {
  if (
    e.currentTarget.parentNode !== null &&
    e.currentTarget.parentNode.parentNode !== null &&
    e.currentTarget.parentNode.parentNode.parentNode !== null
  ) {
    e.currentTarget.parentNode.parentNode.parentNode.removeChild(
      e.currentTarget.parentNode.parentNode,
    );
  }
}

const NoticeBar = (props: NoticeBarProps) => {
  const { href, word, onClick } = props;

  return (
    <div className="NoticeBar">
      <a className="NoticeBar__link" href={href} onClick={onClick}>
        <p className="NoticeBar__link-text">{word}</p>
      </a>
      <div>
        <a
          onClick={e => {
            doClose(e);
          }}
        >
          <Icon kind="close" size="mini" />
        </a>
      </div>
    </div>
  );
};

NoticeBar.propTypes = {
  href: PropTypes.string,
  word: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(NoticeBar);
