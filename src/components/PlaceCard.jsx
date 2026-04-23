import { Card, Badge, Button } from "react-bootstrap";

const categoryColors = {
  study: "primary",
  food: "warning",
  wellness: "success",
  productivity: "info",
  hacks: "danger",
};

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

// PlaceCard — reusable Bootstrap Card for a campus place or tip
// Props: place (object), isFav (bool), onToggleFav (callback)
function PlaceCard({ place, isFav, onToggleFav }) {
  const badgeColor = categoryColors[place.category] || "secondary";

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg={badgeColor} className="text-capitalize">
            {place.category}
          </Badge>
          <span style={{ color: "#f5a623", fontSize: "0.9rem" }}>
            {renderStars(place.rating)}
          </span>
        </div>

        <Card.Title className="fs-6 fw-bold">{place.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {place.description}
        </Card.Text>

        <ul className="list-unstyled small mb-3 text-muted">
          <li>⏰ {place.hours}</li>
          <li>💰 {place.price}</li>
          <li>🔊 {place.noiseLevel}</li>
        </ul>

        <Button
          variant={isFav ? "warning" : "outline-secondary"}
          size="sm"
          onClick={() => onToggleFav(place.id)}
        >
          {isFav ? "❤️ Saved" : "🤍 Save"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PlaceCard;
