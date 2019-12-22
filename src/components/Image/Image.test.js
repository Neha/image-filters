import React from "react";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import Image from './Image';

describe('Image', () => {
    it("Image renders without crashing", () => {
        const wrapper = shallow(<Image />);
        expect(wrapper.exists()).toBe(true);
      });
    
      it("Image Snapshot testing", () => {
        const tree = renderer.create(<Image />).toJSON();
        expect(tree).toMatchSnapshot();
      });
})