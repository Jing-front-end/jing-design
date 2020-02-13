import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

import Group from './group';
import Input from './input';

function Inner(props: any) {
  return (
    <>
      <div className="group-prefix-left">{props.render()}</div>
      <Input {...props} />
    </>
  );
}

export default (props: any) => {
  const { className, style } = props;
  return (
    <Group className={classnames('jqb-input-group-prefix', className)} style={style}>
      <Inner {...props} className={null} style={null} />
    </Group>
  );
};
