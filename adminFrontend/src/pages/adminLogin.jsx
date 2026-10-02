import { useState } from "react";
import {useNavigate} from "react-router-dom";


function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Admin Login:", {
            email,
            password
        });
        navigate("admin/dashboard");
    };

    return (
        <div className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-header">
                    <h1>BreadBasket</h1>
                    <p>Admin Panel</p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="admin-input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter admin email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin-input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="admin-login-btn">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AdminLogin;