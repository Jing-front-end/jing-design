import * as React from 'react';
import * as PropTypes from 'prop-types';
import { tuple } from '../_util/type';
import { util } from '..';
import List from '../List/index';

import '../_style/index.less';
import './index.less';

const typeKind = tuple('input', 'text');

export interface ListVerifymobileProps {
  mobileValue: string;
  verifyValue: string;
  type: string;
  hasIcon: boolean;
  title: string;
  setMobileValue: (value: string) => void;
  bankName: string;
  pkid: string;
  phoneCallShow: boolean;
  onMessageSend: () => void;
  setVerifyValue: (value: string) => void;
  onPhoneCall: () => void;
}

function onCall(onPhoneCall: () => void) {
  if (typeof onPhoneCall === 'function') {
    onPhoneCall();
  }
}

const ListVerifymobile = (props: ListVerifymobileProps) => {
  const {
    mobileValue,
    verifyValue,
    type,
    hasIcon,
    title,
    setMobileValue,
    bankName,
    pkid,
    phoneCallShow,
    onMessageSend,
    setVerifyValue,
    onPhoneCall,
  } = props;

  let tempJSX: any;
  let desc: any;
  if (type === 'input') {
    tempJSX = (
      <List.Input
        value={mobileValue}
        type="mobile"
        icon={hasIcon === true ? 'phone' : undefined}
        title={title}
        setValue={(v: string) => {
          if (typeof setMobileValue === 'function') {
            setMobileValue(v);
          }
        }}
      />
    );
  } else if (type === 'text') {
    tempJSX = (
      <List.Row
        icon={hasIcon === true ? 'phone' : ''}
        title={title}
        desc={util.shieldedMobile(desc)}
      />
    );
  }
  if (bankName) {
    desc = (
      <p className="am-align-right">
        您将收到来自<span className="am-color-orange">【{bankName}】</span>的验证短信
      </p>
    );
  } else {
    if (pkid) {
      if (phoneCallShow) {
        desc = <p className="am-align-right">您将收到我们的验证电话，请接听</p>;
      } else {
        desc = (
          <p className="am-align-right">
            验证码已发送，如果长时间未收到，
            <a
              href="javascript:void(0)"
              onClick={() => {
                onCall(onPhoneCall);
              }}
            >
              请点此语音验证
            </a>
          </p>
        );
      }
    } else {
      desc = (
        <p className="am-align-right">
          您将收到来自<span className="am-color-orange">【翼支付】</span>的验证短信
        </p>
      );
    }
  }
  return (
    <div
      className={
        phoneCallShow
          ? 'am-group ListVerifymobile ListVerifymobile__state_send'
          : 'am-group ListVerifymobile'
      }
    >
      {tempJSX}
      <List.Input
        value={verifyValue}
        setValue={(v: string) => {
          if (typeof setVerifyValue === 'function') {
            setVerifyValue(v);
          }
        }}
        icon={hasIcon === true ? 'keycode' : undefined}
        type="verifycode"
        onMessageSend={() => {
          onMessageSend();
        }}
      />
      <List.Desc>{desc}</List.Desc>
    </div>
  );
};

ListVerifymobile.propTypes = {
  mobileValue: PropTypes.string,
  verifyValue: PropTypes.string,
  type: PropTypes.oneOf(typeKind),
  hasIcon: PropTypes.bool,
  title: PropTypes.string,
  setMobileValue: PropTypes.func,
  bankName: PropTypes.string,
  pkid: PropTypes.string,
  phoneCallShow: PropTypes.bool,
  onMessageSend: PropTypes.func,
  setVerifyValue: PropTypes.func,
  onPhoneCall: PropTypes.func,
};

export default React.memo(ListVerifymobile);

// export default class ListVerifymobile extends Component {

//     bindValue(e) {
//         let value = e.target.value;
//         this.setState({value: value});
//         this.props.setValue && this.props.setValue(value);
//     }

//     onEndCountDown() {
//         this.setState({
//             messageSend:false,
//         });
//     }
//     setPkid(pkid) {
//         if(!this.state.messageSend){
//             this.refs.verifyinput.startCountDown();
//             this.setState({
//                 messageSend:true,
//                 phoneCall:false,
//                 phoneCallShow:true,
//                 pkid:pkid,
//             });
//         }
//     }
//     hasCalledPhone() {
//         if(!this.state.phoneCall){
//             this.setState({
//                 phoneCall:true,
//             });
//         }
//     }
// }
