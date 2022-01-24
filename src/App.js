import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Slide from './Components/Slide';
import Pics from './Components/Pics';
import FOrm from './Components/fOrm';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slide/>
      <Pics/>
      <FOrm/>
      <Footer/>
      
    </div>
  );
}

export default App;
