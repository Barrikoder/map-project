import { Map } from 'pigeon-maps';
import { React, useEffect, useState } from "react"


export default function MyMap() {
    const [center, setCenter] = useState([50.879, 4.6997])
    const [zoom, setZoom] = useState(11)
    const [rest, setRest] = useState()

    const API = (code) => `https://restcountries.com/v3.1/alpha/${code}`


    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(json => { 
                console.log(json); 
                return json
            })
            .then(json => {
                fetch(API(json.location.country))
                    .then(response => response.json())
                    .then(json => { console.log(json) })
            })
    }
        , []);

    // console.log(response);

    return (
        <Map
            height={300}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
                setCenter(center)
                setZoom(zoom)
            }}
        />
        
    )
}