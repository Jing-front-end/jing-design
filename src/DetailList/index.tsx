import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.less';

export interface DetailProps {
  leftText?: string;
  rightChildren?: string | Node;
}

const DetailList = (props: DetailProps) => {
  const { leftText, rightChildren } = props;
  return (
    <div className="DetailList">
      <div className="DetailList-left">{leftText}</div>
      <div className="DetailList-right"> {rightChildren}</div>
    </div>
  );
};

DetailList.defaultProps = {
  leftText: '',
  rightChildren: '',
};

DetailList.propTypes = {
  leftText: PropTypes.string,
  rightChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default React.memo(DetailList);
