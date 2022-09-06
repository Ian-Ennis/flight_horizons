import React from 'react';
// import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react"
import LaunchDescription from "./LaunchDescription"

// test('use jsdom in this test file', () => {
//     const element = document.createElement('div');
//     expect(element).not.toBeNull();
//   });

describe("LaunchDescription", () => {
    test("renders correctly", () => {
        render(<LaunchDescription/>);
        expect(screen.getByRole('link')).toBeInTheDocument()
    })
})