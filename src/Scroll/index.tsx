import React, { PureComponent } from 'react';
import { util } from '..';
import '../_style/index.less';
import './index.less';

const ReactIScroll = require('./react-iscroll').default;
const iScroll = require('./iscroll.last.js');

const pullDownSensitive = 70;
const pullUpSensitive = 20;
const bounceTime = 600;

export interface ScrollProps {
  children: any;
  showPullDown: boolean;
  showPullUp: boolean;
  endPullUp: boolean;
  scrollPullDown: (pullDownComplete: any) => void;
  scrollPullUp: (pullUpComplete: any) => void;
  scroll: any;
  bottom: number;
  top: number;
}

interface IndexBar {
  $indexBar: any;
  $topBar: any;
  $bar: any;
  isInit: boolean;
  indexH: number;
  length: number;
  barTop: any;
  defaultTop: number;
  lock: number;
  current: number;
}

export default class Scroll extends PureComponent<ScrollProps, {}> {
  static defaultProps = {
    bottom: 0,
    top: 0,
  };

  static indexBarReady() {
    const index = document.createElement('div');
    index.id = 'IndexBarTop';
    index.className = 'IndexBar__tbody-bar IndexBar__tbody-bar_state_current am-hide';
    index.innerHTML = '<div class="IndexBar__tbody-tr-bar-text">2017-01</div>';
    if (!document.querySelectorAll('#IndexBarBar').length) {
      document.querySelector('#root')!.appendChild(index);
    }
  }

  scrolly = 0;
  iscroll: any;
  indexBar: IndexBar = {
    $indexBar: '',
    $topBar: '',
    $bar: '',
    isInit: false,
    indexH: 0,
    length: 0,
    barTop: '',
    defaultTop: 0,
    lock: 0,
    current: 0,
  };

  componentDidMount() {
    this.indexBarInit();
    // 处理安卓输入框获得焦点后滚动问题
    if (util.system.android) {
      this.inputBindEvent();
    }
    // 解决图片高度产生的iscroll.refresh不准确产生的bug
    const imgList = document.getElementsByTagName('img');
    const _this = this;
    for (let i = 0; i < imgList.length; i += 1) {
      const img = imgList[i];
      img.onload = (() => () => {
        _this.checkIscrollReadyForRefresh();
        img.onload = null;
      })();
    }
  }

  componentWillUnmount() {
    // 清除indexbar组件
    if (document.querySelectorAll('#IndexBarTop').length) {
      this.indexBarRemove();
    }
  }

  setDom() {
    const { showPullDown, children, showPullUp, endPullUp, bottom, top } = this.props;
    const options = {
      scrollbars: false,
      momentum: true,
    };
    const tempJSX = (
      <ReactIScroll
        ref={(c: any) => {
          this.iscroll = c;
        }}
        iScroll={iScroll}
        options={options}
        onScroll={() => {
          this.checkIscrollReady(this.scroll.bind(this));
        }}
        onSlideDown={() => {
          this.checkIscrollReady(this.slideDown.bind(this));
        }}
        onSlideUp={() => {
          this.checkIscrollReady(this.slideUp.bind(this));
        }}
      >
        <div className="Scroll">
          {showPullDown ? (
            <div className="Scroll__pullDown Scroll__pullDown_show_on">
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div className="Scroll__pullDown">
              <span />
              <span />
              <span />
            </div>
          )}
          {children}
          {(() => {
            if (showPullUp) {
              if (endPullUp) {
                return (
                  <div className="Scroll__pullUp Scroll__pullUp_show_on Scroll__pullUp_state_end">
                    <span className="Scroll__pullUp-icon" />
                    <span className="Scroll__pullUp-msg" />
                  </div>
                );
              }
              if (!endPullUp) {
                return (
                  <div className="Scroll__pullUp Scroll__pullUp_show_on">
                    <span className="Scroll__pullUp-icon" />
                    <span className="Scroll__pullUp-msg" />
                  </div>
                );
              }
            }
            if (!showPullUp) {
              return (
                <div className="Scroll__pullUp">
                  <span className="Scroll__pullUp-icon" />
                  <span className="Scroll__pullUp-msg" />
                </div>
              );
            }
            return '';
          })()}
        </div>
      </ReactIScroll>
    );
    return (
      <div style={{ position: 'absolute', width: '100%', bottom: `${bottom}px`, top: `${top}px` }}>
        {tempJSX}
      </div>
    );
  }

  checkIscrollReadyForRefresh() {
    if (this.iscroll && this.iscroll.getIScroll()) {
      this.iscroll.getIScroll().refresh();
    } else {
      const _this = this;
      setTimeout(() => {
        _this.checkIscrollReadyForRefresh();
      }, 200);
    }
  }

