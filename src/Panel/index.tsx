import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import '../_style/index.less';
import './index.less';

export interface PanelProps {
  className?: string;
  children?: string;
  panelTitle?: string;
}

const Panel = (props: PanelProps) => {
  const { children, panelTitle } = props;

  return (
    <div className="panel">
      <div className="panel__title">{panelTitle}</div>
      <div className="panel__content">{children}</div>
    </div>
  );
};

Panel.defaultProps = {};

Panel.propTypes = {};
export default React.memo(Panel);
