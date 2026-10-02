import AdminSidebar from "../components/adminSidebar.jsx";

function Dashboard() {
    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, Admin!</p>
                    </div>
                </div>

                <div className="admin-stats">

                    <div className="admin-stat-card">
                        <h3>Total Users</h3>
                        <p>0</p>
                    </div>

                    <div className="admin-stat-card">
                        <h3>Total Donations</h3>
                        <p>0</p>
                    </div>

                    <div className="admin-stat-card">
                        <h3>Active NGOs</h3>
                        <p>0</p>
                    </div>

                    <div className="admin-stat-card">
                        <h3>Volunteers</h3>
                        <p>0</p>
                    </div>

                </div>

                <div className="admin-section">

                    <h2>Recent Donations</h2>

                    <div className="admin-empty">
                        No donations yet.
                    </div>

                </div>

            </main>

        </div>
    );
}

export default Dashboard;