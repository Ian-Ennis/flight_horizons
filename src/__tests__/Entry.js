import { render } from '@testing-library/react'
// import { render, screen } from '@testing-library/react';
import Entry from "../Components/Entry"

it('matches the DOM snapshot', () => {
  const domTree = render(<Entry />)
  expect(domTree).toMatchSnapshot();
})

// it('it renders the entry page', () => {
//   render(<Entry />);

//   const appTitleImage = screen.getByAltText('flight_horizons_title')
//   expect(appTitleImage).toBeInTheDocument();
//   expect(appTitleImage).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/title.png')

//   const spaceshipVisual = screen.getByAltText('spaceship_animation')
//   expect(spaceshipVisual).toBeInTheDocument();
//   expect(spaceshipVisual).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png')
// });