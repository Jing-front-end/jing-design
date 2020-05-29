import * as React from 'react';
import * as PropTypes from 'prop-types';

import Util from '../_util';

import Key from './Key';

interface PriceKeyBoardProps {
  isRandom: boolean;
  onHandleDelete: () => void;
  onHandleValue: (text: any) => void;
}
const numberRegular = [
  { text: '.', type: 'point' },
  { text: 0 },
  { text: 'del', type: 'delete' },
]
let keys: { text: any; type?: string; }[] = [];
for (let i = 1; i <= 9; i++) {
  keys.push({ text: i })
}
keys = keys.concat(numberRegular)

function changeRandomKeys() {
  const numberKey = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  keys = [];
  Util.sample(numberKey, 9).map((item: any) => keys.push({ text: item }))
  keys = keys.concat(numberRegular)
  return keys;
}

const Price = (props: PriceKeyBoardProps) => {

  const { isRandom, onHandleValue, onHandleDelete } = props;

  if (isRandom) {
    changeRandomKeys()
  }

  function onPress(text: any, type: string) {
    if (text === '') {
      return;
    };

    if (type === 'delete') {
      onHandleDelete()
    } else {
      onHandleValue(text)
    }
  }
  return (
    <div className="KeyBoardNumber">
      {
        keys.map((item) => (
          <Key
            className="KeyBoardNumber__box"
            key={item.text}
            text={item.text}
            type={item.type}
            onPress={onPress} />
        ))
      }
    </div>
  )
}

Price.defaultProps = {
  isRandom: false,
}

Price.propTypes = {
  isRandom: PropTypes.bool,
}

export default React.memo(Price);
