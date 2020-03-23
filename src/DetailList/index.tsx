import * as React from 'react';
import * as PropTypes from 'prop-types';

import './index.less';

export interface DetailProps {
  leftText?: string;
  rightChildren?: string | Node;
  headerTitle?: string;
  hasHeader: boolean;
  title: string;
  children: any;
}

const Header = (props: DetailProps) => {
  return <div className="DetailList-header">{props.title}</div>;
};

const Body = (props: DetailProps) => <div className="DetailList-body">{props.children}</div>;

const Item = (props: DetailProps) => (
  <div className="DetailList-body-item">
    <div className="DetailList-body-item__left">{props.leftText}</div>
    <div className="DetailList-body-item__right"> {props.rightChildren}</div>
  </div>
);

const Line = () => <div className="DetailList-line" />;

export default class extends React.Component {
  static defaultProps = {
    children: '',
  };

  static propTypes = {
    children: PropTypes.node,
  };

  static Header = Header;
  static Body = Body;
  static Item = Item;
  static Line = Line;
  render() {
    return <div className="DetailList">{this.props.children}</div>;
  }
}
