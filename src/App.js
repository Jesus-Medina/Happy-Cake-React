import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomeView from "./views/HomeView";
import ContactView from './views/ContactView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/Contacto" element={<ContactView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
