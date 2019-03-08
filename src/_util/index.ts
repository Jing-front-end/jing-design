export default class Util {
  public static language = navigator.language.toLowerCase();
  // 检测操作系统
  public static system = (() => {
    const p = navigator.platform.toLowerCase();
    const u = navigator.userAgent.toLowerCase();
    return {
      win: p === 'win32' || p === 'win64' || p === 'windows',
      mac: p === 'mac68k' || p === 'macppc' || p === 'macintosh' || p === 'macintel',
      linux: p === 'linux' || p === 'x11',
      ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
      android: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
    };
  })();
  // 检测操作系统版本，返回结果为数值型，格式为整数加.加n位小数，
  public static version = (() => {
    const u = navigator.userAgent.toLowerCase();
    let vv = '';
    let vs = -1; // version start
    let ve = -1; // version end
    let tt = '-1'; // temp text
    switch (true) {
      case u.indexOf('msie') > 1:
        vs = u.indexOf('msie') + 5;
        tt = u.substr(vs);
        ve = tt.indexOf(';');
        break;
      case u.indexOf('windows nt') > 1:
        vs = u.indexOf('windows nt') + 11;
        tt = u.substr(vs);
        ve = tt.indexOf(';');
        break;
      case u.indexOf('iphone os') > 1:
        vs = u.indexOf('iphone os') + 10;
        tt = u.substr(vs);
        ve = tt.indexOf('like') - 1;
        break;
      case u.indexOf('cpu os') > 1:
        vs = u.indexOf('cpu os') + 7;
        tt = u.substr(vs);
        ve = tt.indexOf('like') - 1;
        break;
      case u.indexOf('android') > 1:
        vs = u.indexOf('android') + 8;
        tt = u.substr(vs);
        ve = tt.indexOf(';');
        break;
      case u.indexOf('(bb') > 1:
        vs = u.indexOf('(bb') + 3;
        tt = u.substr(vs);
        ve = tt.indexOf(';');
        break;
      default:
        break;
    }
    const t = u
      .substr(vs, ve)
      .replace(/_/g, '.')
      .split('.');
    for (let i = 0; i < t.length; i++) {
      if (i === 0 && t.length > 1) {
        vv += String(t[i]) + '.';
      } else {
        vv += String(t[i]);
      }
    }
    return Number(vv) || -1;
  })();
  // 检测浏览器
  public static browser = (() => {
    const u = navigator.userAgent.toLowerCase();
    return {
      msie: u.indexOf('msie') > -1 || u.indexOf('rv:11') > -1,
      edge: u.indexOf('edge') > -1,
      trident: u.indexOf('trident') > -1,
      presto: u.indexOf('presto') > -1,
      webKit: u.indexOf('applewebKit') > -1,
      firefox: u.indexOf('firefox') > -1,
      chrome: u.indexOf('chrome') > -1,
      opera: u.indexOf('opera') > -1 && u.indexOf('chrome') < 1,
      safari: u.indexOf('safari') > -1 && u.indexOf('chrome') < 1,
      gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') < 1,
      mobile: !!u.match(/applewebkit.*mobile.*/) || !!u.match(/applewebkit/),
      iPhone: u.indexOf('iphone') > -1,
      iPad: u.indexOf('ipad') > -1,
      webApp: u.indexOf('safari') < 1,
      wechat: !!u.match(/micromessenger/i),
    };
  })();
  public static isWeixin = (() => {
    const ua = navigator.userAgent.toLowerCase();
    if (!!ua.match(/micromessenger/i)) {
      return true;
    } else {
      return false;
    }
  })();
  public static isPC = (() => {
    const userAgentInfo = navigator.userAgent.toLowerCase();
    const Agents = ['android', 'iphone', 'symbianos', 'windows phone', 'ipod', 'ipad'];
    let flag = true;
    for (const value of Agents) {
      if (userAgentInfo.indexOf(value) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  })();
  public static global = {
    speed: 300,
    winW: window.screen.width,
    winH: window.screen.height,
    moveOffset: 10,
  };
  // 轮训检测窗口宽高
  public static checkReady = () => {
    if (!(window.screen.width > 1)) {
      setTimeout(Util.checkReady, 1000 / 60);
    } else {
      Util.global.winW = window.screen.width;
      Util.global.winH = window.screen.height;
    }
  };
  public static hasClass = (elem: any, cls: string) => {
    const classStr = typeof elem === 'object' ? elem.className : elem;
    cls = cls || '';
    if (cls.replace(/\s/g, '').length === 0) {
      return false;
    } // 当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + classStr + ' ');
  };
  public static addClass = (elem: any, cls: string) => {
    if (typeof elem === 'object') {
      if (!Util.hasClass(elem, cls)) {
        elem.className = elem.className === '' ? cls : elem.className + ' ' + cls;
      }
    } else if (typeof elem === 'string') {
      if (!Util.hasClass(elem, cls)) {
        elem = elem === '' ? cls : elem + ' ' + cls;
      }
    }
    return elem;
  };
  public static removeClass = (elem: any, cls: string) => {
    if (typeof elem === 'object') {
      if (Util.hasClass(elem, cls)) {
        let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
          newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    } else if (typeof elem === 'string') {
      if (Util.hasClass(elem, cls)) {
        let newClass = ' ' + elem.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
          newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        elem = newClass.replace(/^\s+|\s+$/g, '');
      }
    }
    return elem;
  };
  public static shieldedMobile = (mobile: string) => {
    if (mobile !== undefined && mobile !== null && mobile.length === 11) {
      return mobile.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
    }
    return mobile;
  };
  public static shieldedIdNo = (idType: string, idNo: string) => {
    if (idNo !== undefined && idNo !== null) {
      if (idType === '01') {
        if (idNo.length === 15) {
          return idNo.replace(/^(\d{3})\d+(\S{4})/, '$1********$2');
        } else if (idNo.length === 18) {
          return idNo.replace(/^(\d{3})\d+(\S{4})/, '$1***********$2');
        }
      } else {
        return idNo.replace(/^(\S+)(\S{4})/, '****$2');
      }
    }
    return idNo;
  };
  public static formatAmount = (amount: string) => {
    amount = amount.replace(/[^\d.]/g, ''); // 清除“数字”和“.”以外的字符
    amount = amount.replace(/\.{2,}/g, '.'); // 只保留第一个. 清除多余的
    amount = amount
      .replace('.', '$#$')
      .replace(/\./g, '')
      .replace('$#$', '.');
    amount = amount.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); // 只能输入两个小数
    if (amount.indexOf('.') < 0 && amount !== '') {
      // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      amount = parseFloat(amount).toString();
    }
    return amount;
  };
  public static formatNumber = (amount: string) => {
    amount = amount.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
    return amount;
  };
  public static toBigAmount = (num: string) => {
    let strOutput = '';
    let strUnit = '仟佰拾万仟佰拾亿仟佰拾万仟佰拾元角分';
    num += '00';
    const intPos = num.indexOf('.');
    if (intPos >= 0) {
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (let i = 0; i < num.length; i++) {
      strOutput +=
        '零壹贰叁肆伍陆柒捌玖'.substr(Number(num.substr(i, 1)), 1) + strUnit.substr(i, 1);
    }
    const res = strOutput
      .replace(/零角零分$/, '整')
      .replace(/零角/, '')
      .replace(/零分$/, '')
      .replace(/零[仟佰拾]/g, '零')
      .replace(/零{2,}/g, '零')
      .replace(/零([亿|万])/g, '$1')
      .replace(/零+元/, '元')
      .replace(/亿零{0,3}万/, '亿')
      .replace(/^元/, '零元');
    return res === '整' || res === '零元整' ? '&nbsp;' : res;
  };
  public static formatBankNumber = (bankNumber: string) => {
    return bankNumber ? bankNumber.replace(/\s/g, '').replace(/(....)(?=.)/g, '$1 ') : '';
  };
  public static globalSet = () => {
    Util.checkReady();
    // 标记操作系统
    if (Util.system.ios) {
      Util.addClass(document.getElementsByTagName('html')[0], 'ios');
    }
    if (Util.system.win) {
      Util.addClass(document.getElementsByTagName('html')[0], 'win');
    }
    if (Util.system.mac) {
      Util.addClass(document.getElementsByTagName('html')[0], 'mac');
    }
    if (Util.system.android) {
      Util.addClass(document.getElementsByTagName('html')[0], 'android');
    }
    // 标记浏览器
    if (Util.browser.chrome) {
      Util.addClass(document.getElementsByTagName('html')[0], 'chrome');
    }
    if (Util.browser.firefox) {
      Util.addClass(document.getElementsByTagName('html')[0], 'firefox');
    }
    if (Util.browser.iPad) {
      Util.addClass(document.getElementsByTagName('html')[0], 'am-pad');
    }
    if (Util.browser.safari) {
      Util.addClass(document.getElementsByTagName('html')[0], 'safari');
    }
    if (Util.browser.msie) {
      Util.addClass(document.getElementsByTagName('html')[0], 'msie');
    }
    if (Util.isPC) {
      Util.addClass(document.getElementsByTagName('html')[0], 'am-pc');
    } else {
      Util.addClass(document.getElementsByTagName('html')[0], 'am-mob am-wx');
    }
  };
  public static testTel = (str: string) => {
    return /^1(\d){10}$/.test(str);
  };
}

Util.globalSet();
