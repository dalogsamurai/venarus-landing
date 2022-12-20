import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main.page";
import "./App.css";

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
