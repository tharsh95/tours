import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hotel from './Hotel'
import './intro.css'
const Intro = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [removed, setRemoved] = useState([])
    const fetchData = async () => {
        try {

            const res = await axios.get(`https://course-api.com/react-tours-project`)
            setData(res.data)
            setLoading(false)
        }
        catch {
            setLoading(true)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    function handleNotInterested(id) {
        const newTours = data.filter((el) => {
            return (
                el.id !== id
                
                )
            })
            localStorage.setItem("NI",id)
        setData(newTours)

    }
    if (loading) {
        return (
            <div className="loadcontainer">
                <div className="loader"></div>

            </div>
        )
    }
    else if(data.length===0){
        return(<div className="left">
            
            <h1>Nothing to see here...</h1>
        </div>
        )
    }
    else
        return (
            <div className='container'>
                <div className='title'>
                    <h1>Our Tours</h1>

                    <div className="underline"></div>
                </div>

                {data.map((el) => {
                    return (
                        <Hotel key={el.id} name={el.name} img={el.image} price={el.price} info={el.info} id={el.id} handleChange={handleNotInterested} />

                    )
                })}
            </div>
        )
}

export default Intro
// return(
//                 el.id!==id