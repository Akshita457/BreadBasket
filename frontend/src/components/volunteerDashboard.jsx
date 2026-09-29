import React from "react";

function VolunteerDashboard() {
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
                        📦 Available Tasks
                    </button>

                    <button className="donor-nav-item">
                        📋 My Tasks
                    </button>

                    <button className="donor-nav-item">
                        ✅ Completed Tasks
                    </button>

                </nav>

                <button className="donor-logout">
                    ↪ Logout
                </button>

            </aside>


            {/* Main Content */}
            <main className="donor-content">

                {/* Header */}
                <div className="donor-header">

                    <div>
                        <p className="donor-small-title">
                            VOLUNTEER DASHBOARD
                        </p>

                        <h1>
                            Welcome, Volunteer! 👋
                        </h1>

                        <p>
                            Help collect and deliver food donations
                            to people in need.
                        </p>
                    </div>

                    <div className="donor-profile">
                        V
                    </div>

                </div>


                {/* Statistics */}
                <div className="donor-stats">

                    <div className="donor-stat-card">

                        <div className="donor-stat-icon">
                            📦
                        </div>

                        <div>
                            <p>Available Tasks</p>
                            <h2>12</h2>
                        </div>

                    </div>


                    <div className="donor-stat-card">

                        <div className="donor-stat-icon">
                            🚚
                        </div>

                        <div>
                            <p>Tasks Completed</p>
                            <h2>8</h2>
                        </div>

                    </div>


                    <div className="donor-stat-card">

                        <div className="donor-stat-icon">
                            🍱
                        </div>

                        <div>
                            <p>Meals Delivered</p>
                            <h2>145</h2>
                        </div>

                    </div>


                    <div className="donor-stat-card">

                        <div className="donor-stat-icon">
                            💚
                        </div>

                        <div>
                            <p>People Helped</p>
                            <h2>120+</h2>
                        </div>

                    </div>

                </div>


                {/* Find Tasks Banner */}
                <div className="donor-donate-banner">

                    <div>
                        <h2>Ready to make a difference?</h2>

                        <p>
                            Pick up a food donation and help
                            deliver it to someone in need.
                        </p>
                    </div>

                    <button className="donor-donate-button">
                        + Find Tasks
                    </button>

                </div>


                {/* Quick Actions */}
                <section className="donor-section">

                    <div className="donor-section-header">

                        <div>
                            <h2>Quick Actions</h2>

                            <p>
                                Manage your volunteer activities.
                            </p>
                        </div>

                    </div>


                    <div className="volunteer-action-grid">

                        <div className="volunteer-action-card">

                            <div className="volunteer-action-icon">
                                📦
                            </div>

                            <h3>
                                Available Tasks
                            </h3>

                            <p>
                                Browse food collection and delivery
                                tasks available near you.
                            </p>

                            <button>
                                View Tasks →
                            </button>

                        </div>


                        <div className="volunteer-action-card">

                            <div className="volunteer-action-icon">
                                📋
                            </div>

                            <h3>
                                My Tasks
                            </h3>

                            <p>
                                View the food collection and delivery
                                tasks you have accepted.
                            </p>

                            <button>
                                View My Tasks →
                            </button>

                        </div>


                        <div className="volunteer-action-card">

                            <div className="volunteer-action-icon">
                                ✅
                            </div>

                            <h3>
                                Completed Tasks
                            </h3>

                            <p>
                                Check your successfully completed
                                volunteer activities.
                            </p>

                            <button>
                                View Completed →
                            </button>

                        </div>

                    </div>

                </section>


                {/* Impact */}
                <div className="donor-impact">

                    <div className="donor-impact-icon">
                        💚
                    </div>

                    <div>
                        <h2>
                            Your volunteering makes a difference!
                        </h2>

                        <p>
                            Every food pickup and delivery helps
                            reduce food waste and feeds someone in need.
                        </p>
                    </div>

                </div>

            </main>

        </div>
    );
}

export default VolunteerDashboard;