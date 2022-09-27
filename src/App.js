import './App.css';
import Sidebar from './Components/Admin/Sidebar/Sidebar';
import AttendanceTable from './Components/Admin/AttendanceTable/AttendanceTable';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar/>
    </div>
  );
}

export default App;
