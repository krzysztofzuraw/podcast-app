import React from "react";
import { mount } from "enzyme";

import App from "../components/App";

describe("App Component", () => {
  let component;

  const state = {
    podcasts: {
      0: {
        liked: false
      },
      1: {
        liked: true
      }
    }
  };

  beforeAll(() => {
    component = mount(<App />);
    component.setState(state);    
  });

  it("calling addPodcast should add podcast to the state", () => {
    component.instance().addPodcast({ 2: { description: "desc" } });
    expect(Object.keys(component.state("podcasts")).length).toBe(3);
  });

  it("calling likePodcast should change the state", () => {
    component.instance().likePodcast(0);
    expect(component.state('podcasts')[0]).toEqual({
      liked: true
    });
  });

  it('calling unlikePodcast should change the state', () => {
    component.instance().unlikePodcast(1);    
    expect(component.state('podcasts')[1]).toEqual({
      liked: false
    })
  })
});
