import React from 'react';
import { shallow } from 'enzyme';
import Space from './index.tsx';

describe('<Space />', () => {
  it('render Space', () => {
    const wrapper = shallow(<Space scale="1" />);
    expect(wrapper.hasClass('am-space-1')).toEqual(true);
  });
  it('Space scale 6', () => {
    const wrapper = shallow(<Space scale="6" />);
    expect(wrapper.hasClass('am-space-6')).toEqual(true);
  });
});
