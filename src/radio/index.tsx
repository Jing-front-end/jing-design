import './index.less';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Item({ data, selected, onSelected }: any) {
  return (
    <div
      className={classnames(
        'item',
        { selected: selected === data.value },
        { disabled: data.disabled },
      )}
      onClick={() => {
        // tslint:disable-next-line:no-unused-expression
        !data.disabled && onSelected(data);
      }}
    >
      <span className="icon" />
      <span className="name">{data.label}</span>
    </div>
  );
}

function useRadioList(initialValue: any) {
  const [list, setList] = useState(initialValue);
  const updateData = (res: any) => {
    setList(res);
  };
  return { list, updateData };
}

function useRadioData(initialValue = null) {
  const [data, setData] = useState(initialValue);

  const onSelected = (res: any, fn: any) => {
    setData(res.value);
    fn(res);
  };

  const updateData = (res: any) => {
    setData(res);
  };

  return { data, onSelected, updateData };
}

function Radio(props: any) {
  const { className, style, data, selected, onChange } = props;

  const oList = useRadioList(data.slice(0));
  const oData = useRadioData(selected);

  useEffect(() => {
    oList.updateData(data);
  }, [data]);

  useEffect(() => {
    oData.updateData(selected);
  }, [selected]);

  return (
    <div className={classnames('jqb-radio', className)} style={style}>
      {oList.list.map((item: any) => {
        return (
          <Item
            key={item.value}
            data={item}
            selected={oData.data}
            onSelected={(res: any) => {
              oData.onSelected(res, onChange);
            }}
          />
        );
      })}
    </div>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  className: '',
  data: [],
  style: null,
  onChange: function() {},
};

export default React.memo(Radio);
