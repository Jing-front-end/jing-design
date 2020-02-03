import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';

import classnames from 'classnames';

import Item from './item';

export interface CheckboxProps {
  className: string;
  style: React.CSSProperties;
  // 选项
  data: any;
  // 选中的项
  selected: any;
  onChange: any;
}

export interface CheckboxItemProps {
  key: string;
  className: string;
  style: React.CSSProperties;
  // Checkbox的值
  label: string;
  value: boolean;
  disabled: boolean;
  // onChange: () => void;
  onChange: any;
}

function useCheckList(initialValue: any) {
  const [list, setList] = useState(initialValue);
  const updateData = (res: any) => {
    setList(res);
  };
  return { list, updateData };
}

function useCheckData(initialValue: any) {
  const [data, setData] = useState(initialValue);
  const onSelected = (res: any, fn: any, e: any) => {
    const selected = data.slice(0);
    const index = selected.indexOf(res.value);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(res.value);
    }
    setData(selected);
    fn(selected, e);
  };

  const updateData = (res: any) => {
    setData(res);
  };

  return { data, onSelected, updateData };
}

const Checkbox = (props: CheckboxProps) => {
  const { className, style, data, selected, onChange } = props;

  const oList = useCheckList(data.slice(0));
  const oData = useCheckData(selected.slice(0));

  // console.log('oList', oList);
  // console.log('oData', oData);

  useEffect(() => {
    oList.updateData(data);
  }, [data]);

  useEffect(() => {
    oData.updateData(selected);
  }, [selected]);

  return (
    <div className={classnames('jqb-checkbox-group', className)} style={style}>
      {oList.list.map((item: any) => {
        const isSelected = oData.data.indexOf(item.value) > -1;
        return (
          <Item
            key={item.value}
            label={item.label}
            disabled={item.disabled}
            value={isSelected}
            onChange={e => {
              oData.onSelected(item, onChange, e);
            }}
          />
        );
      })}
    </div>
  );

  // return (
  //   <div className={classnames('jqb-checkbox-group', className)} style={style}>
  //     {
  //       options.map((item: CheckboxItemProps) => (
  //         <Item
  //           disabled={item.disabled}
  //           label={item.label}
  //           onChange={item.onChange}
  //         />
  //       ))
  //     }
  //   </div>
  // )
};

Checkbox.defaultProps = {
  className: '',
  style: null,
  data: null,
  selected: null,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.array,
  selected: PropTypes.array,
};

export default React.memo(Checkbox);
