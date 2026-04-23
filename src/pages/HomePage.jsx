import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = [
  { key: "study",        label: "Study Spots",   emoji: "📚", desc: "Libraries, quiet corners, and group rooms." },
  { key: "food",         label: "Affordable Food", emoji: "🍽️", desc: "Budget eats, hidden gems, late-night bites." },
  { key: "wellness",     label: "Wellness",       emoji: "🏋️", desc: "Gyms, trails, and mental health tips." },
  { key: "productivity", label: "Productivity",   emoji: "🍅", desc: "Study strategies and focus hacks." },
  { key: "hacks",        label: "Campus Hacks",   emoji: "💡", desc: "Free perks, discounts, insider knowledge." },
];

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}
      >
        <Container>
          <h1 className="display-5 fw-bold mb-3">🎓 Campus Survival Hub</h1>
          <p className="lead mb-4">
            A student-powered guide to the best study spots, affordable food,
            wellness tips, and campus hacks — all in one place.
          </p>
          <Button as={Link} to="/resources" variant="warning" size="lg" className="me-2">
            Browse Resources
          </Button>
          <Button as={Link} to="/submit" variant="outline-light" size="lg">
            Submit a Tip
          </Button>
        </Container>
      </div>

      {/* Category Cards */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Browse by Category</h2>
        <Row xs={1} sm={2} md={3} lg={5} className="g-3">
          {categories.map((cat) => (
            <Col key={cat.key}>
              <Link to="/resources" state={{ filter: cat.key }} style={{ textDecoration: "none" }}>
                <Card className="h-100 text-center shadow-sm border-0 category-card">
                  <Card.Body>
                    <div style={{ fontSize: "2rem" }}>{cat.emoji}</div>
                    <Card.Title className="fs-6 mt-2">{cat.label}</Card.Title>
                    <Card.Text className="small text-muted">{cat.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
