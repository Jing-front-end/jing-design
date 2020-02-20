/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

export { default as util } from './_util';
export { default as Button } from './Button';
export { default as CardList } from './CardList';
export { default as Carousel } from './Carousel';
export { default as Icon } from './Icon';
export { default as List } from './List';
export { default as NoticeBar } from './NoticeBar';
export { default as Scroll } from './Scroll';
export { default as Space } from './Space';
export { default as TabContent } from './TabContent';
export { default as TabNav } from './TabNav';
export { default as TagList } from './TagList';

// 布局
export { default as Container } from './Layout';
export { default as Row } from './Layout/Row';
export { default as Col } from './Layout/Col';

// 基础组件
export { default as Loading } from './Loading';

// 视图组件
export { default as Mask } from './Mask';

// 数据展示
export { default as ProductCard } from './ProductCard';
export { default as Tag } from './Tag';
// export { default as Chart } from './Chart';

// 操作反馈
export { default as PopupOld } from './PopupOld';
export { default as Popup } from './Popup';
export { default as Modal } from './Modal';
export { default as Toast } from './Toast';

// test
// export { default as PopupTest } from './ModalPopup';