import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hcharts from 'react-highcharts';

export default class extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    option: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    option: {},
    className: '',
  };

  updateChart() {
    const { option } = this.props;

    const defaultOptions = {
      chart: {
        type: 'spline',
        alignTicks: true,
        marginRight: 20,
        renderTo: 'chart',
        height: '160px',
      },
    };

    Object.assign(defaultOptions, option);

    // console.log('defaultOptions', defaultOptions);

    // 全局配置
    // this.chart.setOptions(defaultOptions)
    // 主配置

    return defaultOptions;
  }

  // updateChart() {
  //   const { option, selected, util, tickPositions } = this.props;

  //   const onInitChart = {
  //     chart: {
  //       type: 'spline',
  //       alignTicks: true,
  //       marginRight: 20,
  //       renderTo: 'chart',
  //       height: '160px',
  //     },
  //     title: {
  //       text: '',
  //     },
  //     credits: {
  //       enabled: false,
  //     },
  //     xAxis: {
  //       type: 'datetime',
  //       tickLength: 10,
  //       tickPixelInterval: 50,
  //       labels: {
  //         step: 2,
  //       },
  //     },
  //     yAxis: {
  //       title: {
  //         text: '',
  //       },
  //       // tickPixelInterval: yTickPixelInterval,
  //       // tickAmount: yTickAmount,
  //       tickPositions,
  //       labels: {
  //         formatter() {
  //           if (util === '万') {
  //             return 'a'
  //           }
  //           return 'b'
  //         },
  //       },
  //       // min: minVal,
  //       // max: maxVal,
  //     },
  //     tooltip: {
  //       headerFormat: '<b>{point.x:%Y-%m-%d}</b><br/>',
  //       pointFormatter() {
  //         if (util === '万') {
  //           return `<span style="color:{point.color}">\u25CF</span>`;
  //         }
  //         if (selected === '2') {
  //           return `<span style="color:{point.color}">\u25CF</span>${this.y}元<br/>`;
  //         }
  //         return `<span style="color:{point.color}">\u25CF</span>${this.y}%<br/>`;
  //       },
  //       shared: true,
  //     },
  //     plotOptions: {
  //       spline: {
  //         marker: {},
  //       },
  //     },
  //     series: [
  //       {
  //         data: option,
  //       },
  //     ],
  //     legend: {
  //       enabled: false,
  //     },
  //   };
  //   return onInitChart;
  // }

  render() {
    const { className } = this.props;
    // eslint-disable-next-line react/jsx-filename-extension
    return <Hcharts className={classnames('Chart', className)} config={this.updateChart()} />;
  }
}
