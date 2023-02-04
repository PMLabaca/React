import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Destacado />
      <ItemListContainer greeting={"No se encontraron productos"} />
      <Footer />
    </div>
  );
}

export default App;
