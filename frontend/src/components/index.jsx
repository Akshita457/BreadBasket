function MainPage() {
    return (
        <>
            <header className="navbar">

                <div className="logo">
                    <span>🥖</span> BreadBasket
                </div>

                <nav>
                    <a href="#home" className="active">Home</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="nav-buttons">
                    <a href="/login" className="login-btn">Login</a>
                    <a href="/register" className="signup-btn">Get Started</a>
                </div>

            </header>


            <section className="hero" id="home">

                <div className="hero-content">

                    <p className="tagline">
                        REDUCING FOOD WASTE • FEEDING COMMUNITIES
                    </p>

                    <h1>
                        Don't Waste Food.
                        <span>Share It.</span>
                    </h1>

                    <p className="hero-text">
                        BreadBasket connects restaurants, hotels, bakeries and
                        individuals with NGOs to give surplus food a second chance.
                    </p>

                    <div className="hero-buttons">
                        <a href="/register" className="primary-btn">
                            Donate Food →
                        </a>

                        <a href="/register" className="secondary-btn">
                            Find Food
                        </a>
                    </div>

                </div>


                <div className="hero-image">

                    <div className="image-card">
                        <div className="food-emoji">🍱</div>
                    </div>

                </div>

            </section>


            <section className="how-it-works" id="how-it-works">

                <div className="section-heading">

                    <p className="section-label">HOW IT WORKS</p>

                    <h2>
                        From Surplus to <span>Someone's Meal</span>
                    </h2>

                    <p>
                        BreadBasket makes food redistribution simple.
                        Three simple steps can turn excess food into meaningful help.
                    </p>

                </div>


                <div className="steps">

                    <div className="step-card">

                        <div className="step-number">01</div>

                        <h3>Donate Food</h3>

                        <p>
                            Restaurants, hotels, bakeries and individuals
                            can post their surplus food.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">02</div>

                        <h3>NGOs Request</h3>

                        <p>
                            Registered NGOs browse available donations
                            and request the food they need.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">03</div>

                        <h3>Food Reaches People</h3>

                        <p>
                            NGOs collect and distribute the food
                            to people and communities in need.
                        </p>

                    </div>

                </div>

            </section>


            <section className="about" id="about">

                <div className="about-image">
                    🍞
                </div>

                <div className="about-content">

                    <p className="section-label">OUR MISSION</p>

                    <h2>
                        Every Meal Deserves
                        <span>a Purpose.</span>
                    </h2>

                    <p>
                        Millions of meals are wasted every day while communities
                        around us struggle with food insecurity.
                    </p>

                    <p>
                        BreadBasket bridges that gap by making it easier for
                        surplus food to reach organizations that can put it
                        to good use.
                    </p>

                    <div className="mission-points">

                        <div>
                            <span>✓</span>
                            Reduce food waste
                        </div>

                        <div>
                            <span>✓</span>
                            Support local communities
                        </div>

                        <div>
                            <span>✓</span>
                            Make food redistribution easier
                        </div>

                    </div>

                </div>

            </section>


            <section className="cta">

                <div>

                    <p className="section-label">MAKE A DIFFERENCE</p>

                    <h2>Have Extra Food?</h2>

                    <p>
                        Someone out there could use it.
                        Give your surplus food a second chance.
                    </p>

                    <a href="/register" className="cta-btn">
                        Get Started →
                    </a>

                </div>

            </section>


            <footer id="contact">

                <div className="footer-content">

                    <div className="footer-brand">

                        <div className="logo">
                            <span>🥖</span> BreadBasket
                        </div>

                        <p>
                            Connecting surplus food with communities
                            that need it most.
                        </p>

                    </div>


                    <div className="footer-links">

                        <h4>Quick Links</h4>

                        <a href="#home">Home</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#about">About</a>
                        <a href="/login">Login</a>

                    </div>


                    <div className="footer-links">

                        <h4>Get Involved</h4>

                        <a href="/register">Donate Food</a>
                        <a href="/register">Join as NGO</a>

                    </div>


                    <div className="footer-links">

                        <h4>Contact</h4>

                        <p>📧 hello@breadbasket.com</p>
                        <p>📍 Jaipur, Rajasthan</p>

                    </div>

                </div>


                <div className="copyright">

                    <p>
                        © 2026 BreadBasket. Share Food. Spread Hope.
                    </p>

                </div>

            </footer>
        </>
    );
}

export default MainPage;