import title from '../Images/title.png'
import spaceship from '../Images/spaceship.png'

function Entry() {

    return (
        <div id="entry_container">
            <div id="entry_title_container">
                {/* <p>flight horizons</p> */}
                <img id="entry_title_animated" src={title} alt="flight_horizons"/>
            </div>
            <div id="entry_visual_container">
                <img id="entry_visual_animated" src={spaceship} alt="entry_visual"/>
            </div>
        </div>
    )
}

export default Entry

