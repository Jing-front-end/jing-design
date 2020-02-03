import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Group from './group';
import Input from './input';

function Inner(props: any) {
  return (
    <>
      <Input {...props} />
      <div className="group-suffix">{props.render()}</div>
    </>
  );
}

export default (props: any) => {
  const { className } = props;
  return (
    <Group className={classnames('jqb-input-group-suffix', className)}>
      <Inner {...props} className={null} />
    </Group>
  );
};
