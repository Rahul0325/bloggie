import { Content, Home } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/article/:id" Component={Content} />
          <Route path="*" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
