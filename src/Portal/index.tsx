// import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

// import './index.less';

// /**
//  * Portal 传送门组件
//  * @param {getContainer} HTMLElement 指定 Portal 挂载的 HTML 节点，false 为挂载在当前的 dom
//  * @param {visible} string 传送门是否可见
//  * @param {children} React.ReactNode 内容
//  **/
// export interface PortalProps {
//   getContainer: any;
//   visible: boolean;
//   children: React.ReactNode;
// }

// // const Portal = (props: PortalProps) => {
// //   const {getContainer, visible} = props;
// //   Class

// // }

// class Portal extends React.Component<PortalProps, {}> {
//   CONTAINER: HTMLElement;
//   _portal: HTMLElement;
//   constructor(props: PortalProps) {
//     super(props);
//     this.CONTAINER = props.getContainer ? props.getContainer() : document.querySelector('body');
//     this._portal = document.createElement('div');
//   }

//   componentDidMount() {
//     this.CONTAINER.appendChild(this._portal);
//   }

//   componentWillUnmount() {
//     if (this._portal) {
//       this.CONTAINER.removeChild(this._portal);
//     }
//   }

//   render() {
//     const { children, visible } = this.props;
//     // return (
//     //   <div>{children}</div>
//     // )
//     if (this.CONTAINER && visible) {
//       return ReactDOM.createPortal(children, this._portal);
//     }
//     return null;
//   }
// }

// export default Portal;
