import AdminSidebar from "../components/adminSidebar";

function Feedback() {
    const feedbacks = [
        {
            id: "F001",
            name: "Rahul Sharma",
            role: "Donor",
            message: "The donation process was very easy and smooth.",
            rating: 5,
            date: "30 Sep 2026"
        },
        {
            id: "F002",
            name: "Helping Hands NGO",
            role: "NGO",
            message: "BreadBasket helped us connect with food donors quickly.",
            rating: 4,
            date: "29 Sep 2026"
        },
        {
            id: "F003",
            name: "Priya Singh",
            role: "Volunteer",
            message: "The volunteer experience has been really meaningful.",
            rating: 5,
            date: "28 Sep 2026"
        },
        {
            id: "F004",
            name: "Amit Verma",
            role: "Donor",
            message: "It would be helpful to have more pickup locations.",
            rating: 3,
            date: "27 Sep 2026"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Feedback</h1>
                    <p>View feedback and reviews from BreadBasket users</p>
                </div>

                <div className="feedback-summary">

                    <div className="feedback-summary-card">
                        <span>Total Feedback</span>
                        <strong>128</strong>
                    </div>

                    <div className="feedback-summary-card">
                        <span>Average Rating</span>
                        <strong>4.5</strong>
                    </div>

                    <div className="feedback-summary-card">
                        <span>5 Star Reviews</span>
                        <strong>82</strong>
                    </div>

                    <div className="feedback-summary-card">
                        <span>Pending Review</span>
                        <strong>12</strong>
                    </div>

                </div>

                <div className="feedback-section">

                    <div className="feedback-header">
                        <h2>All Feedback</h2>

                        <select>
                            <option>All Ratings</option>
                            <option>5 Stars</option>
                            <option>4 Stars</option>
                            <option>3 Stars</option>
                            <option>2 Stars</option>
                            <option>1 Star</option>
                        </select>
                    </div>

                    <div className="feedback-table-container">

                        <table className="feedback-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Feedback</th>
                                    <th>Rating</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {feedbacks.map((feedback) => (

                                    <tr key={feedback.id}>

                                        <td>{feedback.id}</td>

                                        <td>{feedback.name}</td>

                                        <td>
                                            <span className={`feedback-role ${feedback.role.toLowerCase()}`}>
                                                {feedback.role}
                                            </span>
                                        </td>

                                        <td className="feedback-message">
                                            {feedback.message}
                                        </td>

                                        <td>
                                            <span className="feedback-rating">
                                                {"★".repeat(feedback.rating)}
                                                <span className="empty-stars">
                                                    {"★".repeat(5 - feedback.rating)}
                                                </span>
                                            </span>
                                        </td>

                                        <td>{feedback.date}</td>

                                        <td>
                                            <button className="view-feedback-btn">
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

export default Feedback;