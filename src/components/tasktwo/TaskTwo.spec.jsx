import React from 'react';
import { shallow } from 'enzyme';
import TaskTwo from '@components/tasktwo/TaskTwo';

const render = props => shallow(<TaskTwo {...props} />);

describe('Task two component', () => {
  it('should match snapshot', () => {
    const wrapper = render({});
    expect(wrapper).toMatchSnapshot();
  });
});
