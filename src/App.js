import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Corous from './components/corousal/Corous';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login_signup from './components/Login/Login_sigup';
import Landing_page from './components/Login/Landing_page';
import Hospital_login from './components/Login/Hospital_login';
import Top2 from './components/Navbar/Top2';
import Needy_signup from './components/Login/Needy_signup';
import Home from './components/Home';

function App() {



  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Landing_page />} />
        <Route exact path="/Donor_Register" element={<Login_signup />} />
        <Route exact path="/Needy_signup" element={<Needy_signup />} />
        <Route exact path="/Hospital_login" element={<Hospital_login />} />
        {/* {window.localStorage.getItem("isAuthenticated") ?
          <Route exact path="/hospital/dashboard" element={<Dashboard />} />
          : <Redirect to="/hospital-login" />
        } */}
        {/* {window.localStorage.getItem("isAuthenticated") ?
          <Route exact path="/hospital/approve-donor" component={ApproveDonor} />
          : <Redirect to="/hospital-login" />
        } */}
        {/* {window.localStorage.getItem("isAuthenticated") ?
          <Route exact path="/hospital/patient-record" component={PatientRecord} />
          : <Redirect to="/hospital-login" />
        }
        {window.localStorage.getItem("isAuthenticated") ?
          <Route exact path="/hospital/transplant-match" render={() => <TransplantMatch />} />
          : <Redirect to="/hospital-login" />
        } */}


      </Routes>
    </>
  );
}

export default App;
