import { Container } from "react-bootstrap";
import PlaceCard from "../components/PlaceCard";

function ResourcesPage() {
  return (
    <Container className="py-4">
      <h2>Resources</h2>
      <PlaceCard name="Main Library" description="Great 24hr study spot." />
      <PlaceCard name="Campus Rec Center" description="Free with student ID." />
    </Container>
  );
}

export default ResourcesPage;
