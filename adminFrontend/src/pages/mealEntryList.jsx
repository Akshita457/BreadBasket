import AdminSidebar from "../components/adminSidebar";

function MealEntries() {
    const meals = [
        {
            id: "M001",
            food: "Vegetable Rice",
            category: "Cooked Food",
            quantity: "50",
            unit: "Meals",
            donor: "Green Restaurant",
            location: "Vaishali Nagar",
            date: "30 Sep 2026",
            status: "Available"
        },
        {
            id: "M002",
            food: "Bread & Buns",
            category: "Bakery",
            quantity: "40",
            unit: "Items",
            donor: "Fresh Bakes",
            location: "Malviya Nagar",
            date: "30 Sep 2026",
            status: "Available"
        },
        {
            id: "M003",
            food: "Fruit Packets",
            category: "Fruits",
            quantity: "25",
            unit: "Kg",
            donor: "Amit Verma",
            location: "Mansarovar",
            date: "29 Sep 2026",
            status: "Collected"
        },
        {
            id: "M004",
            food: "Packed Meals",
            category: "Packaged Food",
            quantity: "60",
            unit: "Packets",
            donor: "Helping Restaurant",
            location: "Jagatpura",
            date: "29 Sep 2026",
            status: "Delivered"
        }
    ];

    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <div>
                        <h1>Meal Entries</h1>
                        <p>Manage food and meal entries available for donation</p>
                    </div>
                </div>

                {/* Summary */}

                <div className="meal-summary">

                    <div className="meal-summary-card">
                        <span>Total Entries</span>
                        <strong>156</strong>
                    </div>

                    <div className="meal-summary-card">
                        <span>Available</span>
                        <strong>72</strong>
                    </div>

                    <div className="meal-summary-card">
                        <span>Collected</span>
                        <strong>48</strong>
                    </div>

                    <div className="meal-summary-card">
                        <span>Delivered</span>
                        <strong>36</strong>
                    </div>

                </div>

                {/* Add Meal Entry */}

                <div className="meal-entry-section">

                    <h2>Add Meal Entry</h2>

                    <div className="meal-form">

                        <div className="meal-input-group">
                            <label>Food / Meal Name</label>
                            <input
                                type="text"
                                placeholder="Enter food name"
                            />
                        </div>

                        <div className="meal-input-group">
                            <label>Category</label>
                            <select>
                                <option>Select Category</option>
                                <option>Cooked Food</option>
                                <option>Bakery</option>
                                <option>Fruits</option>
                                <option>Packaged Food</option>
                            </select>
                        </div>

                        <div className="meal-input-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                placeholder="Enter quantity"
                            />
                        </div>

                        <div className="meal-input-group">
                            <label>Unit</label>
                            <select>
                                <option>Select Unit</option>
                                <option>Meals</option>
                                <option>Kg</option>
                                <option>Packets</option>
                                <option>Items</option>
                            </select>
                        </div>

                        <div className="meal-input-group">
                            <label>Donor Name</label>
                            <input
                                type="text"
                                placeholder="Enter donor name"
                            />
                        </div>

                        <div className="meal-input-group">
                            <label>Pickup Location</label>
                            <input
                                type="text"
                                placeholder="Enter pickup location"
                            />
                        </div>

                        <div className="meal-input-group">
                            <label>Entry Date</label>
                            <input type="date" />
                        </div>

                        <div className="meal-input-group">
                            <label>Best Before</label>
                            <input type="date" />
                        </div>

                    </div>

                    <button className="add-meal-btn">
                        Add Meal Entry
                    </button>

                </div>

                {/* Meal Entries Table */}

                <div className="meal-list-section">

                    <div className="meal-list-header">

                        <div>
                            <h2>All Meal Entries</h2>
                        </div>

                        <div className="meal-filters">

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
                                <option>Collected</option>
                                <option>Delivered</option>
                            </select>

                        </div>

                    </div>

                    <div className="meal-table-container">

                        <table className="meal-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Food</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Donor</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {meals.map((meal) => (

                                    <tr key={meal.id}>

                                        <td>{meal.id}</td>

                                        <td>{meal.food}</td>

                                        <td>{meal.category}</td>

                                        <td>
                                            {meal.quantity} {meal.unit}
                                        </td>

                                        <td>{meal.donor}</td>

                                        <td>{meal.location}</td>

                                        <td>{meal.date}</td>

                                        <td>
                                            <span
                                                className={`meal-status ${meal.status.toLowerCase()}`}
                                            >
                                                {meal.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="view-meal-btn">
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

export default MealEntries;