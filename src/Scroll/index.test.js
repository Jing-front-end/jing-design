import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './index.tsx';

describe('<Scroll />', () => {
  it('render Button', () => {
    const wrapper = shallow(
      <div className="test" style={{ height: '100px' }}>
        <Scroll
          showPullDown
          showPullUp
          endPullUp={false}
          scrollPullDown={pullDownComplete => {
            setTimeout(() => {
              pullDownComplete(() => {
                console.log('ok');
              });
            }, 3000);
          }}
          scrollPullUp={pullUpComplete => {
            setTimeout(() => {
              pullUpComplete(() => {
                console.log('ok');
              });
            }, 3000);
          }}
        >
          <div style={{ height: '100px', width: '100%' }}>try pulling me</div>
        </Scroll>
      </div>,
    );
    expect(wrapper.hasClass('test')).toEqual(true);
  });
});
