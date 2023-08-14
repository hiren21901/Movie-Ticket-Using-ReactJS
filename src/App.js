// import logo from './logo.svg';
import './App.css';
// import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Adminhome from './Admin/Adminhome';
import AddMovie from './Admin/AddMovie';
import ShowMovie from './Admin/ShowMovie';
import EditMovie from './Admin/EditMovie';
import AddState from './Admin/AddState';


function App() {
  return (

    <>

      <div>
        <Routes>
          <Route path="" element={< Adminhome />} />
          <Route path="/Header" element={< Header />} />
          <Route path="/AddMovie" element={< AddMovie />} />
          <Route path="/ShowMovie" element={< ShowMovie/>}/>
          <Route path="/EditMovie/:id" element={< EditMovie/>}/>
          <Route path="/AddState" element={< AddState/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
