import React from 'react';
import { useStateContext } from '../context/StateContext';

const LaddleCard = (props) => {
    const {setShowTrackingDetails} = useStateContext();
    const ladleClick = (index) => {
        setShowTrackingDetails(index);
        console.log(index);
    }
    return (
        <div className="ladle-card flex flex-c">
            <div className="ladle-card-header flex flex-c">
                <span style={{ fontFamily: 'Montserrat', fontSize: "20px", fontWeight: '600' }}>{props.title}</span>
                <span style={{ fontFamily: 'Poppins', fontSize: "16px", fontWeight: '500' }}>Processed {props.efficiency} more than daily average</span>
                <span style={{ fontFamily: 'Poppins', fontSize: "14px", fontWeight: '500', color: "#757272" }}>Last Updated on: {props.time}</span>
            </div>
            <div className="ladle-card-footer flex flex-r ai-center">
                <div className="detail-button" onClick={()=>ladleClick(props.index)}>
                    <span>Details</span>
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#757272' }}>{props.count} {props.title} Processed</span>
            </div>
            <div className="image">
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default LaddleCard;