import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { shallow } from "enzyme";
import LaunchCarousel from "../Components/LaunchCarousel";

Enzyme.configure({ adapter: new Adapter() })

it('renders the launch carousel', () => {
    const launches = [
        {
          id: "id_example",
          sort_date: "sort_date_example",
          vehicle: { name: "vehicle_name_example" },
        },
      ]

    const wrapper = shallow(<LaunchCarousel launches={launches}/>)
    expect(wrapper).toMatchInlineSnapshot(`
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
`)
})