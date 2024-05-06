import { Link } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../../routes/constants';

const Header = () => {
    return (
        <div className= "flex justify-between items-center p-4 bg-gray-800 mb-10"> 
            <p className="text-gray-300 px-3 py-2 text-2xl font-semibold">
                <Link to={ROUTES.HOME}>ADRIAN MOVIES DB</Link>
            </p>
        <nav>
            <ul className = "flex space-x-5">
                <li>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={ROUTES.HOME}>Home</Link>
                </li>

                <li>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={ROUTES.POPULAR}>Popular</Link>
                </li>
                <li>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={ROUTES.TOP_RATED}>Top Rated</Link>
                </li>
                <li>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={ROUTES.NOW_PLAYING}>Now Playing</Link>
                </li>
                <li>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to={ROUTES.MY_FAVORITES}>My Favorites</Link>
                </li>

            </ul>
        </nav>
        </div>
    )
}
export default Header