import AdminSidebar from "../components/adminSidebar";

function Settings() {
    return (
        <div className="admin-dashboard">

            <AdminSidebar />

            <main className="admin-main">

                <div className="admin-top">
                    <h1>Settings</h1>
                    <p>Manage your BreadBasket admin settings</p>
                </div>

                {/* Admin Profile */}

                <div className="settings-card">

                    <h2>Admin Profile</h2>
                    <p className="settings-description">
                        Manage your administrator account information.
                    </p>

                    <div className="settings-form">

                        <div className="settings-input-group">
                            <label>Admin Name</label>
                            <input
                                type="text"
                                defaultValue="BreadBasket Admin"
                            />
                        </div>

                        <div className="settings-input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                defaultValue="admin@breadbasket.com"
                            />
                        </div>

                        <div className="settings-input-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                defaultValue="9876543210"
                            />
                        </div>

                    </div>

                    <button className="settings-save-btn">
                        Save Changes
                    </button>

                </div>


                {/* Platform Settings */}

                <div className="settings-card">

                    <h2>Platform Settings</h2>
                    <p className="settings-description">
                        Configure basic BreadBasket platform settings.
                    </p>

                    <div className="settings-form">

                        <div className="settings-input-group">
                            <label>Platform Name</label>
                            <input
                                type="text"
                                defaultValue="BreadBasket"
                            />
                        </div>

                        <div className="settings-input-group">
                            <label>Contact Email</label>
                            <input
                                type="email"
                                defaultValue="support@breadbasket.com"
                            />
                        </div>

                        <div className="settings-input-group">
                            <label>Default City</label>
                            <input
                                type="text"
                                defaultValue="Jaipur"
                            />
                        </div>

                    </div>

                    <button className="settings-save-btn">
                        Save Changes
                    </button>

                </div>


                {/* Notifications */}

                <div className="settings-card">

                    <h2>Notifications</h2>
                    <p className="settings-description">
                        Choose which activities should notify the administrator.
                    </p>

                    <div className="settings-options">

                        <div className="setting-option">
                            <div>
                                <strong>New Donations</strong>
                                <p>Notify when a new food donation is created.</p>
                            </div>

                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span></span>
                            </label>
                        </div>


                        <div className="setting-option">
                            <div>
                                <strong>NGO Registrations</strong>
                                <p>Notify when a new NGO registers.</p>
                            </div>

                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span></span>
                            </label>
                        </div>


                        <div className="setting-option">
                            <div>
                                <strong>Volunteer Requests</strong>
                                <p>Notify when a new volunteer registers.</p>
                            </div>

                            <label className="toggle">
                                <input type="checkbox" defaultChecked />
                                <span></span>
                            </label>
                        </div>


                        <div className="setting-option">
                            <div>
                                <strong>Feedback</strong>
                                <p>Notify when users submit feedback.</p>
                            </div>

                            <label className="toggle">
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>

                    </div>

                </div>


                {/* Security */}

                <div className="settings-card">

                    <h2>Security</h2>
                    <p className="settings-description">
                        Manage your administrator account security.
                    </p>

                    <div className="settings-security">

                        <div>
                            <strong>Password</strong>
                            <p>Last changed recently</p>
                        </div>

                        <button className="change-password-btn">
                            Change Password
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Settings;