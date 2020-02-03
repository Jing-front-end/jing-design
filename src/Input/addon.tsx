import * as React from 'react';
import classnames from 'classnames';

import Input from './input';
import Group from './group';

function Inner(props: any) {
  return (
    <>
      <Input {...props} />
      <div className="jqb-add-right">{props.render()}</div>
    </>
  );
}

export default (props: any) => {
  const { className, style } = props;
  return (
    <Group className={classnames('jqb-input-group-addon', className)} style={style}>
      <Inner {...props} className={null} style={null} />
    </Group>
  );
};
