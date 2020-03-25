import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

export interface GroupProps {
  className?: string;
  children?: React.ReactChild;
  style?: React.CSSProperties;
}

const Group = (props: GroupProps) => {
  const { className, children, style } = props;

  return (
    <div className={classnames('jqb-list__group', className)} style={style}>
      {children}
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.node,
};

export default React.memo(Group);
