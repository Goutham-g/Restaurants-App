
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import SingleView from "./components/SingleView";




function App() {
  return (
    <div className="App">

      < Header ></Header >


      <Routes>
        <Route path='' element={<Home> </Home>}></Route>
        <Route path="view/:id" element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>


    </div >
  );
}

export default App;
