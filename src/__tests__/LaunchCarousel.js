import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import LaunchCarousel from "../Components/LaunchCarousel";

it("Matches snapshot", () => {
  const launches = [
    {
      id: "id_example",
      sort_date: "sort_date_example",
      vehicle: { name: "vehicle_name_example" },
    },
  ];

  const renderer = new ShallowRenderer();
  const result = renderer.render(<LaunchCarousel launches={launches} />);
  expect(result).toMatchInlineSnapshot(`
<div
  id="carousel"
  style={
    Object {
      "display": "block",
      "padding": 30,
      "width": 700,
    }
  }
>
  <Carousel
    controls={true}
    defaultActiveIndex={0}
    fade={false}
    indicatorLabels={Array []}
    indicators={false}
    interval={null}
    keyboard={true}
    nextIcon={
      <span
        aria-hidden="true"
        className="carousel-control-next-icon"
      />
    }
    nextLabel="Next"
    pause="hover"
    prevIcon={
      <span
        aria-hidden="true"
        className="carousel-control-prev-icon"
      />
    }
    prevLabel="Previous"
    slide={true}
    touch={true}
    wrap={false}
  />
</div>
`);
});
