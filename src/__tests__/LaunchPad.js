import React from 'react';
import renderer from 'react-test-renderer'
import LaunchPad from '../Components/LaunchPad';

// Inline snapshot test for <LaunchPad /> component
it("renders the <LaunchPad /> component", () => {
  const launches = [
    {
      pad: {
        name: "",
        location: {
          name: "",
          state: "",
          country: "",
        },
      },
    },
  ];

  const index = 0;

  const result = renderer.create(<LaunchPad launches={launches} index={index} />).toJSON();
  expect(result).toMatchInlineSnapshot(`
<div
  id="launchpad_container"
>
  <p>
    Launch Pad: TBD
  </p>
</div>
`);
});