import * as React from 'react';
import classnames from 'classnames';

import Icon from '../icon';

export default (props: any) => {
  const { className, style, icon } = props;
  return (
    <div className={classnames('jqb-input-prefix', className)} style={style}>
      <Icon kind={icon} />
    </div>
  );
};
