import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import "./sass/resets.scss";
import Home from "./pages/home/Home";
import Nosotros from "./pages/nosotros/Nosotros";
import Proyectos from "./pages/proyectos/Proyectos";
import Servicios from "./pages/servicios/Servicios";
import Reconocimientos from "./pages/reconocimientos/Reconocimientos";
import Donaciones from "./pages/donaciones/Donaciones";
import Contacto from "./pages/contacto/contacto";

function App(): JSX.Element {
  return (
    <>
      <Navbar />

        <Routes>


          <Route path="/"> 
          <Route index element={<Home/>}/>
          <Route path="Propulsarte/Nosotros" element={<Nosotros/>}/>
          <Route path="Propulsarte/ProyectosEspeciales" element={<Proyectos/>}/>
          <Route path="Propulsarte/Servicios" element={<Servicios/>}/>

          <Route path="Propulsarte/ReconocimientosAliados" element={<Reconocimientos/>}/>
          <Route path="Propulsarte/Donaciones" element={<Donaciones/>}/>
          <Route path="Propulsarte/Contacto" element={<Contacto/>}/>

          //Terminar navbar con respectivas rutas 
          
          </Route>

        </Routes>
    </>
  );
}

export default App;
