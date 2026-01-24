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
          <div className="cta-icon">🚀</div>
          <h2>Ready to Start Your Crypto Journey?</h2>
          <p>Join thousands of users who trust CAM for their cryptocurrency needs</p>
          <button onClick={() => navigate('/signup')} className="cta-button">
            <span className="button-text">Create Your Free Account</span>
            <span className="button-arrow">→</span>
          </button>
          <p className="cta-note">No credit card required • Start trading in minutes</p>
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
                <a href="https://linkedin.com/company/cam" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/cam" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://t.me/cam" target="_blank" rel="noopener noreferrer" className="social-link telegram" aria-label="Telegram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-3.146 6.537-3.146 6.537s-.113.292-.405.292c-.203 0-.405-.09-.607-.18l-3.719-2.702-1.88-.877s-.292-.113-.405-.293c0-.09.113-.18.203-.27l8.475-6.627s.405-.293.607-.293c.09 0 .18.045.27.135.09.09.09.203.09.315v.338c-.09.27-.18.54-.27.81z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/cam" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@cam" target="_blank" rel="noopener noreferrer" className="social-link youtube" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
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