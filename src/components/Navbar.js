import React from 'react';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

// styles
import './Navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Dojo Logo" />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out..
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
