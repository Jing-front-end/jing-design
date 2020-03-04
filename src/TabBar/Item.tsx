import React, { MouseEvent } from 'react';
import * as PropTypes from 'prop-types';

import classnames from 'classnames';

import Icon from '../Icon';

export interface TabBarItemProps {
  value: number;
  selected: boolean;
  icon: string;
  children: any;
  countLength: number;
  tabBarItemStyle: any;
  onChange: (e: MouseEvent, value: number) => void;
}

const TabBarItem = (props: TabBarItemProps) => {
  function handleChange(e: MouseEvent) {
    if (props.onChange) {
      props.onChange(e, props.value);
    }
  }

  const spanStyle = props.selected ? { color: '#1496ff' } : { color: '#c8c8c8' };
  const classItem = classnames('TabBar-item', { 'TabBar-scroll-item': props.countLength > 4 });
  const itemStyle = { width: 100 / props.countLength + '%' };
  const itemCountLength = React.Children.count(props.children);

  const TabItemStyle = {};
  if (props.tabBarItemStyle !== undefined) {
    Object.assign(TabItemStyle, props.tabBarItemStyle, itemStyle);
  } else {
    Object.assign(TabItemStyle, itemStyle);
  }

  return (
    <div className={classItem} style={TabItemStyle} onClick={handleChange}>
      <div className="TabBar-item-container">
        {itemCountLength === 1 ? (
          <>
            {props.icon && <Icon kind={props.icon} color={props.selected ? 'blue' : 'grey'} />}
            <span style={spanStyle}>{props.children}</span>
          </>
        ) : (
          <>
            {props.selected ? props.children[1] : props.children[2]}
            <span style={spanStyle}>{props.children[0]}</span>
          </>
        )}
      </div>
    </div>
  );
};

TabBarItem.defaultProps = {
  selected: false,
};

TabBarItem.proptypes = {
  selected: PropTypes.bool,
  icon: PropTypes.string,
  tabBarItemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default React.memo(TabBarItem);
