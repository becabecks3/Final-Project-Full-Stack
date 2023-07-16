import React from "react";
import { shallow } from "enzyme";
import Links from "./Links";

describe("Links", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Links />);
    expect(wrapper).toMatchSnapshot();
  });
});
