import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
