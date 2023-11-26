// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/MainHome/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
