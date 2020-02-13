/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import classnames from 'classnames';

import './index.less';

export default class extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    option: PropTypes.object.isRequired,
    onInitChart: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    // eslint-disable-next-line react/default-props-match-prop-types
    option: {},
    onInitChart: null,
  };

  chart = null;

  componentDidMount() {
    const { option } = this.props;
    // eslint-disable-next-line react/no-string-refs
    this.chart = echarts.init(this.refs.echart);
    this.updateChart(option);
  }

  componentWillReceiveProps(props) {
    this.updateChart(props.option);
  }

  componentWillUnmount() {
    this.chart.dispose();
    this.chart = null;
  }

  updateChart(res) {
    const { onInitChart } = this.props;
    const defaultOption = {
      grid: {
        left: 30,
        right: 20,
        top: 20,
        bottom: 20,
      },
    };

    Object.assign(defaultOption, res);

    this.chart.setOption(defaultOption);
    // eslint-disable-next-line no-unused-expressions
    onInitChart && onInitChart(this.chart);
  }

  render() {
    const { className } = this.props;
    return (
      // eslint-disable-next-line react/no-string-refs
      <div className={classnames('jqb-echart', className)} ref="echart" />
    );
  }
}
