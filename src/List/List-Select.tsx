import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

export interface ListSelectProps {
  icon: string;
  title: string;
  list: Array<ListSelectItemProps>;
  onSelected: (index: number) => void;
}

interface ListSelectItemProps {
  title: string;
  value: string;
  selected: boolean;
}

function onSelect(
  setIsSelect: (bool: boolean) => void,
  onSelected: (index: number) => void,
  index: number,
) {
  setIsSelect(true);
  if (typeof onSelected === 'function') {
    onSelected(index);
  }
}

const ListSelect = (props: ListSelectProps) => {
  const { icon, title, list, onSelected } = props;

  let listHasSelected = false;
  let defaultValue = 'none';
  for (let i = 0; i < list.length; i++) {
    if (list[i].selected === true) {
      defaultValue = list[i].value;
      listHasSelected = true;
    }
  }
  const [isSelect, setIsSelect] = React.useState(listHasSelected);

  const classes = classNames('ListSelect__content', {
    [`ListSelect__content_state_hasicon`]: icon !== undefined,
    [`ListSelect__content_state_on`]: isSelect === true,
  });

  return (
    <div className="ListSelect">
      <span className="ListSelect__icon">
        <Icon icon={icon} />
      </span>
      <span className={classes}>
        <select
          className="ListSelect__content-select"
          onChange={e => {
            onSelect(setIsSelect, onSelected, e.target.selectedIndex - 1);
          }}
          defaultValue={defaultValue}
        >
          <option
            className="ListSelect__content-select-option ListSelect__content-select-option_type_title"
            value="none"
            disabled
          >
            {title}
          </option>
          {list.map((item: ListSelectItemProps, index: number) => (
            <option
              key={item.value}
              className="ListSelect__content-select-option"
              value={item.value}
            >
              {item.title}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

ListSelect.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.array,
  onSelected: PropTypes.func,
};

export default React.memo(ListSelect);
