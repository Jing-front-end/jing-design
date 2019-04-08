import React from 'react';
import { shallow } from 'enzyme';
import TagList from './index.tsx';

describe('<CardList />', () => {
  it('render CardList', () => {
    const wrapper = shallow(
      <TagList
        list={[
          { labelName: '收益稳定', labelColor: '#ff6600' },
          { labelName: '净值型', labelColor: '#1496ff' },
          { labelName: '周开放', labelColor: '#1496ff' },
        ]}
      />,
    );
    expect(wrapper.hasClass('TagList')).toEqual(true);
  });
});
