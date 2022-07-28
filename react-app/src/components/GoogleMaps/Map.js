import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";

const tomtomApiKey = process.env.REACT_APP_TOMTOM_API_KEY

const containerStyle = {
    width: '100%',
    height: '400px'
};

export default function MapView({ event = null }) {
    const [map, setMap] = useState(null);
    const [address, setAddress] = useState('')
    const [center, setCenter] = useState({lat: 39.8097343, lng: -98.5556199})
    const [zoom, setZoom] = useState(15)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    const addressFormatter = (eventVar) => {
        return eventVar.street_address.split(' ').join('%20').concat('%20', event.city, '%20', event.state)
    };

    useEffect(() => {
        if (!event) return;
        setAddress(addressFormatter(event))
    }, [event])

    const geoFetch = async () => {
        const tomtomResponse = await fetch(`https://api.tomtom.com/search/2/geocode/${address}.json?storeResult=false&limit=1&language=en-US&view=Unified&key=${tomtomApiKey}`)
        if(tomtomResponse.ok){
            const data = await tomtomResponse.json()
            const lat = data.results[0].position.lat
            const lng = data.results[0].position.lon
            setCenter({lat: lat, lng: lng})
            setZoom(15)
        } else setZoom(15)
    }

    useEffect(() => {
        if (address.length < 3) return;
        geoFetch()
    }, [address])

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker position={center} zoom={zoom} />
            <></>
        </GoogleMap>
    ) : <></>
}
