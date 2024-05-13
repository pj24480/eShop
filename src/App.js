import "./App.css";
import Catnav from "./Component/CatNav/Catnav";
import MainComponent from "./Component/MainComponent";
import Topnav from "./Component/TopNAv/Topnav";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Catnav />
      <MainComponent />
    </div>
  );
}

export default App;
