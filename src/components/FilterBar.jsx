import { Button } from "react-bootstrap";

const CATEGORIES = ["all", "study", "food", "wellness", "productivity", "hacks"];

const labels = {
  all: "🗂️ All",
  study: "📚 Study",
  food: "🍽️ Food",
  wellness: "🏋️ Wellness",
  productivity: "🍅 Productivity",
  hacks: "💡 Hacks",
};

// FilterBar — interactive category filter buttons
// Props: activeFilter (string), onFilterChange (callback)
function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center my-4">
      {CATEGORIES.map((cat) => (
        <Button
          key={cat}
          variant={activeFilter === cat ? "dark" : "outline-dark"}
          onClick={() => onFilterChange(cat)}
          size="sm"
        >
          {labels[cat]}
        </Button>
      ))}
    </div>
  );
}

export default FilterBar;
