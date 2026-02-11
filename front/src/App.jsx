{/*import Home from "./landing_page.jsx";*/ }
import Analysis from "./components/pages/analysis.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*<Route path='/' element={<Home />} />*/}
          <Route path='/analyze' element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
