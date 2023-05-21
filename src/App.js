import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
