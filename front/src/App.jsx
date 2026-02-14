import Home from "./components/Home/Home.jsx";
import Analysis from "./components/Analysis/analysis.jsx";
import About from "./components/about/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analyze' element={<Analysis />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
