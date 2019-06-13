import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface TabContentProps {
  state: string;
  children: any;
}

const TabContent = (props: TabContentProps) => {
  const { state, children } = props;

  return <div className={`TabContent TabContent__state_${state}`}>{children}</div>;
};

TabContent.propTypes = {
  current: PropTypes.string,
  children: PropTypes.any,
};

export default React.memo(TabContent);
