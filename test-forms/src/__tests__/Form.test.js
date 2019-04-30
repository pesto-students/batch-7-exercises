import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from '../components/Form';
import api from '../api';

const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance);
  input.simulate('change', {
    currentTarget: { value: newValue },
  });
  return wrapper.find(instance);
};

describe('<Form />', () => {
  test('receive promotions default is true', () => {
    const wrapper = shallow(<Form />);
    const promotionInput = wrapper.find('[data-testid="checked"]');
    expect(promotionInput.props().checked).toBe(true);
  });

  test('allows user to fill out form', () => {
    const wrapper = shallow(<Form />);
    const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Pesto');
    const emailInput = updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com');
    const numberInput = updateInput(wrapper, '[data-testid="number"]', '8018882321');
    wrapper.find('[data-testid="checked"]').simulate('click');

    expect(nameInput.props().value).toBe('Pesto');
    expect(emailInput.props().value).toBe('test@gmail.com');
    expect(numberInput.props().value).toBe('8018882321');
    expect(wrapper.find('[data-testid="checked"]').props().checked).toBe(false);
  });

  test('submits the form', () => {
    jest.spyOn(api, 'addUser').mockImplementation(() => Promise.resolve({ data: 'New User Added' }));
    const wrapper = shallow(<Form />);
    updateInput(wrapper, '[data-testid="name"]', 'Pesto');
    updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com');
    updateInput(wrapper, '[data-testid="number"]', '8018882321');
    wrapper.find('[data-testid="addUserForm"]').simulate('submit', { preventDefault: () => {} });

    expect(api.addUser).toHaveBeenCalledWith('Pesto', 'test@gmail.com', '8018882321');
  });

  test('matches saved snapshot', () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
