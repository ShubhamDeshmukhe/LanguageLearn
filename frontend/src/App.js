import Learnnav from './components/Learnnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import Api from './pages/Api';
import Question from './pages/Question';


function App() {
  return (
    <div className="App">
      <Learnnav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/api' element={<Api />} />
        <Route path='/question' element={<Question />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
