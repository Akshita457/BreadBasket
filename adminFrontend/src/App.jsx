import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/adminLogin";
import AdminDashboard from "./pages/adminDashboard";
import Users from "./pages/userList";
import Donations from "./pages/donationList";
import Requests from "./pages/ngoRequest";
import MealEntries from "./pages/mealEntryList";
import Volunteers from "./pages/volunteerList";
import Feedback from "./pages/feedbackList";
import Settings from "./pages/settings";

function App() {
    return (
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Admin Management Pages */}
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/donations" element={<Donations />} />
        <Route path="/admin/requests" element={<Requests />} />
        <Route path="/admin/meal-entries" element={<MealEntries />} />
        <Route path="/admin/volunteers" element={<Volunteers />} />
        <Route path="/admin/feedback" element={<Feedback />} />
        <Route path="/admin/settings" element={<Settings />} />
        </Routes>      
      </BrowserRouter>
        
    );
}
export default App;