import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

function ResourcesPage() {
  const location = useLocation();
  const initialFilter = location.state?.filter || "all";

  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery]   = useState("");

  // Load favorites from localStorage on first render
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("csh-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("csh-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Merge built-in places with user-submitted tips from localStorage
  const submittedTips = JSON.parse(localStorage.getItem("csh-submitted-tips") || "[]");
  const allPlaces = [...places, ...submittedTips];

  // Filter places by category, then narrow by search query — .filter() + .filter()
  const filteredPlaces = allPlaces
    .filter((p) => activeFilter === "all" || p.category === activeFilter)
    .filter((p) =>
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Toggle a place in/out of favorites — callback pattern
  function handleToggleFav(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  return (
    <div className="page-section">
    <Container className="py-2">
      <h1 className="text-center fw-bold mb-1" style={{ fontSize: "1.75rem", color: "#1a1a2e" }}>Campus Resources</h1>
      <p className="text-center text-muted mb-3" style={{ fontSize: "0.95rem" }}>
        Browse student-curated spots and tips. Save your favorites!
      </p>

      {/* SearchBar — secondary navigation aid (Web Design lecture) */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* FilterBar — interactive category filter, buttons have aria-pressed */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <p className="text-center text-muted small mb-3">
        {filteredPlaces.length} result{filteredPlaces.length !== 1 ? "s" : ""}
        {favorites.length > 0 && (
          <span className="ms-2 text-danger">
            · ❤️ {favorites.length} saved
          </span>
        )}
      </p>

      {/* Grid of PlaceCards — map() over filtered array */}
      {filteredPlaces.length === 0 ? (
        <p className="text-center text-muted py-5">
          No resources match your search. Try a different keyword or category.
        </p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredPlaces.map((place) => (
            <Col key={place.id}>
              <PlaceCard
                place={place}
                isFav={favorites.includes(place.id)}
                onToggleFav={handleToggleFav}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
  );
}

export default ResourcesPage;
