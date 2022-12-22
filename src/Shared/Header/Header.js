import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

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
        <li><Link to="/services">Services</Link></li>
        {
            user?.uid && <>
                <li><Link to="/add-service">Add Product</Link></li>
                <li><Link to="/reviews">My Review</Link></li>
            </>
        }
        {
            user?.uid ?
                <>
                    <li><Link onClick={handleSignOut} to="/login">Sign Out</Link></li>
                    <li ><Link className='hover:bg-transparent'>{user?.displayName}</Link></li>

                    {user?.photoURL &&
                        <li>
                            <div className="avatar hover:bg-transparent">
                                <div className="lg:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                        </li>
                    }
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </>
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
                <Link to='/' className="normal-case text-3xl lg:px-5 font-bold">FoodCourt</Link>
            </div>
            <div className="navbar-end hidden lg:flex lg:w-9/12">
                <ul className="menu menu-horizontal p-0">
                    {menuLink}
                </ul>
            </div>
        </div>
    );
};

export default Header;