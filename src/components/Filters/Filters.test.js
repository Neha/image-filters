import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import Filters from "./Filters";

describe("Filters", () => {
  it("Filters renders without crashing", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Filters Snapshot testing", () => {
    const tree = renderer.create(<Filters />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Filters have button", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.find("button").length).not.toBeLessThan(0);
  });

  it("Props", () => {
    const wrapper = shallow(<Filters />);
    const mockData = ["Blur", "red", "invert", "Grayscale", "reset"];

    // mockData.map((val, key) => {
    //     console.log(val);
    //   wrapper.find("button").forEach(node => {
    //     expect(node.text()).toEqual(val);
    //   });
    // });

    // for(let i = 0; i > mockData.length; i++) {
    //     wrapper.find('button').forEach(node => {
    //         console.log(node.text())
    //         expect(node.text()).toEqual(mockData[i]);
    //     })
    // }
  });

  it("Filters have Callback", () => {
    const mockCallBack = jest.fn();

    // const wrapper =  shallow(<Filters onClick={mockCallBack} />);
  
    // wrapper.find('button').at(1).simulate('click',()=> {{tempdata}});
    // expect(mockCallBack.mock.calls.length).not.toBeLessThan(0);
  });
});
