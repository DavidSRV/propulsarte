import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import "./sass/resets.scss";
import Home from "./pages/home/Home";
import Nosotros from "./pages/nosotros/Nosotros";

function App(): JSX.Element {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} > 
          <Route index element={<Home/>}/>
          <Route path="Propulsarte/Nosotros" element={<Nosotros/>}/>
          
          </Route>

        </Routes>
    </>
  );
}

export default App;
