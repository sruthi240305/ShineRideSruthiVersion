import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
        }}>
            <h1 style={{ fontSize: '6rem', margin: '0', color: '#a78bfa' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oops! The page you're looking for doesn't exist.</p>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '1rem 2rem',
                    background: '#7c3aed',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default NotFoundPage;
