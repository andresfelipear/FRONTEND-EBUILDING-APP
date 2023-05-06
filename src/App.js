import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App font-sans">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;