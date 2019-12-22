import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import FileUpload from "./FileUpload";

it('Fileupload exists',() => {
    const wrapper = shallow(<FileUpload />);
    expect(wrapper.exists()).toBe(true);
})

it('Find Label & the label content is there',() => {
    const wrapper = shallow(<FileUpload />);
    const label = wrapper.find('label');

    expect(label.length).toBe(1);
    expect(label.text()).toBe('Upload your Image');
})

it('find Input type file', () => {
    const wrapper = shallow(<FileUpload/>);
    const input = wrapper.find('input[type="file"]');
    expect(input.length).toBe(1);
})

// it('File value is recivieng in the props', () => {
//     const mockCallBack = jest.fn();

//     const wrapper = shallow(<FileUpload onChange={mockCallBack}/>);
//     wrapper.find("input[type='file']").simulate('change',  { target : { files : ['artboard.jpeg'] } });
//     expect(mockCallBack).toHaveBeenCalledWith('artboard.jpeg');
    
// })
