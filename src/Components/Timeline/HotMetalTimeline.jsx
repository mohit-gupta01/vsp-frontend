import React from 'react';
import { useStateContext } from '../../context/StateContext';
import Remove from './../../assets/remove.png';
import Arrow from './../../assets/arrow.png';


const HotMetalTimeline = () => {
    const { setShowTrackingDetails } = useStateContext();

    return (
        <div className="tracking-timeline flex flex-c">
            <div className="cancel" onClick={() => { setShowTrackingDetails(0) }}>
                <img src={Remove} alt="" />
            </div>
            <div className="tracking-timeline-box flex flex-c">
                <div className="timeline-heading flex flex-r ai-center">
                    <span>TLC pit area</span>
                    <div className="efficiency" style={{ backgroundColor: 'green' }}>
                        <span>10% more than daily average</span>
                    </div>
                </div>
                <div className="timeline-description">
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#787878' }}>22 Ladles passed</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#989898' }}>Last updated on 11:11</span>
                </div>
            </div>
            <div className="arrow-container">
                <div className="ladles-passed">10 Ladles in transition state.</div>
                <div className="arrow-img-to" style={{ width: "50px" }}>
                    <img src={Arrow} alt="" />
                </div>
                <div className="arrow-img-from">
                    <img src={Arrow} alt="" />
                </div>
                <span className="ladles-passed">10 Ladles in transition state.</span>
            </div>
            <div className="tracking-timeline-box flex flex-c">
                <div className="timeline-heading flex flex-r ai-center">
                    <span>Converter</span>
                    <div className="efficiency" style={{ backgroundColor: 'red' }}>
                        <span>10.0% more than daily average</span>
                    </div>
                </div>
                <div className="timeline-description">
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#787878' }}>21 Ladles passed</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#989898' }}>Last updated on 11:11</span>
                </div>
            </div>
        </div>
    );
}

export default HotMetalTimeline;