import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const TabNavNoborder = tuple('top', 'bottom', 'none');
const TabNavType = tuple('top', 'dock', 'nav');

export interface TabNavProps {
  currentIndex: number;
  list: Array<NavList>;
  onClick: () => void;
  noborder?: string;
  type?: string;
}

interface NavList {
  id: string;
  title: string;
  icon: string;
}

function setListItem(
  list: Array<NavList>,
  currentIndex: number,
  onClick: (currentIndex: number) => void,
) {
  const tempJSX = list.map((item, index) => {
    const classes = classNames('TabNav__tab', {
      ['TabNav__tab_state_current']: currentIndex === index,
    });

    return (
      <div
        key={item.id}
        onClick={() => {
          if (typeof onClick === 'function') {
            onClick(currentIndex);
          }
        }}
        className={classes}
      >
        <Icon kind={currentIndex === index ? `${item.icon}_orange` : item.icon} />
        <span className="TabNav__tab-text">{item.title}</span>
      </div>
    );
  });
  return tempJSX;
}

const TabNav = (props: TabNavProps) => {
  const { list, type, currentIndex, noborder, onClick } = props;

  const classes = classNames('TabNav', {
    [`am-g-${list.length}`]: list.length,
    ['am-pos-fixt']: type === 'top',
    ['am-pos-fixb']: type === 'dock',
    ['TabNav__type_dock']: type === 'dock',
    ['am-no-borderTop']: noborder === 'top' || type === 'top',
    ['am-no-borderBottom']: noborder === 'bottom' || type === 'dock',
  });

  return (
    <div className={classes}>
      {setListItem(list, currentIndex, onClick)}
      {type !== 'dock' && (
        <div
          className="TabNav__currentBar"
          style={{ width: `${100 / list.length}%`, left: `${(100 / list.length) * currentIndex}%` }}
        />
      )}
    </div>
  );
};

TabNav.defaultProps = {
  currentIndex: 0,
};

TabNav.propTypes = {
  currentIndex: PropTypes.number,
  list: PropTypes.array,
  onClick: PropTypes.func,
  noborder: PropTypes.oneOf(TabNavNoborder),
  type: PropTypes.oneOf(TabNavType),
};

export default React.memo(TabNav);
