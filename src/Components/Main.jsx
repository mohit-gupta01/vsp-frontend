import React from 'react';
import LaddleCard from './LaddleCard';
import { useStateContext } from '../context/StateContext';
import hotMetal from './../assets/hotmetal_.png';
import scrappot from './../assets/scrappot.png';
import steelladle from './../assets/steelladle.png';
import HotMetalTimeline from './Timeline/HotMetalTimeline';
import SteelLadleTimeline from './Timeline/SteelLadleTimeline';
import ScrapPotTimeline from './Timeline/ScrapPotTimeline';


const Main = () => {
    const {showTrackingDetails} = useStateContext();
    return (
        <div className="flex flex-r" style={{justifyContent: 'space-between'}}>
            <div className='tracking-container flex flex-c'>
                <div className="track-heading">Tracking Details</div>
                <div className="ladle-group flex flex-c">
                    <LaddleCard index={1} image={hotMetal} efficiency={"1.2%"} title={"Hot Metal Ladle"} time={"19:40:38"} count={"100"}/>
                    <LaddleCard index={2} image={steelladle} efficiency={"2%"} title={"Steel Ladle"} time={"19:40:38"} count={"100"}/>
                    <LaddleCard index={3} image={scrappot} efficiency={"3.2%"} title={"Scrap Pot"} time={"19:40:38"} count={"100"}/>
                </div>
            </div>
            {(showTrackingDetails === 1) &&
                <HotMetalTimeline/>
            }
            {(showTrackingDetails === 2) &&
                <SteelLadleTimeline/>
            }
            {(showTrackingDetails === 3) &&
                <ScrapPotTimeline/>
            }
        </div>
    )
}

export default Main;