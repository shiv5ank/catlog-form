import { Routes, Route } from 'react-router-dom'
import './App.css';
import FormPage from './Components/FormPage';
import Catlog from './Components/Catlog';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Catlog /> } />
        <Route path='/form' element={ <FormPage /> } />
      </Routes>
          </div>
          );
        }
        export default App;
          