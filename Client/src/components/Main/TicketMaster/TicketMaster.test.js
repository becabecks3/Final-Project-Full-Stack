import React from "react";
import { shallow } from "enzyme";
import TicketMaster from "./TicketMaster";

describe("TicketMaster", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TicketMaster />);
    expect(wrapper).toMatchSnapshot();
  });
});
