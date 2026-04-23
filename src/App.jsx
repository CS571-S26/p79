import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import SubmitPage from "./pages/SubmitPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="map" element={<MapPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
