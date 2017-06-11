import React from 'react';
import { mount } from 'enzyme';
import SearchPodcastForm from '../components/SearchPodcastForm';
import sinon from 'sinon';
import axios from 'axios';

const addPodcastMock = jest.fn();
const component = mount(
    <SearchPodcastForm addPodcast={addPodcastMock} />
);

beforeAll(() => {
    const resolved = new Promise((r) => r({ data: Array.from([{ 0: { description: 'desc' } }]) }));
    sinon.stub(axios, 'get').returns(resolved);
    component.find('input').node.value = 'This American Life';
    component.find('form').simulate('submit', { preventDefault: jest.fn() });
});


test('submitting form calls addPodcast', () => {
    expect(addPodcastMock.mock.calls.length).toBe(1);
    expect(addPodcastMock.mock.calls[0]).toEqual([{ 0: { description: 'desc' } }]);
});
