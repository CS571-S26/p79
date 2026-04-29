import { Form, InputGroup } from "react-bootstrap";

// SearchBar — controlled search input component
// Provides "Search as navigation" (Web Design lecture: secondary nav aid)
// Props: value (string), onChange (callback receiving new string value)
function SearchBar({ value, onChange }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <InputGroup style={{ maxWidth: "420px" }}>
        <InputGroup.Text id="search-icon" aria-hidden="true">
          🔍
        </InputGroup.Text>
        <Form.Control
          id="resource-search"
          type="search"
          placeholder="Search by name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search campus resources by name"
          aria-describedby="search-icon"
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
