import AdminSidebar from "../components/adminSidebar";

function Requests() {

    const requests = [
        {
            id: "R001",
            ngo: "Helping Hands NGO",
            food: "Cooked Food",
            quantity: "50 meals",
            location: "Jaipur",
            date: "30 Sep 2026",
            status: "Pending"
        },
        {
            id: "R002",
            ngo: "Hope Foundation",
            food: "Bakery",
            quantity: "30 items",
            location: "Mansarovar",
            date: "29 Sep 2026",
            status: "Approved"
        },
        {
            id: "R003",
            ngo: "Care & Share",
            food: "Packaged Food",
            quantity: "40 packets",
            location: "Vaishali Nagar",
            date: "28 Sep 2026",
            status: "Fulfilled"
        },
        {
            id: "R004",
            ngo: "Seva Trust",
            food: "Fruits",
            quantity: "25 kg",
            location: "Malviya Nagar",
            date: "28 Sep 2026",
            status: "Rejected"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Food Requests</h1>
                    <p>Manage food requests from NGOs</p>
                </div>

                <div className="request-summary">

                    <div className="request-summary-card">
                        <span>Total Requests</span>
                        <strong>84</strong>
                    </div>

                    <div className="request-summary-card">
                        <span>Pending</span>
                        <strong>18</strong>
                    </div>

                    <div className="request-summary-card">
                        <span>Approved</span>
                        <strong>24</strong>
                    </div>

                    <div className="request-summary-card">
                        <span>Fulfilled</span>
                        <strong>42</strong>
                    </div>

                </div>

                <div className="requests-section">

                    <div className="requests-header">

                        <h2>All Requests</h2>

                        <select>
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Fulfilled</option>
                            <option>Rejected</option>
                        </select>

                    </div>

                    <div className="requests-table-container">

                        <table className="requests-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NGO</th>
                                    <th>Food Type</th>
                                    <th>Quantity</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {requests.map((request) => (
                                    <tr key={request.id}>

                                        <td>{request.id}</td>
                                        <td>{request.ngo}</td>
                                        <td>{request.food}</td>
                                        <td>{request.quantity}</td>
                                        <td>{request.location}</td>
                                        <td>{request.date}</td>

                                        <td>
                                            <span
                                                className={`request-status ${request.status.toLowerCase()}`}
                                            >
                                                {request.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="view-request-btn">
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

export default Requests;