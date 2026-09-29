import { useState } from 'react';
import React from 'react';
import MainPage from './components/index';
import './App.css'
import DonateFood from './components/donatefoodForm';
import DonorDashboard from './components/donorDashboard';
import NgoDashboard from './components/ngoDashboard';
import VolunteerDashboard from './components/volunteerDashboard';

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState("dashboard");
  return (
    <>
      {/* {page === "dashboard" && (
        <DonorDashboard
          onDonate={() => setPage("donate")}
        />
      )}

      {page === "donate" && (
        <DonateFood
          onBack={() => setPage("dashboard")}
        />
      )} */}
      <VolunteerDashboard/>
    </>
  )
}

export default App
