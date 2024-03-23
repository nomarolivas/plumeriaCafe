import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar">
            <div className="tabLinks">
                <Link className= "link" to="/Locations">Locations</Link>
                <Link className= "link" to="/Menu">Menu</Link>
                <Link className= "link" to="/"><img className="img-fluid"src={require('./Plumeria Logo.png')} alt="Plumeria Logo"/> </Link>
                <Link className= "link" to="/Order">Order Online</Link>
                <Link className= "link" to="/About">About Us</Link>

            </div>

        </nav>
    );
}

export default Navbar;