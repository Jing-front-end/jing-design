import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';
import Button from '../Button/index';

import '../_style/index.less';
import './index.less';

export interface ListButtonProps {
  icon?: string;
  title: string;
  desc?: string;
  buttonArray: Array<ButtonItemProps>;
}

interface ButtonItemProps {
  color: string;
  primary: boolean;
  onClick?: () => void;
}

const ListButton = (props: ListButtonProps) => {
  const { icon, title, desc, buttonArray } = props;

  const classes1 = classNames('ListButton__content', {
    [`ListButton__content_state_hasicon`]: icon !== undefined,
  });

  return (
    <div className="ListButton">
      {icon !== undefined ? (
        <span className="ListButton__icon">
          <Icon kind={icon} />
        </span>
      ) : (
        ''
      )}
      <span className={classes1}>
        <span className="ListButton__content-title">{title}</span>
        {!!desc ? <span className="ListButton__content-desc">{desc}</span> : ''}
      </span>
      <span className="ListButton__btn" style={{ width: 3.2 * buttonArray.length + 'rem' }}>
        <Button.Group type="group">
          {buttonArray.map((item: ButtonItemProps) => (
            <Button.Self primary={item.primary} color={item.color} onClick={item.onClick}>
              确认
            </Button.Self>
          ))}
        </Button.Group>
      </span>
    </div>
  );
};

ListButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  buttonArray: PropTypes.array,
};

export default React.memo(ListButton);
