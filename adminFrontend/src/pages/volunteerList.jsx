import AdminSidebar from "../components/adminSidebar";

function Volunteers() {
    const volunteers = [
        {
            id: "V001",
            name: "Priya Singh",
            email: "priya@gmail.com",
            phone: "9876543210",
            area: "Mansarovar",
            status: "Active"
        },
        {
            id: "V002",
            name: "Aman Verma",
            email: "aman@gmail.com",
            phone: "9876501234",
            area: "Vaishali Nagar",
            status: "Active"
        },
        {
            id: "V003",
            name: "Neha Sharma",
            email: "neha@gmail.com",
            phone: "9988776655",
            area: "Malviya Nagar",
            status: "Pending"
        },
        {
            id: "V004",
            name: "Rohit Meena",
            email: "rohit@gmail.com",
            phone: "9876123456",
            area: "Jagatpura",
            status: "Inactive"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Volunteers</h1>
                    <p>Manage BreadBasket volunteers</p>
                </div>

                <div className="volunteer-summary">

                    <div className="volunteer-summary-card">
                        <span>Total Volunteers</span>
                        <strong>45</strong>
                    </div>

                    <div className="volunteer-summary-card">
                        <span>Active</span>
                        <strong>32</strong>
                    </div>

                    <div className="volunteer-summary-card">
                        <span>Pending</span>
                        <strong>8</strong>
                    </div>

                    <div className="volunteer-summary-card">
                        <span>Inactive</span>
                        <strong>5</strong>
                    </div>

                </div>

                <div className="volunteers-section">

                    <div className="volunteers-header">

                        <h2>All Volunteers</h2>

                        <select>
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Pending</option>
                            <option>Inactive</option>
                        </select>

                    </div>

                    <div className="volunteers-table-container">

                        <table className="volunteers-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Area</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {volunteers.map((volunteer) => (

                                    <tr key={volunteer.id}>

                                        <td>{volunteer.id}</td>
                                        <td>{volunteer.name}</td>
                                        <td>{volunteer.email}</td>
                                        <td>{volunteer.phone}</td>
                                        <td>{volunteer.area}</td>

                                        <td>
                                            <span
                                                className={`volunteer-status ${volunteer.status.toLowerCase()}`}
                                            >
                                                {volunteer.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="view-volunteer-btn">
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

export default Volunteers;