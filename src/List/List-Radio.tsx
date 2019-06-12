import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import { util } from '..';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const typeKind = tuple('payment', 'custom');
const secondTypeKind = tuple('offline', 'online');

export interface ListRadioProps {
  type: string;
  secondType: string;
  list: Array<RadioItemProps>;
  onClick: (index: number) => void;
}

interface RadioItemProps {
  title: string;
  value: string;
  icon: string;
  titleDesc: string;
  desc: string;
  rc: string;
  type: string;
  disable: boolean;
  checked: boolean;
}

function ListItemClicked(onClick: (index: number) => void, index: number) {
  if (typeof onClick === 'function') {
    onClick(index);
  }
}

function setListItem(
  type: string,
  secondType: string,
  item: RadioItemProps,
  index: number,
  onClick: (index: number) => void,
) {
  const { disable, value, icon, title, titleDesc, desc, rc, checked } = item;

  const classes = classNames('ListRadio', 'ListRadio__type_payment', {
    [`ListRadio__state_disable`]: secondType !== 'offline' && disable === true,
  });

  //支付模式
  if (type === 'payment') {
    return (
      <div
        key={value}
        className={classes}
        onClick={() => {
          ListItemClicked(onClick, index);
        }}
      >
        <span className="ListRadio__content">
          <Icon icon={icon} />
          <p className="ListRadio__content-title">
            {title}{' '}
            <span className="ListRadio__content-title-desc">
              {secondType !== 'offline' ? titleDesc : '线下汇款'}
            </span>
          </p>
          <p className="ListRadio__content-desc">{secondType !== 'offline' ? desc : ''}</p>
          <span className="ListRadio__content-rc">{secondType !== 'offline' ? rc : ''}</span>
        </span>
        {checked === true ? (
          <span className="ListRadio__icon">
            <Icon icon="radio_type2_state_on" />
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
  //radio模式
  else {
    return (
      <div
        key={value}
        className="ListRadio"
        onClick={() => {
          ListItemClicked(onClick, index);
        }}
      >
        <span className="ListRadio__icon">
          <Icon icon={checked === true ? 'radio_state_on' : 'radio'} />
        </span>
        <span className="ListRadio__content">
          <span className="ListRadio__content-title">{title}</span>
        </span>
      </div>
    );
  }
}

const ListRadio = (props: ListRadioProps) => {
  const { type, secondType, list, onClick } = props;

  return (
    <div className="am-group">
      {list.map((item: RadioItemProps, index: number) =>
        setListItem(type, secondType, item, index, onClick),
      )}
    </div>
  );
};

ListRadio.propTypes = {
  type: PropTypes.oneOf(typeKind),
  secondType: PropTypes.oneOf(secondTypeKind),
  list: PropTypes.array,
};

export default React.memo(ListRadio);
