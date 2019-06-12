import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const pwdLength = 6;

export interface PopupPasscodeProps {
  title: string;
  onForgetPwd: () => void;
  onCancel: (value: string) => void;
}

function handleCancel(onCancel: (value: string) => void, value: string) {
  // this.tempScrollTop = [];
  // document.getElementById('popupCustomContent').scrollTop = 0;
  if (typeof onCancel === 'function') {
    onCancel(value);
  }
}

// handleChange(value) {
//   let _this = this;
//   this.setState({
//       value: value,
//   });
//   if (value.length === pwdLength) {
//       this.setState({
//           done:true,
//       });
//       setTimeout(function(){
//           _this.handleSubmit(value);
//       },util.global.speed);
//   }else{
//       this.setState({
//           done:false,
//       });
//   }
// }
// handleClear() {
//   typeof (this.props.onClear) === 'function' && this.props.onClear();
// }
// handleSubmit(value) {
//   typeof (this.props.onSubmit) === 'function' && this.props.onSubmit(value);
// }
function handleForgetPwd(onForgetPwd: () => void) {
  if (typeof onForgetPwd === 'function') {
    onForgetPwd();
  }
}
// setValueClear() {
//   this.refs.keyboard.setValueClear();
//   this.setState({
//       value:'',
//   });
// }
function setPasswordDom(value: string) {
  const tempJSX = [];
  for (let i = 0; i < pwdLength; i++) {
    tempJSX.push(
      <span
        key={i}
        className={
          value.length > i
            ? `Popup__content-text Popup__content-text_state_true`
            : `Popup__content-text`
        }
      />,
    );
  }
  return tempJSX;
}

const PopupPasscode = (props: PopupPasscodeProps) => {
  const { title, onCancel, onForgetPwd } = props;

  const [value, setValue] = React.useState('');
  const [done, setDone] = React.useState(false);
  // const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="Popup__window PopupPasscode">
        <a
          className="Popup__btn Popup__btn_type_cancel"
          onClick={() => {
            handleCancel(onCancel, value);
          }}
        >
          <Icon icon="close" size="small" />
        </a>
        <h6 className="Popup__title">
          <span className="Popup__title-text">{title}</span>
        </h6>
        <div className={`Popup__content Popup__content_state_${done}`}>{setPasswordDom(value)}</div>
        <a
          className="Popup__forgetpwd"
          onClick={() => {
            handleForgetPwd(onForgetPwd);
          }}
        >
          忘记交易密码？
        </a>
      </div>
      {/* <Keyboard
              max={pwdLength}
              show={this.state.show}
              type='number'
              ref='keyboard'
              onCancel={(value) => {
                  this.handleCancel(value);
              }}
              onChange={(value) => {
                  this.handleChange(value);
              }}
              onClear={() => {
                  this.handleClear();
              }}
          /> */}
    </div>
  );
};

PopupPasscode.defaultProps = {
  title: '密码',
};

PopupPasscode.propTypes = {
  title: PropTypes.string,
  onForgetPwd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default React.memo(PopupPasscode);
