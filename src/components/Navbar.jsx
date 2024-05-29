import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <nav className="navbar">
            <h1>SEED THEORY</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Shop</Link>
                </li>            

                              
            </ul>
        
        </nav>
                     
    );
}

export default Navbar;
