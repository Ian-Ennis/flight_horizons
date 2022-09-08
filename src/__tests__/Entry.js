import React from 'react';
import renderer from 'react-test-renderer';
import Entry from "../Components/Entry"

it('renders correctly', () => {
  const tree = renderer
    .create(<Entry />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  id="entry_container"
>
  <div
    id="entry_title_container"
  >
    <img
      alt="flight_horizons_title"
      id="entry_title_animated"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
    />
  </div>
  <div
    id="entry_visual_container"
  >
    <img
      alt="spaceship_animation"
      id="entry_visual_animated"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png"
    />
  </div>
</div>
`);
});

// it('matches the DOM snapshot', () => {
//   const domTree = renderer.create(<Entry />).toJSON()
//   expect(domTree).toMatchSnapshot();
// })

// it('it renders the entry page', () => {
//   render(<Entry />);

//   const appTitleImage = screen.getByAltText('flight_horizons_title')
//   expect(appTitleImage).toBeInTheDocument();
//   expect(appTitleImage).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/title.png')

//   const spaceshipVisual = screen.getByAltText('spaceship_animation')
//   expect(spaceshipVisual).toBeInTheDocument();
//   expect(spaceshipVisual).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png')
// });