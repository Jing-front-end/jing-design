import React from 'react';
import '../_style/index.less';
import './index.less';
import { util } from '../';

export interface GroupProps {
  type: string;
  children: any;
}

export default React.memo((props: GroupProps) => {
  const setProps = () => {
    let className = '';
    if (props.type) {
      className = util.addClass(className, `ButtonGroup__type_${props.type}`);
    }
    Array.isArray(props.children)
      ? (className = util.addClass(className, `am-g-${props.children.length}`))
      : (className = util.addClass(className, 'am-g-1'));
    return className;
  };
  return <div className={util.addClass('ButtonGroup', setProps())}>{props.children}</div>;
});
