import React from "react";
import { shallow } from "enzyme";

import Podcast from "../components/Podcast";

describe("Podcast Component", () => {
  let component;

  const likePodcastMock = jest.fn();
  const unlikePodcastMock = jest.fn();

  const props = {
    id: 1,
    details: {
      artistName: "Mocked",
      artworkUrl100: "http://mocked",
      artistViewUrl: "mocked",
      liked: false
    },
    likePodcast: likePodcastMock,
    unlikePodcast: unlikePodcastMock
  };

  beforeAll(() => {
    component = shallow(<Podcast {...props} />);
  });

  it("should render with like button", () => {
    expect(component.find("button").exists()).toBe(true);
    expect(component.find("button").text()).toEqual("Like it!");
  });

  it("should execute likePodcast when button is clicked", () => {
    component.find("button").simulate("click");
    expect(likePodcastMock.mock.calls.length).toBe(1);
    expect(likePodcastMock.mock.calls[0][0]).toBe(props.id);
  });

  it("should render with unlike button", () => {
    props.details = { liked: true };
    const component = shallow(<Podcast {...props} />);
    expect(component.find("button").exists()).toBe(true);
    expect(component.find("button").text()).toEqual("UnLike It!");
  });

  it("should execute unlikePodcast when button is clicked", () => {
    props.details = { liked: true };
    const component = shallow(<Podcast {...props} />);
    component.find("button").simulate("click");
    expect(unlikePodcastMock.mock.calls.length).toBe(1);
    expect(unlikePodcastMock.mock.calls[0][0]).toBe(props.id);
  });
});
