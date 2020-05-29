import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface CheckboxProps {
  list: Array<CheckboxItemProps>;
  onClick: (index: number) => void;
}

interface CheckboxItemProps {
  title: string;
  value: string;
  checked: boolean;
}

function ListItemClicked(onClick: (index: number) => void, index: number) {
  if (typeof onClick === 'function') {
    onClick(index);
  }
}

function setListItem(item: CheckboxItemProps, index: number, onClick: (index: number) => void) {
  const { title, value, checked } = item;

  return (
    <div
      key={value}
      className="ListCheckbox"
      onClick={() => {
        ListItemClicked(onClick, index);
      }}
    >
      <span className="ListCheckbox__icon">
        <Icon kind={checked === true ? 'checkbox_state_on' : 'checkbox'} />
      </span>
      <span className="ListCheckbox__content">
        <span className="ListCheckbox__content-title">{title}</span>
      </span>
    </div>
  );
}

const Checkbox = (props: CheckboxProps) => {
  const { list, onClick } = props;

  return (
    <div className="am-group">
      {list.map((item: CheckboxItemProps, index: number) => setListItem(item, index, onClick))}
    </div>
  );
};

Checkbox.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
};

export default React.memo(Checkbox);
