
import { useState } from "react";
import "./App.css";

import LoginDashboard from "./components/loginForm.jsx";
import RegisterDashboard from "./components/registerForm.jsx";
import DonateFood from "./components/donatefoodForm";
import DonorDashboard from "./components/donorDashboard";
import NgoDashboard from "./components/ngoDashboard";
import VolunteerDashboard from "./components/volunteerDashboard";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  function handleAuthSuccess(loggedInUser) {
    setUser(loggedInUser);
    setPage("dashboard");
  }

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
    setPage("login");
  }

  if (page === "login") {
    return (
      <LoginDashboard
        onSuccess={handleAuthSuccess}
        onShowRegister={() => setPage("register")}
      />
    );
  }

  if (page === "register") {
    return (
      <RegisterDashboard
        onSuccess={handleAuthSuccess}
        onShowLogin={() => setPage("login")}
      />
    );
  }

  if (page === "donate" && user?.role === "donor") {
    return (
      <DonateFood onBack={() => setPage("dashboard")} />
    );
  }

  let dashboard;

  if (user?.role === "donor") {
    dashboard = (
      <DonorDashboard onDonate={() => setPage("donate")} />
    );
  } else if (user?.role === "ngo") {
    dashboard = <NgoDashboard />;
  } else if (user?.role === "volunteer") {
    dashboard = <VolunteerDashboard />;
  } else {
    return <LoginDashboard
      onSuccess={handleAuthSuccess}
      onShowRegister={() => setPage("register")}
    />;
  }

  return (
    <>
      <div style={{ padding: "10px", textAlign: "right" }}>
        <span style={{ marginRight: "12px" }}>
          Logged in as {user.name} ({user.role})
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {dashboard}
    </>
  );
}

export default App;
