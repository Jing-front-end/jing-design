import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import Icon from '../Icon/index';
import Mask from '../Mask/index';

import './index.less';
/**
 * Drawer 抽屉组件
 * @param {children} React.ReactNode 内容
 * @param {className} string 抽屉组件样式
 * @param {visible} bool 抽屉是否可见
 * @param {closable} bool 是否显示右上角的关闭按钮
 * @param {destroyOnClose} bool 关闭时毁灭里面的子元素
 * @param {getContainer} HTMLElement 指定 Drawer 挂载的 HTML 节点，false 为挂载在当前的 dom
 * @param {maskClosable} bool 点击蒙层是否允许关闭抽屉
 * @param {mask} bool 是否展示遮罩
 * @param {width} string 抽屉高度
 * @param {zIndex} number 抽屉层级
 * @param {placement} string 抽屉方向
 * @param {onClose} function 点击关闭时的回调
 **/
export interface DrawerProps {
  children: React.ReactNode;
  className: string;
  visible: boolean;
  closable: boolean;
  destroyOnClose: boolean;
  getContainer: any;
  maskClosable: boolean;
  mask: boolean;
  width: string;
  zIndex: number;
  placement: string;
  onClose: () => void;
}

const Drawer = (props: DrawerProps) => {
  const {
    children,
    className,
    visible,
    closable,
    destroyOnClose,
    getContainer,
    maskClosable,
    mask,
    width,
    zIndex,
    placement,
    onClose,
  } = props;

  const [isShow, setIsShow] = React.useState(false);
  const [isDesChild, setIsDesChild] = React.useState(false);

  const handleClose = () => {
    // tslint:disable-next-line:no-unused-expression
    onClose && onClose();
    setIsShow(prev => {
      if (getContainer !== false && prev) {
        getContainer.style.overflow = 'auto';
      }
      return false;
    });
    if (destroyOnClose) {
      setIsDesChild(true);
    }
  };

  React.useEffect(() => {
    setIsShow(() => {
      if (getContainer !== false && visible) {
        // console.log('aa')
        getContainer.style.overflow = 'hidden';
      }
      return visible;
    });
    setIsDesChild(false);
  }, [visible, getContainer]);

  const classes = classNames('jqb-drawer', className);

  const drawerDom = (
    <div
      className={classes}
      style={{
        position: getContainer === false ? 'absolute' : 'fixed',
        width: isShow ? '100%' : '0',
        zIndex: zIndex,
      }}
    >
      {!!mask && (
        <Mask
          style={{ position: 'absolute', zIndex: 0 }}
          onClick={maskClosable ? handleClose : null}
        />
      )}
      <div
        className="jqb-drawer-content"
        style={{
          width,
          [placement]: isShow ? 0 : '-100%',
        }}
      >
        {isDesChild ? null : children}
        {!!closable && <Icon kind="close" className="jqb-drawer-close" onClick={handleClose} />}
      </div>
    </div>
  );

  return getContainer === false ? drawerDom : ReactDOM.createPortal(drawerDom, getContainer);
};

Drawer.defaultProps = {
  closable: true,
  getContainer: document.body,
  maskClosable: true,
  mask: true,
  width: '300px',
  zIndex: 10,
  placement: 'bottom',
};

Drawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
  getContainer: PropTypes.object,
  maskClosable: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  zIndex: PropTypes.number,
  placement: PropTypes.string,
  onClose: PropTypes.func,
};

export default React.memo(Drawer);
