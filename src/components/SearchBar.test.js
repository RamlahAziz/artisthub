import React from 'react';
import { render,screen, fireEvent , act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {  unmountComponentAtNode } from "react-dom";//render,
//import { act } from "react-dom/test-utils";

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

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("Render artist search box", () => {
    act(() => {
        render(<SearchBar/>, container);
    });
//  screen.debug();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByPlaceholderText(/Search Artist Name/)).toBeInTheDocument();

});

