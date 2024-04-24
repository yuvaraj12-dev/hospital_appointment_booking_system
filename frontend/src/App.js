import logo from './logo.svg';
import './App.css';
import PatientList from './components/Patient/PatientList';
import Main from './components/Main';
import DoctorList from './components/Doctor/DoctorList';
import LoginPage from './components/LoginPage';
import PatientCreate from './components/Patient/PatientCreate';
import DoctorCreate from './components/Doctor/DoctorCreate';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <Main/>
      </div>
  );
}

export default App;
