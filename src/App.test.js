import {render, screen} from '@testing-library/react'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("it renders necessary components", () => {
test("it should render home component if not entry component", () => {
  
})
})