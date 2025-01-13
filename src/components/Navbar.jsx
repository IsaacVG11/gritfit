import logo from '../assets/logo.png';

export default function Navbar () {
    return (
        <div className="container">
            <ul className="navbar-items">
                <li>
                    <h3 className="brand-name">GritFit</h3>
                </li>
                <li>
                    <img className="logo" src={logo} alt="gritfit logo"/>
                </li>
                <li className="item">
                    <a href="#">Home</a>
                </li>
                <li className="item">
                    <a href="#">Products</a>
                </li>
                <li className="item">
                    <a href="#">About Us</a>
                </li>
                <li className="item">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};