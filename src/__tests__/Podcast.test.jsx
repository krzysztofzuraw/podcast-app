import React from "react";
import { shallow, mount } from "enzyme";

import Podcast from "../components/Podcast";

describe("Podcast Component", () => {
  let component;

  const likePodcastMock = jest.fn();
  const unlikePodcastMock = jest.fn();
  const buttonClass = ".action-btn"

  let props = {
    id: 1,
    details: {
      artistName: "Mocked",
      artworkUrl100: "http://mocked",
      artistViewUrl: "mocked",
    },
    likePodcast: likePodcastMock,
    unlikePodcast: unlikePodcastMock,
    liked: false
  };

  beforeAll(() => {
    component = mount(<Podcast {...props} />);
  });

  it("should render with like button", () => {
    expect(component.find(buttonClass).exists()).toBe(true);
    expect(component.find(buttonClass).render().text()).toEqual("Like it!");
  });

  it("should execute likePodcast when button is clicked", () => {
    component.find(buttonClass).simulate("click");
    expect(likePodcastMock.mock.calls.length).toBe(1);
    expect(likePodcastMock.mock.calls[0][0]).toBe(props.id);
  });

  it("should render with unlike button", () => {
    props = { ...props, liked: true };
    const component = shallow(<Podcast {...props} />);
    expect(component.find(buttonClass).exists()).toBe(true);
    expect(component.find(buttonClass).render().text()).toEqual("Unlike it!");
  });

  it("should execute unlikePodcast when button is clicked", () => {
    props = { ...props, liked: true };
    const component = shallow(<Podcast {...props} />);
    component.find(buttonClass).simulate("click");
    expect(unlikePodcastMock.mock.calls.length).toBe(1);
    expect(unlikePodcastMock.mock.calls[0][0]).toBe(props.id);
  });
});
