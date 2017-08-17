import React from "react";
import { mount } from "enzyme";

import App from "../components/App";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

describe("App Component", () => {
  let component;

  const state = {
    liked: {
      0: {
        description: 'Second'
      },
    },
    unliked: {
      1: {
        description: 'Whatever'
      },
    }
  };

  beforeEach(() => {
    component = mount(<App />);
    component.setState(state);    
  });

  it("calling addPodcast should add podcast to the state", () => {
    component.instance().addPodcast({ 2: { description: "desc" } });
    expect(Object.keys(component.state("unliked")).length).toBe(2);
  });

  it("calling likePodcast should change the state", () => {
    component.instance().likePodcast(1);
    expect(component.state('liked')[1]).toEqual({
      description: "Whatever"
    });
  });

  it('calling unlikePodcast should change the state', () => {
    component.instance().unlikePodcast(0);    
    expect(component.state('unliked')[0]).toEqual({
      description: "Second"
    })
  })
});
