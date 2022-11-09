import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/blog">Services</Link></li>
        <li><Link to="/blog">Add Service</Link></li>
        {
            user?.uid && <li><Link to="/reviews">My Review</Link></li>
        }
        {
            user?.uid ?
                <>
                    <li><Link onClick={handleSignOut} to="/login">Sign Out</Link></li>
                </> :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </>
        }
        {
            user?.uid && <li><Link>{user.email}</Link></li>
        }


    </>
    return (
        <div className="navbar bg-base-400 mb-5 shadow-lg py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLink}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuLink}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-red-600 rounded-lg">Get started</Link>
            </div>
        </div>
    );
};

export default Header;