import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index.tsx';

describe('<Icon />', () => {
  it('render Icon', () => {
    const wrapper = shallow(<Icon kind="user" />);
    expect(wrapper.hasClass('Icon__icon_user')).toEqual(true);
  });
  it('icon size small', () => {
    const wrapper = shallow(<Icon kind="feature-type-1" size="small" />);
    expect(wrapper.hasClass('Icon__size_small')).toEqual(true);
  });
  it('icon size mini', () => {
    const wrapper = shallow(<Icon kind="feature-type-1" size="mini" />);
    expect(wrapper.hasClass('Icon__size_mini')).toEqual(true);
  });
  it('icon size auto', () => {
    const wrapper = shallow(<Icon kind="feature-type-1" size="auto" />);
    expect(wrapper.hasClass('Icon__size_auto')).toEqual(true);
  });
  it('icon animate shake', () => {
    const wrapper = shallow(<Icon kind="user" animate="shake" />);
    expect(wrapper.hasClass('Icon__animate_shake')).toEqual(true);
  });
  it('icon hasColor false', () => {
    const wrapper = shallow(<Icon kind="user" hasColor={false} />);
    expect(wrapper.hasClass('Icon__color_false')).toEqual(true);
  });
});
