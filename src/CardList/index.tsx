import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import Icon from '../Icon/index';

import '../_style/index.less';
import './index.less';

const cardListType = tuple('small', 'large', 'primary');

export interface CardListProps {
  list: Array<CardItemProps>;
  type?: string;
}

interface CardItemProps {
  cardPkid: string;
  bankAccountEndFour: string;
  bankLimitDay: string;
  bankName: string;
  convertedBankLimit: string;
  convertedNextBankLimit: string;
  convertedBankLimitDay: string;
  bankNo: string;
  onBindTipsClick: () => void;
  onPayTipsClick: () => void;
}

function setListItem(item: CardItemProps) {
  const {
    onBindTipsClick,
    onPayTipsClick,
    cardPkid,
    bankNo,
    bankName,
    convertedBankLimit,
    convertedNextBankLimit,
    convertedBankLimitDay,
    bankAccountEndFour,
  } = item;

  const isBindTips = !!onBindTipsClick;
  const isPayTips = !!onPayTipsClick;

  const classesForPayTips = classNames('CardList__card-additional', 'am-color-orange', {
    [`am-pos-rt`]: !isBindTips && isPayTips,
    [`am-pos-rb`]: isBindTips && isPayTips,
  });

  return (
    <div key={cardPkid} className="CardList__card">
      <div>
        <div className="CardList__card-icon">
          <Icon icon={`bank${bankNo}`} />
        </div>
        <strong className="CardList__card-name">{bankName}</strong>
        <p className="CardList__card-desc">
          {`单笔首次限额${convertedBankLimit}，单笔后续限额${convertedNextBankLimit}，单日限额${convertedBankLimitDay}`}
        </p>
        {bankAccountEndFour && (
          <span className="CardList__card-num">{`**** ${bankAccountEndFour}`}</span>
        )}
        {isBindTips && (
          <em
            className="CardList__card-additional am-color-blue am-pos-rt"
            onClick={onBindTipsClick}
          >
            绑定卡注意事项
          </em>
        )}
        {isPayTips && (
          <em className={classesForPayTips} onClick={onPayTipsClick}>
            可开通大额支付
          </em>
        )}
        <div className="CardList__card-bigicon">
          <Icon icon={`bank${bankNo}`} />
        </div>
      </div>
    </div>
  );
}

const CardList = (props: CardListProps) => {
  const { list, type } = props;

  const classes = classNames('CardList', {
    [`CardList__type_${type}`]: type,
  });

  return <div className={classes}>{list.map((item: CardItemProps) => setListItem(item))}</div>;
};

CardList.defaultProps = {
  type: 'small',
};

CardList.propTypes = {
  list: PropTypes.array,
  type: PropTypes.oneOf(cardListType),
};

export default React.memo(CardList);
