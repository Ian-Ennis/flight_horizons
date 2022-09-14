import React from 'react';
import renderer from 'react-test-renderer'
import LaunchPad from '../Components/LaunchPad';

it('renders the <LaunchPad /> component', () => {
    const launches = [
      {
        pad: {
          name: "ELA-3",
          location: {
            name: "Guiana Space Centre",
            state: null,
            country: "French Guiana",
          },
        },
      },
    ];

    const index = 0;

    const result = renderer.create(<LaunchPad launches={launches} index={index} />).toJSON()
    expect(result).toMatchInlineSnapshot(`
<div
  id="launchpad_container"
>
  <p>
    Launch Pad: 
    <a
      href="https://www.google.com/maps/place/5%C2%B014'20.4%22N+52%C2%B046'04.8%22W/@5.2403329,-52.7701385,4565m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8b5a6bc38a9fa69d!8m2!3d5.239!4d-52.768"
      target="_blank"
    >
      ELA-3
    </a>
  </p>
  <p>
    Facility: 
    <a
      href="https://en.wikipedia.org/wiki/Guiana_Space_Centre"
      target="_blank"
    >
      Guiana Space Centre
    </a>
  </p>
  <p>
    French Guiana
  </p>
  <img
    alt="launchpad_image"
    id="launchpad_image"
    src="https://imgur.com/SH5YvyT.png"
  />
</div>
`)
})