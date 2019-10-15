import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';
import { util } from '..';

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

  let notice: HTMLElement;

  const [proportion, setProportion] = React.useState(1);
  const style = `<style>@-webkit-keyframes noticeBarPlay {0% { -webkit-transform:translate3d(0,0,0);}${proportion}% { -webkit-transform:translate3d(-100%,0,0);}${proportion +
    0.01}% { -webkit-transform:translate3d(${
    util.global.winW
  }px,0,0);}100% { -webkit-transform:translate3d(0,0,0);}}</style>`;

  const [isPlay, setIsPlay] = React.useState(false);

  const playClass = classNames('NoticeBar__link-text', {
    [`NoticeBar__state_play`]: isPlay === true,
  });

  const [pCss, setPCss] = React.useState({});

  function setPlay() {
    if (
      notice.lastChild &&
      notice.lastChild.previousSibling &&
      notice.lastChild.previousSibling.firstChild
    ) {
      if (
        (notice.lastChild.previousSibling.firstChild as HTMLElement).offsetWidth >
        (notice.lastChild.previousSibling as HTMLElement).offsetWidth
      ) {
        const num =
          (notice.lastChild.previousSibling.firstChild as HTMLElement).offsetWidth /
          (notice.lastChild.previousSibling as HTMLElement).offsetWidth;
        setProportion((100 / (num + 1)) * num);
        setIsPlay(true);
        const speed =
          ((notice.lastChild.previousSibling.firstChild as HTMLElement).offsetWidth /
            (notice.lastChild.previousSibling as HTMLElement).offsetWidth) *
          15;
        setPCss({
          '-webkit-animation-duration': speed + 's',
          '-moz-animation-duration': speed + 's',
          'animation-duration': speed + 's',
        });
      } else {
        setIsPlay(false);
      }
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setPlay();
    }, 4000);
  }, []);

  return (
    <div
      className="NoticeBar"
      ref={(c: any) => {
        if (c) {
          notice = c;
        }
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: style }} />
      <a className="NoticeBar__link" href={href} onClick={onClick}>
        <p style={pCss} className={playClass}>
          {word}
        </p>
      </a>
      <div>
        <a
          onClick={e => {
            doClose(e);
          }}
          className="NoticeBar__close"
        >
          <Icon kind="close" size="small" />
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
