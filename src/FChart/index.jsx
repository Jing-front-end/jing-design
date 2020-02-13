import React from 'react';
import PropTypes from 'prop-types';
import F2 from '@antv/f2';

import './index.less';

export default class extends React.Component {
  // eslint-disable-next-line react/no-typos
  static PropTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    option: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    id: 'jqb-f2chart',
    className: '',
    option: {},
    creator: null,
    width: null,
    height: null,
    onClick: null,
  };

  chart = null;

  componentDidMount() {
    this.initChart();
  }

  componentWillReceiveProps(next) {
    const { option } = this.props;
    if (next.option !== option) {
      this.chart.changeData(next.option);
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
    this.chart = null;
  }

  handleClick = e => {
    const { onClick } = this.props;
    let point = {
      x: e.clientX,
      y: e.clientY,
    };
    point = F2.Util.getRelativePosition(point, this.chart.get('canvas'));
    // eslint-disable-next-line radix
    const x = parseInt(point.x);
    // eslint-disable-next-line radix
    const y = parseInt(point.y);
    // eslint-disable-next-line no-useless-concat
    console.log(`x:${x}; + y:${y}`);
    // 根据画布坐标获取对应数据集
    const data = this.chart.getSnapRecords(point);
    onClick(data);
  };

  initChart() {
    const { id, width, height, option } = this.props;
    const chart = new F2.Chart({
      id,
      width,
      height,
      pixelRatio: window.devicePixelRatio,
    });

    // creator(chart, option)
    // chart.source(option, {
    //   value: {
    //     tickCount: 5,
    //     min: 0,
    //   },
    //   date: {
    //     type: 'timeCat',
    //     range: [0, 1],
    //     tickCount: 3,
    //   },
    // });
    // // chart.tooltip({
    // //   custom: true,
    // //   showXTip: true,
    // //   showYTip: true,
    // //   snap: true,
    // //   crosshairsType: 'xy',
    // //   crosshairsStyle: {
    // //     lineDash: [2],
    // //   },
    // // });
    // chart.tooltip({
    //   showCrosshairs: true,
    //   onShow: function onShow(ev) {
    //     // eslint-disable-next-line prefer-destructuring
    //     const items = ev.items;
    //     items[0].name = items[0].title;
    //   }
    // });
    // chart.axis('date', {
    //   label: function label(_text, index, total) {
    //     const textCfg = {};
    //     if (index === 0) {
    //       textCfg.textAlign = 'left';
    //     } else if (index === total - 1) {
    //       textCfg.textAlign = 'right';
    //     }
    //     return textCfg;
    //   },
    // });
    // chart.line().position('date*value');
    // chart.render();

    chart.source(option);
    chart.scale({
      time: {
        range: [0, 1],
      },
      tem: {
        tickCount: 5,
        min: 0,
      },
    });
    chart.axis('time', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        }
        if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      onShow: function onShow(ev) {
        // eslint-disable-next-line prefer-destructuring
        const items = ev.items;

        items[0].name = items[0].title;
      },
    });

    chart.area().position('time*tem');
    chart.line().position('time*tem');
    chart.render();

    this.chart = chart;
  }

  render() {
    const { id, className } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <canvas
        id={id}
        className={className}
        onClick={e => {
          this.handleClick(e);
        }}
      />
    );
  }
}
