import React from 'react';
import { shallow } from 'enzyme';
import TabNav from './index.tsx';

describe('<CardList />', () => {
  it('render CardList', () => {
    const wrapper = shallow(
      <TabNav
        currentIndex={0}
        onClick={index => {
          console.log(index);
        }}
        list={[{ id: '1', title: '理财产品' }, { id: '2', title: '我的资产' }]}
      />,
    );
    expect(wrapper.hasClass('TabNav')).toEqual(true);
  });
});
