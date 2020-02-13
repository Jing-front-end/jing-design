import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface NoticeBarProps {
  mode?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  marquee?: boolean;
  speed?: number | undefined;
  action?: React.ReactElement;
  showMore?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface NoticeBarState {
  dura: number;
  animElemId: string;
  show: boolean;
}

const operation = ({ mode, action }: NoticeBarProps, onClick?: () => void) => {
  if (mode === 'closable') {
    return (
      <div className="jqb-noticebar__operation" onClick={onClick}>
        {action ? action : <Icon kind="close" size="mini" />}
      </div>
    );
  } else if (mode === 'link') {
    return (
      <div className="jqb-noticebar__operation" onClick={onClick}>
        {action ? action : <Icon kind="setting" size="mini" />}
      </div>
    );
  }
};

class NoticeBar extends React.Component<NoticeBarProps, NoticeBarState> {
  static defaultProps = {
    mode: '',
    icon: <Icon kind="arrow" size="small" />,
    marquee: true,
    speed: 100,
    showMore: false,
  };

  static propTypes = {
    mode: PropTypes.string,
    icon: PropTypes.node,
    marquee: PropTypes.bool,
    speed: PropTypes.number,
    action: PropTypes.object,
    showMore: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  timeout = null;

  constructor(props: Readonly<NoticeBarProps>) {
    super(props);
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`;
    this.state = {
      dura: 15,
      animElemId,
      show: true,
    };
  }

  componentDidMount() {
    if (!this.props.marquee) return;
    this.initAnimation();
  }

  componentWillReceiveProps() {
    if (!this.timeout) {
      this.initAnimation();
    }
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  };

  initAnimation() {
    const { speed } = this.props;
    // this.timeout = null;
    const elem = document.querySelector(`.${this.state.animElemId}`);
    if (!elem) return;
    const width = elem.getBoundingClientRect().width;
    const dura = width / speed;

    this.setState({
      dura,
    });
  }

  render() {
    const { icon, marquee, className, children } = this.props;
    const { dura, animElemId, show } = this.state;

    const style = {
      animationDuration: '',
    };
    const classes = classnames('jqb-noticebar', className);
    const marqueeClasses = ['jqb-noticebar__marquee'];

    if (marquee) {
      style.animationDuration = `${dura}s`;
      marqueeClasses.push(animElemId);
    }

    return show ? (
      <div className={classes}>
        {icon && <div className="jqb-noticebar__icon">{icon}</div>}
        <div className="jqb-noticebar__content">
          <div className="jqb-noticebar__marquee-wrap">
            <div className={classnames(marqueeClasses)} style={style}>
              {children}
            </div>
          </div>
        </div>
        {operation(this.props, this.onClick)}
      </div>
    ) : null;
  }
}

export default React.memo(NoticeBar);
