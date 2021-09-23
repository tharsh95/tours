import React, { useState } from 'react'
import './hotel.css'
const Hotel = ({id, name, img, price, info, handleChange }) => {
    const[more, setMore] = useState(true)
    const result = more?info.slice(0,83):info

    return (
        <div className='hotel'>
            <div className="single">
                <img src={img} alt="" />
                <div className="name__price">
                    <h4>{name}</h4>
                    <h5>${price}</h5>
                </div>
                <p>{result}<span onClick={()=>setMore(!more)}>{more===true?'...Read more':' See Less'}</span></p>
                <button onClick={()=>handleChange(id)}>Not interested</button>
            </div>
        </div>
    )
}

export default Hotel
