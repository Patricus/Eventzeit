import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const containerStyle = {
    width: '100%',
    height: '400px'
};

export default function MapView({ event = null }) {
    const [map, setMap] = useState(null);
    const [address, setAddress] = useState('')
    const [center, setCenter] = useState({ lat: 39.8097343, lng: -98.5556199 })
    const [zoom, setZoom] = useState(4)
    const [invalidAddress, setInvalidAddress] = useState(false)

    const keys = useSelector(state => state.mapkeys)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: keys.google_key
    });

    const addressFormatter = (eventVar) => {
        return eventVar.street_address.split(' ').join('%20').concat('%20', event.city, '%20', event.state)
    };

    useEffect(() => {
        if (!event) return;
        setAddress(addressFormatter(event))
    }, [event])

    const geoFetch = async () => {
        const tomtomResponse = await fetch(`https://api.tomtom.com/search/2/geocode/${address}.json?storeResult=false&limit=1&language=en-US&view=Unified&key=${keys.tomtom_key}&countrySet=USA`)
        if (tomtomResponse.ok) {
            const data = await tomtomResponse.json()
            if (data.results.length > 0) {
                const lat = data.results[0].position.lat
                const lng = data.results[0].position.lon
                setCenter({ lat: lat, lng: lng })
            } else {
                setInvalidAddress(true)
            }
        }
        setZoom(15)
    }

    useEffect(() => {
        if (address.length < 1) return;
        geoFetch()
    }, [address])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker position={center} zoom={zoom} />
                <></>
            </GoogleMap>
            {invalidAddress &&
                <p>Address Not Found</p>
            }
        </>
    ) : <p>Loading</p>
}
