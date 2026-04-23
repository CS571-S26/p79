import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";
import FilterBar from "../components/FilterBar";

function ResourcesPage() {
  const location = useLocation();
  const initialFilter = location.state?.filter || "all";

  const [activeFilter, setActiveFilter] = useState(initialFilter);

  // Load favorites from localStorage on first render
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("csh-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("csh-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filter places by active category using .filter()
  const filteredPlaces =
    activeFilter === "all"
      ? places
      : places.filter((p) => p.category === activeFilter);

  // Toggle a place in/out of favorites — callback pattern
  function handleToggleFav(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  return (
    <Container className="py-4">
      <h2 className="text-center mb-1">Campus Resources</h2>
      <p className="text-center text-muted mb-2">
        Browse student-curated spots and tips. Save your favorites!
      </p>

      {/* Interactive filter bar — clicking a button filters the cards below */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {favorites.length > 0 && (
        <Alert variant="warning" className="text-center py-2 small">
          ❤️ You have <strong>{favorites.length}</strong> saved favorite{favorites.length !== 1 ? "s" : ""}
        </Alert>
      )}

      <p className="text-center text-muted small mb-3">
        {filteredPlaces.length} result{filteredPlaces.length !== 1 ? "s" : ""}
      </p>

      {/* Grid of PlaceCards — map() over filtered array */}
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
    </Container>
  );
}

export default ResourcesPage;
