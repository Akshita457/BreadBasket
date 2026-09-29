import React from "react";

function DonorDashboard({ onDonate }) {
  const donations = [
    {
      food: "Fresh Vegetable Meals",
      category: "Cooked",
      quantity: "25 meals",
      date: "29 Sep 2026",
      status: "Available",
    },
    {
      food: "Bread & Buns",
      category: "Bakery",
      quantity: "40 items",
      date: "27 Sep 2026",
      status: "Collected",
    },
    {
      food: "Packed Lunch Boxes",
      category: "Packaged",
      quantity: "15 boxes",
      date: "25 Sep 2026",
      status: "Collected",
    },
  ];

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

          

          <button
            className="donor-nav-item"
            onClick={onDonate}
          >
            ➕ Donate Food
          </button>

          

        </nav>

        <button className="donor-logout">
          ↪ Logout
        </button>

      </aside>


      {/* Main Dashboard */}
      <main className="donor-content">

        {/* Header */}
        <div className="donor-header">

          <div>
            <p className="donor-small-title">
              DONOR DASHBOARD
            </p>

            <h1>Welcome back! 👋</h1>

            <p>
              Thank you for helping us reduce food waste
              and spread hope.
            </p>
          </div>

          <div className="donor-profile">
            D
          </div>

        </div>


        {/* Statistics */}
        <div className="donor-stats">

          <div className="donor-stat-card">
            <div className="donor-stat-icon">🍱</div>

            <div>
              <p>Total Donations</p>
              <h2>18</h2>
            </div>
          </div>


          <div className="donor-stat-card">
            <div className="donor-stat-icon">🥗</div>

            <div>
              <p>Food Donated</p>
              <h2>245</h2>
              <small>items / meals</small>
            </div>
          </div>


          <div className="donor-stat-card">
            <div className="donor-stat-icon">🤝</div>

            <div>
              <p>Collected</p>
              <h2>15</h2>
            </div>
          </div>


          <div className="donor-stat-card">
            <div className="donor-stat-icon">🌱</div>

            <div>
              <p>People Helped</p>
              <h2>120+</h2>
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

              <p>
                Track your latest food donations.
              </p>
            </div>

            <button className="donor-view-button">
              View All
            </button>

          </div>


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

                {donations.map((donation, index) => (

                  <tr key={index}>

                    <td>
                      <strong>
                        {donation.food}
                      </strong>
                    </td>

                    <td>
                      {donation.category}
                    </td>

                    <td>
                      {donation.quantity}
                    </td>

                    <td>
                      {donation.date}
                    </td>

                    <td>

                      <span
                        className={
                          donation.status === "Available"
                            ? "donor-status available"
                            : "donor-status collected"
                        }
                      >
                        {donation.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>


        {/* Impact */}
        <div className="donor-impact">

          <div className="donor-impact-icon">
            💚
          </div>

          <div>
            <h2>
              Your donations make a difference!
            </h2>

            <p>
              Every meal you donate helps reduce food
              waste and provides food to someone in need.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default DonorDashboard;