import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className=" border border-white fixed top-0 left-0 w-full text-[black] font-bold text-medium bg-[grey] px-5 py-2.5 z-[1000]">
            <ul className="list-none flex justify-evenly gap-5 m-0 p-0"> 
                <li>
                    <Link to="/home" className="transition-all duration-200 hover:text-lg">Home</Link>
                </li>
                <li>
                    <Link className="transition-all duration-200 hover:text-lg" to="/about">About</Link>
                </li>
                <li>
                    <Link className="transition-all duration-200 hover:text-lg" to="/service">Service</Link>
                </li>
                <li>
                    <Link className="transition-all duration-200 hover:text-lg" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;