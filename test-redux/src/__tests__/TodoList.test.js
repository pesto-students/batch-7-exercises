import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TodoList } from '../TodoList';

// addTodo with button click
// removeTodo with li click
// matches snapshot

describe('<TodoList />', () => {
  it('calls addTodo Redux action creator with button click', () => {
    const props = {
      addTodo: jest.fn(),
      todos: [],
    };
    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find('input').simulate('change', { currentTarget: { value: 'Buy Groceries' } });
    wrapper.find('.todo--button').simulate('click');

    expect(props.addTodo).toHaveBeenCalledWith({ text: 'Buy Groceries' });
  });
  it('calls removeTodo Redux action creator on li click', () => {
    const props = {
      removeTodo: jest.fn(),
      todos: [{ text: 'Buy groceries' }, { text: 'Change oil' }],
    };
    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find('li').at(0).simulate('click');

    expect(props.removeTodo).toHaveBeenCalledWith(0);
  });
  it('matches snapshot', () => {
    const props = {
      todos: [],
    };
    const wrapper = shallow(<TodoList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
