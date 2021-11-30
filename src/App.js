import {BrowserRouter} from "react-router-dom";
import Home from "./components/pages/Home";
import { Routes ,Route } from 'react-router-dom';
import View from './components/student/View';
import Edit from "./components/student/Edit";
function App() {
  return (
    <>
    {/* <h1>Hello World</h1> */}
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/view/1' element={<View/>} />
      <Route path='/edit/1' element={<Edit/>} />
        {/* <Route exact path = "/" component={Home}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
