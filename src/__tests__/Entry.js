import render from 'react-test-renderer'
import Entry from "../Components"



// import { render, screen } from '@testing-library/react';
// import Entry from '../Compontents/Entry';

// test('it renders the entry page', () => {
//   render(<Entry />);

//   const appTitleImage = screen.getByAltText('flight_horizons_title')
//   expect(appTitleImage).toBeInTheDocument();
//   expect(appTitleImage).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/title.png')

//   const spaceshipVisual = screen.getByAltText('spaceship_animation')
//   expect(spaceshipVisual).toBeInTheDocument();
//   expect(spaceshipVisual).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png')
// });