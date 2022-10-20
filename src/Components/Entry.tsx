import React from "react";

/* 
Initial entry screen animations render when user first loads page
(window.sessionStorage.getItem("firstLoadDone") === null)

Animations specified in index.css
(@keyframes entry-title-fade-in, entry-title-fade-out, 
entry-visual-fade-in, launch, entry-visual-fade-out)

Images stored in bucket in AWS S3
*/

function Entry() {
  return (
    <div id="entry_container" data-testid="entry_component">
      <div id="entry_title_container">
        <img
          id="entry_title_animated"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
          alt="flight_horizons_title"
        />
      </div>
      <div id="entry_visual_container">
        <img
          id="entry_visual_animated"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png"
          alt="spaceship_animation"
        />
      </div>
    </div>
  );
}

export default Entry;
