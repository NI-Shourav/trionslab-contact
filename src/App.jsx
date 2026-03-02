import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TrionsLab from "./components/TrionsLab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrionsLab />} />
        <Route path="/trionslab" element={<TrionsLab />} />
      </Routes>
    </Router>
  );
}

export default App;
