import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Split the current pathname into segments
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
            <li className='breadcrumb-item'>
                <Link to="/">Home</Link>
            </li>
            {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
                return (
                    <li key={to} className='breadcrumb-item'>
                        {isLast ? (
                            <span>{value}</span>
                        ) : (
                            <Link to={to}>{value}</Link>
                        )}
                    </li>
                );
            })}
        </ol>
    </nav>
  );
};

export default Breadcrumb;