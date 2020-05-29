import * as React from 'react';
import * as PropTypes from 'prop-types';

import Util from '../_util';

import Key from './Key';

interface LetterProps {
  isRandom: boolean;
  onHandleDelete: () => void;
  onHandleValue: (text: any) => void;
}

const letterKey = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's',
  'd', 'f', 'g', 'h', 'j', 'k', 'l', '↑', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
  'del', '123.*!&', '空格', '完成',
];

const keys: { text: any; type?: string; }[] = [];
// for (let i = 1; i <= letterKey.length; i++) {
//   keys.push({ text: i })
// }
letterKey.map((item) => keys.push({ text: item }))
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

const Letter = (props: LetterProps) => {
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
      onHandleDelete()
    } else {
      onHandleValue(text)
    }
  }
  return (
    <div className="KeyBoardLetter">
      {
        keys.map((item) => (
          <Key
            className="KeyBoardLetter__box"
            key={item.text}
            text={item.text}
            type={item.type}
            onPress={onPress} />
        ))
      }
    </div>
  )
}

Letter.defaultProps = {
  isRandom: false,
}

Letter.propTypes = {
  isRandom: PropTypes.bool,
}

export default React.memo(Letter);
