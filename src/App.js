import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
