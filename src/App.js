import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./Component/Sidebar";
import { Data } from "./Component/data";
import Cardshow from "./Component/Card";
import Profile from "./Component/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashbord from "./Component/Dashbord";
import About from "./Component/About";


function App() {
  return (
    <div className="App">
    <Router>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/card" element={<Cardshow item={Data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
