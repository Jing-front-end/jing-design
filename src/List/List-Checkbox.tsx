import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface CheckboxProps {
  list: Array<CheckboxItemProps>;
}

interface CheckboxItemProps {
  title: string;
  value: string;
  checked: boolean;
  onClick: (index: number) => void;
}

function ListItemClicked(onClick: (index: number) => void, index: number) {
  if (typeof onClick === 'function') {
    onClick(index);
  }
}

function setListItem(item: CheckboxItemProps, index: number) {
  const { title, value, checked, onClick } = item;

  return (
    <div
      key={value}
      className="ListCheckbox"
      onClick={() => {
        ListItemClicked(onClick, index);
      }}
    >
      <span className="ListCheckbox__icon">
        <Icon icon={checked === true ? 'checkbox_state_on' : 'checkbox'} />
      </span>
      <span className="ListCheckbox__content">
        <span className="ListCheckbox__content-title">{title}</span>
      </span>
    </div>
  );
}

const Checkbox = (props: CheckboxProps) => {
  const { list } = props;

  return (
    <div className="am-group">
      {list.map((item: CheckboxItemProps, index: number) => setListItem(item, index))}
    </div>
  );
};

Checkbox.propTypes = {
  list: PropTypes.array,
};

export default React.memo(Checkbox);
