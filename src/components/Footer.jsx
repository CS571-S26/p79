import { Link } from "react-router-dom";

// Footer — secondary navigation aid (Web Design lecture)
// Provides comprehensive links as an alternative path through the site
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-2 small">
        <Link to="/" className="text-white-50 text-decoration-none footer-link">Home</Link>
        <Link to="/resources" className="text-white-50 text-decoration-none footer-link">Resources</Link>
        <Link to="/map" className="text-white-50 text-decoration-none footer-link">Map</Link>
        <Link to="/saved" className="text-white-50 text-decoration-none footer-link">Saved ❤️</Link>
        <Link to="/submit" className="text-white-50 text-decoration-none footer-link">Submit a Tip</Link>
      </div>
      <small className="text-white-50">
        🎓 Campus Survival Hub — Built by students, for students.
      </small>
    </footer>
  );
}

export default Footer;
