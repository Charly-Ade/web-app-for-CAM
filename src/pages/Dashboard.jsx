import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem('cam-auth-token');
    if (!token) {
      navigate('/login');
      return;
    }

    setTimeout(() => setIsLoading(false), 1000);
  }, [navigate]);

  const connectWallet = () => {
    setWalletConnected(true);
    setWalletAddress('0x742d...a8c5');
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress('');
  };

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
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="diamond-logo"></div>
          <h2>CAM</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💰</span>
            <span>Wallet</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💱</span>
            <span>Trade</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">🔄</span>
            <span>Convert</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📤</span>
            <span>Send</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📥</span>
            <span>Receive</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📜</span>
            <span>History</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </a>
          <a href="#" className="nav-item" onClick={logout}>
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Navigation */}
        <div className="top-navbar">
          <div className="navbar-left">
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your portfolio overview</p>
          </div>
          <div className="navbar-right">
            <select style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              background: 'var(--card-bg)',
              color: 'var(--text-white)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer'
            }}>
              <option>Ethereum</option>
              <option>Polygon</option>
              <option>BSC</option>
            </select>
            
            {walletConnected ? (
              <button className="wallet-connect-btn wallet-connected" onClick={disconnectWallet}>
                ✅ {walletAddress}
              </button>
            ) : (
              <button className="wallet-connect-btn" onClick={connectWallet}>
                🔗 Connect Wallet
              </button>
            )}
          </div>
        </div>

        {/* Balance Cards */}
        <section className="balance-section">
          <div className="balance-cards">
            <div className="balance-card">
              <div className="balance-card-header">
                <h3>Total Balance</h3>
                <div className="balance-icon">💼</div>
              </div>
              <div className="balance-amount">$45,234.89</div>
              <div className="balance-change positive">
                ↗ +12.5% ($5,120.43)
              </div>
            </div>

            <div className="balance-card">
              <div className="balance-card-header">
                <h3>Available Balance</h3>
                <div className="balance-icon">💵</div>
              </div>
              <div className="balance-amount">$38,921.34</div>
              <div className="balance-change positive">
                ↗ +8.2% ($2,801.56)
              </div>
            </div>

            <div className="balance-card">
              <div className="balance-card-header">
                <h3>In Orders</h3>
                <div className="balance-icon">⏳</div>
              </div>
              <div className="balance-amount">$6,313.55</div>
              <div className="balance-change negative">
                ↘ -2.1% ($135.78)
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="dashboard-grid">
          {/* Left Column - Transactions */}
          <div>
            <div className="transactions-card">
              <div className="card-header">
                <h3>Recent Transactions</h3>
                <button className="view-all-btn">View All</button>
              </div>

              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="transaction-type">
                        <div className="transaction-icon">📤</div>
                        <div className="transaction-details">
                          <h4>Send ETH</h4>
                          <p>To: 0x742d...a8c5</p>
                        </div>
                      </div>
                    </td>
                    <td>-0.5 ETH</td>
                    <td>Jan 15, 2026</td>
                    <td><span className="status-badge completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="transaction-type">
                        <div className="transaction-icon">📥</div>
                        <div className="transaction-details">
                          <h4>Receive USDT</h4>
                          <p>From: 0x9a1b...3c4d</p>
                        </div>
                      </div>
                    </td>
                    <td>+1,250 USDT</td>
                    <td>Jan 14, 2026</td>
                    <td><span className="status-badge completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="transaction-type">
                        <div className="transaction-icon">💱</div>
                        <div className="transaction-details">
                          <h4>Swap BTC → ETH</h4>
                          <p>Exchange</p>
                        </div>
                      </div>
                    </td>
                    <td>0.02 BTC</td>
                    <td>Jan 13, 2026</td>
                    <td><span className="status-badge pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="transaction-type">
                        <div className="transaction-icon">💳</div>
                        <div className="transaction-details">
                          <h4>Buy BTC</h4>
                          <p>Card payment</p>
                        </div>
                      </div>
                    </td>
                    <td>+0.15 BTC</td>
                    <td>Jan 12, 2026</td>
                    <td><span className="status-badge completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Quick Actions */}
            <div className="quick-actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>

              <div className="action-grid">
                <button className="action-btn">
                  <div className="action-btn-icon">💰</div>
                  <span>Buy Crypto</span>
                </button>
                <button className="action-btn">
                  <div className="action-btn-icon">💸</div>
                  <span>Sell Crypto</span>
                </button>
                <button className="action-btn">
                  <div className="action-btn-icon">🔄</div>
                  <span>Convert</span>
                </button>
                <button className="action-btn">
                  <div className="action-btn-icon">📤</div>
                  <span>Send Money</span>
                </button>
              </div>
            </div>

            {/* Crypto Prices */}
            <div className="crypto-prices-card">
              <div className="card-header">
                <h3>Crypto Prices</h3>
                <button className="view-all-btn">View All</button>
              </div>

              <div>
                <div className="crypto-item">
                  <div className="crypto-info">
                    <div className="crypto-icon">₿</div>
                    <div className="crypto-details">
                      <h4>Bitcoin</h4>
                      <p>BTC</p>
                    </div>
                  </div>
                  <div className="crypto-price-info">
                    <div className="crypto-price">$98,234.56</div>
                    <div className="balance-change positive">+2.34%</div>
                  </div>
                </div>

                <div className="crypto-item">
                  <div className="crypto-info">
                    <div className="crypto-icon">Ξ</div>
                    <div className="crypto-details">
                      <h4>Ethereum</h4>
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className="crypto-price-info">
                    <div className="crypto-price">$3,456.78</div>
                    <div className="balance-change positive">+1.89%</div>
                  </div>
                </div>

                <div className="crypto-item">
                  <div className="crypto-info">
                    <div className="crypto-icon">₮</div>
                    <div className="crypto-details">
                      <h4>Tether</h4>
                      <p>USDT</p>
                    </div>
                  </div>
                  <div className="crypto-price-info">
                    <div className="crypto-price">$1.00</div>
                    <div className="balance-change positive">+0.01%</div>
                  </div>
                </div>

                <div className="crypto-item">
                  <div className="crypto-info">
                    <div className="crypto-icon">◎</div>
                    <div className="crypto-details">
                      <h4>Solana</h4>
                      <p>SOL</p>
                    </div>
                  </div>
                  <div className="crypto-price-info">
                    <div className="crypto-price">$187.34</div>
                    <div className="balance-change negative">-0.56%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;