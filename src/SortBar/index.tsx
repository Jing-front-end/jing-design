import * as React from 'react';
import * as PropTypes from 'prop-types';

// import classnames from 'classnames';
import { tuple } from '../_util/type';
import Icon from '../Icon';
import './index.less';

const ItemStatus = tuple('sort', 'sort-up', 'sort-down');

export interface SortBarProps {
  children?: React.ReactNode;
}

interface SortBarItemProps {
  children: String;
  status?: String;
  onClick?: () => void;
}

interface SortBarFilterProps {
  children: String;
  onClick?: () => void;
}

const SortBarItem = (props: SortBarItemProps) => {
  return (
    <div className="SortBar__Item" onClick={props.onClick}>
      {props.children}
      {props.status === 'sort' && <Icon kind="sort" size="small" />}
      {props.status === 'sort-up' && <Icon kind="sort-up" size="small" color="blue" />}
      {props.status === 'sort-down' && <Icon kind="sort-down" size="small" color="blue" />}
    </div>
  );
};

const SortBarFilter = (props: SortBarFilterProps) => (
  <div className="SortBar__Filter" onClick={props.onClick}>
    {props.children}
    <Icon kind="arrow" size="small" />
  </div>
);

export default class extends React.Component<SortBarProps, {}> {
  static proptypes = {
    children: PropTypes.node,
  };

  static Item = SortBarItem;

  static Filter = SortBarFilter;

  render() {
    const { children } = this.props;
    return <div className="SortBar">{children}</div>;
  }
}

SortBarItem.defaultProps = {
  status: 'sort',
  children: '',
};

SortBarItem.proptypes = {
  status: PropTypes.oneOf(ItemStatus),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

SortBarFilter.defaultProps = {
  children: '',
};

SortBarFilter.proptypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
