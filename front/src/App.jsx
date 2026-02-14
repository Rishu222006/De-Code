import Home from "./components/Home/Home.jsx";
import Analysis from "./components/Analysis/analysis.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analyze' element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
