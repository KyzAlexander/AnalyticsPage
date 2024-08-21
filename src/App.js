import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import "./styles/_App.scss";
import Dashboard from "./components/layouts/Dashboard";
import MainFeatures from "./components/layouts/MainFeatures";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Dashboard />
        <MainFeatures />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
