
import React, { useEffect, useState } from "react";
import ProfileMenu from "./profileMenu.jsx";

function NgoDashboard({ user, onLogout }) {
  const [section, setSection] = useState("dashboard");
  const [available, setAvailable] = useState([]);
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [busyId, setBusyId] = useState("");

  const token = sessionStorage.getItem("token");

  async function apiRequest(url, options = {}) {
    const response = await fetch(
      `http://localhost:5000${url}`,
      {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...options.headers,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  }

  async function loadDonations() {
    if (!token) {
      setError("Please log in to access the NGO dashboard.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const [availableData, requestsData] = await Promise.all([
        apiRequest("/api/ngo/donations"),
        apiRequest("/api/ngo/my-donations"),
      ]);

      setAvailable(availableData.donations || []);
      setMyRequests(requestsData.donations || []);
    } catch (err) {
      setError(err.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDonations();
  }, []);

  async function acceptDonation(id) {
    setBusyId(id);
    setActionMessage("");
    setError("");

    try {
      await apiRequest(`/api/ngo/donations/${id}/accept`, {
        method: "PATCH",
      });

      setActionMessage("Donation accepted successfully!");
      await loadDonations();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId("");
    }
  }

  async function updateStatus(id, status) {
    setBusyId(id);
    setActionMessage("");
    setError("");

    try {
      await apiRequest(`/api/donation-actions/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      setActionMessage(
        status === "picked_up"
          ? "Donation marked as picked up!"
          : "Donation marked as completed!"
      );

      await loadDonations();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId("");
    }
  }

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

  const completed = myRequests.filter(
    (donation) => donation.status === "completed"
  );

  const visibleRequests =
    section === "completed" ? completed : myRequests;

  function renderDonationTable(donations, showAccept) {
    if (donations.length === 0) {
      return <p>No donations found in this section.</p>;
    }

    return (
      <div className="donor-table-wrapper">
        <table className="donor-table">
          <thead>
            <tr>
              <th>Food</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Pickup Location</th>
              <th>Donor</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td>
                  <strong>{donation.foodName}</strong>
                  <br />
                  <small>{formatDate(donation.createdAt)}</small>
                </td>

                <td>{donation.category}</td>

                <td>
                  {donation.quantity} {donation.unit}
                </td>

                <td>{donation.location}</td>

                <td>
                  {donation.donor?.name || "Donor"}
                </td>

                <td>
                  <span
                    className={
                      "donor-status " +
                      (donation.status === "available"
                        ? "available"
                        : "collected")
                    }
                  >
                    {formatStatus(donation.status)}
                  </span>
                </td>

                <td>
                  {showAccept && (
                    <button
                      className="donor-donate-button"
                      disabled={busyId === donation._id}
                      onClick={() => acceptDonation(donation._id)}
                    >
                      {busyId === donation._id
                        ? "Accepting..."
                        : "Accept"}
                    </button>
                  )}

                  {!showAccept &&
                    donation.status === "accepted" && (
                      <button
                        className="donor-donate-button"
                        disabled={busyId === donation._id}
                        onClick={() =>
                          updateStatus(donation._id, "picked_up")
                        }
                      >
                        {busyId === donation._id
                          ? "Updating..."
                          : "Mark Picked Up"}
                      </button>
                    )}

                  {!showAccept &&
                    donation.status === "picked_up" && (
                      <button
                        className="donor-donate-button"
                        disabled={busyId === donation._id}
                        onClick={() =>
                          updateStatus(donation._id, "completed")
                        }
                      >
                        {busyId === donation._id
                          ? "Updating..."
                          : "Complete"}
                      </button>
                    )}

                  {!showAccept &&
                    (donation.status === "completed" ||
                      donation.status === "cancelled") &&
                    "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function changeSection(nextSection) {
    setSection(nextSection);
    setActionMessage("");
    setError("");
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
          <button
            className={`donor-nav-item ${
              section === "dashboard" ? "active" : ""
            }`}
            onClick={() => changeSection("dashboard")}
          >
            🏠 Dashboard
          </button>

          <button
            className={`donor-nav-item ${
              section === "available" ? "active" : ""
            }`}
            onClick={() => changeSection("available")}
          >
            🍱 Available Food
          </button>

          <button
            className={`donor-nav-item ${
              section === "requests" ? "active" : ""
            }`}
            onClick={() => changeSection("requests")}
          >
            📋 My Requests
          </button>

          <button
            className={`donor-nav-item ${
              section === "completed" ? "active" : ""
            }`}
            onClick={() => changeSection("completed")}
          >
            ✅ Completed Requests
          </button>
        </nav>


      </aside>

      {/* Main Dashboard */}
      <main className="donor-content">
        <div className="donor-header">
          <div>
            <p className="donor-small-title">NGO DASHBOARD</p>
            <h1>Welcome, NGO! 👋</h1>
            <p>
              Find available food donations and manage your requests.
            </p>
          </div>

          <ProfileMenu user={user} onLogout={onLogout} />
        </div>

        {/* Statistics */}
        <div className="donor-stats">
          <div className="donor-stat-card">
            <div className="donor-stat-icon">🍱</div>
            <div>
              <p>Available Donations</p>
              <h2>{available.length}</h2>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">📋</div>
            <div>
              <p>My Requests</p>
              <h2>{myRequests.length}</h2>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">✅</div>
            <div>
              <p>Completed Requests</p>
              <h2>{completed.length}</h2>
            </div>
          </div>

          <div className="donor-stat-card">
            <div className="donor-stat-icon">🤝</div>
            <div>
              <p>Food Received</p>
              <h2>
                {myRequests
                  .filter(
                    (donation) =>
                      donation.status === "picked_up" ||
                      donation.status === "completed"
                  )
                  .reduce(
                    (total, donation) =>
                      total + Number(donation.quantity || 0),
                    0
                  )}
              </h2>
              <small>total quantity</small>
            </div>
          </div>
        </div>

        {/* Section Content */}
        <section className="donor-section">
          <div className="donor-section-header">
            <div>
              <h2>
                {section === "dashboard" && "What would you like to do?"}
                {section === "available" && "Available Food"}
                {section === "requests" && "My Requests"}
                {section === "completed" && "Completed Requests"}
              </h2>

              <p>
                {section === "dashboard"
                  ? "Browse donations and manage your requests."
                  : "View and manage real food donations."}
              </p>
            </div>

            <button
              className="donor-view-button"
              onClick={loadDonations}
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {error && <p role="alert">{error}</p>}
          {actionMessage && <p>{actionMessage}</p>}
          {loading && <p>Loading donations...</p>}

          {!loading && !error && section === "dashboard" && (
            <div className="ngo-actions">
              <div
                className="ngo-action-card"
                onClick={() => changeSection("available")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    changeSection("available");
                  }
                }}
              >
                <div className="action-icon">🍱</div>
                <h3>Available Food</h3>
                <p>Browse food donations available near your NGO.</p>
                <span>View Food →</span>
              </div>

              <div
                className="ngo-action-card"
                onClick={() => changeSection("requests")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    changeSection("requests");
                  }
                }}
              >
                <div className="action-icon">📋</div>
                <h3>My Requests</h3>
                <p>View donations accepted by your NGO.</p>
                <span>View Requests →</span>
              </div>

              <div
                className="ngo-action-card"
                onClick={() => changeSection("completed")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    changeSection("completed");
                  }
                }}
              >
                <div className="action-icon">✅</div>
                <h3>Completed Requests</h3>
                <p>Check successfully completed donations.</p>
                <span>View Completed →</span>
              </div>
            </div>
          )}

          {!loading && !error && section === "available" &&
            renderDonationTable(available, true)}

          {!loading && !error &&
            section === "requests" &&
            renderDonationTable(
              myRequests.filter(
                (donation) => donation.status !== "completed"
              ),
              false
            )}

          {!loading && !error && section === "completed" &&
            renderDonationTable(completed, false)}
        </section>

        {/* NGO Impact */}
        <div className="donor-impact">
          <div className="donor-impact-icon">💚</div>
          <div>
            <h2>Your work makes a difference!</h2>
            <p>
              Every food donation you receive helps reduce food
              waste and provides food to people in need.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NgoDashboard;
