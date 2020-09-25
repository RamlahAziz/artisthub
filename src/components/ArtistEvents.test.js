import React from 'react';
import {render, screen, act} from '@testing-library/react';

import ArtistEvents from './ArtistEvents';

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

describe('Display one Event', () => {
    test('displays event from event array provided by EventResults', async () => {

        const data = {
            "id": "1020300245",
            "url": "https://www.bandsintown.com/e/1020300245?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
            "datetime": "2020-10-31T20:00:00",
            "title": "",
            "description": "",
            "artist": {
                "id": "4408512",
                "name": "HaLS",
                "url": "https://www.bandsintown.com/a/4408512?came_from=267&app_id=9c42d4dc9c1397201a4e3dc4d0bb840c",
                "mbid": "",
                "options": {
                    "display_listen_unit": false
                },
                "image_url": "https://photos.bandsintown.com/artistLarge.jpg",
                "thumb_url": "https://photos.bandsintown.com/artistThumb.jpg",
                "facebook_page_url": "",
                "tracker_count": 144,
                "upcoming_event_count": 1,
                "support_url": ""
            },
            "venue": {
                "country": "Denmark",
                "city": "Hals",
                "latitude": "56.99609",
                "name": "Hals Skole, Aula",
                "location": "Hals, Denmark",
                "region": "",
                "longitude": "10.30807"
            },
            "lineup": [
                "HaLS",
                "Carl Emil Petersen"
            ],
            "offers": [
                {
                    "type": "Tickets",
                    "url": "https://www.bandsintown.com/t/1020300245?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
                    "status": "available"
                }
            ],
            "artist_id": "4408512",
            "on_sale_datetime": "2020-04-29T10:00:00"
        }

        act(() => {
            render(<ArtistEvents event={data}/>);
        })
        // component should extract country, date, venue, and city data to display
        expect(screen.getByText('Denmark'));
        expect(screen.getByText('31 Oct, 2020'))
        expect(screen.getByText('Hals Skole, Aula'))
        expect(screen.getByText('Hals'));

    });
});
