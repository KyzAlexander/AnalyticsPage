import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import "./styles/_App.scss";
import Dashboard from "./components/layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