  checkIscrollReady(callback: () => void) {
    if (this.iscroll && this.iscroll.getIScroll()) {
      callback();
    } else {
      const _this = this;
      setTimeout(() => {
        _this.checkIscrollReady(callback);
      }, 200);
    }
  }

  inputBindEvent() {
    const $input = document.querySelectorAll('input');
    const _this = this;
    for (let i = 0; i < $input.length; i += 1) {
      $input[i].onclick = (e: MouseEvent) => {
        _this.inputAutoScroll(e);
      };
    }
  }

  inputAutoScroll(e: MouseEvent) {
    let t = e.clientY - this.scrolly;
    if (t > util.global.winH / 2) {
      t = (t - util.global.winH / 2.5) * -1;
      this.iscroll.getIScroll().scrollTo(0, t);
      this.scrolly = t;
    }
  }

  logoDrowdown() {
    const scrollDown = this.iscroll.getIScroll().scroller.children[0];
    const downHasClass = util.hasClass(scrollDown, 'Scroll__pullDown_turn_on');
    if (this.scrolly > 1) {
      if (this.scrolly < pullDownSensitive) {
        const y = pullDownSensitive - this.scrolly;
        scrollDown.children[0].style.cssText = `-webkit-transform: translate3d(0,${y}px,0); -moz-transform: translate3d(0,${y}px,0); transform: translate3d(0,${y}px,0)`;
      }
      if (this.scrolly > pullDownSensitive) {
        if (!downHasClass) {
          util.addClass(scrollDown, 'Scroll__pullDown_turn_on');
        }
      } else if (downHasClass) {
        util.removeClass(scrollDown, 'Scroll__pullDown_turn_on');
      }
    }
  }

  refresh() {
    const _this = this;
    setTimeout(() => {
      _this.iscroll.getIScroll().enable();
      _this.iscroll.getIScroll().refresh();
    });
  }

  scroll() {
    const { scroll } = this.props;
    const scrollDown = this.iscroll.getIScroll().scroller.children[0];
    const scrollUp = this.iscroll.getIScroll().scroller.children[
      this.iscroll.getIScroll().scroller.children.length - 1
    ];
    this.scrolly = 0;
    if (!util.hasClass(scrollDown, 'Scroll__pullDown_state_loading')) {
      this.scrolly = Math.round(this.iscroll.getIScroll().y);
      const scrollMaxy = this.iscroll.getIScroll().maxScrollY - this.scrolly;
      const downHasClass = util.hasClass(scrollDown, 'Scroll__pullDown_turn_on');
      const upHasClass = util.hasClass(scrollUp, 'Scroll__pullUp_turn_on');
      if (this.scrolly >= pullDownSensitive && !downHasClass) {
        util.addClass(scrollDown, 'Scroll__pullDown_turn_on');
      } else if (this.scrolly < pullDownSensitive && this.scrolly > 0 && downHasClass) {
        util.removeClass(scrollDown, 'Scroll__pullDown_turn_on');
      }
      if (scrollMaxy >= pullUpSensitive && !upHasClass) {
        util.addClass(scrollUp, 'Scroll__pullUp_turn_on');
      } else if (scrollMaxy < pullUpSensitive && scrollMaxy >= 0 && upHasClass) {
        util.removeClass(scrollUp, 'Scroll__pullUp_turn_on');
      }
      this.logoDrowdown();
    }
    if (this.indexBar.isInit === true) {
      this.indexBarScroll();
    }
    if (typeof scroll === 'function') {
      scroll(this.scrolly);
    }
  }

  pullDownComplete(callback: () => void) {
    const _this = this;
    setTimeout(() => {
      const scrollDown = _this.iscroll.getIScroll().scroller.children[0];
      util.removeClass(scrollDown, 'Scroll__pullDown_turn_on');
      util.removeClass(scrollDown, 'Scroll__pullDown_state_loading');
      _this.iscroll.getIScroll().scrollTo(0, 0, bounceTime * 0.5);
      setTimeout(() => {
        callback();
        // 此处延迟enable防止用户过度操作
        setTimeout(() => {
          _this.iscroll.getIScroll().enable();
          _this.iscroll.getIScroll().refresh();
        });
      }, bounceTime / 2);
    }, bounceTime);
  }

  slideDown() {
    const { scrollPullDown } = this.props;
    const scrollDown = this.iscroll.getIScroll().scroller.children[0];
    if (
      this.iscroll.getIScroll().y > pullDownSensitive &&
      util.hasClass(scrollDown, 'Scroll__pullDown_show_on')
    ) {
      this.iscroll.getIScroll().disable();
      util.addClass(scrollDown, 'Scroll__pullDown_state_loading');
      this.iscroll.getIScroll().scrollTo(0, pullDownSensitive, bounceTime);
      if (scrollPullDown) {
        scrollPullDown(this.pullDownComplete.bind(this));
      }
    }
  }

