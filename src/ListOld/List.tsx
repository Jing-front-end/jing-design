import * as React from 'react';

import '../_style/index.less';
import './index.less';

export interface ListProps {
  children: any;
}

const List = (props: ListProps) => {
  const { children } = props;

  return <div className="List">{children}</div>;
};

export default React.memo(List);
