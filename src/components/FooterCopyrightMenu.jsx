import React, { useState, useEffect } from 'react';

const FooterCopyrightMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the menu from the WordPress REST API
        const fetchMenu = async () => {
            try {
                const response = await fetch('https://dev-tourist-react.pantheonsite.io/wp-json/wp/v2/Footer-Copyright');
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
        <div className="footer-menu">
            {menu.items.map((item, index) => (
               <a key={index} href={item.href}>{item.name}</a>
            ))}
        </div>
    );
};

export default FooterCopyrightMenu;