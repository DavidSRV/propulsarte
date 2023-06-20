import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import "./sass/resets.scss";
import Home from "./pages/home/Home";

function App(): JSX.Element {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} 
            
          />

        </Routes>
    </>
  );
}

export default App;
