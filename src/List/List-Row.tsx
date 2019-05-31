import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const descColorKind = tuple(
  'red',
  'blue',
  'green',
  'orange',
  'yellow',
  'black0',
  'black1',
  'black2',
  'white0',
  'white1',
  'white2',
  'whiteA50',
);

export interface ListRowProps {
  icon: string;
  title: string;
  descColor: string;
  desc: string;
  href: string;
  autoBreak: boolean;
  onClick: () => void;
}

const ListRow = (props: ListRowProps) => {
  const { icon, title, descColor, desc, onClick, href, autoBreak } = props;

  const classes = classNames('ListRow', {
    [`ListRow__type_link`]: href || onClick,
    [`ListRow__type_break`]: autoBreak === true,
  });

  let tempJSX;

  const tempJSXInner = (
    <div>
      <span className="ListRow__icon">
        <Icon icon={icon} />
      </span>
      <span
        className={icon ? 'ListRow__content ListRow__content_state_hasicon' : 'ListRow__content'}
      >
        <span className="ListRow__content-title">{title}</span>
        <span
          className={
            descColor ? `ListRow__content-desc am-color-${descColor}` : 'ListRow__content-desc'
          }
        >
          {desc}
        </span>
      </span>
    </div>
  );

  if (href || onClick) {
    tempJSX = (
      <a className={classes} href={href} onClick={onClick}>
        {tempJSXInner}
      </a>
    );
  } else {
    tempJSX = <div className={classes}>{tempJSXInner}</div>;
  }
  return tempJSX;
};

ListRow.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  descColor: PropTypes.oneOf(descColorKind),
  desc: PropTypes.string,
  href: PropTypes.string,
  autoBreak: PropTypes.bool,
  onClick: PropTypes.func,
};

export default React.memo(ListRow);
