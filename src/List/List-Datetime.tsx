import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface ListDatetimeProps {
  icon: string;
  title: string;
}

const ListDatetime = (props: ListDatetimeProps) => {
  const { icon, title } = props;

  return (
    <div className="ListDatetime">
      <span className="ListDatetime__icon">
        <Icon icon={icon} />
      </span>
      <span
        className={
          icon
            ? 'ListDatetime__content ListDatetime__content_state_hasicon'
            : 'ListDatetime__content'
        }
      >
        <input type="date" className="ListDatetime__content-input" placeholder={title} />
      </span>
    </div>
  );
};

ListDatetime.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(ListDatetime);
