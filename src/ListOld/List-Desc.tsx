import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface ListDescProps {
  children: any;
}

const ListDesc = (props: ListDescProps) => {
  const { children } = props;

  return <div className="ListDesc">{children}</div>;
};

ListDesc.propTypes = {
  children: PropTypes.any,
};

export default React.memo(ListDesc);
