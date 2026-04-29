// StarRating — reusable star display component
// Props: rating (number 1–5)
// Accessibility: aria-label announces rating to screen readers;
//   individual stars are aria-hidden so they're not read aloud twice.
function StarRating({ rating }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      style={{ color: "#d4a600", fontSize: "0.9rem", letterSpacing: "1px" }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden="true">
          {i <= rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default StarRating;
