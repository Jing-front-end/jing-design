import React from 'react';
import { shallow } from 'enzyme';
import CardList from './index.tsx';

describe('<CardList />', () => {
  it('render CardList', () => {
    const wrapper = shallow(
      <CardList
        platform="mob"
        type="large"
        list={[
          {
            cardPkid: 33635,
            bankAccountEndFour: '7499',
            bankLimitDay: '500001',
            bankName: '浦发银行',
            convertedBankLimit: '5万',
            convertedBankLimitDay: '50万',
            bankNo: '0310',
            link: '#',
            onBindTipsClick: () => {
              console.log('bind tips');
            },
          },
          {
            cardPkid: 36929,
            bankAccountEndFour: '3277',
            bankLimitDay: '200000',
            bankName: '邮储银行',
            convertedBankLimit: '5万',
            convertedBankLimitDay: '20万',
            bankNo: '0100',
            link: '#',
          },
          {
            cardPkid: 36919,
            bankAccountEndFour: '3277',
            bankLimitDay: '200000',
            bankName: '邮储银行',
            convertedBankLimit: '5万',
            convertedBankLimitDay: '20万',
            bankNo: '0100',
            link: '#',
          },
          {
            cardPkid: 36910,
            bankAccountEndFour: '3277',
            bankLimitDay: '200000',
            bankName: '邮储银行',
            convertedBankLimit: '5万',
            convertedBankLimitDay: '20万',
            bankNo: '0102',
            link: '#',
          },
        ]}
      />,
    );
    expect(wrapper.hasClass('CardList')).toEqual(true);
  });
});
