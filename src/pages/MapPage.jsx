import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Button } from "react-bootstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import places from "../data/places";

// Fix for missing marker icons in Vite + Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Color for each category — matches the Bootstrap badge colors used in the app
const categoryColors = {
  study:        "#0d6efd",  // blue
  food:         "#ffc107",  // yellow
  wellness:     "#198754",  // green
  productivity: "#0dcaf0",  // teal
  hacks:        "#dc3545",  // red
};

// Filter button labels
const CATEGORIES = ["all", "study", "food", "wellness", "productivity", "hacks"];
const labels = {
  all:          "🗂️ All",
  study:        "📚 Study",
  food:         "🍽️ Food",
  wellness:     "🏋️ Wellness",
  productivity: "🍅 Productivity",
  hacks:        "💡 Hacks",
};

// Creates a colored circle marker using L.divIcon
function createColoredIcon(category) {
  const color = categoryColors[category] || "#6c757d";
  return L.divIcon({
    className: "",
    html: `<div style="
      background-color: ${color};
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.45);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
}

// Only places with a real physical location
const physicalPlaces = places.filter((p) => p.lat && p.lng);

function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePlaces =
    activeFilter === "all"
      ? physicalPlaces
      : physicalPlaces.filter((p) => p.category === activeFilter);

  return (
    <Container className="py-4">
      <h2 className="text-center mb-1">Campus Map</h2>
      <p className="text-center text-muted mb-3">
        Click any pin to see details. Use the filters to show specific categories.
      </p>

      {/* Category filter buttons */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={activeFilter === cat ? "dark" : "outline-dark"}
            onClick={() => setActiveFilter(cat)}
          >
            {labels[cat]}
          </Button>
        ))}
      </div>

      {/* Color legend */}
      <div className="d-flex flex-wrap gap-3 justify-content-center mb-3 small">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <span key={cat} className="d-flex align-items-center gap-1">
            <span style={{
              display: "inline-block",
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: color,
              border: "2px solid #fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }} />
            <span className="text-capitalize">{cat}</span>
          </span>
        ))}
      </div>

      {/* Leaflet map */}
      <div className="rounded overflow-hidden shadow" style={{ height: "480px" }}>
        <MapContainer
          center={[43.0766, -89.4024]}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {visiblePlaces.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={createColoredIcon(place.category)}
            >
              <Popup>
                <strong>{place.name}</strong><br />
                📍 {place.address}<br />
                ⏰ {place.hours}<br />
                💰 {place.price}<br />
                <a href={place.mapsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <p className="text-center text-muted small mt-2">
        Showing {visiblePlaces.length} of {physicalPlaces.length} locations
      </p>
    </Container>
  );
}

export default MapPage;
