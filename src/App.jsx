import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen></SearchScreen>} />
        <Route
          path="/comic/:comicId"
          element={<DetailsScreen></DetailsScreen>}
        />
      </Routes>
    </BrowserRouter>
  );
}
