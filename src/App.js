import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import InternationalClients from "./components/InternationalClients";
import Contact from "./components/Contact";
import NationalClients from "./components/NationalClients";
import EngineeringServices from "./components/EngineeringServices";
function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Services />
      <EngineeringServices/>
      <NationalClients />
      <InternationalClients />
      <Contact />
    </>
  );
}

export default App;
