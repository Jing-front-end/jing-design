import React from 'react';
import { shallow } from 'enzyme';
import Button from './index.ts';

describe('<Button />', () => {
  it('render Button', () => {
    const wrapper = shallow(
      <Button color="blue" primary>
        确认
      </Button>,
    );
    expect(wrapper.hasClass('Button')).toEqual(true);
  });
  it('Button color green', () => {
    const wrapper = shallow(
      <Button color="green" primary>
        确认
      </Button>,
    );
    expect(wrapper.hasClass('Button__color_green')).toEqual(true);
  });
  it('Button type small', () => {
    const wrapper = shallow(
      <Button type="small" primary>
        确认
      </Button>,
    );
    expect(wrapper.hasClass('Button__type_small')).toEqual(true);
  });
  it('Button state disable', () => {
    const wrapper = shallow(
      <Button state="disable" primary>
        确认
      </Button>,
    );
    expect(wrapper.hasClass('Button__state_disable')).toEqual(true);
  });
  it('Button primary true', () => {
    const wrapper = shallow(<Button primary>确认</Button>);
    expect(wrapper.hasClass('Button__type_primary')).toEqual(true);
  });
});

describe('<Button.Group />', () => {
  it('render Button.Group', () => {
    const wrapper = shallow(
      <Button.Group>
        <Button color="blue" primary>
          确认
        </Button>
        <Button color="orange" primary>
          确认
        </Button>
      </Button.Group>,
    );
    expect(wrapper.hasClass('ButtonGroup')).toEqual(true);
  });
  it('Button.Group type small', () => {
    const wrapper = shallow(
      <Button.Group type="small">
        <Button color="blue" primary>
          确认
        </Button>
        <Button color="orange" primary>
          确认
        </Button>
      </Button.Group>,
    );
    expect(wrapper.hasClass('ButtonGroup__type_small')).toEqual(true);
  });
});
