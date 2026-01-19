import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName] = useState('Charles Adeolu');
  const [totalBalance] = useState(45234.89);
  const [cryptoPrices, setCryptoPrices] = useState({
    bitcoin: { price: 98234.56, change: 2.34 },
    ethereum: { price: 3456.78, change: 1.89 },
    tether: { price: 1.00, change: 0.01 },
    solana: { price: 187.34, change: -0.56 }
  });

  useEffect(() => {
    const token = localStorage.getItem('cam-auth-token');
    if (!token) {
      navigate('/login');
      return;
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('cam-auth-token');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="diamond-logo diamond-logo-large"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}></div>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="diamond-logo"></div>
            <h2>CAM</h2>
            <button className="sidebar-close" onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="sidebar-item active">
              <span className="sidebar-icon">📊</span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">💼</span>
              <span>Portfolio</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">💱</span>
              <span>Trade</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">🔄</span>
              <span>Convert</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">📤</span>
              <span>Send</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">📥</span>
              <span>Receive</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">📜</span>
              <span>History</span>
            </a>
            <a href="#" className="sidebar-item">
              <span className="sidebar-icon">⚙️</span>
              <span>Settings</span>
            </a>
            <a href="#" className="sidebar-item" onClick={logout}>
              <span className="sidebar-icon">🚪</span>
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard-content">
        {/* Top Header */}
        <header className="dashboard-header">
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header-welcome">
            <h1>Welcome back, {userName}! 👋</h1>
            <p>Here's what's happening with your crypto today</p>
          </div>
          <div className="header-actions">
            <button className="notification-btn">🔔</button>
            <div className="user-avatar">{userName.charAt(0)}</div>
          </div>
        </header>

        {/* Quick Stats Cards */}
        <section className="stats-grid">
          <div className="stat-card primary">
            <div className="stat-header">
              <h3>Total Balance</h3>
              <span className="stat-icon">💰</span>
            </div>
            <div className="stat-amount">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            <div className="stat-change positive">
              <span>↗</span>
              <span>+12.5% this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>Available</h3>
              <span className="stat-icon">💵</span>
            </div>
            <div className="stat-amount">$38,921.34</div>
            <div className="stat-change positive">
              <span>↗</span>
              <span>+8.2%</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>In Orders</h3>
              <span className="stat-icon">⏳</span>
            </div>
            <div className="stat-amount">$6,313.55</div>
            <div className="stat-change negative">
              <span>↘</span>
              <span>-2.1%</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3>Profit (24h)</h3>
              <span className="stat-icon">📈</span>
            </div>
            <div className="stat-amount">$1,423.67</div>
            <div className="stat-change positive">
              <span>↗</span>
              <span>+3.15%</span>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-row">
            <button className="quick-action-card">
              <div className="action-icon-wrapper blue">💰</div>
              <h4>Buy Crypto</h4>
              <p>Purchase with card</p>
            </button>
            <button className="quick-action-card">
              <div className="action-icon-wrapper green">💸</div>
              <h4>Sell Crypto</h4>
              <p>Convert to cash</p>
            </button>
            <button className="quick-action-card">
              <div className="action-icon-wrapper purple">🔄</div>
              <h4>Convert</h4>
              <p>Swap currencies</p>
            </button>
            <button className="quick-action-card">
              <div className="action-icon-wrapper orange">📤</div>
              <h4>Send</h4>
              <p>Transfer funds</p>
            </button>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Portfolio Section */}
          <section className="portfolio-section">
            <div className="section-header">
              <h2 className="section-title">Your Portfolio</h2>
              <button className="view-all-link">View All →</button>
            </div>

            <div className="portfolio-list">
              <div className="portfolio-item">
                <div className="crypto-info">
                  <div className="crypto-avatar btc">₿</div>
                  <div className="crypto-details">
                    <h4>Bitcoin</h4>
                    <p>0.157 BTC</p>
                  </div>
                </div>
                <div className="crypto-value">
                  <div className="value-amount">$15,420.00</div>
                  <div className="value-change positive">+2.34%</div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="crypto-info">
                  <div className="crypto-avatar eth">Ξ</div>
                  <div className="crypto-details">
                    <h4>Ethereum</h4>
                    <p>5.27 ETH</p>
                  </div>
                </div>
                <div className="crypto-value">
                  <div className="value-amount">$18,234.50</div>
                  <div className="value-change positive">+1.89%</div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="crypto-info">
                  <div className="crypto-avatar usdt">₮</div>
                  <div className="crypto-details">
                    <h4>Tether</h4>
                    <p>5,000 USDT</p>
                  </div>
                </div>
                <div className="crypto-value">
                  <div className="value-amount">$5,000.00</div>
                  <div className="value-change neutral">+0.01%</div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="crypto-info">
                  <div className="crypto-avatar sol">◎</div>
                  <div className="crypto-details">
                    <h4>Solana</h4>
                    <p>35.14 SOL</p>
                  </div>
                </div>
                <div className="crypto-value">
                  <div className="value-amount">$6,580.39</div>
                  <div className="value-change negative">-0.56%</div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Overview */}
          <section className="market-section">
            <div className="section-header">
              <h2 className="section-title">Market Overview</h2>
              <button className="refresh-btn">🔄</button>
            </div>

            <div className="market-list">
              <div className="market-item">
                <div className="market-info">
                  <div className="market-avatar btc">₿</div>
                  <div className="market-details">
                    <h4>BTC/USD</h4>
                    <p>Bitcoin</p>
                  </div>
                </div>
                <div className="market-value">
                  <div className="price">$98,234.56</div>
                  <div className="change positive">+2.34%</div>
                </div>
              </div>

              <div className="market-item">
                <div className="market-info">
                  <div className="market-avatar eth">Ξ</div>
                  <div className="market-details">
                    <h4>ETH/USD</h4>
                    <p>Ethereum</p>
                  </div>
                </div>
                <div className="market-value">
                  <div className="price">$3,456.78</div>
                  <div className="change positive">+1.89%</div>
                </div>
              </div>

              <div className="market-item">
                <div className="market-info">
                  <div className="market-avatar sol">◎</div>
                  <div className="market-details">
                    <h4>SOL/USD</h4>
                    <p>Solana</p>
                  </div>
                </div>
                <div className="market-value">
                  <div className="price">$187.34</div>
                  <div className="change negative">-0.56%</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recent Transactions */}
        <section className="transactions-section">
          <div className="section-header">
            <h2 className="section-title">Recent Transactions</h2>
            <button className="view-all-link">View All →</button>
          </div>

          <div className="transactions-table">
            <div className="table-header">
              <div className="col">Type</div>
              <div className="col">Amount</div>
              <div className="col">Date</div>
              <div className="col">Status</div>
            </div>

            <div className="table-body">
              <div className="table-row">
                <div className="col transaction-type">
                  <div className="tx-icon send">📤</div>
                  <div className="tx-details">
                    <h4>Send ETH</h4>
                    <p>To: 0x742d...a8c5</p>
                  </div>
                </div>
                <div className="col amount negative">-0.5 ETH</div>
                <div className="col date">Jan 15, 2026</div>
                <div className="col status">
                  <span className="badge success">Completed</span>
                </div>
              </div>

              <div className="table-row">
                <div className="col transaction-type">
                  <div className="tx-icon receive">📥</div>
                  <div className="tx-details">
                    <h4>Receive USDT</h4>
                    <p>From: 0x9a1b...3c4d</p>
                  </div>
                </div>
                <div className="col amount positive">+1,250 USDT</div>
                <div className="col date">Jan 14, 2026</div>
                <div className="col status">
                  <span className="badge success">Completed</span>
                </div>
              </div>

              <div className="table-row">
                <div className="col transaction-type">
                  <div className="tx-icon swap">💱</div>
                  <div className="tx-details">
                    <h4>Swap BTC → ETH</h4>
                    <p>Exchange</p>
                  </div>
                </div>
                <div className="col amount">0.02 BTC</div>
                <div className="col date">Jan 13, 2026</div>
                <div className="col status">
                  <span className="badge pending">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;