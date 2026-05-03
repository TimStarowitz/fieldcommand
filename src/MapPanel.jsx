import { useEffect, useRef }from "react"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

function MapPanel() {
    const mapContainer = useRef(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            center: [-93.6001, 41.5868],
            zoom: 9,    
        })
        
        return () => map.remove()
    }, [])
    
    return (
        <section
            ref={mapContainer}
            style={{
                flex: 1
            }}
        />
    )
    
}

export default MapPanel