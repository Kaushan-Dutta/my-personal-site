
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Caller';
//import Newsletter from './components/Newsletter.js';
import Error from './components/Error.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
   <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      {//<Route path="/newsletter" element={<Newsletter/>}/>
      }
      <Route path="/:slug" element={<Error/>}/>
      <Route path="/error" element={<NotFound/>}/>

     </Routes>
   </>
  );
}

export default App;
