import React from 'react';
import renderer from 'react-test-renderer'
import LaunchDescription from '../Components/LaunchDescription'

it('renders the <LaunchDescription /> component', () => {
    const launches = [
        {
          name: "launch_name_example",
          provider: { name: "provider_name_example" },
          launch_description:"launch_description_example"
        },
      ]

    const index = 0;

    const domTree = renderer.create(<LaunchDescription launches={launches} index={index} />).toJSON()
    expect(domTree).toMatchInlineSnapshot(`
<div
  id="launch_description_container"
>
  <p>
    launch_description_example
  </p>
</div>
`);
})


