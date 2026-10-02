import AdminSidebar from "../components/adminSidebar.jsx";

function Users() {

    const users = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            role: "Donor",
            status: "Active"
        },
        {
            id: 2,
            name: "Helping Hands NGO",
            email: "helpinghands@gmail.com",
            role: "NGO",
            status: "Active"
        },
        {
            id: 3,
            name: "Priya Singh",
            email: "priya@gmail.com",
            role: "Volunteer",
            status: "Pending"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Users</h1>
                    <p>Manage BreadBasket users</p>
                </div>

                <div className="user-summary">

                    <div className="user-summary-card">
                        <span>Total Users</span>
                        <strong>120</strong>
                    </div>

                    <div className="user-summary-card">
                        <span>Donors</span>
                        <strong>65</strong>
                    </div>

                    <div className="user-summary-card">
                        <span>NGOs</span>
                        <strong>25</strong>
                    </div>

                    <div className="user-summary-card">
                        <span>Volunteers</span>
                        <strong>30</strong>
                    </div>

                </div>

                <div className="users-section">

                    <div className="users-header">
                        <h2>All Users</h2>

                        <select>
                            <option>All Users</option>
                            <option>Donors</option>
                            <option>NGOs</option>
                            <option>Volunteers</option>
                        </select>
                    </div>

                    <div className="users-table-container">

                        <table className="users-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.map((user) => (
                                    <tr key={user.id}>

                                        <td>{user.id}</td>

                                        <td>{user.name}</td>

                                        <td>{user.email}</td>

                                        <td>
                                            <span className={`user-role ${user.role.toLowerCase()}`}>
                                                {user.role}
                                            </span>
                                        </td>

                                        <td>
                                            <span className={`user-status ${user.status.toLowerCase()}`}>
                                                {user.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="view-user-btn">
                                                View
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Users;