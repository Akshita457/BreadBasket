import React from "react";

function NgoDashboard() {
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

          <button className="donor-nav-item">
            🍱 Available Food
          </button>

          <button className="donor-nav-item">
            📋 My Requests
          </button>

          <button className="donor-nav-item">
            ✅ Completed Requests
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
              NGO DASHBOARD
            </p>

            <h1>
              Welcome, NGO! 👋
            </h1>

            <p>
              Find available food donations and manage your requests.
            </p>

          </div>

          <div className="donor-profile">
            N
          </div>

        </div>


        {/* Statistics */}
        <div className="donor-stats">

          <div className="donor-stat-card">

            <div className="donor-stat-icon">
              🍱
            </div>

            <div>
              <p>Available Donations</p>
              <h2>24</h2>
            </div>

          </div>


          <div className="donor-stat-card">

            <div className="donor-stat-icon">
              📋
            </div>

            <div>
              <p>My Requests</p>
              <h2>8</h2>
            </div>

          </div>


          <div className="donor-stat-card">

            <div className="donor-stat-icon">
              ✅
            </div>

            <div>
              <p>Completed Requests</p>
              <h2>15</h2>
            </div>

          </div>


          <div className="donor-stat-card">

            <div className="donor-stat-icon">
              🤝
            </div>

            <div>
              <p>Food Received</p>
              <h2>120+</h2>
            </div>

          </div>

        </div>


        {/* Quick Actions */}
        <section className="donor-section">

          <div className="donor-section-header">

            <div>

              <h2>
                What would you like to do?
              </h2>

              <p>
                Find food donations and manage your requests.
              </p>

            </div>

          </div>


          <div className="ngo-actions">

            <div className="ngo-action-card">

              <div className="action-icon">
                🍱
              </div>

              <h3>
                Available Food
              </h3>

              <p>
                Browse food donations available near your NGO.
              </p>

              <span>
                View Food →
              </span>

            </div>


            <div className="ngo-action-card">

              <div className="action-icon">
                📋
              </div>

              <h3>
                My Requests
              </h3>

              <p>
                View the food donations you have requested.
              </p>

              <span>
                View Requests →
              </span>

            </div>


            <div className="ngo-action-card">

              <div className="action-icon">
                ✅
              </div>

              <h3>
                Completed Requests
              </h3>

              <p>
                Check your successfully completed food requests.
              </p>

              <span>
                View Completed →
              </span>

            </div>

          </div>

        </section>




        {/* NGO Impact */}
        <div className="donor-impact">

          <div className="donor-impact-icon">
            💚
          </div>

          <div>

            <h2>
              Your work makes a difference!
            </h2>

            <p>
              Every food donation you request helps reduce food
              waste and provides food to people in need.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default NgoDashboard;