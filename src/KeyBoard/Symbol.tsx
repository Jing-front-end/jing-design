import * as React from 'react';
import * as PropTypes from 'prop-types';

import Util from '../_util';

import Key from './Key';

interface SymbolProps {
  isRandom: boolean;
  onHandleDelete: () => void;
  onHandleValue: (text: any) => void;
}

const SymbolKey = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '+',
  '-',
  '\\',
  '/',
  '[',
  ']',
  '{',
  '}',
  'del',
  'ABC',
  ',',
  '.',
  '€',
  '£',
  '¥',
  '完成',
];

const keys: { text: any; type?: string }[] = [];
// for (let i = 1; i <= letterKey.length; i++) {
//   keys.push({ text: i })
// }
SymbolKey.map(item => keys.push({ text: item }));
// console.log('keys', keys)
// const numberRegular = [
//   { text: '', type: 'emty' },
//   { text: 0 },
//   { text: 'del', type: 'delete' },
// ]
// let keys: { text: any; type?: string; }[] = [];
// for (let i = 1; i <= 9; i++) {
//   keys.push({ text: i })
// }
// keys = keys.concat(numberRegular)

const Symbol = (props: SymbolProps) => {
  const { isRandom, onHandleValue, onHandleDelete } = props;

  if (isRandom) {
    // console.log('ss')
    // changeRandomKeys()
  }

  function onPress(text: any, type: string) {
    // if (text === '') {
    //   return;
    // };

    // console.log('text', text, type)

    if (type === 'delete') {
      onHandleDelete();
    } else {
      onHandleValue(text);
    }
  }
  return (
    <div className="KeyBoardSymbol">
      {keys.map(item => (
        <Key
          className="KeyBoardSymbol__box"
          key={item.text}
          text={item.text}
          type={item.type}
          onPress={onPress}
        />
      ))}
    </div>
  );
};

Symbol.defaultProps = {
  isRandom: false,
};

Symbol.propTypes = {
  isRandom: PropTypes.bool,
};

export default React.memo(Symbol);