  pullUpComplete(callback: () => void) {
    const _this = this;
    setTimeout(() => {
      const scrollUp = _this.iscroll.getIScroll().scroller.children[
        _this.iscroll.getIScroll().scroller.children.length - 1
      ];
      util.removeClass(scrollUp, 'Scroll__pullUp_state_loading');
      setTimeout(() => {
        callback();
        // 此处延迟enable防止用户过度操作
        setTimeout(() => {
          _this.iscroll.getIScroll().enable();
          _this.iscroll.getIScroll().refresh();
        });
      });
    }, bounceTime + 250);
  }

  slideUp() {
    const { scrollPullUp } = this.props;
    const scrollUp = this.iscroll.getIScroll().scroller.children[
      this.iscroll.getIScroll().scroller.children.length - 1
    ];
    if (
      this.iscroll.getIScroll().maxScrollY - this.iscroll.getIScroll().y > pullUpSensitive &&
      util.hasClass(scrollUp, 'Scroll__pullUp_show_on')
    ) {
      util.removeClass(scrollUp, 'Scroll__pullUp_turn_on');
      if (!util.hasClass(scrollUp, 'Scroll__pullUp_state_end')) {
        this.iscroll.getIScroll().disable();
        util.addClass(scrollUp, 'Scroll__pullUp_state_loading');
        if (scrollPullUp) {
          scrollPullUp(this.pullUpComplete.bind(this));
        }
      }
    }
  }

  indexBarInit() {
    Scroll.indexBarReady();
    this.indexBar.isInit = true;
    this.indexBar.$bar = document.querySelectorAll('.IndexBar__tbody-bar');
    this.indexBar.$indexBar = document.querySelector('.IndexBar');
    this.indexBar.$topBar = document.querySelector('#IndexBarTop');
    this.indexBar.indexH = this.indexBar.$bar[0].offsetHeight + 1;
    this.indexBar.length = this.indexBar.$bar.length;
    this.indexBar.barTop = [];
    this.indexBar.defaultTop = 0;
    this.indexBar.lock = 0;
    this.indexBar.current = 0;
    this.indexBarSetTop();
    this.indexBarCheck();
  }

  indexBarRemove() {
    this.indexBar.$topBar.parentNode.removeChild(this.indexBar.$topBar);
  }

  indexBarScroll() {
    this.indexBarCheck();
    this.indexBarCurrent();
    this.indexBarSetAnimate();
  }

  indexBarCheck() {
    // 超出顶部
    if (
      this.indexBar.barTop[0] > this.scrolly * -1 + this.indexBar.defaultTop &&
      this.indexBar.lock === 0
    ) {
      this.indexBar.lock = 1;
      this.indexBar.$topBar.setAttribute(
        'class',
        'IndexBar__tbody-bar IndexBar__tbody-bar_state_current am-hide',
      );
    }
    // 超出底部
    else if (this.indexBar.barTop[this.indexBar.length - 1] < this.scrolly * -1) {
      this.indexBar.lock = 1;
      this.indexBar.$topBar.setAttribute(
        'class',
        'IndexBar__tbody-bar IndexBar__tbody-bar_state_current am-hide',
      );
    }
    // 中间过程
    else if (
      this.indexBar.barTop[0] < this.scrolly * -1 + this.indexBar.defaultTop &&
      this.indexBar.lock === 1
    ) {
      this.indexBar.lock = 0;
      this.indexBar.$topBar.setAttribute(
        'class',
        'IndexBar__tbody-bar IndexBar__tbody-bar_state_current',
      );
    }
  }

  indexBarCurrent() {
    for (let i = 0; i < this.indexBar.length; i += 1) {
      if (this.indexBar.barTop[i] < this.scrolly * -1 + this.indexBar.defaultTop) {
        this.indexBar.current = i;
        this.indexBar.$topBar.children[0].innerHTML = this.indexBar.$bar[
          this.indexBar.current
        ].children[0].innerHTML;
      }
    }
  }

  indexBarSetAnimate() {
    if (
      this.indexBar.barTop[this.indexBar.current + 1] <
      this.scrolly * -1 + this.indexBar.defaultTop + this.indexBar.indexH
    ) {
      const y =
        this.indexBar.barTop[this.indexBar.current + 1] -
        this.scrolly * -1 -
        this.indexBar.defaultTop -
        this.indexBar.indexH;
      this.indexBar.$topBar.setAttribute('style', `-webkit-transform:translate(0,${y}px)`);
    } else {
      this.indexBar.$topBar.setAttribute('style', '-webkit-transform:translate(0,0)');
    }
  }

  indexBarSetTop() {
    // set each barTop
    for (let i = 0; i < this.indexBar.length; i += 1) {
      // am-body scroll need add value sTop
      this.indexBar.barTop[i] = this.indexBar.$bar[i].offsetTop;
    }
  }

  render() {
    return this.setDom();
  }
}
