import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [search, setSearch] = useState < string > "";

  return <Outlet context={[search, setSearch]} />;
}

export default App;
