import './App.css';
import Tictac from './component/Tictac';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Tictac />
      <Footer/>
    </div>
  );
}

export default App;
