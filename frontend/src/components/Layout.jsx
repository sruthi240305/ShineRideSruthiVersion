import CardNav from '@/components/Navigation/CardNav';

const Layout = ({ children, showNavbar = true }) => {
    const navItems = [

        {
            label: 'Services',
            bgColor: '#1e1b4b',
            textColor: '#fff',
            links: [
                { label: 'Exterior Wash', href: '#pricing', ariaLabel: 'Exterior car wash plans' },
                { label: 'Interior Detailing', href: '#impact', ariaLabel: 'Deep interior cleaning' },
                { label: 'Full Detail', href: '#team', ariaLabel: 'Complete car care' }
            ]
        },
        {
            label: 'Company',
            bgColor: '#1e293b',
            textColor: '#fff',
            links: [
                { label: 'Our Story', href: '#about', ariaLabel: 'About Shine Ride' },
                { label: 'Locations', href: '#impact', ariaLabel: 'Our service centers' },
                { label: 'Franchise', href: '#team', ariaLabel: 'Partner with us' }
            ]
        },
        {
            label: 'Support',
            bgColor: '#312e81',
            textColor: '#fff',
            links: [
                { label: 'Book Service', href: '/login', ariaLabel: 'Book a wash' },
                { label: 'Help Center', href: '#faq', ariaLabel: 'FAQ and support' },
                { label: 'Contact Us', href: '#contact', ariaLabel: 'Get in touch' }
            ]
        }
    ];

    return (
        <>
            {showNavbar && (
                <CardNav
                    items={navItems}
                    baseColor="var(--surface)"
                    menuColor="var(--secondary)"
                    buttonBgColor="var(--active)"
                    buttonTextColor="var(--active-text)"
                />
            )}
            <div className={showNavbar ? "pt-24" : "min-h-screen pt-20"} style={{ backgroundColor: 'var(--bg-foundation)' }}>
                {children}
            </div>
        </>
    );
};

export default Layout;
