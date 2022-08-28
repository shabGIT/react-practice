import logo from './logo.svg';
import './App.css';
import { UserRegistration } from './COMPONENTS/UserRegistration';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Form} from "./COMPONENTS/Form"
import { Logout } from './COMPONENTS/Logout';

function App() {
  return (
    <div className="App">
     < BrowserRouter basename='/practicals'>
     
     <Routes>
      <Route path='' element={<UserRegistration/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route  path='/logout' element={<Logout/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
