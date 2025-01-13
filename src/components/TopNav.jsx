import React, { useState, useEffect } from 'react';

const TopNavMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the menu from the WordPress REST API
        const fetchMenu = async () => {
            try {
                const response = await fetch('https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/main-menu');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setMenu(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div class="navbar-nav ms-auto py-0">
            {menu.map((item, index) => {
                const isActive = location.pathname === new URL(item.href).pathname; // Compare current path with menu link
                return (
                    <a href={item.href} className={`nav-item nav-link ${isActive ? 'active' : ''}`}>{item.name}</a>
                );
            })}
        </div>
    );
};

export default TopNavMenu;