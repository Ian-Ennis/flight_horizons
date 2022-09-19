import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import LaunchCarousel from "../Components/LaunchCarousel";

// Inline snapshot test for <LaunchCarousel /> component
const launches = [
  {
    id: "",
    sort_date: "",
    vehicle: { name: "" },
  },
];

it("matches the snapshot", () => {
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
  >
    <CarouselItem>
      <p
        style={
          Object {
            "fontSize": 22,
            "marginBottom": "20px",
            "textAlign": "center",
          }
        }
      >
        Wednesday
        , 
        December
         
        31
        , 
        5:00:00 PM
         (MT)
      </p>
      <div
        id="vehicle_image_container"
      >
        <img
          alt="launch_vehicle"
          id="vehicle_image"
        />
      </div>
      <CarouselCaption>
        <h5
          style={
            Object {
              "textAlign": "center",
            }
          }
        >
          
        </h5>
      </CarouselCaption>
    </CarouselItem>
  </Carousel>
</div>
`);
});
