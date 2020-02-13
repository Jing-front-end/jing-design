import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
// import { tuple } from '../_util/type';

import '../_style/index.less';
import './index.less';

export interface ColProps {
  lg?: any;
  md?: any;
  sm?: any;
  xl?: any;
  xs?: any;
  className?: string;
  children?: string;
  // onClick?: (e: any) => void;
}

const Col = (props: ColProps) => {
  const { lg, md, sm, xl, xs, children } = props;

  // console.log('xs', typeof xs)
  // console.log('xs1111', xs)

  const _lg = (typeof lg === 'string' || typeof lg === 'number') && `col-lg-${lg}`;
  const _md = (typeof md === 'string' || typeof md === 'number') && `col-md-${md}`;
  const _sm = (typeof sm === 'string' || typeof sm === 'number') && `col-sm-${sm}`;
  const _xl = (typeof xl === 'string' || typeof xl === 'number') && `col-xl-${xl}`;
  const _xs = (typeof xs === 'string' || typeof xs === 'number') && `col-${xs}`;

  const _lgBoolean = typeof lg === 'boolean' && `col-lg`;
  const _mdBoolean = typeof md === 'boolean' && `col-md`;
  const _smBoolean = typeof sm === 'boolean' && `col-sm`;
  const _xlBoolean = typeof xl === 'boolean' && `col-xl`;
  const _xsBoolean = typeof xs === 'boolean' && `col`;

  let defaultClass = 'col';

  if (typeof lg !== 'undefined') defaultClass = '';
  if (typeof md !== 'undefined') defaultClass = '';
  if (typeof sm !== 'undefined') defaultClass = '';
  if (typeof xl !== 'undefined') defaultClass = '';
  if (typeof xs !== 'undefined') defaultClass = '';

  // tslint:disable-next-line:one-variable-per-declaration
  let _xsOrder, _mdOrder, _mdOffset, _mdSpan;
  if (typeof xs === 'object') {
    const { order } = xs;
    if (order !== undefined) _xsOrder = `order-${order}`;
    defaultClass = 'col';
  }
  if (typeof md === 'object') {
    const { span, offset, order } = md;
    // console.log('order', md.order !== undefined)
    if (span !== undefined) _mdSpan = `col-md-${span}`;
    if (order !== undefined) _mdOrder = `order-${order}`;
    if (offset !== undefined) _mdOffset = `offset-md-${offset}`;
  }

  const classes = classNames(
    defaultClass,
    _lg,
    _md,
    _sm,
    _xl,
    _xs,
    _lgBoolean,
    _mdBoolean,
    _smBoolean,
    _xlBoolean,
    _xsBoolean,
    _xsOrder,
    _mdSpan,
    _mdOrder,
    _mdOffset,
  );

  return <div className={classes}>{children}</div>;
};

Col.defaultProps = {};

const colSize = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(['auto']),
]);

const stringOrNumber = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const column = PropTypes.oneOfType([
  colSize,
  PropTypes.shape({
    size: colSize,
    order: stringOrNumber,
    offset: stringOrNumber,
  }),
]);

Col.propTypes = {
  lg: column,
  md: column,
  sm: column,
  xl: column,
  xs: column,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default React.memo(Col);
