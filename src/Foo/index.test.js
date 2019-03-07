import React from 'react';
import { shallow } from 'enzyme';
import Foo from './index.tsx';

describe('<Foo />', () => {
  it('render Foo', () => {
    const wrapper = shallow(<Foo size="large">hello, umi</Foo>);
    expect(wrapper.prop('style').fontSize).toEqual(40);
    expect(wrapper.children().text()).toEqual('hello, umi');
  });
});
