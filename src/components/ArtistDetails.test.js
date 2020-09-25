import React from 'react';
import {render, screen, act} from '@testing-library/react';

import ArtistDetails from './ArtistDetails';

import {unmountComponentAtNode} from "react-dom";

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


describe('Artist Details test', () => {
    test('artist details to display data given an axios response', async () => {
        const data =
            {
                "id": "1337070",
                "name": "The Chainsmokers",
                "url": "https://www.bandsintown.com/a/1337070?came_from=267&app_id=9c42d4dc9c1397201a4e3dc4d0bb840c",
                "mbid": "",
                "options": {
                    "display_listen_unit": false
                },
                "image_url": "https://photos.bandsintown.com/large/8431874.jpeg",
                "thumb_url": "https://photos.bandsintown.com/thumb/8431874.jpeg",
                "facebook_page_url": "http://www.facebook.com/198933856805679",
                "tracker_count": 1743182,
                "upcoming_event_count": 14,
                "support_url": ""
            };


        act(() => {
            render(<ArtistDetails results={data}/>);
        });


        expect(screen.getByText('http://www.facebook.com/198933856805679'));
        expect(screen.getByText('The Chainsmokers')).toBeInTheDocument();
    });
});
