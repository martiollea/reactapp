import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen></SearchScreen>} />
      </Routes>
    </BrowserRouter>
  );
}
