import React from "react";
import { mount } from "enzyme";
import SearchPodcastForm from "../components/SearchPodcastForm";
import sinon from "sinon";
import axios from "axios";

describe("SearchPodcastForm Component", () => {
  let component;

  const addPodcastMock = jest.fn();
  const props = {
    history: {
      push: jest.fn()
    },
    addPodcast: addPodcastMock,
    cleanUnlikedPodcasts: jest.fn(),
  };

  const responseData = {
    data: {
      results: [
        {
          0: {
            description: "desc"
          }
        }
      ]
    }
  };

  beforeAll(() => {
    const resolved = new Promise(r => r(responseData));
    sinon.stub(axios, "get").returns(resolved);
    component = mount(<SearchPodcastForm {...props} />);
  });

  it("submitting form should call addPodcast", () => {
    component.find("input").node.value = "This American Life";
    component.find("form").simulate("submit", { preventDefault: jest.fn() });

    setTimeout(() => {
      try {
        expect(addPodcastMock.mock.calls.length).toBe(1);
        expect(addPodcastMock.mock.calls[0]).toEqual([
          { 0: { description: "desc" } }
        ]);
      } catch (error) {
        expect(error).toEqual("Testing asynchronous code fails");
      }
    });
  });

  it("should render search form", () => {
    expect(component.find("form").exists()).toBe(true);
    expect(component.find("form").hasClass("podcast-search")).toEqual(true);
  });
});
