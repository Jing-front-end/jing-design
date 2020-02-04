import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface LoadingProps {
  size?: string;
}

const Loading = (props: LoadingProps, {}) => {
  const { size } = props;

  return (
    <div className="jqb-loading">
      <span className="jqb-loading__spinners" style={{ fontSize: size }}>
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
        <i className="jqb-loading__spinner" />
      </span>
    </div>
  );
};

Loading.defaultProps = {
  size: '24px',
};

Loading.propTypes = {
  size: PropTypes.string,
};

export default React.memo(Loading);
