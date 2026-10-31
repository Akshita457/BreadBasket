
import React, { useEffect, useState } from "react";
import ProfileMenu from "./profileMenu.jsx";

function DonorDashboard({ onDonate, user, onLogout }) {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDonations() {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          setError("Please log in to view your donations.");
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/donations/my",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load donations.");
        }

        setDonations(data.donations || []);
      } catch (err) {
        setError(err.message || "Could not connect to the backend.");
      } finally {
        setLoading(false);
      }
    }

    fetchDonations();
  }, []);

  const totalQuantity = donations.reduce(
    (total, donation) => total + Number(donation.quantity || 0),
    0
  );

  const collectedCount = donations.filter(
    (donation) =>
      donation.status === "picked_up" ||
      donation.status === "completed"
  ).length;

  const completedCount = donations.filter(
    (donation) => donation.status === "completed"
  ).length;

  function formatDate(date) {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function formatStatus(status) {
    const labels = {
      available: "Available",
      accepted: "Accepted",
      picked_up: "Picked Up",
      completed: "Completed",
      cancelled: "Cancelled",
    };

    return labels[status] || status;
  }

  return (
    <div className="donor-dashboard">
      {/* Sidebar */}
      <aside className="donor-sidebar">
        <div className="donor-brand">
          <span>🍞</span>
          <h2>BreadBasket</h2>
        </div>

        <nav className="donor-nav">
          <button className="donor-nav-item active">
            🏠 Dashboard
          </button>

          <button className="donor-nav-item" onClick={onDonate}>
            ➕ Donate Food
          </button>
        </nav>


      </aside>

      {/* Main Dashboard */}
      <main className="donor-content">
        {/* Header */}
        <div className="donor-header">
          <div>
            <p className="donor-small-title">DONOR DASHBOARD</p>
            <h1>Welcome back! 👋</h1>
            <p>
              Thank you for helping us reduce food waste
              and spread hope.
            </p>
          </div>

          <ProfileMenu user={user} onLogout={onLogout} />
        </div>

        {/* Statistics */}
        <div className="donor-stats">
          <div className="donor-stat-card">
            <div className="donor-stat-icon">🍱</div>
            <div>
              <p>Total Donations</p>
              <h2>{donations.length}</h2>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">🥗</div>
            <div>
              <p>Food Donated</p>
              <h2>{totalQuantity}</h2>
              <small>total quantity</small>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">🤝</div>
            <div>
              <p>Collected</p>
              <h2>{collectedCount}</h2>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">🌱</div>
            <div>
              <p>Completed Donations</p>
              <h2>{completedCount}</h2>
            </div>
          </div>
        </div>

        {/* Donate Banner */}
        <div className="donor-donate-banner">
          <div>
            <h2>Have extra food?</h2>
            <p>
              Don't let good food go to waste.
              Donate it to someone who needs it.
            </p>
          </div>

          <button
            className="donor-donate-button"
            onClick={onDonate}
          >
            + Donate Food
          </button>
        </div>

        {/* Recent Donations */}
        <section className="donor-section">
          <div className="donor-section-header">
            <div>
              <h2>Recent Donations</h2>
              <p>Track your latest food donations.</p>
            </div>
          </div>

          {loading && <p>Loading your donations...</p>}

          {!loading && error && (
            <p role="alert">{error}</p>
          )}

          {!loading && !error && donations.length === 0 && (
            <p>
              You haven't donated any food yet. Start by
              clicking Donate Food!
            </p>
          )}

          {!loading && !error && donations.length > 0 && (
            <div className="donor-table-wrapper">
              <table className="donor-table">
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {donations.map((donation) => (
                    <tr key={donation._id}>
                      <td>
                        <strong>{donation.foodName}</strong>
                      </td>

                      <td>{donation.category}</td>

                      <td>
                        {donation.quantity} {donation.unit}
                      </td>

                      <td>
                        {formatDate(
                          donation.createdAt || donation.preparedDate
                        )}
                      </td>

                      <td>
                        <span
                          className={
                            donation.status === "available"
                              ? "donor-status available"
                              : "donor-status collected"
                          }
                        >
                          {formatStatus(donation.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Impact */}
        <div className="donor-impact">
          <div className="donor-impact-icon">💚</div>

          <div>
            <h2>Your donations make a difference!</h2>
            <p>
              Every meal you donate helps reduce food waste
              and provides food to someone in need.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DonorDashboard;
