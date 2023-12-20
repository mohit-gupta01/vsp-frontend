import React from 'react';
import Checkpoint from './../assets/checkpoint.png';
import turnAround from './../assets/turnaround.png';
import Circulation from './../assets/circulationTime.png';


const SearchResult = (props) => {
    return (
        <div className="search-result">
            <span className="result-heading">Ladle No - {props.ladleNo}</span>
            <span className='ladle-content'>Liquid Steel</span>
            <div className="result-container">
                <div className="result-container-desc">
                    <span className="result-container-heading">Last Checkpoint</span>
                    <span className="result-container-station">{props.lastCheckpoint}</span>
                </div>
                <div className="result-container-image">
                    <img src={Checkpoint} alt="" />
                </div>
            </div>
            <div className="result-container">
                <div className="result-container-desc">
                    <span className="result-container-heading">Ladle Circulation Time</span>
                    <span className="result-container-station">{props.CirculationTime}</span>
                </div>
                <div className="result-container-image">
                    <img src={Circulation} alt="" />
                </div>
            </div>
            <div className="result-container">
                <div className="result-container-desc">
                    <span className="result-container-heading">Ladle turn around time</span>
                    <span className="result-container-station">{props.TurnAroundTime}</span>
                </div>
                <div className="result-container-image">
                    <img src={turnAround} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchResult;