import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App /> shallow rendering', () => {
  it('h1 contains correct text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
  });
});
