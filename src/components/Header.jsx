import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import authService from '../appwrite/auth/authServices';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector((state) => state.auth.isAuthenticated)

    const logoutHandler = () => {
        authService.logoutUser('current').then(() => {
            dispatch(logout());
            navigate('/');
        });
    }

    return (
        <header className="h-[10vh] w-full border bg-[#212121]">
            <div className="flex h-full w-full items-center justify-between">
                <div className="h-full w-1/4 flex items-center justify-center">
                    <h1 className="cursor-default text-center font-sans text-3xl font-thin tracking-widest text-white transition-colors hover:text-green-600">abcd Blog</h1>
                </div>
                <div className="flex h-full w-3/4 items-center justify-center bg-white">
                    <ul className="flex h-full w-full items-center justify-around">
                        <li>
                            <Link to="/" className="font-mono text-lg hover:text-green-600">Home</Link>
                        </li>
                        {
                            isAuth && (
                                <li>
                                    <Link to="/myposts" className="font-mono text-lg hover:text-green-600">MyPosts</Link>
                                </li>
                            )
                        }
                        {
                            isAuth && (
                                <li>
                                    <Link to="/profile" className="font-mono text-lg hover:text-green-600">Profile</Link>
                                </li>
                            )
                        }
                        {
                            !isAuth && (
                                <li>
                                    <Link to="/login" className="font-mono text-lg hover:text-green-600">Login</Link>
                                </li>
                            )
                        }
                        {
                            !isAuth && (
                                <li>
                                    <Link to="/signup" className="font-mono text-lg hover:text-green-600">Signup</Link>
                                </li>
                            )
                        }
                        {
                            isAuth && (
                                <li>
                                    <button className="font-mono text-lg hover:text-green-600" onClick={logoutHandler}>Logout</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;