import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// default icon fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// component to zoom to selected station
function MapZoom({ station }) {
  const map = useMap();
  useEffect(() => {
    if (station) {
      map.setView([station.lat, station.lng], 12, { animate: true });
    }
  }, [station, map]);
  return null;
}

export default function MapView({ stations, selectedStation }) {
  return (
    <MapContainer
      center={[51.1657, 10.4515]} // center of Germany
      zoom={6}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng]}>
          <Popup>
            {station.name} <br /> {station.city}
          </Popup>
        </Marker>
      ))}
      {selectedStation && <MapZoom station={selectedStation} />}
    </MapContainer>
  );
}
