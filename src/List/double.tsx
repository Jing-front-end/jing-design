import * as React from 'react';
import classnames from 'classnames';

import Group from './group';
import List, { ListProps } from './list';
import Icon from '../Icon';

function Inner(props: ListProps) {
  return (
    <>
      <List
        {...props}
        onClick={e => {
          // console.log('点击链接')
          // tslint:disable-next-line:no-unused-expression
          props.onLink && props.onLink(e);
        }}
      />
      <Icon className="link-btn" kind="arrow" size="small" />
    </>
  );
}

export default (props: ListProps) => {
  const { className } = props;
  return (
    <Group className={classnames('jqb-list__group-link', className)}>
      <Inner {...props} />
    </Group>
  );
};
