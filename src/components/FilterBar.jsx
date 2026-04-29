// FilterBar — interactive category filter pill buttons
// Props: activeFilter (string), onFilterChange (callback)

const CATEGORIES = ["all", "study", "food", "wellness", "productivity", "hacks"];

const labels = {
  all:          "🗂️ All",
  study:        "📚 Study",
  food:         "🍽️ Food",
  wellness:     "🏋️ Wellness",
  productivity: "🍅 Productivity",
  hacks:        "💡 Hacks",
};

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div
      className="d-flex flex-wrap gap-2 justify-content-center my-4"
      role="group"
      aria-label="Filter by category"
    >
      {CATEGORIES.map((cat) => {
        const isActive = activeFilter === cat;
        const activeCls = `filter-btn-active-${cat}`;
        const idleCls   = cat === "all" ? "" : `filter-btn-idle-${cat}`;

        return (
          <button
            key={cat}
            type="button"
            className={`btn filter-btn ${isActive ? activeCls : idleCls}`}
            style={
              !isActive && cat === "all"
                ? { color: "#374151", borderColor: "#d1d5db" }
                : {}
            }
            onClick={() => onFilterChange(cat)}
            aria-pressed={isActive}
          >
            {labels[cat]}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;
