import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SearchScreen />} />
          <Route path="/wine/:wineId" element={<DetailsScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
