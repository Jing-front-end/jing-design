import * as React from 'react';
import * as PropTypes from 'prop-types';

import classnames from 'classnames';

import TabBarItem from './Item';

import './index.less';

export interface TabBarProps {
  className?: string;
  value: number;
  indicator: boolean;
  sticky: boolean;
  activeIndex: number;
  children?: React.ReactNode;
  onChange: () => void;
}

export default class extends React.Component<TabBarProps, {}> {
  static defaultProps = {
    className: '',
    value: 0,
    indicator: false,
    sticky: false,
  };

  static proptypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    indicator: PropTypes.bool,
    sticky: PropTypes.bool,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func,
  };

  static Item = TabBarItem;

  render() {
    const { className, value, onChange, indicator, sticky, children: childrenProp } = this.props;

    const valueToIndex = new Map();
    let childIndex = 0;
    const countLength = React.Children.count(this.props.children);

    const indicatorWidth = 100 / countLength;
    const indicatorStyle = { width: indicatorWidth + '%', left: indicatorWidth * value + '%' };

    function TabIndicator() {
      return <div className="TabBar-indicator" style={indicatorStyle} />;
    }

    const childrenRender = React.Children.map(childrenProp, (child: React.ReactNode) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      if (!child) {
        return null;
      }
      const childValue = child.props.value === undefined ? childIndex : child.props.value;
      valueToIndex.set(childValue, childIndex);
      const selected = childValue === value;

      childIndex += 1;
      return React.cloneElement(child, {
        selected,
        onChange,
        countLength,
        value: childValue,
      });
    });
    const classRoot = classnames('TabBar', className, {
      'TabBar-scroll': countLength > 4,
      'TabBar-sticky': sticky,
    });
    const classesWrapper = classnames('TabBar-wrapper');

    return (
      <div className={classRoot}>
        <div className={classesWrapper}>{childrenRender}</div>
        {indicator && <TabIndicator />}
      </div>
    );
  }
}
