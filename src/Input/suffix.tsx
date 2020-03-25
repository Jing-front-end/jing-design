import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Group from './group';
import Clear from './clear';

function Inner(props: any) {
  return (
    <>
      <Clear {...props} />
      <div className="group-suffix">{props.render()}</div>
    </>
  );
}

export default (props: any) => {
  const { className } = props;
  return (
    <Group className={classnames('jqb-input__group-suffix', className)}>
      <Inner {...props} className={null} />
    </Group>
  );
};
