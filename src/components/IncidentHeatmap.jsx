import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet.heat";

const IncidentHeatmap = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return; // Prevent reinitialization

    // Initialize the map
    mapInstance.current = L.map(mapContainer.current).setView(
      [51.505, -0.09],
      13
    );

    // Add tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapInstance.current
    );

    // Add the heatmap layer
    const heat = L.heatLayer([], { radius: 25 }).addTo(mapInstance.current);

    // Example to add data points
    const data = [
      [51.505, -0.09, 0.5], // Lat, Lng, intensity
      [51.51, -0.1, 0.7],
      // More data points...
    ];

    heat.setLatLngs(data);
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{
        height: "400px",
        width: "100%",
        border: "2px solid #ccc", // Border around the map
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        margin: "20px 0", // Add spacing around the map
      }}
    ></div>
  );
};

export default IncidentHeatmap;
