function LoginDashboard() {
  return (
    
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>Login | BreadBasket</title>

    <link rel="stylesheet" href="css/style.css"/>
</head>

<body>


    <header className="navbar">

        <div className="logo">
            <span>🥖</span> BreadBasket
        </div>

        <nav>
            <a href="index.html">Home</a>
            <a href="index.html#how-it-works">How It Works</a>
            <a href="index.html#about">About</a>
            <a href="index.html#contact">Contact</a>
        </nav>

        <div className="nav-buttons">
            <a href="login.html" className="login-btn">Login</a>
            <a href="register.html" className="signup-btn">Get Started</a>
        </div>

    </header>



    <main className="auth-section">

        <div className="auth-container">


            <div className="auth-header">

                <div className="auth-icon">
                    🥖
                </div>

                <p className="section-label">WELCOME BACK</p>

                <h1>Login to BreadBasket</h1>

                <p>
                    Continue your journey towards reducing food waste
                    and helping communities.
                </p>

            </div>



            <form id="loginForm">


                <div className="form-group">

                    <label for="role">Login As</label>

                    <select id="role" name="role">

                        <option value="">
                            Select your role
                        </option>

                        <option value="donor">
                            Food Donor
                        </option>

                        <option value="ngo">
                            NGO
                        </option>
                        <option value="volunteer">
                            Volunteer
                        </option>

                        <option value="admin">
                            Admin
                        </option>

                    </select>

                </div>



                <div className="form-group">

                    <label for="email">
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                    />

                </div>


                <div className="form-group">

                    <label for="password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                    />

                </div>



                <div className="form-options">

                    <label className="remember-me">

                        <input type="checkbox"/>

                        Remember me

                    </label>

                    <a href="#" className="forgot-password">
                        Forgot Password?
                    </a>

                </div>



                <button
                    type="submit"
                    className="auth-btn"
                >
                    Login
                </button>

                <p
                    id="loginMessage"
                    className="form-message"
                ></p>

            </form>



            <div className="auth-footer">

                <p>

                    Don't have an account?

                    <a href="register.html">
                        Create an account
                    </a>

                </p>

            </div>

        </div>

    </main>


    <footer>

        <div className="copyright">

            <p>
                © 2026 BreadBasket. Share Food. Spread Hope.
            </p>

        </div>

    </footer>



    <script src="js/script.js"></script>

</body>

</html>
  )
}
export default LoginDashboard;