import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";

// Categories that have physical locations — show lat/lng fields for these
const physicalCategories = ["study", "food", "wellness"];

function SubmitPage() {
  const [name, setName]               = useState("");
  const [category, setCategory]       = useState("study");
  const [description, setDescription] = useState("");
  const [hours, setHours]             = useState("");
  const [price, setPrice]             = useState("");
  const [rating, setRating]           = useState("3");
  const [lat, setLat]                 = useState("");
  const [lng, setLng]                 = useState("");
  const [submitted, setSubmitted]     = useState(false);
  const [error, setError]             = useState("");

  // Whether the selected category needs a physical location
  const isPhysical = physicalCategories.includes(category);

  // Validate that a value is a valid number within a range
  function isValidCoord(value, min, max) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      setError("Please fill in the name and description.");
      return;
    }

    // Validate lat/lng only if the user filled them in
    if (lat.trim() !== "" && !isValidCoord(lat, 43.0, 43.2)) {
      setError("Latitude looks off — UW-Madison is around 43.07. Please double check it.");
      return;
    }
    if (lng.trim() !== "" && !isValidCoord(lng, -89.6, -89.3)) {
      setError("Longitude looks off — UW-Madison is around -89.40. Please double check it.");
      return;
    }

    console.log("Submitted tip:", {
      name, category, description, hours, price, rating,
      lat: lat ? parseFloat(lat) : null,
      lng: lng ? parseFloat(lng) : null,
    });

    // Reset form
    setName(""); setCategory("study"); setDescription("");
    setHours(""); setPrice(""); setRating("3");
    setLat(""); setLng("");
    setError("");
    setSubmitted(true);
  }

  return (
    <Container className="py-5" style={{ maxWidth: "640px" }}>
      <h2 className="text-center mb-1">Submit a Tip</h2>
      <p className="text-center text-muted mb-4">
        Know a great spot or life-saving hack? Share it with your fellow students!
      </p>

      {submitted && (
        <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
          ✅ Thanks! Your tip has been received.
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError("")}>
          ⚠️ {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name <span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Hidden rooftop garden"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="study">📚 Study Spots</option>
            <option value="food">🍽️ Food</option>
            <option value="wellness">🏋️ Wellness</option>
            <option value="productivity">🍅 Productivity</option>
            <option value="hacks">💡 Campus Hacks</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description <span className="text-danger">*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tell students what makes this worth knowing..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. 24/7 or 8am–10pm"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Free or $5–$10"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Lat/Lng fields — only shown for physical categories */}
        {isPhysical && (
          <>
            <p className="text-muted small mb-2">
              📍 Optional: add coordinates so your tip appears on the campus map.
              You can find them by right-clicking your location on{" "}
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Google Maps
              </a>.
            </p>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="e.g. 43.0766"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    isInvalid={lat !== "" && !isValidCoord(lat, 43.0, 43.2)}
                    isValid={lat !== "" && isValidCoord(lat, 43.0, 43.2)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Should be near 43.07 for UW-Madison.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="e.g. -89.4024"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    isInvalid={lng !== "" && !isValidCoord(lng, -89.6, -89.3)}
                    isValid={lng !== "" && isValidCoord(lng, -89.6, -89.3)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Should be near -89.40 for UW-Madison.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Form.Group className="mb-4">
          <Form.Label>Your Rating: {rating} ⭐</Form.Label>
          <Form.Range
            min="1" max="5" step="1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <div className="d-flex justify-content-between small text-muted">
            <span>1 – Poor</span><span>3 – Okay</span><span>5 – Excellent</span>
          </div>
        </Form.Group>

        <div className="d-grid">
          <Button variant="dark" type="submit" size="lg">Submit Tip 🚀</Button>
        </div>
      </Form>
    </Container>
  );
}

export default SubmitPage;
