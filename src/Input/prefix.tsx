import * as React from 'react';
// import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon';

import Group from './group';
import { InputProps } from './input';

function Inner(props: InputProps) {
  return (
    <>
      <div className="jqb-input__group-prefix-left">{props.icon && <Icon kind={props.icon} />}</div>
      {props.children}
    </>
  );
}

export default (props: InputProps) => {
  const { className, style } = props;
  return (
    <Group className={classnames('jqb-input__group-prefix', className)} style={style}>
      <Inner {...props} />
    </Group>
  );
};
