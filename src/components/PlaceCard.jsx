import { Card, Button } from "react-bootstrap";
import StarRating from "./StarRating";

// Map each category to its CSS class and hex color
const categoryMeta = {
  study:        { cls: "place-card-study",        badgeCls: "badge-study",        label: "📚 Study",        color: "#2563eb" },
  food:         { cls: "place-card-food",         badgeCls: "badge-food",         label: "🍽️ Food",         color: "#d97706" },
  wellness:     { cls: "place-card-wellness",     badgeCls: "badge-wellness",     label: "🏋️ Wellness",     color: "#16a34a" },
  productivity: { cls: "place-card-productivity", badgeCls: "badge-productivity", label: "🍅 Productivity", color: "#0891b2" },
  hacks:        { cls: "place-card-hacks",        badgeCls: "badge-hacks",        label: "💡 Hacks",        color: "#dc2626" },
};

// PlaceCard — reusable Bootstrap Card for a campus place or tip
// Props: place (object), isFav (bool), onToggleFav (callback)
function PlaceCard({ place, isFav, onToggleFav }) {
  const meta = categoryMeta[place.category] || {
    cls: "", badgeCls: "", label: place.category, color: "#6c757d",
  };

  return (
    <Card className={`h-100 shadow-sm place-card ${meta.cls}`}>
      <Card.Body className="d-flex flex-column p-4">

        {/* Top row: category badge + star rating */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span
            className={`badge rounded-pill fw-medium ${meta.badgeCls}`}
            style={{ fontSize: "0.72rem", padding: "5px 10px", letterSpacing: "0.3px" }}
          >
            {meta.label}
          </span>
          <StarRating rating={place.rating} />
        </div>

        {/* Place name — h2 so heading order is h1 (page) → h2 (card) */}
        <Card.Title
          as="h2"
          className="fw-semibold mb-2"
          style={{ fontSize: "1rem", color: "#1a1a2e", lineHeight: 1.3 }}
        >
          {place.name}
        </Card.Title>

        {/* Description — #4b5563 gives 7.1:1 contrast on white (WCAG AA ✓) */}
        <Card.Text
          className="flex-grow-1 mb-3"
          style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.55 }}
        >
          {place.description}
        </Card.Text>

        {/* Metadata chips — clearly tertiary */}
        <div
          className="d-flex flex-wrap gap-2 mb-3"
          style={{ fontSize: "0.75rem" }}
          aria-label="Details"
        >
          <span
            style={{ background: "#f1f5f9", borderRadius: 999, padding: "3px 10px", color: "#475569" }}
          >
            ⏰ {place.hours}
          </span>
          <span
            style={{ background: "#f1f5f9", borderRadius: 999, padding: "3px 10px", color: "#475569" }}
          >
            💰 {place.price}
          </span>
          <span
            style={{ background: "#f1f5f9", borderRadius: 999, padding: "3px 10px", color: "#475569" }}
          >
            🔊 {place.noiseLevel}
          </span>
        </div>

        {/* Save button */}
        <Button
          size="sm"
          onClick={() => onToggleFav(place.id)}
          aria-pressed={isFav}
          aria-label={isFav ? `Remove ${place.name} from saved` : `Save ${place.name}`}
          style={{
            borderRadius: 999,
            fontWeight: 500,
            fontSize: "0.8rem",
            padding: "6px 16px",
            background: isFav ? "#fef3c7" : "transparent",
            borderColor: isFav ? "#f59e0b" : "#d1d5db",
            color: isFav ? "#b45309" : "#6b7280",
            transition: "all 0.2s ease",
          }}
        >
          {isFav ? "❤️ Saved" : "🤍 Save"}
        </Button>

      </Card.Body>
    </Card>
  );
}

export default PlaceCard;
