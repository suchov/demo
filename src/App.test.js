import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
  //https://jestjs.io/docs/en/expect#tobevalue
  //https://jestjs.io/docs/en/expect#tobetruthy
  // https://jestjs.io/docs/en/expect#expectnotstringcontainingstring
  // https://jestjs.io/docs/en/expect#expectobjectcontainingobject
  // console.log(wrapper.debug());
});

test('some fucking testing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
