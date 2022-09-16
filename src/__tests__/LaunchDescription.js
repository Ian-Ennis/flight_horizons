import React from "react";
import renderer from "react-test-renderer";
import LaunchDescription from "../Components/LaunchDescription";

it("matches the snapshot", () => {
  const launches = [
    {
      name: "",
      provider: { name: "" },
      launch_description: "",
    },
  ];

  const index = 0;

  const result = renderer.create(<LaunchDescription launches={launches} index={index} />).toJSON();
  expect(result).toMatchInlineSnapshot(`
<div
  id="launch_description_container"
>
  <p>
    Provider: 
  </p>
  <p>
    Mission: 
  </p>
</div>
`);
});
