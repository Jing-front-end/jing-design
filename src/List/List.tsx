import React, { useState, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * List 列表组件
 * @param {className} string 列表组件样式名
 * @param {children} any 渲染的内容
 * @param {style} object input 的样式
 * @param {onLink} function 点击链接后的回调
 * @param {onClick} function 点击 Link 后的回调
 **/

export interface ListProps {
  className?: string;
  children?: any;
  style?: React.CSSProperties;
  onLink?: (e: any) => void;
  onClick?: (e: any) => void;
}

const List = (props: ListProps) => {
  const { className, children, style, onClick } = props;

  return (
    <div
      className={classnames('jqb-list', className)}
      style={style}
      onClick={e => {
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(e);
      }}
    >
      {children}
    </div>
  );
};

List.defaultProps = {
  className: '',
  style: null,
  onLink: function() {},
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  onLink: PropTypes.func,
};

export default React.memo(List);
