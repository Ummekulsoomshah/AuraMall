import React from 'react'

function BagSummaryPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
                <div className="bagimg" style={{ width: "80px" }}>
                    <img src="/bag.jfif" alt="" style={{ width: "70px" }} />
                </div>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.settrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default BagSummaryPopup
