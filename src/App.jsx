import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
