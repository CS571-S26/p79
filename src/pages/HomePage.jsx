import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container className="py-5 text-center">
      <h1>Campus Survival Hub</h1>
      <p className="lead">
        A student-powered guide to the best study spots, food, and campus tips.
      </p>
      <Button as={Link} to="/resources" variant="dark">
        Browse Resources
      </Button>
    </Container>
  );
}

export default HomePage;
