import React, { useState } from 'react';

// Quick amount buttons data - can be looped/extended
const quickAmounts = [500, 1000, 1500];

// Right sidebar menu items - can be looped/extended
const menuItems = [
  { id: 1, title: 'Add Gift Card to Balance', hasArrow: true },
  { id: 2, title: 'Add Cash to balance', hasArrow: true },
  { id: 3, title: 'Transaction history', hasArrow: true, section: 'divider' }
];

export default function BalanceAmount() {
  const [amount, setAmount] = useState('1000');
  const [walletBalance] = useState(4.60);
  const [giftCardBalance] = useState(0.00);

  const totalBalance = walletBalance + giftCardBalance;

  const handleQuickAmount = (value) => {
    setAmount(value.toString());
  };

  return (
    <div style={{
      fontFamily: '"Amazon Ember", Arial, sans-serif',
      background: '#f7f8f8',
      minHeight: '100vh',
      padding: '40px 24px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '24px'
      }}>
        {/* LEFT SECTION */}
        <div>
          {/* Header */}
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#0F1111',
            letterSpacing: '-0.02em'
          }}>
            Amazon Pay balance
          </h1>

          {/* Balance Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #D5D9D9',
            borderRadius: '8px',
            padding: '28px',
            marginBottom: '20px'
          }}>
            {/* Total Balance */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '20px',
              borderBottom: '1px dashed #D5D9D9',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#0F1111'
              }}>
                Total balance
              </div>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#007185'
              }}>
                ₹{totalBalance.toFixed(2)}
              </div>
            </div>

            {/* Wallet Breakdown */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#565959'
              }}>
                Wallet
              </div>
              <div style={{
                fontSize: '14px',
                color: '#565959'
              }}>
                ₹{walletBalance.toFixed(2)}
              </div>
            </div>

            {/* Gift Cards */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#565959'
              }}>
                Gift Cards
              </div>
              <div style={{
                fontSize: '14px',
                color: '#565959'
              }}>
                ₹{giftCardBalance.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Add Money Section */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #D5D9D9',
            borderRadius: '8px',
            padding: '28px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#0F1111',
              marginBottom: '20px'
            }}>
              Add money to Wallet
            </h2>

            {/* Amount Input */}
            <div style={{
              marginBottom: '16px'
            }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '700',
                color: '#0F1111',
                marginBottom: '6px'
              }}>
                Enter Amount
              </label>
              <div style={{
                position: 'relative'
              }}>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 40px',
                    fontSize: '24px',
                    fontWeight: '600',
                    border: '1px solid #888C8C',
                    borderRadius: '8px',
                    outline: 'none',
                    color: '#0F1111',
                    boxShadow: '0 1px 2px rgba(15,17,17,0.15)',
                    transition: 'border-color 0.2s, box-shadow 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#007185';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0,113,133,0.15), 0 1px 2px rgba(15,17,17,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#888C8C';
                    e.target.style.boxShadow = '0 1px 2px rgba(15,17,17,0.15)';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0F1111'
                }}>
                  ₹
                </span>
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '16px'
            }}>
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => handleQuickAmount(quickAmount)}
                  style={{
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#0F1111',
                    background: '#ffffff',
                    border: '1px solid #D5D9D9',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F7FAFA';
                    e.target.style.borderColor = '#888C8C';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.borderColor = '#D5D9D9';
                  }}
                >
                  + ₹{quickAmount}
                </button>
              ))}
            </div>

            {/* Info Message */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '20px',
              padding: '12px',
              background: '#F7FAFA',
              borderRadius: '8px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#007185',
                fontWeight: '700',
                flexShrink: 0,
                marginTop: '1px'
              }}>
                ⓘ
              </div>
              <div style={{
                fontSize: '13px',
                color: '#0F1111',
                lineHeight: '1.4'
              }}>
                You can add up to ₹9995.40
              </div>
            </div>

            {/* Add Money Button */}
            <button style={{
              width: '100%',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '400',
              color: '#0F1111',
              background: '#FFD814',
              border: '1px solid #FCD200',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.2s',
              boxShadow: '0 2px 5px rgba(213,217,217,0.5)'
            }}
            onMouseEnter={(e) => e.target.style.background = '#F7CA00'}
            onMouseLeave={(e) => e.target.style.background = '#FFD814'}
            >
              Add money to Wallet
            </button>
          </div>

          {/* Scratch Card Rewards */}
          <div style={{
            background: '#E3F2FD',
            border: '1px solid #90CAF9',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '16px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px'
            }}>
              <div style={{
                fontSize: '36px'
              }}>🎫</div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#0F1111',
                marginBottom: '6px'
              }}>
                Scratch Card Rewards
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#565959',
                marginBottom: '4px',
                lineHeight: '1.4'
              }}>
                Win offers from top Brands everytime you Pay
              </p>
              <p style={{
                fontSize: '12px',
                color: '#565959',
                lineHeight: '1.4'
              }}>
                Amazon, Swiggy, Uber & More
              </p>
              <button style={{
                marginTop: '12px',
                padding: '6px 16px',
                fontSize: '12px',
                fontWeight: '700',
                color: '#007185',
                background: '#ffffff',
                border: '1px solid #007185',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#007185';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#007185';
              }}
              >
                Scratch card
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <div style={{
            background: '#ffffff',
            border: '1px solid #D5D9D9',
            borderRadius: '8px',
            padding: '24px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0F1111',
              marginBottom: '20px'
            }}>
              Do more with Amazon Pay Balance
            </h2>

            {/* Menu Items */}
            <div>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  {item.section === 'divider' && index > 0 && (
                    <div style={{
                      height: '1px',
                      background: '#E7E7E7',
                      margin: '20px 0'
                    }} />
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      borderRadius: '4px',
                      marginLeft: '-8px',
                      marginRight: '-8px',
                      paddingLeft: '8px',
                      paddingRight: '8px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F7FAFA'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{
                      fontSize: '15px',
                      color: '#0F1111',
                      fontWeight: '400'
                    }}>
                      {item.title}
                    </span>
                    {item.hasArrow && (
                      <span style={{
                        fontSize: '18px',
                        color: '#565959'
                      }}>
                        ›
                      </span>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Manage Section */}
            <div style={{
              marginTop: '32px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0F1111',
                marginBottom: '16px'
              }}>
                Manage
              </h3>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  borderRadius: '4px',
                  marginLeft: '-8px',
                  marginRight: '-8px',
                  paddingLeft: '8px',
                  paddingRight: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#F7FAFA'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#F0F2F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      fontSize: '18px'
                    }}>👤</div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#FF9900',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px'
                    }}>
                      ⚙️
                    </div>
                  </div>
                  <span style={{
                    fontSize: '15px',
                    color: '#0F1111',
                    fontWeight: '400'
                  }}>
                    Account Settings
                  </span>
                </div>
                <span style={{
                  fontSize: '18px',
                  color: '#565959'
                }}>
                  ›
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}