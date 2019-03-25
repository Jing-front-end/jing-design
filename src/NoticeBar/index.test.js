import React from 'react';
import { shallow } from 'enzyme';
import NoticeBar from './index.tsx';

describe('<CardList />', () => {
  it('render CardList', () => {
    const wrapper = shallow(<NoticeBar word="我是文字" />);
    expect(wrapper.hasClass('NoticeBar')).toEqual(true);
  });
});
