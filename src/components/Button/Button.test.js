import React from "react";
import { configure } from "enzyme";
import renderer from 'react-test-renderer';

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Button from "./Button";

describe('Button test case', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render("<Button />", div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot testing', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("displays the label", () => {
    const wrapper = shallow(<Button label="click me" />);
    expect(wrapper.find("button").text()).toEqual("click me");
  });
  
  it("simlulate the click", () => {
    const mockCallBack = jest.fn();
  
    const wrapper = shallow(<Button label="click me" onClick={mockCallBack} />);
    wrapper.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  
})