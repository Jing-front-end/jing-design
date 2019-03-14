import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';

import '../_style/index.less';
import './index.less';

const ButtonGroupType = tuple('small', 'full', 'two-col', 'three-col');

export interface GroupProps {
  type?: string;
  children: any;
  className?: string;
}

const ButtonGroup = (props: GroupProps) => {
  const { type, children, className } = props;

  const classes = classNames('ButtonGroup', className, {
    [`ButtonGroup__type_${type}`]: type,
    [`am-g-${props.children.length}`]: Array.isArray(children),
    ['am-g-1']: !Array.isArray(children),
  });

  return <div className={classes}>{children}</div>;
};

ButtonGroup.propTypes = {
  type: PropTypes.oneOf(ButtonGroupType),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(ButtonGroup);
