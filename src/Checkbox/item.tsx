import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { CheckboxItemProps } from './Checkbox';

import classnames from 'classnames';

// export interface CheckboxItemProps {
//   className: string;
//   style: React.CSSProperties;
//   // Checkbox的值
//   label: string;
//   value: boolean;
//   disabled: boolean;
//   onChange: () => void;
// }

function useCheckValue(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  const updateValue = (res: any) => {
    setValue(res);
  };
  return { value, updateValue };
}

function useCheckDisabled(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  const updateValue = (res: any) => {
    setValue(res);
  };
  return { value, updateValue };
}

const Item = (props: CheckboxItemProps) => {
  const { className, style, label, value, disabled, onChange } = props;

  const classes = classnames('jqb-Checkbox-item', className, {
    'jqb-Checkbox-selected': value,
    'jqb-Checkbox-disabled': disabled,
  });
  const oValue = useCheckValue(value);
  const oDisabled = useCheckDisabled(disabled);

  useEffect(() => {
    oValue.updateValue(value);
  }, [value]);

  useEffect(() => {
    oDisabled.updateValue(disabled);
  }, [disabled]);

  return (
    <div
      className={classes}
      style={style}
      onClick={() => {
        if (disabled) {
          return;
        }
        onChange();
      }}
    >
      <span className="icon" />
      <span className="name">{label}</span>
    </div>
  );
};

Item.defaultProps = {
  className: '',
  style: null,
  label: '',
  value: false,
  disabled: false,
  onChange: function() {},
};

Item.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default React.memo(Item);
