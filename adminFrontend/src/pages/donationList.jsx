import AdminSidebar from "../components/adminSidebar.jsx";

function Donations() {

    const donations = [
        {
            id: "D001",
            donor: "Rahul Sharma",
            food: "Cooked Food",
            quantity: "25 meals",
            location: "Jaipur",
            date: "30 Sep 2026",
            status: "Available"
        },
        {
            id: "D002",
            donor: "Fresh Bakes",
            food: "Bakery",
            quantity: "40 items",
            location: "Malviya Nagar",
            date: "29 Sep 2026",
            status: "Collected"
        },
        {
            id: "D003",
            donor: "Green Restaurant",
            food: "Cooked Food",
            quantity: "60 meals",
            location: "Vaishali Nagar",
            date: "29 Sep 2026",
            status: "Pending"
        },
        {
            id: "D004",
            donor: "Amit Verma",
            food: "Packaged Food",
            quantity: "30 packets",
            location: "Mansarovar",
            date: "28 Sep 2026",
            status: "Delivered"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Donations</h1>
                    <p>Monitor and manage food donations</p>
                </div>

                <div className="donation-summary">

                    <div className="donation-summary-card">
                        <span>Total Donations</span>
                        <strong>156</strong>
                    </div>

                    <div className="donation-summary-card">
                        <span>Available</span>
                        <strong>32</strong>
                    </div>

                    <div className="donation-summary-card">
                        <span>Collected</span>
                        <strong>48</strong>
                    </div>

                    <div className="donation-summary-card">
                        <span>Delivered</span>
                        <strong>76</strong>
                    </div>

                </div>

                <div className="donations-section">

                    <div className="donations-header">

                        <div>
                            <h2>All Donations</h2>
                        </div>

                        <div className="donation-filters">

                            <select>
                                <option>All Categories</option>
                                <option>Cooked Food</option>
                                <option>Bakery</option>
                                <option>Fruits</option>
                                <option>Packaged Food</option>
                            </select>

                            <select>
                                <option>All Status</option>
                                <option>Available</option>
                                <option>Pending</option>
                                <option>Collected</option>
                                <option>Delivered</option>
                            </select>

                        </div>

                    </div>

                    <div className="donations-table-container">

                        <table className="donations-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Donor</th>
                                    <th>Food Type</th>
                                    <th>Quantity</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {donations.map((donation) => (
                                    <tr key={donation.id}>

                                        <td>{donation.id}</td>
                                        <td>{donation.donor}</td>
                                        <td>{donation.food}</td>
                                        <td>{donation.quantity}</td>
                                        <td>{donation.location}</td>
                                        <td>{donation.date}</td>

                                        <td>
                                            <span
                                                className={`donation-status ${donation.status.toLowerCase()}`}
                                            >
                                                {donation.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="view-donation-btn">
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

export default Donations;