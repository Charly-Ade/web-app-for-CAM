import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <div className="floating-diamonds">
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
        <div className="floating-diamond"></div>
      </div>

      <nav className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="diamond-logo"></div>
            <span>CAM</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#security">Security</a>
            <button onClick={() => navigate('/login')} className="nav-btn-login">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="nav-btn-signup">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Gateway to
              <span className="gradient-text"> Crypto Freedom</span>
            </h1>
            <p className="hero-subtitle">
              Buy, sell, trade, and manage your cryptocurrencies with ease. 
              CAM makes crypto simple, secure, and accessible to everyone.
            </p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/signup')} className="hero-btn-primary">
                Get Started Free
              </button>
              <button onClick={() => navigate('/login')} className="hero-btn-secondary">
                Sign In
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>$2.5B+</h3>
                <p>Trading Volume</p>
              </div>
              <div className="stat">
                <h3>50K+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Cryptocurrencies</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="card-mockup">
              <div className="card-chip"></div>
              <div className="card-logo">CAM</div>
              <div className="card-number">•••• •••• •••• 8492</div>
              <div className="card-footer">
                <div className="card-holder">JOHN DOE</div>
                <div className="card-network">💳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose CAM?</h2>
          <p className="section-subtitle">Everything you need for crypto trading in one platform</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Buy & Sell Crypto</h3>
              <p>Purchase cryptocurrencies with your credit card instantly and securely.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Convert Currencies</h3>
              <p>Exchange between cryptocurrencies with competitive rates in seconds.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📤</div>
              <h3>Send Money Globally</h3>
              <p>Transfer funds anywhere in the world with minimal transaction fees.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Crypto Debit Card</h3>
              <p>Spend your crypto everywhere with our Visa-powered debit card.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Bank-Level Security</h3>
              <p>Industry-leading security measures protect your valuable assets.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-Time Analytics</h3>
              <p>Track your portfolio with advanced charts and market insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">About CAM</h2>
              <h3 className="gradient-text">Crypto Adds Money</h3>
              <p>
                CAM is a revolutionary cryptocurrency platform designed to make digital assets 
                accessible to everyone. We believe in financial freedom and provide you with 
                the tools needed to succeed in the crypto world.
              </p>
              <p>
                With our user-friendly interface, competitive fees, and world-class security, 
                CAM is the perfect platform for both beginners and experienced traders alike.
              </p>
              <div className="about-features-list">
                <div className="about-feature-item">
                  <span className="check-icon">✅</span>
                  <span>Licensed & Regulated Platform</span>
                </div>
                <div className="about-feature-item">
                  <span className="check-icon">✅</span>
                  <span>24/7 Customer Support</span>
                </div>
                <div className="about-feature-item">
                  <span className="check-icon">✅</span>
                  <span>Low Trading Fees</span>
                </div>
                <div className="about-feature-item">
                  <span className="check-icon">✅</span>
                  <span>Instant Transactions</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="crypto-showcase">
                <div className="showcase-item">
                  <div className="showcase-icon btc">₿</div>
                  <h4>Bitcoin</h4>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon eth">Ξ</div>
                  <h4>Ethereum</h4>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon usdt">₮</div>
                  <h4>Tether</h4>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon sol">◎</div>
                  <h4>Solana</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="security-section">
        <div className="section-container">
          <h2 className="section-title">Your Security is Our Priority</h2>
          <p className="section-subtitle">Industry-leading protection for your digital assets</p>
          
          <div className="security-grid">
            <div className="security-card">
              <div className="security-icon">🔒</div>
              <h4>256-bit Encryption</h4>
              <p>Military-grade encryption protects all your data and transactions from unauthorized access.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">🛡️</div>
              <h4>Cold Storage</h4>
              <p>95% of all funds are stored offline in secure, air-gapped cold storage facilities.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">✅</div>
              <h4>2FA Authentication</h4>
              <p>Two-factor authentication adds an extra layer of protection to your account.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">🏦</div>
              <h4>FDIC Insured</h4>
              <p>Your fiat balances are protected and insured up to $250,000 by the FDIC.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Start Your Crypto Journey?</h2>
          <p>Join thousands of users who trust CAM for their cryptocurrency needs</p>
          <button onClick={() => navigate('/signup')} className="cta-button">
            Create Your Free Account
          </button>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <div className="diamond-logo"></div>
                <span>CAM</span>
              </div>
              <p>Crypto Adds Money - Your trusted cryptocurrency trading platform</p>
              <div className="footer-social">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#about">About Us</a>
              <a href="#security">Security</a>
              <a href="#">Pricing</a>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press Kit</a>
              <a href="#">Partners</a>
            </div>
            
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
              <a href="#">API Docs</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 CAM. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;