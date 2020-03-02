import * as React from 'react';
import * as PropTypes from 'prop-types';

import './index.less';

export interface DetailTopProps {
  bigText: String;
  text: String;
  desc: String;
  bigTextStyle?: React.CSSProperties;
}

const DetailTop = (props: DetailTopProps) => {
  const { bigText, text, desc, bigTextStyle } = props;
  return (
    <div className="DetailTop">
      <div className="DetailTop-bigtext" style={bigTextStyle}>
        {' '}
        {bigText}
      </div>
      <div className="DetailTop-text"> {text}</div>
      <div className="DetailTop-desc"> {desc}</div>
    </div>
  );
};

DetailTop.defaultProps = {
  bigText: '',
  text: '',
  desc: '',
};

DetailTop.propTypes = {
  bigText: PropTypes.string,
  text: PropTypes.string,
  desc: PropTypes.string,
  bigTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default React.memo(DetailTop);
