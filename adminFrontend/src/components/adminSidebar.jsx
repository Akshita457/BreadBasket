import { NavLink } from "react-router-dom";

function AdminSidebar() {
    return (
        <aside className="admin-sidebar">

            <div className="admin-logo">
                <h2>BreadBasket</h2>
                <p>Admin Panel</p>
            </div>

            <nav className="admin-nav">

                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Users
                </NavLink>

                <NavLink
                    to="/admin/donations"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Donations
                </NavLink>

                <NavLink
                    to="/admin/requests"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    NGORequests
                </NavLink>

                <NavLink
                    to="/admin/meal-entries"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    MealEntry
                </NavLink>

                <NavLink
                    to="/admin/volunteers"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Volunteers
                </NavLink>

                <NavLink
                    to="/admin/feedback"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    FeedBack
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Settings
                </NavLink>

            </nav>

            <button className="admin-logout">
                Logout
            </button>

        </aside>
    );
}

export default AdminSidebar;