import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='notfound' element={<Notfound />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </main>

        <Footer />
      </div>

    </Router>
    </GithubProvider>
  )
}

export default App;
