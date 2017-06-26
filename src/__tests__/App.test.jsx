import React from "react";
import { mount } from "enzyme";

import App from "../components/App";

test("calling addPodcast should change the state", () => {
  const component = mount(<App />);
  component.instance().addPodcast({ 0: { description: "desc" } });
  expect(Object.keys(component.state("podcasts")).length).toBe(1);
});
