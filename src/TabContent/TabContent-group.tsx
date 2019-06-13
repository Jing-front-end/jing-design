import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface TabContentGroupProps {
  current: number;
  children: any;
}

const TabContentGroup = (props: TabContentGroupProps) => {
  const { current } = props;
  let { children } = props;

  const length = React.Children.count(children);

  if (length === 1) {
    return React.cloneElement(children, {
      state: 'on',
    });
  } else if (length > 1) {
    children = children.map((item: any, index: number) => {
      const state = index === current ? 'on' : 'off';
      return React.cloneElement(item, {
        state: state,
        key: index,
      });
    });
  }

  return <div className="TabContentGroup">{children}</div>;
};

TabContentGroup.defaultProps = {
  current: 0,
};

TabContentGroup.propTypes = {
  current: PropTypes.number,
  children: PropTypes.any,
};

export default React.memo(TabContentGroup);
