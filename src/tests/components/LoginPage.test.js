import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import {LoginPage} from '../../components/LoginPage';

test('should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click',(done)=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
    done();
});