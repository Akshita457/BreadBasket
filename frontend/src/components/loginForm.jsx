
import { useState } from "react";

function LoginDashboard({ onSuccess, onShowRegister }) {
  const [form, setForm] = useState({
    role: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!form.role) {
      setMessage("Please select your role.");
      return;
    }

    if (form.role === "admin") {
      setMessage("Admin login is handled by the separate admin panel and is not connected yet.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      if (data.user.role !== form.role) {
        throw new Error(
          `This account is registered as ${data.user.role}, not ${form.role}.`
        );
      }

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      onSuccess(data.user);
    } catch (error) {
      setMessage(error.message || "Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="navbar">
        <div className="logo">🥖 BreadBasket</div>
        <nav>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onShowRegister();
            }}
          >
            Get Started
          </a>
        </nav>
      </header>

      <main className="auth-section">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-icon">🥖</div>
            <p className="section-label">WELCOME BACK</p>
            <h1>Login to BreadBasket</h1>
            <p>
              Continue your journey towards reducing food waste
              and helping communities.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Login As</label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="">Select your role</option>
                <option value="donor">Food Donor</option>
                <option value="ngo">NGO</option>
                <option value="volunteer">Volunteer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="form-message" role="status">{message}</p>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowRegister();
                }}
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </main>

    </>
  );
}

export default LoginDashboard;
