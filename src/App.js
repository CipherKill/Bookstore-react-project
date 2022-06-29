import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavHeader from './components/layouts/NavHeader'
import Footer from './components/layouts/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Books from './components/layouts/Books'
import './AppStyles.css'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100 justify-content-between app-container">
        <NavHeader/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/books" element={<Books forPath='books'/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

