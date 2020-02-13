import * as React from 'react';
import classnames from 'classnames';
import { tuple } from '../_util/type';

import Icon from '../icon';

import { InputSizes } from './input';
import SuffixComponent from './suffix';
import PrefixComponent from './prefix';

const ClearableInputType = tuple('text', 'input', 'password');

interface BasicProps {
  inputType: (typeof ClearableInputType)[number];
  value?: any;
  allowClear?: boolean;
  element: React.ReactElement<any>;
  handleReset: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  style?: object;
  disabled?: boolean;
}

interface ClearableInputProps extends BasicProps {
  size?: (typeof InputSizes)[number];
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

class ClearableLabeledInput extends React.Component<ClearableInputProps> {
  renderClearIcon() {
    const { allowClear, value, disabled, inputType, handleReset } = this.props;
    if (!allowClear || disabled || value === undefined || value === null || value === '') {
      return null;
    }
    const classes = classnames(
      inputType === ClearableInputType[0] ? 'jqb-textarea-clear-icon' : 'jqb-clear-icon',
    );

    return (
      <span className={classes} onClick={handleReset}>
        <Icon kind="close" />
      </span>
    );
  }

  renderSuffix() {
    const { suffix, allowClear } = this.props;
    if (suffix || allowClear) {
      return (
        <span className="jqb-input-suffix">
          {this.renderClearIcon}
          {suffix}
        </span>
      );
    }
    return null;
  }

  renderLabeledIcon(element: React.ReactElement<any>) {
    const props = this.props;
    const suffix = this.renderSuffix();

    const prefix = props.prefix ? <span className="jqb-input-prefix">{props.prefix}</span> : null;

    const classes = classnames('jqb-input', props.className);

    return (
      <span className={classes}>
        {prefix}
        {React.cloneElement(element, {
          style: null,
          value: props.value,
        })}
        {suffix}
      </span>
    );
  }

  renderPassword() {
    const { suffix, allowClear } = this.props;
    if (suffix || allowClear) {
      return (
        <span className="jqb-input-suffix">
          {this.renderClearIcon}
          {suffix}
        </span>
      );
    }
    return null;
  }

  renderInputWithLabel(labeledElement: React.ReactElement<any>) {
    const { style, size, className } = this.props;

    const classes = `jqb-input-group`;

    return (
      <span className={classes} style={style}>
        {React.cloneElement(labeledElement, { style: null })}
      </span>
    );
  }

  renderTextAreaWithClearIcon(element: React.ReactElement<any>) {
    const { value, allowClear, className, style } = this.props;
    if (!allowClear) {
      return React.cloneElement(element, {
        value,
      });
    }
    const classes = classnames(className, 'jqb-textarea');

    return (
      <span className={classes} style={style}>
        {React.cloneElement(element, {
          style: null,
          value,
        })}
        {this.renderClearIcon()}
      </span>
    );
  }

  renderClearableLabeledInput() {
    const { inputType, element } = this.props;
    if (inputType === ClearableInputType[0]) {
      return this.renderTextAreaWithClearIcon(element);
    } else {
      return this.renderInputWithLabel(this.renderLabeledIcon(element));
    }
  }

  render() {
    return this.renderClearableLabeledInput();
  }
}

export default ClearableLabeledInput;
