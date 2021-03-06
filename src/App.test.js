import React from 'react';
import { render,screen } from '@testing-library/react';
import {  unmountComponentAtNode } from "react-dom";//render,
import { act } from "react-dom/test-utils";

import App from './App';
import SearchBar from "./components/SearchBar";

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

it("render app landing page", () => {
  act(() => {
    render(<App />, container);
    expect(screen.getByText(/Enter your favourite artist/)).toBeVisible();
    expect(screen.getByPlaceholderText(/Search Artist Name/)).toBeInTheDocument();

  });
});
