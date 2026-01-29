import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* =========================
   Error Boundary
========================= */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    color: 'white',
                    background: '#1a1a1a',
                    minHeight: '100vh',
                    fontFamily: 'monospace'
                }}>
                    <h1>Something went wrong.</h1>
                    <pre style={{ color: '#ff6b6b', whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
                        {this.state.error?.toString()}
                    </pre>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '1rem', padding: '8px 16px', cursor: 'pointer' }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

/* =========================
   Render
========================= */
const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StrictMode>
    );
}
