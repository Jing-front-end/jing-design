import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { tuple } from '../_util/type';

import {
  JqbSuccess,
  JqbError,
  JqbEmpty,
  JqbLost,
  JqbError403,
  JqbError404,
  JqbError500,
} from './resultStatus';

import './index.less';

const resultStatus = tuple('success', 'error', 'empty', 'lost', '404', '403', '500');

export const ExceptionMap = {
  success: JqbSuccess,
  error: JqbError,
  empty: JqbEmpty,
  lost: JqbLost,
  '403': JqbError403,
  '404': JqbError404,
  '500': JqbError500,
};

export type ResultStatusType = keyof typeof ExceptionMap;

export interface ResultProps {
  title?: string;
  subTitle?: string;
  status?: ResultStatusType;
  extra?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const ExceptionStatus = Object.keys(ExceptionMap);

const renderIcon = ({ status }: ResultProps) => {
  if (ExceptionStatus.includes(status as ResultStatusType)) {
    const SVGComponent = ExceptionMap[status as ResultStatusType];
    return (
      <div className="jqb-result__icon">
        <SVGComponent />
      </div>
    );
  }
};

const Result = (props: ResultProps) => {
  const { title, subTitle, extra, className, children } = props;

  const _classes = classnames('jqb-result', className);

  return (
    <div className={_classes}>
      {renderIcon(props)}
      {title && <div className="jqb-result__title">{title}</div>}
      {subTitle && <div className="jqb-result__subTitle">{subTitle}</div>}
      {children && <div className="jqb-result__content">{children}</div>}
      {extra && <div className="jqb-result__extra">{extra}</div>}
    </div>
  );
};

Result.defaultProps = {
  status: 'empty',
};

Result.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  status: PropTypes.oneOf(resultStatus),
  extra: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Result;
