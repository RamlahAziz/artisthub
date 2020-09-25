import React from 'react';
import axios from 'axios';
import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchResults from './SearchResults';

import {unmountComponentAtNode} from "react-dom";
import SearchBar from "./SearchBar";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

jest.mock('axios');

describe('Search Results and Artist Details are both tested here', () => {
    test('fetches artists from the API and displays them', async () => {
        const data =
            {
                thumb_url: 'https://photos.bandsintown.com/thumb/9391547.jpeg',
                mbid: '',
                support_url: '',
                facebook_page_url: 'http://www.facebook.com/253431031498642',
                image_url: 'https://photos.bandsintown.com/large/9391547.jpeg',
                name: 'Halsey',
                options: {display_listen_unit: false},
                id: '2658914',
                tracker_count: 1811846,
                upcoming_event_count: 29,
                url: 'https://www.bandsintown.com/a/2658914?came_from=267&app_id=b2d0af8ea8bfb7288d2701b2d06e9eae'
            };

        const promise = Promise.resolve({data: data});

        axios.get.mockImplementationOnce(() => promise);

        render(<SearchResults searchTerm={"Halsey"}/>);

        await act(() => promise);

        expect(screen.getAllByText('http://www.facebook.com/253431031498642'));
        expect(screen.getByText(/found for/)).toBeInTheDocument();
    });
});
