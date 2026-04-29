import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = [
  {
    key: "study",
    label: "Study Spots",
    emoji: "📚",
    desc: "Libraries, quiet corners, and group rooms.",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    key: "food",
    label: "Affordable Food",
    emoji: "🍽️",
    desc: "Budget eats, hidden gems, late-night bites.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    key: "wellness",
    label: "Wellness",
    emoji: "🏋️",
    desc: "Gyms, trails, and mental health tips.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    key: "productivity",
    label: "Productivity",
    emoji: "🍅",
    desc: "Study strategies and focus hacks.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    key: "hacks",
    label: "Campus Hacks",
    emoji: "💡",
    desc: "Free perks, discounts, insider knowledge.",
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

function HomePage() {
  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="hero-section text-white text-center py-5" aria-label="Welcome">
        <Container style={{ position: "relative", zIndex: 1 }}>
          <p className="text-uppercase fw-semibold mb-3" style={{ fontSize: "0.75rem", letterSpacing: "2.5px", color: "rgba(255,255,255,0.6)" }}>
            UW – Madison · Student Guide
          </p>
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: "-0.5px" }}>
            🎓 Campus Survival Hub
          </h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "560px", color: "rgba(255,255,255,0.8)", fontSize: "1.1rem" }}>
            A student-powered guide to study spots, affordable food,
            wellness tips, and campus hacks — all in one place.
          </p>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
            <Button
              as={Link}
              to="/resources"
              size="lg"
              style={{ background: "#f59e0b", borderColor: "#f59e0b", color: "#1a1a2e", fontWeight: 600, borderRadius: "999px", padding: "10px 28px" }}
            >
              Browse Resources →
            </Button>
            <Button
              as={Link}
              to="/submit"
              variant="outline-light"
              size="lg"
              style={{ borderRadius: "999px", padding: "10px 28px" }}
            >
              Submit a Tip
            </Button>
          </div>

          {/* Stats row */}
          <div className="d-flex flex-wrap gap-2 justify-content-center" style={{ paddingBottom: "3.5rem" }}>
            <span className="hero-stat">📍 12 resources</span>
            <span className="hero-stat">🗂️ 5 categories</span>
            <span className="hero-stat">🗺️ Interactive map</span>
            <span className="hero-stat">❤️ Save favorites</span>
          </div>
        </Container>
      </section>

      {/* ── Category Cards ───────────────────────────────────── */}
      <section className="page-section" aria-label="Browse by category">
        <Container>
          <h2 className="text-center fw-bold mb-1" style={{ fontSize: "1.5rem", color: "#1a1a2e" }}>
            Browse by Category
          </h2>
          <p className="text-center text-muted mb-4" style={{ fontSize: "0.95rem" }}>
            Pick a category to jump straight to what you need.
          </p>

          <Row xs={1} sm={2} md={3} lg={5} className="g-3">
            {categories.map((cat) => (
              <Col key={cat.key}>
                <Link
                  to="/resources"
                  state={{ filter: cat.key }}
                  style={{ textDecoration: "none" }}
                  aria-label={`Browse ${cat.label}`}
                >
                  <Card
                    className="h-100 text-center shadow-sm border-0 category-card"
                    style={{ background: cat.bg, borderTop: `3px solid ${cat.color} !important` }}
                  >
                    <Card.Body className="py-4">
                      {/* Colored emoji circle — visual design: shape + color */}
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: `${cat.color}18`,
                          border: `2px solid ${cat.color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.6rem",
                          margin: "0 auto 12px",
                        }}
                        aria-hidden="true"
                      >
                        {cat.emoji}
                      </div>
                      <Card.Title
                        className="fw-semibold mb-1"
                        style={{ fontSize: "0.9rem", color: cat.color }}
                      >
                        {cat.label}
                      </Card.Title>
                      <Card.Text className="small text-muted" style={{ fontSize: "0.78rem", lineHeight: 1.4 }}>
                        {cat.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
