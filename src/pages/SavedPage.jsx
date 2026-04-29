import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";

// SavedPage — displays places the user has saved to localStorage
// Reads and writes the same "csh-favorites" key as ResourcesPage
function SavedPage() {
  // Initialize favorites from localStorage (lazy initializer)
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("csh-favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Keep localStorage in sync whenever favorites changes
  useEffect(() => {
    localStorage.setItem("csh-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle a place in/out of favorites — callback pattern (same as ResourcesPage)
  function handleToggleFav(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  // Derive the saved place objects from the favorites id list
  const savedPlaces = places.filter((p) => favorites.includes(p.id));

  return (
    <Container className="py-4">
      <h1 className="text-center fw-bold mb-1" style={{ fontSize: "1.75rem" }}>❤️ Saved Places</h1>
      <p className="text-center text-muted mb-4">
        Your personally curated list of campus resources.
      </p>

      {savedPlaces.length === 0 ? (
        /* Empty state — guides user back to Resources (true affordance) */
        <div className="text-center py-5">
          <p className="fs-1 mb-2">🗒️</p>
          <h2 className="fs-5 text-muted">No saved places yet</h2>
          <p className="text-muted small mb-4">
            Browse resources and click <strong>Save</strong> on anything you want to keep.
          </p>
          <Button as={Link} to="/resources" variant="dark" size="lg">
            Browse Resources
          </Button>
        </div>
      ) : (
        <>
          <p className="text-center text-muted small mb-3">
            {savedPlaces.length} saved place{savedPlaces.length !== 1 ? "s" : ""}
          </p>
          <Row xs={1} md={2} lg={3} className="g-4">
            {savedPlaces.map((place) => (
              <Col key={place.id}>
                <PlaceCard
                  place={place}
                  isFav={true}
                  onToggleFav={handleToggleFav}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default SavedPage;
