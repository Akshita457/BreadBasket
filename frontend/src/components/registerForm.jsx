
import { useState } from "react";

function RegisterDashboard({ onSuccess, onShowLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    terms: false
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!form.role) {
      setMessage("Please select your role.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (!form.terms) {
      setMessage("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
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
          <a href="#" onClick={(e) => { e.preventDefault(); onShowLogin(); }}>
            Login
          </a>
        </nav>
      </header>

      <main className="auth-section">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-icon">🥖</div>
            <p className="section-label">JOIN BREADBASKET</p>
            <h1>Create an Account</h1>
            <p>Join us in reducing food waste and helping communities.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Register As</label>
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
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name / Organization Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerEmail">Email Address</label>
              <input
                id="registerEmail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>
              <input
                id="registerPassword"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                minLength={8}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                />
                I agree to the Terms & Conditions
              </label>
            </div>

            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p className="form-message" role="status">{message}</p>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); onShowLogin(); }}>
                Login here
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <div className="copyright">
          <p>© 2026 BreadBasket. Share Food. Spread Hope.</p>
        </div>
      </footer>
    </>
  );
}

export default RegisterDashboard;
